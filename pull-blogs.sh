#!/bin/bash

# write SSH key
echo "$DEPLOY_KEY" > /tmp/deploy_key
chmod 600 /tmp/deploy_key

# clone private posts repo
GIT_SSH_COMMAND="ssh -i /tmp/deploy_key -o StrictHostKeyChecking=no" \
  git clone git@github.com:bpuebla/blog-posts.git posts

cp -r posts/_post-assets public/_post-assets
