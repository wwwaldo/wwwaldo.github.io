import { posts } from '../data/post_previews.js';

export class PostList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Render posts
        const postsHTML = posts.map(post => `
            <article class="post-card">
                <h2><a href="post.html?${post.filename.replace('.md', '')}">${post.metadata.title}</a></h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    Date: ${post.metadata.date} | 
                    Author: ${post.metadata.author}
                </div>
            </article>
        `).join('');

        this.innerHTML = `
            <section class="posts">
                ${postsHTML}
            </section>
        `;
    }
}
