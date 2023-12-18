#!/bin/zsh


set -x

function test(){
    git add .
    git commit -m "test: script"
}

test