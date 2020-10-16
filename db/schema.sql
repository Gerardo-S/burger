create database burgers_db;
use burgers_db;
create table burgers (
  id INT AUTO_INCREMENT,
  burger_name varchar(255) not null,
  devoured BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id)
);