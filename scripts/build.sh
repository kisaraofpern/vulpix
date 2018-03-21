echo "Archive the app..."
tar -czvf vulpix.tgz ./* --exclude .git --exclude .gitignore --exclude .DS_Store
aws s3 cp vulpix.tgz s3://kisaras-playground
rm vulpix.tgz
