CREATE DATABASE IF NOT EXISTS;
USE profile_database;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS profile_database;

-- Create the logbook table
CREATE TABLE profile_database ( 

    id int NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (10),
    lastName VARCHAR (10), 
    phone INTEGER (11),
    mobile INTEGER (11),
    email VARCHAR (35),
    gateKey VARCHAR (15),
    bio VARCHAR (250),

    PRIMARY KEY (id),  
    