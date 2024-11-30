#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';

const posts = readdirSync('posts')
    .filter(f => f.endsWith('.md'))
    .map(filename => {
        const [_, front, body] = readFileSync(`posts/${filename}`, 'utf8').split('---\n');
        return {
            filename,
            metadata: Object.fromEntries(front.trim().split('\n').map(l => l.split(': '))),
            excerpt: body.split('\n\n')[0].slice(0, 200)
        };
    })
    .sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));

mkdirSync(dirname('js/data/post_previews.js'), { recursive: true });
writeFileSync('js/data/post_previews.js', 
    `// Generated ${new Date().toISOString()}
export const posts = ${JSON.stringify(posts, null, 2)};`);
