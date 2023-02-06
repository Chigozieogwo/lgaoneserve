npm run build

cp -R ./build /var/www/html/billable

sudo service nginx reload

sudo nginx -t