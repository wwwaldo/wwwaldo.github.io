#!/bin/bash

# Exit on error
set -e

# Store the current branch name
CURRENT_BRANCH=$(git branch --show-current)

echo "📦 Current branch: $CURRENT_BRANCH"

# Ensure working directory is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Working directory not clean. Please commit or stash changes first."
    exit 1
fi

# Switch to gh-pages and merge changes
echo "🔄 Switching to gh-pages branch..."
git checkout gh-pages

echo "🔀 Merging changes from $CURRENT_BRANCH..."
git merge $CURRENT_BRANCH

echo "⬆️ Pushing to GitHub..."
git push origin gh-pages

# Switch back to original branch
echo "↩️ Switching back to $CURRENT_BRANCH..."
git checkout $CURRENT_BRANCH

echo "✅ Deployment complete! Changes should be live in a few minutes."
echo "🌐 Check your site at: https://wwwaldo.github.io"
