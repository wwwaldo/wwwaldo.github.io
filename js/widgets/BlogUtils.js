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
        this.attachShadow({ mode: 'open' });
        
        // Link external stylesheet
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/js/widgets/styles/table-of-contents.css';

        // Create static HTML structure
        const container = document.createElement('div');
        container.classList.add('table-of-contents');
        container.innerHTML = `
            <button id="toggle-toc">Table of Contents</button>
            <div id="toc" style="display: none;"></div>
        `;

        // Append elements to shadow DOM
        this.shadowRoot.append(link, container);

        // Add event listener for toggle button
        const button = container.querySelector('#toggle-toc');
        button.onclick = () => {
            const toc = container.querySelector('#toc');
            toc.style.display = toc.style.display === 'none' ? 'block' : 'none';
            button.classList.toggle('active');
        };
    }

    connectedCallback() {
        // Populate TOC when connected
        const content = this.getAttribute('content') || '';
        this.populateTOC(content);
    }

    populateTOC(content) {
        const toc = this.shadowRoot.querySelector('#toc');
        toc.innerHTML = this.generateTOC(content);
    }

    generateTOC(content) {
        const headers = content.match(/^##?\s.+$/gm);
        return headers ? headers.map(header => {
            const level = header.startsWith('##') ? 2 : 1;
            const text = header.replace(/^#+\s/, '');
            const id = text.toLowerCase().replace(/\s+/g, '-');
            return `<li class="toc-level-${level}"><a href="#${id}">${text}</a></li>`;
        }).join('') : '';
    }

    setContent(markdown) {
        this.populateTOC(markdown);
    }
}
