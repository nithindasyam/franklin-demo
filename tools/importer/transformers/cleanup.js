/**
 * DOM Cleanup Transformer
 *
 * Removes non-content elements from the DOM before import processing.
 * This runs before block parsers to clean up navigation, footers, and other
 * elements that shouldn't be imported as content.
 *
 * Source: https://www.nithindasyam.com
 * Generated: 2026-01-14
 */
export default function cleanup(document) {
  // Remove navigation elements
  const navElements = document.querySelectorAll(
    'nav, .navbar, .mobile-nav-overlay, [class*="navbar"]'
  );
  navElements.forEach((el) => el.remove());

  // Remove footer elements
  const footerElements = document.querySelectorAll('footer, .footer');
  footerElements.forEach((el) => el.remove());

  // Remove skip links
  const skipLinks = document.querySelectorAll('.visually-hidden-focusable, .skip-link');
  skipLinks.forEach((el) => el.remove());

  // Remove script tags
  const scripts = document.querySelectorAll('script');
  scripts.forEach((el) => el.remove());

  // Remove style tags
  const styles = document.querySelectorAll('style');
  styles.forEach((el) => el.remove());

  // Remove "read more" buttons that are interactive JS elements
  const readMoreButtons = document.querySelectorAll('button.read-or-hide');
  readMoreButtons.forEach((el) => el.remove());

  // Remove form elements (contact form will be replaced with simpler CTA)
  const forms = document.querySelectorAll('form');
  forms.forEach((el) => el.remove());

  // Remove empty divs that might have been used for spacing
  const emptyDivs = document.querySelectorAll('div:empty');
  emptyDivs.forEach((el) => {
    if (!el.querySelector('*') && !el.textContent.trim()) {
      el.remove();
    }
  });

  // Clean up data attributes used by JavaScript
  const dataElements = document.querySelectorAll('[data-bs-toggle], [data-bs-target]');
  dataElements.forEach((el) => {
    el.removeAttribute('data-bs-toggle');
    el.removeAttribute('data-bs-target');
  });

  return document;
}
