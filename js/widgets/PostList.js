import { posts } from '../data/post_previews.js';

export class PostList extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Render posts
        const postsHTML = posts.map(post => `
            <article class="post-preview">
                <h2><a href="post.html?${post.filename.replace('.md', '')}">${post.metadata.title}</a></h2>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    Date: ${post.metadata.date} | 
                    Author: ${post.metadata.author}
                </div>
            </article>
        `).join('');

        this.shadowRoot.innerHTML = `
            <style>@import url('/js/widgets/styles/post-list.css');</style>
            <section class="posts">
                ${postsHTML}
            </section>
        `;
    }
}
