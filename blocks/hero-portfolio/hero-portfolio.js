export default function decorate(block) {
  // Hero portfolio variant - dark background with centered text and quote
  const heroContent = block.firstElementChild;
  if (heroContent) {
    heroContent.classList.add('hero-portfolio-content');
  }
}
