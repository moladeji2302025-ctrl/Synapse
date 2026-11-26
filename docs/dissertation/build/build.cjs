// Builds the project report from chapters/*.md into a Word document, then checks it
// against the department's rules (docs/dissertation/README.md).
//
//   cd docs/dissertation/build && npm install && node build.cjs [out.docx] [chapter files...]
//
// Markdown subset: "# " chapter heading lines, "## " major headings, "### " sub-headings,
// paragraphs, "1. " numbered items, "- " bullets, pipe tables, "Table x.y: caption" lines,
// *italic*. Citations: [@key] parenthetical, [@key:n] narrative, [@a; @b] several.
// Narrative citations typed out in full ("Banovic et al. (2016)") are also recognised.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  AlignmentType, PageBreak, Footer, PageNumber, LevelFormat, HeadingLevel,
} = require('docx');
const refs = require('./refs.cjs');

const here = __dirname;
const chaptersDir = path.join(here, '..', 'chapters');
const out = path.resolve(process.argv[2] ?? path.join(here, '..', 'Synapse_Chapters_1-2.docx'));
const files = process.argv.length > 3 ? process.argv.slice(3) : ['chapter1.md', 'chapter2.md'];

const FONT = 'Times New Roman';
const BODY = { line: 360, before: 0, after: 160 }; // 1.5 line spacing
const narrative = r => `${r.n.replace(' & ', ' and ')} (${r.y})`;
const cited = new Set();

// ---- citations ----
function renderCitations(text) {
  return text.replace(/\[@([^\]]+)\]/g, (_, inner) => {
    const parts = inner.split(';').map(s => s.trim().replace(/^@/, ''));
    const items = parts.map(p => {
      const [key, mode] = p.split(':');
      const r = refs[key];
      if (!r) throw new Error(`Unknown citation key: ${key}`);
      cited.add(key);
      return { r, mode };
    });
    if (items.length === 1 && items[0].mode === 'n') return narrative(items[0].r);
    items.sort((a, b) => a.r.n.localeCompare(b.r.n));
    return '(' + items.map(({ r }) => `${r.n}, ${r.y}`).join('; ') + ')';
  });
}
function scanNarratives(text) {
  for (const [key, r] of Object.entries(refs)) if (text.includes(narrative(r))) cited.add(key);
}

// ---- inline formatting ----
function runs(text, opts = {}) {
  return text.split(/(\*[^*]+\*)/).filter(Boolean).map(seg =>
    seg.startsWith('*') && seg.endsWith('*')
      ? new TextRun({ text: seg.slice(1, -1), italics: true, ...opts })
      : new TextRun({ text: seg, ...opts }));
}

// ---- parse ----
const blocks = []; // { kind, text|rows|items }
for (const file of files) {
  const lines = fs.readFileSync(path.join(chaptersDir, file), 'utf8').split(/\r?\n/);
  let para = [];
  const flush = () => { if (para.length) { blocks.push({ kind: 'p', text: para.join(' ') }); para = []; } };
  let chapterLines = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/^# /.test(line)) { flush(); chapterLines.push(line.slice(2)); continue; }
    if (chapterLines.length) { blocks.push({ kind: 'chapter', lines: chapterLines }); chapterLines = []; }
    if (/^## /.test(line)) { flush(); blocks.push({ kind: 'h2', text: line.slice(3) }); }
    else if (/^### /.test(line)) { flush(); blocks.push({ kind: 'h3', text: line.slice(4) }); }
    else if (/^Table \d+\.\d+:/.test(line)) { flush(); blocks.push({ kind: 'caption', text: line }); }
    else if (/^\|/.test(line)) {
      flush();
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) {
        const cells = lines[i].split('|').slice(1, -1).map(c => c.trim());
        if (!cells.every(c => /^-+$/.test(c))) rows.push(cells);
        i++;
      }
      i--;
      blocks.push({ kind: 'table', rows });
    }
    else if (/^\d+\. /.test(line)) { flush(); blocks.push({ kind: 'num', text: line.replace(/^\d+\. /, '') }); }
    else if (/^- /.test(line)) { flush(); blocks.push({ kind: 'bullet', text: line.slice(2) }); }
    else if (line.trim() === '') flush();
    else para.push(line.trim());
  }
  flush();
}

// Render citations everywhere, and collect plain-text body paragraphs for checks.
for (const b of blocks) {
  if (b.text) { b.text = renderCitations(b.text); scanNarratives(b.text); }
  if (b.rows) b.rows = b.rows.map(r => r.map(c => { const t = renderCitations(c); scanNarratives(t); return t; }));
}

