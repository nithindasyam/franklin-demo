export default function decorate(block) {
  // Get all list items from the block
  const items = block.querySelectorAll('li');

  if (items.length > 0) {
    // Create skills grid container
    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'skills-grid';

    items.forEach((item) => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card';
      skillCard.textContent = item.textContent.trim();
      skillsGrid.appendChild(skillCard);
    });

    // Clear block and add skills grid
    block.textContent = '';
    block.appendChild(skillsGrid);
  }
}
