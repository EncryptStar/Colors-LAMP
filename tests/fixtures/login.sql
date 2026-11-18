CREATE DATABASE COP4331;
USE COP4331;

CREATE TABLE Users (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Login VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL
);

INSERT INTO Users (ID, FirstName, LastName, Login, Password)
VALUES (1, 'Jest', 'User', 'jest-use', 'jest-password');
