#!/usr/bin/env bash

while getopts p:t: flag
do
    case "${flag}" in
        p) postname=${OPTARG};;
        t) tags=${OPTARG};;
        *) echo "usage $0 [-p] [-t]" >&2
          exit 1 ;;
    esac
done


currentDate=$(date +%Y-%m-%d)
fileTimeStamp=$(date -u +%FT%TZ)
dirName="$currentDate-$postname"
fileName="./content/$dirName/index.md"

mkdir -p "./content/$dirName"
{
  echo "---"
  echo "title: "
  echo "tags: [ $tags ]"
  echo "date: $fileTimeStamp"
  echo "path: blog/$dirName"
  echo "cover: "
  echo "excerpt: "
  echo "---"
  echo
} >> $fileName
#
#echo "---" >>
#     title: A Quick Dive into Heat Transfer (I)
#     tags: [ cpp, math, metal, go, python ]
#     date: 2020-06-08T11:25:44.226Z
#     path: blog/a-quick-dive-into-heat-transfer-i
#     cover: ./cover.jpg
#     excerpt: In this post I showcase a short - but interesting - application of numerical methods by solving a quasi-static heat transfer model.
#     ---

