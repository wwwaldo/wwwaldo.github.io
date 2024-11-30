---
title: How this blog was made
date: Nov 30, 2024
author: Waldo
---

I've always admired minimalist blogs that focus on typography and content. After discovering Lilian Weng's blog (built with Hugo + Papermod), I decided to create something similar but with vanilla web technologies.

## Design Decisions

The core philosophy was simple: use as little as possible to create something beautiful and functional. This meant:

```javascript
const philosophy = {
  tech: 'vanilla JavaScript',
  styling: 'clean typography',
  dependencies: ['minimal', 'intentional'],
  approach: 'web standards first'
};
```

## Technical Implementation

### Web Components

The blog uses custom elements for post rendering:

```javascript
class BlogPost extends HTMLElement {
  // Handles markdown rendering
  // Manages table of contents
  // Pure vanilla JavaScript!
}
```

### Markdown Processing

After experimenting with various parsers (marked.js, markdown-it), I settled on Showdown.js for its:
- Browser-first design
- Reliable header ID generation
- Minimal configuration needed

### Progressive Web App

The blog is also a PWA, supporting:
- Offline reading
- Home screen installation
- Fast loading times

## Lessons Learned

1. Simple tech can be powerful
2. Web standards have evolved impressively
3. Typography matters more than fancy features
4. Sometimes less really is more

## Future Plans

- Implement a tag system
- Add search functionality
- Explore dark mode
- Set up proper deployment

Building this blog has been an exercise in restraint and a reminder that we often don't need complex frameworks to create something useful and beautiful.