// ---- build document ----
const children = [];
let numberingInstance = 0;
let first = true;
for (const b of blocks) {
  switch (b.kind) {
    case 'chapter':
      b.lines.forEach((l, idx) => children.push(new Paragraph({
        alignment: AlignmentType.CENTER,
        pageBreakBefore: idx === 0 && !first,
        spacing: { line: 276, before: 0, after: idx === b.lines.length - 1 ? 240 : 0 },
        children: [new TextRun({ text: l, bold: true, size: 28 })],
      })));
      first = false;
      break;
    case 'h2':
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_1, keepNext: true,
        spacing: { line: 360, before: 240, after: 120 }, children: [new TextRun({ text: b.text, bold: true, size: 28 })] }));
      break;
    case 'h3':
      children.push(new Paragraph({ heading: HeadingLevel.HEADING_2, keepNext: true,
        spacing: { line: 360, before: 180, after: 80 }, children: [new TextRun({ text: b.text, bold: true, size: 24 })] }));
      break;
    case 'caption':
      children.push(new Paragraph({ keepNext: true, spacing: { line: 276, before: 120, after: 80 },
        children: [new TextRun({ text: b.text, bold: true })] }));
      break;
    case 'num':
      children.push(new Paragraph({ numbering: { reference: 'num', level: 0, instance: numberingInstance },
        spacing: { line: 360, before: 0, after: 80 }, alignment: AlignmentType.LEFT, children: runs(b.text) }));
      break;
    case 'bullet':
      children.push(new Paragraph({ numbering: { reference: 'bullet', level: 0 },
        spacing: { line: 360, before: 0, after: 80 }, children: runs(b.text) }));
      break;
    case 'table': {
      const total = 9026;
      const n = b.rows[0].length;
      const widths = n === 3 ? [2600, 3713, 2713] : n === 4 ? [2100, 2100, 2826, 2000] : Array(n).fill(Math.floor(total / n));
      children.push(new Table({
        width: { size: total, type: WidthType.DXA },
        columnWidths: widths,
        rows: b.rows.map((r, ri) => new TableRow({
          tableHeader: ri === 0, cantSplit: true,
          children: r.map((c, ci) => new TableCell({
            width: { size: widths[ci], type: WidthType.DXA },
            shading: ri === 0 ? { type: ShadingType.CLEAR, fill: 'D9D9D9', color: 'auto' } : undefined,
            margins: { top: 40, bottom: 40, left: 80, right: 80 },
            children: [new Paragraph({ spacing: { line: 240, before: 0, after: 0 },
              children: runs(c, { size: 21, bold: ri === 0 }) })],
          })),
        })),
      }));
      children.push(new Paragraph({ spacing: { before: 0, after: 120 }, children: [] }));
      numberingInstance++;
      break;
    }
    default:
      if (blocks[blocks.indexOf(b) - 1]?.kind === 'num') numberingInstance++;
      children.push(new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: BODY, children: runs(b.text) }));
  }
}

// References: every cited source, alphabetical by its APA entry.
const refList = [...cited].map(k => refs[k].apa).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
children.push(new Paragraph({ pageBreakBefore: true, alignment: AlignmentType.CENTER, spacing: { line: 276, after: 240 },
  children: [new TextRun({ text: 'REFERENCES', bold: true, size: 28 })] }));
for (const a of refList) {
  children.push(new Paragraph({ alignment: AlignmentType.LEFT, spacing: { line: 360, before: 0, after: 120 },
    indent: { left: 720, hanging: 720 }, children: runs(a) }));
}

const doc = new Document({
  creator: 'Synapse project',
  title: (files.length === 1
    ? 'Chapter ' + files[0].match(/\d+/)[0]
    : 'Chapters ' + files.map(f => f.match(/\d+/)[0]).join(' and ')),
  styles: {
    default: { document: { run: { font: FONT, size: 24 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: FONT, size: 28, bold: true, color: '000000' }, paragraph: { outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { font: FONT, size: 24, bold: true, color: '000000' }, paragraph: { outlineLevel: 1 } },
    ],
  },
  numbering: { config: [
    { reference: 'num', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    { reference: 'bullet', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
  ] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1440, bottom: 1440, left: 1440, right: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: [PageNumber.CURRENT] })] })] }) },
    children,
  }],
});

