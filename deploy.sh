npm run build


rm -fr /var/www/html/billable

cp -R ./build /var/www/html/billable

sudo service nginx reload

sudo nginx -t