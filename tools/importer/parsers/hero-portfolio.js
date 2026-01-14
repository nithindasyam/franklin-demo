/* global WebImporter */

/**
 * Parser for hero-portfolio block
 *
 * Source: https://www.nithindasyam.com
 * Base Block: hero
 *
 * Block Structure:
 * - Row 1: Content (heading, quote with attribution)
 *
 * Source HTML Pattern:
 * <div class="hero">
 *   <div class="col-md-8">
 *     <h1 class="display-1">Name</h1>
 *     <blockquote class="blockquote">
 *       <p>Quote text</p>
 *       <footer class="blockquote-footer">
 *         <cite>Attribution</cite>
 *       </footer>
 *     </blockquote>
 *   </div>
 * </div>
 *
 * Generated: 2026-01-14
 */
export default function parse(element, { document }) {
  // Extract heading from hero section
  const heading = element.querySelector('h1, h2, .display-1, [class*="heading"]');

  // Extract quote content
  const blockquote = element.querySelector('blockquote');
  const quoteText = element.querySelector('blockquote p, blockquote .mb-0');
  const quoteAttribution = element.querySelector('blockquote footer cite, blockquote .blockquote-footer cite');

  // Build content cell - all content in one cell for hero block
  const contentCell = [];

  if (heading) {
    contentCell.push(heading.cloneNode(true));
  }

  // Create quote paragraph if quote exists
  if (quoteText) {
    const quoteP = document.createElement('p');
    quoteP.innerHTML = `<em>"${quoteText.textContent.trim()}"</em>`;
    contentCell.push(quoteP);
  }

  // Add attribution
  if (quoteAttribution) {
    const attrP = document.createElement('p');
    attrP.textContent = `— ${quoteAttribution.textContent.trim()}`;
    contentCell.push(attrP);
  }

  // Build cells array matching hero block structure
  const cells = [
    contentCell
  ];

  // Create block using WebImporter utility
  const block = WebImporter.Blocks.createBlock(document, { name: 'Hero-Portfolio', cells });

  // Replace original element with structured block table
  element.replaceWith(block);
}