// ---- checks ----
function checks(pdfPath) {
  const problems = [];
  const body = blocks.filter(b => b.kind === 'p');

  // Sentences of more than 25 words.
  for (const b of body) {
    const sentences = b.text.match(/[^.!?]+(?:[.!?](?!\d)|$)+(?:["”’)]*)/g) ?? [];
    // Re-join splits caused by abbreviations such as "et al." and initials.
    const merged = [];
    for (const s of sentences) {
      if (merged.length && /(et al|e\.g|i\.e|[A-Z])\.\s*$/.test(merged[merged.length - 1].trim()) && /^\s*[,(\d]|^\s*\(/.test(s)) merged[merged.length - 1] += s;
      else if (merged.length && /\bet al\.\s*$/.test(merged[merged.length - 1])) merged[merged.length - 1] += s;
      else merged.push(s);
    }
    for (const s of merged) {
      const words = s.trim().split(/\s+/).filter(w => /[\p{L}\p{N}]/u.test(w)).length;
      if (words > 25) problems.push(`Sentence of ${words} words: "${s.trim().slice(0, 90)}…"`);
    }
  }

  // Law of first mention: an acronym's first appearance must be "Full Name (ACR)".
  const all = blocks.map(b => b.text ?? (b.rows ? b.rows.flat().join(' ') : b.lines?.join(' ') ?? '')).join('\n');
  const ignore = new Set(['CHAPTER', 'ONE', 'TWO', 'INTRODUCTION', 'LITERATURE', 'REVIEW', 'PREAMBLE', 'REFERENCES']);
  const seen = new Set();
  for (const m of all.matchAll(/\b([A-Z]{2,})s?\b/g)) {
    const acr = m[1];
    if (seen.has(acr) || ignore.has(acr)) continue;
    seen.add(acr);
    const before = all.slice(Math.max(0, m.index - 1), m.index);
    if (before !== '(') problems.push(`Acronym "${acr}" used before being spelled out: "…${all.slice(Math.max(0, m.index - 40), m.index + 10)}…"`);
  }

  // Paragraph length in printed lines (8–9), read back from the rendered PDF.
  let xml = null;
  if (pdfPath) {
    // Needs Poppler's pdftotext; the xpdf build that ships with Git has no -bbox-layout.
    // Falls back to PyMuPDF (pdf_blocks.py), which prints the same block/line shape.
    const opts = { maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] };
    try { xml = execFileSync('pdftotext', ['-bbox-layout', pdfPath, '-'], opts).toString(); }
    catch {
      for (const py of [['py', '-3'], ['python3'], ['python']]) {
        try { xml = execFileSync(py[0], [...py.slice(1), path.join(here, 'pdf_blocks.py'), pdfPath], opts).toString('utf8'); break; }
        catch { /* try the next interpreter */ }
      }
      if (!xml) console.log('(Paragraph line-count check skipped: neither Poppler pdftotext nor PyMuPDF available)');
    }
  }
  if (xml) {
    const norm = s => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"')
      .replace(/[^\p{L}\p{N}]+/gu, ' ').trim().toLowerCase();
    const pdfBlocks = [...xml.matchAll(/<block[^>]*>([\s\S]*?)<\/block>/g)].map(m => ({
      lines: (m[1].match(/<line /g) ?? []).length,
      text: norm(m[1]),
    }));
    let cursor = 0;
    for (const b of body) {
      const t = norm(b.text);
      const head = t.split(' ').slice(0, 6).join(' ');
      let i = pdfBlocks.findIndex((pb, idx) => idx >= cursor && pb.text.startsWith(head));
      if (i < 0) { problems.push(`Could not locate paragraph in PDF: "${b.text.slice(0, 60)}…"`); continue; }
      let lines = pdfBlocks[i].lines, j = i + 1;
      while (j < pdfBlocks.length && pdfBlocks[j].text && t.includes(pdfBlocks[j].text) && pdfBlocks[j].text.length > 20) { lines += pdfBlocks[j].lines; j++; }
      cursor = j;
      b.lines = lines;
      if (lines < 8 || lines > 9) problems.push(`Paragraph of ${lines} lines (needs 8–9): "${b.text.slice(0, 70)}…"`);
    }
  }
  return problems;
}

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync(out, buf);
  const missing = [...cited].filter(k => !refs[k]);
  if (missing.length) throw new Error('Cited but not in refs.cjs: ' + missing.join(', '));
  let pdf = null;
  const soffice = ['C:/Program Files/LibreOffice/program/soffice.exe', 'soffice'].find(p => p === 'soffice' || fs.existsSync(p));
  try {
    execFileSync(soffice, ['--headless', '--convert-to', 'pdf', '--outdir', path.dirname(out), out], { stdio: 'ignore' });
    pdf = out.replace(/\.docx$/, '.pdf');
  } catch { console.log('(PDF render skipped: LibreOffice not available)'); }
  const problems = checks(pdf);
  const yr = k => { const y = parseInt(refs[k].y, 10); return Number.isNaN(y) ? 9999 : y; };
  const recent = [...cited].filter(k => yr(k) >= 2016).length;
  console.log(`Wrote ${out}${pdf ? ' and PDF' : ''}`);
  console.log(`Citations: ${cited.size} sources (${recent} from 2016 on, ${cited.size - recent} older)`);
  for (const f of files) {
    const text = fs.readFileSync(path.join(chaptersDir, f), 'utf8');
    const keys = new Set([...text.matchAll(/@([a-z0-9]+)/g)].map(m => m[1]).filter(k => refs[k]));
    for (const [k, r] of Object.entries(refs)) if (text.includes(narrative(r))) keys.add(k);
    console.log(`  ${f}: ${keys.size} sources (${[...keys].filter(k => yr(k) >= 2016).length} from 2016 on)`);
  }
  console.log(problems.length ? `\n${problems.length} rule problems:\n- ` + problems.join('\n- ') : '\nAll rule checks passed.');
});
