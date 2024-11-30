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
        this.shadowRoot.appendChild(link);
        
        // Create TOC structure
        const container = document.createElement('div');
        container.classList.add('table-of-contents');

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

        // Append button and TOC to container
        container.appendChild(button);
        container.appendChild(toc);

        // Append container to shadow DOM
        this.shadowRoot.appendChild(container); 
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
