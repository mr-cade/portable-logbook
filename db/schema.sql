CREATE DATABASE IF NOT EXISTS portableLog_db;
USE portableLog_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS logbook;

-- Create the logbook table
CREATE TABLE logbook (
    id int NOT NULL AUTO_INCREMENT,
    contactTime TIME NOT NULL,
    callsign VARCHAR (7),
    signalIn INTEGER (2),
    signalOut INTEGER (2),
    frequency DECIMAL (3),
    contactName VARCHAR (40),
    contactLocation VARCHAR (40),
    contactNotes VARCHAR (250),
    PRIMARY KEY (id)
);
