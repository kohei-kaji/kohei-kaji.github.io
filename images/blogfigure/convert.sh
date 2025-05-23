#!/bin/bash

magick -density 300 "./ccg.pdf" -quality 90 "./ccg.png"
magick -density 300 "./surp.pdf" -quality 90 "./surp.png"
magick -density 300 "./sg.pdf" -quality 90 "./sg.png"
magick -density 300 "./sgj.pdf" -quality 90 "./sgj.png"
magick -density 300 "./respectively.pdf" -quality 90 "./respectively.png"
magick -density 300 "./extraposition.pdf" -quality 90 "./extraposition.png"
magick -density 300 "./extra_tree.pdf" -quality 90 "./extra_tree.png"
magick -density 300 "./scrambling.pdf" -quality 90 "./scrambling.png"

