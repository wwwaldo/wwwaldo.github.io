#!/bin/bash

# Usage: ./publish-blog-post.sh
# Description: This script builds the blog post previews and commits any changes.
# It also pushes the changes to the 'main' branch if there are any.

# Run the build script to generate post previews
./scripts/build.js

# Add and commit changes
# Assuming git is used for version control
if git diff-index --quiet HEAD --; then
    echo "No changes to commit."
else
    git add .
    git commit -m "Publish new blog post"
    echo "Changes committed."
fi

# Push changes
# Uncomment the following line if you want to automatically push changes
git push origin main
