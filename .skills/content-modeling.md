# Content Modeling

## Description
Guides agents to design effective initial content structures (the author-developer contract) that make blocks intuitive for authors to use.

## When to Use
- Designing new block content structures
- Improving existing author experiences
- Planning content-first development
- Establishing author-developer contracts

## Content Structure Principles

### Author-First Design
- Think from the author's perspective
- Make content creation intuitive
- Minimize cognitive load
- Provide clear content patterns

### Flexible Yet Structured
- Allow content variations
- Maintain consistent patterns
- Support different use cases
- Enable easy content updates

## Common Content Patterns

### Simple Text Blocks
```
| Heading | Description |
|---------|-------------|
| Title   | Body text   |
```

### Media with Text
```
| Image | Content |
|-------|---------|
| ![alt] | Heading |
|        | Description |
```

### Card-Based Content
```
| Card 1 | Card 2 | Card 3 |
|--------|--------|--------|
| Image  | Image  | Image  |
| Title  | Title  | Title  |
| Text   | Text   | Text   |
| Link   | Link   | Link   |
```

### Configuration Options
```
| Setting | Value |
|---------|-------|
| Variant | large |
| Theme   | dark  |
```

## Content Modeling Guidelines

### 1. Start with User Stories
- What does the author want to achieve?
- What content do they need to provide?
- How will they structure the information?

### 2. Design for Flexibility
- Support multiple content lengths
- Handle optional content gracefully
- Allow for content variations

### 3. Provide Clear Examples
- Show realistic content examples
- Document expected formats
- Provide template structures

### 4. Consider Content Lifecycle
- How will content be updated?
- What happens with missing content?
- How to handle content migration?

## Validation Checklist

### Author Experience
- [ ] Content structure is intuitive
- [ ] Required vs optional fields are clear
- [ ] Examples are provided
- [ ] Error handling is graceful

### Developer Experience
- [ ] Structure is consistent
- [ ] Edge cases are handled
- [ ] Code is maintainable
- [ ] Performance is optimized

### Content Quality
- [ ] Supports accessibility requirements
- [ ] Works across devices
- [ ] Handles various content lengths
- [ ] Maintains visual hierarchy

## Common Pitfalls to Avoid
- Overly complex structures
- Too many required fields
- Unclear content expectations
- Inflexible content patterns
- Poor error handling