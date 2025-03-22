echo $FTP_PASSWORD
lftp ftp://$FTP_USERNAME@$FTP_SERVER:$FTP_PASSWORD@ftp.beautiful-css.com -e "set ssl:verify-certificate no; mirror -v -e -R \
-x deploy.sh \
-x deploy*.sh \
-x .gitignore \
-x .git \
-x node_modules \
-x docker \
-x api.code-workspace \
-x private \
-x package-lock.json \
-x README.md \
-x .ftpquota \
-x .htaccess \
-x upload \
./dist/ / ; quit"