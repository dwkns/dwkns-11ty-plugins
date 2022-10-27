#!/usr/bin/env bash

echo 'hello'

npm version patch
echo 'npm version patch — done'

git add --all
echo "git add --all"

git commit -m "bump version"
echo "git commit -m bump version"

npm publish 
echo "npm publish"