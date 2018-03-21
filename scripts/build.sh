echo "Archive the app..."
zip -r vulpix.zip ./* --exclude .git --exclude .gitignore --exclude .DS_Store
aws s3 cp vulpix.zip s3://kisaras-playground
rm vulpix.zip
