CREATE DATABASE IF NOT EXISTS portableLog_db;
USE portableLog_db;

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
    

-- -- If the table already exists, remove it before trying to create the table again
-- DROP TABLE IF EXISTS logbook;

-- -- Create the logbook table
-- CREATE TABLE logbook (
--     id int NOT NULL AUTO_INCREMENT,
--     contactTime TIME NOT NULL,
--     callsign VARCHAR (7),
--     signalIn INTEGER (2),
--     signalOut INTEGER (2),
--     frequency DECIMAL (3),
--     mode VARCHAR (10),
--     contactName VARCHAR (40),
--     contactLocation VARCHAR (40),
--     contactNotes VARCHAR (250),
--     PRIMARY KEY (id)
-- );
