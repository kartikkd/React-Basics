#!/bin/bash

# Define the source directory and target directory
SOURCE_DIR="C:/React-basics/my-app/build"
TARGET_DIR="C:/devtools/Apache24/htdocs/my-app"

# Check if the source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo "Source directory does not exist"
    exit 1
fi

# Check if the target directory exists
if [ ! -d "$TARGET_DIR" ]; then
    echo "Target directory does not exist"
    exit 1
fi

# Copy the build files to the target directory
rsync -avz --delete "$SOURCE_DIR/" "$TARGET_DIR/"

# Restart Apache
& "C:/devtools/Apache24/httpd.exe" -k restart
