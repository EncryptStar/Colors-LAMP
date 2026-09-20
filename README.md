# The COLORS application
This is a web application which allows users to store colors (or any short string of text) on a database.
A user can then search for a color in their own list to retreive.

### Requirements to run this application are:
- Linux (Ubuntu 24.04 preferred)
- Apache Web Server
- MySQL Community Server
- PHP

### High-level setup instructions
1. Set up a server with Ubuntu 24.04 and install the requirements above
2. Login to the MySQL database `mysql -u root -p`. Enter `root` once prompted.
  1. Create the database: `CREATE DATABASE COP4331;`. Then select it `USE COP4331;`.
  2. Add the `Users` table:
```sql
CREATE TABLE `COP4331`.`Users` ( 
`ID` INT NOT NULL AUTO_INCREMENT , 
`FirstName` VARCHAR(50) NOT NULL DEFAULT '' , 
`LastName` VARCHAR(50) NOT NULL DEFAULT '' , 
`Login` VARCHAR(50) NOT NULL DEFAULT '' , 
`Password` VARCHAR(50) NOT NULL DEFAULT '' , 
PRIMARY KEY (`ID`) 
) ENGINE = InnoDB;
```
  3. Add the `Colors` table:
```sql
CREATE TABLE `COP4331`.`Colors` ( 
`ID` INT NOT NULL AUTO_INCREMENT , 
`Name` VARCHAR(50) NOT NULL DEFAULT '' , 
`UserID` INT NOT NULL DEFAULT '0' , 
PRIMARY KEY (`ID`)
) ENGINE = InnoDB;
```
  4. Add your user: 
  ```sql
  INSERT INTO Users (FirstName,LastName,Login,Password) VALUES ('[YOUR FIRSTNAME]','[YOUR LASTNAME]','[YOUR USERNAME]','[YOUR PASSWORD]');
  ```
  5. Type `exit` to exit from MySQL
3. Add the files and folders from this repo to your /var/www/html directory

### How to run and access the applicaiton
1. Start the `apache2` and `mysql` services, and make sure port 80 is accessible.
2. Visit your server's public IP address on a browser. You should see a login page.
3. Login with the user you made setting up the database. You'll see a panel with for adding and searching for a color.

> [!IMPORTANT]
> If you use a domain name to access the server, you MUST update the urlbase variable in js/code.js to use your domain name instead of `localhost`. So for `example.com`, it should be `http://example.com/LAMPAPI`.

4. Try adding a color then searching for it. If you see it, you're done.

> [!CAUTION]
> This web app is not secure! Passwords are stored and sent in plaintext, http is unencrypted, and the web server uses the root user in the database! It is strongly discouraged to store any sensitive information on this server!

