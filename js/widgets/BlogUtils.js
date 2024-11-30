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
        
        // Create static HTML structure
        this.innerHTML = `
            <div class="table-of-contents">
                <button id="toggle-toc">Table of Contents</button>
                <div id="toc" style="display: none;"></div>
            </div>
        `;

        // Add event listener for toggle button
        const button = this.querySelector('#toggle-toc');
        button.onclick = () => {
            const toc = this.querySelector('#toc');
            toc.style.display = toc.style.display === 'none' ? 'block' : 'none';
            button.classList.toggle('active');
        };
    }

    connectedCallback() {
        // Populate TOC when connected
        const markdown = this.getAttribute('markdown') || '';
        this.populateTOC(markdown);
    }

    populateTOC(markdown) {
        const toc = this.querySelector('#toc');
        toc.innerHTML = this.generateTOC(markdown);
    }

    generateTOC(markdown) {
        const converter = new showdown.Converter();
        const html = converter.makeHtml(markdown);
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const headings = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
        
        return Array.from(headings).map(heading => {
            const level = parseInt(heading.tagName.charAt(1));
            const text = heading.textContent;
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return `<li class="toc-level-${level}"><a href="#${id}">${text}</a></li>`;
        }).join('');
    }

    setContent(markdown) {
        this.populateTOC(markdown);
    }
}
