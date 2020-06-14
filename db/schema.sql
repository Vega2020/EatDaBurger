-- Write SQL queries this file that do the following:

-- This line drops the database if it exists, it's here for testing purposes
DROP DATABASE IF EXISTS burgers_db;

-- Create the `burgers_db`.
CREATE DATABASE burgers_db;

-- Switch to or use the `burgers_db`.
USE burgers_db;

-- Create a 'burgers' table with the following fields:
CREATE TABLE burgers (
-- column 1: id, an auto incrementing int that serves as the primary key
    id INT AUTO_INCREMENT NOT NULL,
-- column 2: burger_name, a string
    burger_name VARCHAR(70),
-- column 3: devoured, a boolean. set to not null and default false so our insert code doesn't have to update this each time.
    devoured BOOLEAN NOT NULL DEFAULT 0,
    -- this sets the primary key to id
    PRIMARY KEY (id)
);
