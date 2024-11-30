# Serif Blog

A minimalist, typography-focused blog built with vanilla web technologies. Inspired by Lilian Weng's blog design (which uses Hugo + Papermod).

## Design Decisions

### Technology Choices
- **Vanilla Stack**: Pure HTML, CSS, and JavaScript without frameworks
- **Web Components**: Used for blog post rendering (`<blog-post>` custom element)
- **Local Development**: Simple Python HTTP server
- **Dependencies**: Minimal external libraries, all loaded via CDN

### Libraries & CDNs
- **Showdown.js**: Browser-first markdown parser (replaces marked.js)
  - Chosen for better browser compatibility and built-in header ID generation
  - Note: Avoided Node.js-first libraries (marked-toc, markdown-it-anchor) due to browser import issues
- **Google Fonts**: Merriweather for serif typography
- **jsDelivr CDN**: Reliable, free CDN for library hosting

### Key Features
1. **Markdown Blog Posts**
   - Posts stored as `.md` files with frontmatter
   - Dynamic rendering via Web Components
   - Table of Contents auto-generated from headers

2. **Typography & Design**
   - Serif-focused with Merriweather font
   - Clean, minimal layout
   - Content-first approach

3. **Navigation**
   - Home page with post list
   - Dynamic post routing
   - Social media links

## Development Notes

### Important Learnings
- Many npm packages (like marked-toc) are Node.js-first and don't work directly in browsers
- Web Components provide a clean way to encapsulate blog post logic
- Simple solutions often work better (e.g., showdown.js vs. more complex alternatives)

### Local Development
```bash
# Start local server on port 3000
python3 -m http.server 3000
```

### Project Structure
```
serif-blog/
├── index.html      # Home page
├── post.html       # Blog post template
├── styles.css      # Global styles
├── feed.xml        # RSS feed
└── posts/          # Markdown blog posts
    └── *.md
```

## Future Improvements
- [ ] Add search functionality
- [ ] Implement tag system
- [ ] Add dark mode
- [ ] Set up proper deployment pipeline
