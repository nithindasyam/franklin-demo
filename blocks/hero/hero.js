import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  // Get the first (and likely only) child div
  const contentDiv = block.querySelector('div > div');
  
  if (!contentDiv) {
    console.warn('Hero block: No content div found');
    return;
  }

  // Find the picture and heading elements
  const picture = contentDiv.querySelector('picture');
  const img = contentDiv.querySelector('img');
  const heading = contentDiv.querySelector('h1, h2, h3, h4, h5, h6');
  const allText = contentDiv.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
  
  // Create the new structure
  const heroContent = document.createElement('div');
  heroContent.className = 'hero-content';
  
  // Create text wrapper
  const textWrapper = document.createElement('div');
  textWrapper.className = 'hero-text';
  
  // Handle the heading
  if (heading) {
    const heroTitle = document.createElement(heading.tagName.toLowerCase());
    heroTitle.className = 'hero-title';
    heroTitle.innerHTML = heading.innerHTML;
    if (heading.id) {
      heroTitle.id = heading.id;
    }
    textWrapper.appendChild(heroTitle);
  }
  
  // Handle any other text content (paragraphs, etc.)
  const paragraphs = contentDiv.querySelectorAll('p');
  paragraphs.forEach((p, index) => {
    const textElement = document.createElement('p');
    if (index === 0) {
      textElement.className = 'hero-subtitle';
    } else {
      textElement.className = 'hero-description';
    }
    textElement.innerHTML = p.innerHTML;
    textWrapper.appendChild(textElement);
  });
  
  // Handle any links/buttons
  const links = contentDiv.querySelectorAll('a');
  if (links.length > 0) {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.className = 'hero-buttons';
    
    links.forEach((link, index) => {
      const button = document.createElement('a');
      button.href = link.href;
      button.innerHTML = link.innerHTML;
      if (index === 0) {
        button.className = 'hero-cta-primary';
      } else {
        button.className = 'hero-cta-secondary';
      }
      // Copy any other attributes
      Array.from(link.attributes).forEach(attr => {
        if (attr.name !== 'class' && attr.name !== 'href') {
          button.setAttribute(attr.name, attr.value);
        }
      });
      buttonWrapper.appendChild(button);
    });
    
    textWrapper.appendChild(buttonWrapper);
  }
  
  // Add text wrapper to hero content
  heroContent.appendChild(textWrapper);
  
  // Clear the original content first
  block.innerHTML = '';
  
  // Handle background image
  if (picture && img) {
    // Create optimized picture for background
    const optimizedPicture = createOptimizedPicture(
      img.src,
      img.alt,
      true, // eager loading for hero
      [
        { media: '(min-width: 1200px)', width: '2000' },
        { media: '(min-width: 768px)', width: '1600' },
        { width: '750' }
      ]
    );
    optimizedPicture.className = 'hero-background';
    
    // Create overlay for better text contrast
    const overlay = document.createElement('div');
    overlay.className = 'hero-overlay';
    
    // Add background and overlay to hero block (after clearing)
    block.appendChild(optimizedPicture);
    block.appendChild(overlay);
  }
  
  // Add the hero content
  block.appendChild(heroContent);
  
  // Add scroll indicator with functionality
  const scrollIndicator = document.createElement('div');
  scrollIndicator.className = 'hero-scroll-indicator';
  scrollIndicator.innerHTML = '<span>↓</span>';
  scrollIndicator.setAttribute('aria-label', 'Scroll to next section');
  scrollIndicator.setAttribute('role', 'button');
  scrollIndicator.setAttribute('tabindex', '0');
  
  // Add click functionality
  const scrollToNext = () => {
    // Find the next section after the hero
    const heroSection = block.closest('.section');
    const nextSection = heroSection ? heroSection.nextElementSibling : null;
    
    if (nextSection) {
      // Scroll to the next section
      nextSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Fallback: scroll down by hero height
      const heroHeight = block.offsetHeight;
      window.scrollBy({ 
        top: heroHeight, 
        behavior: 'smooth' 
      });
    }
  };
  
  // Add event listeners
  scrollIndicator.addEventListener('click', scrollToNext);
  scrollIndicator.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToNext();
    }
  });
  
  block.appendChild(scrollIndicator);
}
