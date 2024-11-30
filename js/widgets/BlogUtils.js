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
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            button {
                background: #f0f0f0;
                border: none;
                padding: 8px 16px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 1rem;
                margin-bottom: 1rem;
            }
            button:hover {
                background: #e0e0e0;
            }
            button.active {
                background: #d0d0d0;
            }
            #toc {
                background: #f8f8f8;
                padding: 1rem;
                border-radius: 4px;
                margin-bottom: 2rem;
            }
            #toc ul {
                list-style: none;
                padding-left: 0;
                margin: 0;
            }
            .toc-level-1 {
                margin-bottom: 0.5rem;
            }
            .toc-level-2 {
                padding-left: 1rem;
                margin-bottom: 0.25rem;
            }
            a {
                color: inherit;
                text-decoration: none;
            }
            a:hover {
                text-decoration: underline;
            }
        `;
        this.shadowRoot.appendChild(style);
        
        // Create TOC structure
        const button = document.createElement('button');
        button.textContent = 'Table of Contents';
        button.onclick = () => {
            const toc = this.shadowRoot.getElementById('toc');
            toc.style.display = toc.style.display === 'none' ? 'block' : 'none';
            button.classList.toggle('active');
        };

        const toc = document.createElement('div');
        toc.id = 'toc';
        toc.style.display = 'none';

        this.shadowRoot.appendChild(button);
        this.shadowRoot.appendChild(toc);
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
        const tocItems = this.generateTOC(markdown);
        const toc = this.shadowRoot.getElementById('toc');
        toc.innerHTML = `<ul>${tocItems}</ul>`;
    }
}
