# AI Agent Instructions for AEM Edge Delivery Services

This project uses Adobe Experience Manager (AEM) Edge Delivery Services, a modern web development platform that emphasizes performance, simplicity, and developer experience.

## Project Overview

This is an AEM Edge Delivery Services project that uses:
- **Semantic HTML** for content structure
- **Vanilla JavaScript** for block decoration
- **Framework-less CSS** for styling
- **Content-first development** approach
- **Block-based architecture** for reusable components

## Key Technologies

- **AEM.js**: Core library for block decoration and utilities
- **Web Test Runner**: For testing blocks and functionality
- **ESLint & Stylelint**: For code quality and consistency
- **GitHub Pages**: For hosting and preview

## Development Principles

### 1. Content-First Development
Always start with content before code:
1. Create test content in documents
2. Define content structure for authors
3. Build blocks to handle the content
4. Test with realistic content scenarios

### 2. Block-Based Architecture
- Each block is a self-contained component
- Blocks live in the `/blocks` directory
- Each block has `.js`, `.css`, and optional `metadata.json` files
- Blocks are decorated with JavaScript and styled with CSS

### 3. Progressive Enhancement
- Start with semantic HTML
- Enhance with JavaScript
- Apply styling with CSS
- Ensure accessibility throughout

## Available Skills

This project includes specialized AI agent skills in the `.skills/` directory:

### Orchestration Skills
- **Content Driven Development**: Complete workflow for building/modifying blocks
- **Page Import**: Complete import workflow for migrating pages to AEM

### Functional Skills
- **Building Blocks**: JavaScript decoration patterns and CSS conventions
- **Content Modeling**: Design effective content structures for authors
- **Non-Breaking Changes**: Regression guard workflow to avoid breaking existing features during updates

### Research Skills
- **Block Inventory**: Survey available blocks and capabilities
- **Docs Search**: Find AEM documentation and best practices

### Using Skills
To use a skill, mention it in your prompt:
- "Use the Content Driven Development skill to build a new hero block"
- "Apply the Building Blocks skill to implement this component"
- "Use Block Inventory to check what's already available"

Run `.skills/discover.js` to see all available skills and their descriptions.

## Block Development Guidelines

### JavaScript Decoration Pattern
```javascript
export default function decorate(block) {
  // Read configuration
  const config = readBlockConfig(block);
  
  // Process content
  const rows = [...block.children];
  block.innerHTML = '';
  
  // Build new structure
  rows.forEach((row) => {
    // Transform content
  });
}
```

### CSS Naming Convention
```css
.block-name {
  /* Base styles */
}

.block-name .element {
  /* Element styles */
}

.block-name.variant {
  /* Variant styles */
}
```

### Content Structure
Blocks expect content in table format:
```
| Column 1 | Column 2 |
|----------|----------|
| Content  | Content  |
```

## Testing

- Use Web Test Runner for block testing
- Test files go in `/test/blocks/[block-name]/`
- Run tests with `npm test`
- Include realistic content scenarios

## Common Patterns

### Image Handling
```javascript
// Optimize images
const img = block.querySelector('img');
if (img) {
  img.loading = 'lazy';
  // Add responsive attributes
}
```

### Link Processing
```javascript
// Handle internal/external links
const links = block.querySelectorAll('a');
links.forEach(link => {
  // Process link attributes
});
```

### Configuration Options
```javascript
// Read block configuration
const config = readBlockConfig(block);
const variant = config.variant || 'default';
```

## Performance Best Practices

- Lazy load images and media
- Use efficient CSS selectors
- Minimize DOM manipulation
- Implement intersection observers for animations
- Optimize for Core Web Vitals

## Accessibility Guidelines

- Use semantic HTML elements
- Provide proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

## Documentation Resources

When searching for AEM information:
- Always specify "search the www.aem.live website"
- Use "Edge Delivery Services" not just "EDS"
- Reference the llms.txt file at aem.live for AI-optimized docs
- Check the AEM.live blog for latest updates

## File Structure

```
/
├── blocks/           # Block components
├── scripts/          # Global scripts
├── styles/           # Global styles
├── test/            # Test files
├── tools/           # Development tools
├── .skills/         # AI agent skills
├── fstab.yaml       # Mount configuration
└── head.html        # Global head content
```

## Common Commands

```bash
# Run tests
npm test

# Run linting
npm run lint

# Start local development
npx @adobe/helix-cli up

# Deploy to production
git push origin main
```

## Troubleshooting

### Block Not Loading
- Check JavaScript syntax
- Verify file naming convention
- Ensure proper export statement

### Styling Issues
- Check CSS selector specificity
- Verify class naming convention
- Test responsive breakpoints

### Content Issues
- Validate content structure
- Check for missing required fields
- Test with various content lengths

## Getting Help

- Join the AEM Discord community
- Check GitHub discussions
- Review the AEM.live documentation
- Use the Docs Search skill for specific questions

Remember: AEM Edge Delivery Services prioritizes performance, simplicity, and author experience. Always consider these factors in your development decisions.