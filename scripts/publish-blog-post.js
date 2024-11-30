#!/usr/bin/env node
import { execSync } from 'child_process';

// Run the build script to generate post previews
execSync('node scripts/build.js', { stdio: 'inherit' });

// Check for changes and commit if there are any
try {
    execSync('git diff-index --quiet HEAD --');
    console.log('No changes to commit.');
} catch {
    execSync('git add .', { stdio: 'inherit' });
    execSync('git commit -m "Publish new blog post"', { stdio: 'inherit' });
    console.log('Changes committed.');
}

// Push changes
// Uncomment the following line if you want to automatically push changes
// execSync('git push origin main', { stdio: 'inherit' });
