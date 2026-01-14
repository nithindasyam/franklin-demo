# AEM AI Agent Skills

This directory contains specialized skills for AI coding agents working with Adobe Experience Manager (AEM) Edge Delivery Services projects.

## Available Skills

### Orchestration Skills
- **content-driven-development.md** - Complete workflow for building/modifying blocks
- **page-import.md** - Complete import workflow for migrating pages to AEM

### Functional Skills  
- **building-blocks.md** - JavaScript decoration patterns and CSS conventions
- **content-modeling.md** - Design effective content structures for authors

### Research Skills
- **block-inventory.md** - Survey available blocks and capabilities
- **docs-search.md** - Find AEM documentation and best practices

## Usage

### For AI Agents
These skills are automatically discoverable by most modern AI coding agents. Simply mention a skill in your prompt:

```
"Use the Content Driven Development skill to build a new testimonials block"
"Apply the Building Blocks skill to implement this component"
"Use Block Inventory to check what's already available"
```

### Skill Discovery
Run the discovery script to see all available skills:

```bash
node .skills/discover.js
```

### Manual Reference
Each skill file contains:
- **Description**: What the skill does
- **When to Use**: Specific scenarios for applying the skill
- **Workflow/Process**: Step-by-step guidance
- **Best Practices**: AEM-specific recommendations
- **Examples**: Code patterns and implementations

## Integration

These skills follow the Agent Skills standard and integrate with:
- Claude Code (via CLAUDE.md)
- Cursor AI (via AGENTS.md)
- GitHub Copilot
- Other MCP-compatible agents

## Customization

Skills can be customized for your specific project needs:
1. Edit existing skill files to match your patterns
2. Add new skills following the same markdown structure
3. Update the discovery script if needed
4. Document changes in AGENTS.md

## AEM Best Practices

All skills follow AEM Edge Delivery Services best practices:
- Content-first development approach
- Block-based architecture
- Performance optimization
- Accessibility compliance
- Author experience focus

## Support

For questions about AEM development:
- Check the official documentation at aem.live
- Join the AEM Discord community
- Use the Docs Search skill for specific guidance