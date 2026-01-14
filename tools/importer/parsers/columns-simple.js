/* global WebImporter */

/**
 * Parser for columns-simple block
 *
 * Source: https://www.nithindasyam.com
 * Base Block: columns
 *
 * Block Structure:
 * - Row 1: [column1 content | column2 content]
 *
 * Source HTML Pattern (About section):
 * <div class="row">
 *   <div class="col-md-4">
 *     <img class="about-photo" src="..." alt="...">
 *   </div>
 *   <div class="col-md-8">
 *     <div class="about-content">
 *       <p>...</p>
 *       <p>...</p>
 *     </div>
 *   </div>
 * </div>
 *
 * Source HTML Pattern (Contact section):
 * <div class="row">
 *   <div class="col-md-6">
 *     <div class="card">Contact info</div>
 *   </div>
 *   <div class="col-md-6">
 *     <div class="card">Contact form/CTA</div>
 *   </div>
 * </div>
 *
 * Generated: 2026-01-14
 */
export default function parse(element, { document }) {
  // Find column containers - Bootstrap uses col-* classes
  const columns = element.querySelectorAll(':scope > [class*="col"]');

  // Build cells array - each column becomes a cell in a single row
  const cells = [];
  const row = [];

  columns.forEach((col) => {
    const cellContent = [];

    // Check for images in this column
    const images = col.querySelectorAll('img');
    images.forEach((img) => {
      const imgClone = img.cloneNode(true);
      cellContent.push(imgClone);
    });

    // Check for headings
    const headings = col.querySelectorAll('h2, h3, h4, h5, .section-subtitle, .card-title');
    headings.forEach((heading) => {
      const headingEl = document.createElement(heading.tagName || 'h3');
      headingEl.textContent = heading.textContent.trim();
      cellContent.push(headingEl);
    });

    // Check for paragraphs and content
    const paragraphs = col.querySelectorAll('p, .about-content p, address .contact-item');
    paragraphs.forEach((p) => {
      const pEl = document.createElement('p');
      pEl.textContent = p.textContent.trim();
      if (pEl.textContent) {
        cellContent.push(pEl);
      }
    });

    // Check for links/CTAs
    const links = col.querySelectorAll('a.modern-btn, a[href^="mailto:"], a[href^="tel:"]');
    links.forEach((link) => {
      const linkP = document.createElement('p');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent.trim() || 'Contact';
      linkP.appendChild(a);
      cellContent.push(linkP);
    });

    // If column is mostly empty but has a card, extract card content
    if (cellContent.length === 0) {
      const card = col.querySelector('.card, .modern-card');
      if (card) {
        // Get all text content from the card
        const cardBody = card.querySelector('.card-body') || card;
        const allText = cardBody.querySelectorAll('p, div:not(.card-body), strong, address');
        allText.forEach((textEl) => {
          const p = document.createElement('p');
          p.textContent = textEl.textContent.trim();
          if (p.textContent) {
            cellContent.push(p);
          }
        });
      }
    }

    // Add column content to row
    row.push(cellContent);
  });

  // Only add row if we have columns
  if (row.length > 0) {
    cells.push(row);
  }

  // Create block using WebImporter utility
  const block = WebImporter.Blocks.createBlock(document, { name: 'Columns-Simple', cells });

  // Replace original element with structured block table
  element.replaceWith(block);
}
