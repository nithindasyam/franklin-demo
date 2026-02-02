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

## Sidekick Library Maintenance

This project includes a Sidekick Library that allows content authors to browse and preview blocks directly in the Sidekick extension.

### Library Structure

```
tools/sidekick/
├── library.html          # Sidekick Library UI entry point
└── library.json          # Block catalog (name + path)

block-collection/
├── skills.md             # Skills block examples & variations
├── hero-portfolio.md     # Hero block examples
├── cards-grid.md         # Cards block examples
└── columns-simple.md     # Columns block examples
```

### Accessing the Library

Open `/tools/sidekick/library.html` in a browser to preview the block library locally.

### When to Update the Library

**IMPORTANT: Update the Sidekick Library whenever you:**
1. Create a new block
2. Add a new block variation
3. Modify a block's authoring format
4. Change a block's behavior significantly

### Adding a New Block to the Library

1. **Create a block collection page** at `/block-collection/{block-name}.md`:

```markdown
+------------------------------------------------------------------------------------------------------+
| **Library Metadata**                                                                                 |
+-------------+----------------------------------------------------------------------------------------+
| name        | Block Name                                                                             |
+-------------+----------------------------------------------------------------------------------------+
| description | Description of the block including implementation details, when to use, etc.           |
+-------------+----------------------------------------------------------------------------------------+

[Your block example here]

---

[Additional variations separated by --- ]
```

2. **Update library.json** at `/tools/sidekick/library.json`:
   - Add a new entry to the `data` array
   - Increment the `total` count
   - Example:
   ```json
   {
     "name": "New Block",
     "path": "/block-collection/new-block"
   }
   ```

### Library Metadata Fields

Each block example should include a `Library Metadata` table with:
- **name**: Display name shown in Sidekick (required)
- **description**: Detailed description with implementation notes (required)
- **searchtags**: Comma-separated tags for searching (optional)

### Block Variations

Separate multiple variations with `---` (section break). Each variation should have its own `Library Metadata` with a unique name like "Block Name (Variation)".

### Icons Reference

Available icons in `/icons/` folder for the Skills block:
- **Languages**: java, javascript, html, css
- **Frameworks**: react, nodejs
- **DevOps**: docker, kubernetes, git, maven, eslint
- **Cloud/DB**: aws, mysql, apache
- **Adobe**: adobe (for all Adobe products)
- **Tools**: jira, sonarqube, api, code

To add new icons, place SVG files in `/icons/{name}.svg`.

This project follows AEM Edge Delivery Services best practices. Always prioritize performance, author experience, and maintainability in your development decisions.