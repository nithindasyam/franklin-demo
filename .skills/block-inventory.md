# Block Inventory

## Description
Surveys available blocks from the local project and Block Collection to understand what's already built and available for use.

## When to Use
- Before building new blocks
- Planning page layouts
- Understanding available components
- Avoiding duplicate development

## Inventory Process

### 1. Local Block Survey
- Scan `/blocks` directory
- Identify existing blocks and variants
- Document block capabilities
- Note configuration options

### 2. Block Collection Review
- Check AEM Block Collection
- Identify reusable components
- Evaluate community blocks
- Consider integration requirements

### 3. Capability Mapping
- Map blocks to use cases
- Identify functionality gaps
- Plan block combinations
- Consider customization needs

## Local Block Analysis

### Block Structure Review
```javascript
// Analyze block files
const blockDirs = fs.readdirSync('./blocks');
blockDirs.forEach(dir => {
  // Check for JS, CSS, and metadata files
  const hasJS = fs.existsSync(`./blocks/${dir}/${dir}.js`);
  const hasCSS = fs.existsSync(`./blocks/${dir}/${dir}.css`);
  const hasMeta = fs.existsSync(`./blocks/${dir}/metadata.json`);
  
  // Document block capabilities
});
```

### Variant Detection
- Check CSS classes for variants
- Review metadata.json files
- Identify configuration options
- Document usage patterns

### Dependency Analysis
- Check for shared utilities
- Identify common patterns
- Note styling dependencies
- Map component relationships

## Block Collection Integration

### Available Categories
- Navigation blocks
- Content blocks
- Media blocks
- Form blocks
- Layout blocks
- E-commerce blocks

### Evaluation Criteria
- Functionality match
- Customization requirements
- Maintenance overhead
- Performance impact
- Accessibility compliance

## Documentation Output

### Block Catalog
```markdown
## Available Blocks

### Navigation
- **Header**: Main site navigation with logo and menu
- **Footer**: Site footer with links and contact info

### Content
- **Hero**: Large banner with image and call-to-action
- **Cards**: Grid of content cards with images and text
- **Columns**: Multi-column text layout

### Media
- **Gallery**: Image gallery with lightbox
- **Video**: Embedded video player
```

### Usage Guidelines
- When to use each block
- Configuration options
- Content requirements
- Styling variants

### Gap Analysis
- Missing functionality
- Needed customizations
- Development priorities
- Integration opportunities

## Maintenance Considerations

### Block Health Check
- Code quality assessment
- Performance metrics
- Accessibility compliance
- Browser compatibility

### Update Planning
- Version management
- Breaking change handling
- Migration strategies
- Testing requirements

## Best Practices

### Regular Inventory
- Schedule periodic reviews
- Update documentation
- Track usage patterns
- Monitor performance

### Knowledge Sharing
- Document findings
- Share with team
- Update guidelines
- Train new developers