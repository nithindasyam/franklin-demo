/* global WebImporter */

/**
 * Parser for cards-grid block
 *
 * Source: https://www.nithindasyam.com
 * Base Block: cards
 *
 * Block Structure:
 * - Each row: [image | title + description + optional link]
 *
 * Source HTML Pattern:
 * <div class="row">
 *   <div class="col">
 *     <div class="modern-card">
 *       <img class="card-img-top" src="..." alt="...">
 *       <div class="card-body">
 *         <div class="card-title h5">Title</div>
 *         <p class="card-text">Description</p>
 *         <a href="..." class="modern-btn">Link text</a>
 *       </div>
 *     </div>
 *   </div>
 * </div>
 *
 * Generated: 2026-01-14
 */
export default function parse(element, { document }) {
  // Find all cards in the grid
  const cards = element.querySelectorAll('.col .card, .col .modern-card');

  // Build cells array - each card becomes a row with 2 columns [image | content]
  const cells = [];

  cards.forEach((card) => {
    // Extract card image
    const image = card.querySelector('img.card-img-top, img[class*="project-image"], img[class*="certification-image"]');

    // Extract card content
    const title = card.querySelector('.card-title, .h5, h5');
    const description = card.querySelector('.card-text, p:not(.text-muted)');
    const date = card.querySelector('.text-muted, .small');
    const link = card.querySelector('a.modern-btn, a[href]:not(.card)');

    // Build image cell
    const imageCell = [];
    if (image) {
      const imgClone = image.cloneNode(true);
      imageCell.push(imgClone);
    }

    // Build content cell
    const contentCell = [];

    if (title) {
      const titleEl = document.createElement('p');
      titleEl.innerHTML = `<strong>${title.textContent.trim()}</strong>`;
      contentCell.push(titleEl);
    }

    if (description) {
      const descEl = document.createElement('p');
      // Remove "...read more" buttons from description
      let descText = description.textContent.trim();
      descText = descText.replace(/\.\.\.read more$/i, '...');
      descEl.textContent = descText;
      contentCell.push(descEl);
    }

    if (date) {
      const dateEl = document.createElement('p');
      dateEl.innerHTML = `<em>${date.textContent.trim()}</em>`;
      contentCell.push(dateEl);
    }

    if (link && link.href) {
      const linkEl = document.createElement('p');
      const a = document.createElement('a');
      a.href = link.href;
      a.textContent = link.textContent.trim() || 'Learn More';
      linkEl.appendChild(a);
      contentCell.push(linkEl);
    }

    // Add row if we have content
    if (imageCell.length > 0 || contentCell.length > 0) {
      cells.push([imageCell, contentCell]);
    }
  });

  // Create block using WebImporter utility
  const block = WebImporter.Blocks.createBlock(document, { name: 'Cards-Grid', cells });

  // Replace original element with structured block table
  element.replaceWith(block);
}
