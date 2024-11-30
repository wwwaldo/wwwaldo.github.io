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

    async connectedCallback() {
        // Load and append styles
        const response = await fetch('/js/widgets/styles/table-of-contents.css');
        const css = await response.text();
        const style = document.createElement('style');
        style.textContent = css;
        this.shadowRoot.appendChild(style);
        
        const button = document.createElement('button');
        button.textContent = 'Table of Contents';
        
        const toc = document.createElement('div');
        toc.id = 'toc';
        toc.style.display = 'none';
        
        button.onclick = () => {
            toc.style.display = toc.style.display === 'none' ? 'block' : 'none';
            button.classList.toggle('active');
        };

        this.shadowRoot.appendChild(button);
        this.shadowRoot.appendChild(toc);
    }

    setContent(markdown) {
        const tocItems = this.generateTOC(markdown);
        const toc = this.shadowRoot.getElementById('toc');
        toc.innerHTML = `<ul>${tocItems}</ul>`;
    }
}
