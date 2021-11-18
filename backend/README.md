# README

This README document contains steps that are necessary to get the application up and running.

Things you may want to cover:

* Ruby version
- ruby 3.0.2p107 (2021-07-07 revision 0db68f0233) \[x64-mingw32\]
- Rails 6.1.4.1

* System dependencies
    - ruby 3.0.2p107 (2021-07-07 revision 0db68f0233) \[x64-mingw32\]
    - Rails 6.1.4.1
    - node v17.1.0
    - npm 8.1.2
    - mysql  Ver 8.0.27 (Development env: Win64 on x86_64, MySQL Community Server - GPL)
    - mysql2 with MySQL 8.0 Connector C++

* Configuration
1. Execute below line to install all packages belonging to ruby and rails. 

IMPORTANT: this may require ruby, rails and node.js installed in the system.

    /> bundle install

2. Install MySQL
    - Install MySQL: https://dev.mysql.com/downloads/installer/
    - Set 3 Users: namely pmp_development, pmp_testing, pmp_production
    - Above defines the application environment. If you are running the application you may require the "pmp_production only"
    - Configure the ".env" file located in ./config/.env with Local MySQL User's Password

3. After installing MySQL we need to connect our rails application to MySQL database. For this we have used the package mysql2, that connects the database using MySQL's C++ connector. Suppose the MySQL folder is located at directory "C:\Program Files\MySQL", we can use this connector within mysql2 gem package by following command from terminal inside the project's root folder for the "backend" application.

    /> gem install mysql2 -- --with-mysql-lib="location for the lib folder in MySQL connector's directory" --with-mysql-dir="location for the MySQL connector's directory" --with-mysql-include="location for the include folder in MySQL connector's directory"

Above cmd can be rephrased as below when MySQL 8.0 is installed with the default configuration setup:

    /> gem install mysql2 -- --with-mysql-lib="C:\Program Files\MySQL\Connector C++ 8.0\lib64" --with-mysql-dir="C:\Program Files\MySQL\Connector C++ 8.0" --with-mysql-include="C:\Program Files\MySQL\Connector C++ 8.0\include"


* Database creation
The database design is shared as part of the documentation within the application. The database design presents the entities and relation between entities along with the converted relational schema form describing how the database is setup. The creation of database. More details on creation is shared in "Database initialization" section below.

* Database initialization
The backend for this project is setup using rake migration. The only requirement is to create a database named "practice_management_portal" in the environment of choice (namely pmp_development, pmp_testing, pmp_production). All tables pertaining the database will be setup in the database named "practice_management_portal", soon after the program is executed. 

* How to run the test suite
- Coming soon ...

* Services (job queues, cache servers, search engines, etc.)
- Coming soon ...

* Deployment instructions
To start the application process to running, use the command below:

    /> rails server

This will launch the application by spinning-off depending on the application environment.

* ...
