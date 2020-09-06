#!/usr/bin/env bash

target=$1

# create a `tmp` directory
mkdir tmp

# copy the content of `build` folder into the `tmp` directory
cp -r build/* tmp/

# remove the content from the `build` directory
rm -r build/*

# create a `catch-of-the-day` directory inside `build` directory
mkdir build/$target

# copy the content of `tmp` folder into the `build/catch-of-the-day` directory
cp -r tmp/* build/"$target"/

# finally, remove the `tmp` directory
rm -rf tmp