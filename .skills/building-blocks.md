# Building Blocks

## Description
Provides JavaScript decoration patterns, CSS styling conventions, and AEM-specific best practices for creating or modifying blocks.

## When to Use
- Implementing new blocks
- Modifying existing block functionality
- Following AEM decoration patterns
- Applying consistent styling

## JavaScript Decoration Patterns

### Basic Block Structure
```javascript
export default function decorate(block) {
  // Get block configuration
  const config = readBlockConfig(block);
  
  // Process block content
  const rows = [...block.children];
  
  // Clear existing content
  block.innerHTML = '';
  
  // Build new structure
  rows.forEach((row) => {
    // Process each row
    const cells = [...row.children];
    // Transform content
  });
  
  // Add event listeners if needed
  // Apply progressive enhancement
}
```

### Common Patterns
- Use semantic HTML elements
- Apply progressive enhancement
- Handle responsive behavior
- Implement accessibility features
- Use CSS custom properties for theming

### Block Configuration
```javascript
// Read configuration from block metadata
const config = readBlockConfig(block);

// Handle different block variants
if (block.classList.contains('variant-name')) {
  // Variant-specific logic
}
```

## CSS Styling Conventions

### Block Naming
```css
.block-name {
  /* Base block styles */
}

.block-name .block-element {
  /* Element styles */
}

.block-name.variant {
  /* Variant styles */
}
```

### Responsive Design
```css
.block-name {
  /* Mobile-first approach */
}

@media (min-width: 768px) {
  .block-name {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .block-name {
    /* Desktop styles */
  }
}
```

### CSS Custom Properties
```css
.block-name {
  --block-color: var(--color-primary);
  --block-spacing: var(--spacing-medium);
}
```

## Best Practices

### Performance
- Lazy load images and media
- Use efficient selectors
- Minimize DOM manipulation
- Implement intersection observers for animations

### Accessibility
- Use semantic HTML
- Provide proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast

### Maintainability
- Keep functions small and focused
- Use consistent naming conventions
- Comment complex logic
- Follow project coding standards

## Testing
- Test with various content scenarios
- Validate responsive behavior
- Check accessibility compliance
- Verify cross-browser compatibility