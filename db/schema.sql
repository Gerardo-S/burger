create database burgers_db;
use burgers_db;
create table burgers (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) not null,
  devoured BOOLEAN DEFAULT FALSE NOT NULL,
  PRIMARY KEY(id)
);