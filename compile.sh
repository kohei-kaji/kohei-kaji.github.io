#!/bin/bash

TEX_FILE="./files/CV_kajikawa.tex"
OUT_DIR="./files"

xelatex -halt-on-error -output-directory="$OUT_DIR" "$TEX_FILE"
xelatex -halt-on-error -output-directory="$OUT_DIR" "$TEX_FILE"
