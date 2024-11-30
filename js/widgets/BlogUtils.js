export class BlogUtils {
    static calculateReadingTime(content) {
        const wordsPerMinute = 200;
        const wordCount = content.trim().split(/\s+/).length;
        return Math.ceil(wordCount / wordsPerMinute);
    }
}

export class TableOfContents extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const markdown = this.getAttribute('markdown');
        this.populateTOC(markdown);
    }

    populateTOC(markdown) {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdown);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        const tocHTML = Array.from(headings).map(heading => {
            const level = parseInt(heading.tagName.charAt(1));
            const text = heading.textContent;
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return `<div class="toc-item level-${level}"><a href="#${id}">${text}</a></div>`;
        }).join('');

        this.innerHTML = `
            <div class="table-of-contents">
                <h3>Table of Contents</h3>
                <div class="toc-items">
                    ${tocHTML}
                </div>
            </div>
        `;
    }
}
