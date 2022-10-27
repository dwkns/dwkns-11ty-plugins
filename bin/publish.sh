#!/usr/bin/env bash

npm version patch || { echo '----- npm version patch failed' ; exit 1; }
echo 'npm version patch — done'

git add --all  || { echo '----- git add --all failed' ; exit 1; }
echo "git add --all"

git commit -m "bump version"  || { echo '----- git commit -m failed' ; exit 1; }
echo "git commit -m bump version"

npm publish   || { echo '----- npm publish failed' ; exit 1; }
echo "npm publish"