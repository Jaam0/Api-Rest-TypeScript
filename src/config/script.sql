CREATE DATABASE API_REST_TS;

USE API_REST_TS;

CREATE TABLE Items (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    color VARCHAR(255) NULL,
    gas VARCHAR(20) NULL,
    year INTEGER(4) NULL,
    description VARCHAR(255) NULL,
    price FLOAT(18, 2) NULL,
    createdAt timestamp,
    updatedAt timestamp
);

CREATE TABLE Users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    description VARCHAR(255) NULL,
    email VARCHAR(255) NULL,
    password VARCHAR(255) NULL,
    createdAt timestamp,
    updatedAt timestamp
);

CREATE TABLE Storages (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    filename VARCHAR(255) NULL,
    path VARCHAR(255) NULL,
    iduser VARCHAR(255) NULL,
    createdAt timestamp,
    updatedAt timestamp
);