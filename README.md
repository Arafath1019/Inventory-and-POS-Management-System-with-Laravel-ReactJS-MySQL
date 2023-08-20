# Inventory-and-POS-Management-System-with-Laravel-ReactJS-MySQL

### Environment Setup for MacOS:
1. Install Node: https://nodejs.org/en/download

2. Install Homebrew: https://brew.sh/

`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`


3. Install Git using brew: https://git-scm.com/download/mac

`brew install git`

4. Install PHP & Start the brew service using homebrew: `brew install php`

5. Install MySQL & Start the brew service using homebrew: `brew install mysql`

6. Start, stop, restart and list of services using brew:

Start: 
`brew services start services_name`

Example: `brew services start mysql`

Stop:
`brew services stop services_name`

Example:`brew services stop mysql`

Restart:
`brew services restart service_name`

Example: `brew services restart mysql`

List:
`brew services list`

7. Install Composer: https://getcomposer.org/download/

```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'e21205b207c3ff031906575712edab6f13eb0b361f2085f1f1237b7126d785e826a450292b6cfd1d64d92e6563bbde02') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

After successfully running the commands, run the below command in your terminal:
`sudo mv composer.phar /usr/local/bin/composer`

8. Create React app:
`npx create-react-app@latest app_name`

9. Create Laravel App:
`composer create-project laravel/laravel project_name`

10. Setup PHPMyAdmin:

Download zip file: `https://www.phpmyadmin.net/`

Unzip the folder and rename. Route the folder using terminal and run the command: `php -S localhost:8080`

And login the MySQL server using credentials