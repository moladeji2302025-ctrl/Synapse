"""Print a PDF's paragraphs and lines in the shape build.cjs reads from Poppler's
`pdftotext -bbox-layout`: <block><line>text</line>...</block>. Used as a fallback where
Poppler is not installed (needs PyMuPDF).

PyMuPDF's own blocks do not follow paragraphs, so lines are regrouped by vertical
spacing: within a paragraph the gap between lines is the line pitch; a paragraph break
adds the paragraph's space-after, so a gap clearly larger than the usual pitch starts a
new block. A paragraph that runs onto the next page becomes a second block, which
build.cjs joins back on.

    py -3 pdf_blocks.py report.pdf
"""
import statistics
import sys
from html import escape

import pymupdf

out = []
for page in pymupdf.open(sys.argv[1]):
    lines = []
    for block in page.get_text("dict")["blocks"]:
        if block.get("type") != 0:
            continue
        for line in block["lines"]:
            text = "".join(span["text"] for span in line["spans"]).strip()
            # Skip the footer page number so a paragraph split across pages stays joinable.
            if text and not (text.isdigit() and line["bbox"][1] > page.rect.height * 0.9):
                lines.append((line["bbox"][1], text))
    lines.sort(key=lambda l: l[0])
    # Merge fragments that share a baseline (justified text can come out in pieces).
    merged = []
    for y, text in lines:
        if merged and abs(y - merged[-1][0]) < 2:
            merged[-1] = (merged[-1][0], merged[-1][1] + " " + text)
        else:
            merged.append((y, text))
    if not merged:
        continue
    gaps = [b[0] - a[0] for a, b in zip(merged, merged[1:])]
    pitch = statistics.median(gaps) if gaps else 0
    group = [merged[0][1]]
    for gap, (_, text) in zip(gaps, merged[1:]):
        if gap > pitch * 1.2:
            out.append(group)
            group = []
        group.append(text)
    out.append(group)

sys.stdout.reconfigure(encoding="utf-8")
print("\n".join("<block >" + "".join(f"<line >{escape(t, quote=False)}</line>" for t in g) + "</block>" for g in out))
