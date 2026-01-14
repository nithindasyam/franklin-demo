# Claude Code Instructions for AEM Edge Delivery Services

This file provides specific instructions for Claude Code when working with this AEM Edge Delivery Services project.

## Project Context

This is an Adobe Experience Manager (AEM) Edge Delivery Services project using:
- Block-based architecture with semantic HTML
- Vanilla JavaScript for decoration
- Framework-less CSS for styling
- Content-first development approach

## Skills Integration

This project includes AI agent skills in the `.skills/` directory. These skills provide specialized workflows for AEM development:

### Available Skills
- **content-driven-development.md**: Orchestrates complete block development workflow
- **building-blocks.md**: JavaScript decoration patterns and CSS conventions
- **content-modeling.md**: Design effective content structures for authors
- **page-import.md**: Complete import workflow for migrating pages
- **block-inventory.md**: Survey available blocks and capabilities
- **docs-search.md**: Find AEM documentation and best practices

### Using Skills
Reference skills directly in prompts:
```
Use the Content Driven Development skill to create a new testimonials block
```

Run `.skills/discover.js` to see all available skills.

## Development Guidelines

### Block Development Pattern
1. Start with content structure (author experience first)
2. Create semantic HTML structure
3. Apply JavaScript decoration
4. Style with CSS following naming conventions
5. Test with realistic content

### Code Quality
- Follow ESLint configuration
- Use Stylelint for CSS
- Write tests for blocks
- Maintain accessibility standards

### AEM-Specific Patterns
- Use `readBlockConfig()` for block configuration
- Follow block naming conventions
- Implement progressive enhancement
- Optimize for performance

## Documentation Resources

When searching for AEM information:
- Specify "search the www.aem.live website"
- Use "Edge Delivery Services" terminology
- Reference official documentation at aem.live/docs
- Check the AEM.live blog for updates

## File Organization

```
blocks/[block-name]/
├── [block-name].js    # Block decoration
├── [block-name].css   # Block styles
└── metadata.json      # Block metadata (optional)
```

## Testing Strategy

- Use Web Test Runner for block testing
- Create realistic content scenarios
- Test responsive behavior
- Validate accessibility compliance

This project follows AEM Edge Delivery Services best practices. Always prioritize performance, author experience, and maintainability in your development decisions.