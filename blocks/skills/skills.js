/**
 * Loads an icon from the /icons directory
 * @param {string} iconName - Name of the icon file (without .svg extension)
 * @returns {Promise<HTMLElement>} - Span element containing the icon SVG
 */
async function loadIcon(iconName) {
  const span = document.createElement('span');
  span.className = 'skill-icon';

  if (!iconName) return span;

  try {
    const resp = await fetch(`/icons/${iconName}.svg`);
    if (resp.ok) {
      const svg = await resp.text();
      span.innerHTML = svg;
    }
  } catch (e) {
    // Icon not found, return empty span
  }

  return span;
}

/**
 * Skills block decorator
 * Supports two authoring formats:
 *
 * 1. Simple list format (no icons):
 *    | Skills |
 *    | - Java |
 *    | - CSS  |
 *
 * 2. Table format with icons:
 *    | Skills |          |
 *    | Java   | java     |
 *    | CSS    | css      |
 *
 * Icon names map to files in /icons/ folder (e.g., "java" -> /icons/java.svg)
 */
export default async function decorate(block) {
  // Check if block has rows (table format with icons)
  const rows = block.querySelectorAll(':scope > div');

  if (rows.length > 0) {
    const skillsGrid = document.createElement('div');
    skillsGrid.className = 'skills-grid';

    // Process each row
    const skillPromises = [...rows].map(async (row) => {
      const cols = row.querySelectorAll(':scope > div');

      // Check for list items within the row
      const listItems = row.querySelectorAll('li');

      if (listItems.length > 0) {
        // List format: each li is a skill
        return [...listItems].map(async (li) => {
          const skillCard = document.createElement('div');
          skillCard.className = 'skill-card';

          // Check if li has text and potentially an icon reference
          const text = li.textContent.trim();

          // Parse format "Skill Name | icon-name" or just "Skill Name"
          const parts = text.split('|').map((p) => p.trim());
          const skillName = parts[0];
          const iconName = parts[1] || null;

          if (iconName) {
            const icon = await loadIcon(iconName);
            skillCard.appendChild(icon);
          }

          const label = document.createElement('span');
          label.className = 'skill-label';
          label.textContent = skillName;
          skillCard.appendChild(label);

          return skillCard;
        });
      } if (cols.length >= 2) {
        // Table format: col 1 = skill name, col 2 = icon name
        const skillName = cols[0].textContent.trim();
        const iconName = cols[1].textContent.trim();

        if (!skillName) return null;

        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';

        if (iconName) {
          const icon = await loadIcon(iconName);
          skillCard.appendChild(icon);
        }

        const label = document.createElement('span');
        label.className = 'skill-label';
        label.textContent = skillName;
        skillCard.appendChild(label);

        return skillCard;
      } if (cols.length === 1) {
        // Single column, might be a skill without icon
        const skillName = cols[0].textContent.trim();

        if (!skillName || skillName.startsWith('-')) return null;

        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';

        const label = document.createElement('span');
        label.className = 'skill-label';
        label.textContent = skillName;
        skillCard.appendChild(label);

        return skillCard;
      }
      return null;
    });

    // Wait for all skills to be processed
    const results = await Promise.all(skillPromises);

    // Flatten and filter results, then append to grid
    results.flat().filter(Boolean).forEach((card) => {
      skillsGrid.appendChild(card);
    });

    // Clear block and add skills grid
    block.textContent = '';
    block.appendChild(skillsGrid);
  }
}
