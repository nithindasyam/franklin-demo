import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

/**
 * Decorate accordion block
 * 
 * Expected table structure in Google Docs:
 * | Header Text 1    | Panel Content 1 (can include rich content) |
 * | Header Text 2    | Panel Content 2 (can include rich content) |
 * | Header Text 3    | Panel Content 3 (can include rich content) |
 * 
 * - Each table row becomes an accordion item
 * - Left column = accordion header (clickable)
 * - Right column = accordion panel (collapsible content)
 * - Additional columns are ignored
 * - Images in panels are automatically optimized
 */
export default function decorate(block) {
  // Convert table structure to accordion format
  const accordion = document.createElement('div');
  accordion.className = 'accordion-container';

  [...block.children].forEach((row, index) => {
    const cells = [...row.children];
    
    // Skip rows that don't have at least 2 columns (header + content)
    if (cells.length >= 2) {
      // Create accordion item container
      const item = document.createElement('div');
      item.className = 'accordion-item';

      // Create header from left column (first cell)
      const header = document.createElement('button');
      header.className = 'accordion-header';
      header.setAttribute('aria-expanded', 'false');
      header.setAttribute('aria-controls', `accordion-panel-${index}`);
      header.innerHTML = cells[0].innerHTML;

      // Create panel from right column (second cell) 
      const panel = document.createElement('div');
      panel.className = 'accordion-panel';
      panel.id = `accordion-panel-${index}`;
      panel.setAttribute('aria-hidden', 'true');
      panel.innerHTML = cells[1].innerHTML;

      // Add click event
      header.addEventListener('click', () => {
        const isExpanded = header.getAttribute('aria-expanded') === 'true';
        
        // Close all other panels
        accordion.querySelectorAll('.accordion-header').forEach((otherHeader) => {
          if (otherHeader !== header) {
            otherHeader.setAttribute('aria-expanded', 'false');
            otherHeader.nextElementSibling.setAttribute('aria-hidden', 'true');
          }
        });

        // Toggle current panel
        header.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
        panel.setAttribute('aria-hidden', isExpanded ? 'true' : 'false');
      });

      // Add keyboard support
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });

      item.append(header, panel);
      accordion.append(item);
    }
  });

  // Optimize images in accordion panels
  accordion.querySelectorAll('img').forEach((img) => {
    img.closest('picture').replaceWith(
      createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])
    );
  });

  // Replace block content
  block.textContent = '';
  block.append(accordion);
} 