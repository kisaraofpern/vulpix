echo "Archive the app..."
zip -r vulpix.zip ./* --exclude .git --exclude .gitignore
aws s3 cp vulpix.zip