CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
item_id INTEGER AUTO_INCREMENT NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL (5,2) NOT NULL,
stock_quantity INTEGER(4) NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Jack Daniels", "alcohol", 15.00, 80);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Grey Goose", "alcohol",24.99, 65);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Templeton Rye", "alcohol", 32.99, 45);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Smirnoff", "alcohol", 12.99, 90);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Glenlivet 18", "alcohol", 40.00, 45);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Galaxy S6", "electronics", 250.00, 75);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Galaxy S7", "electronics", 350.00, 45);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Nexus 7", "electronics", 300.00, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Lenovo T410", "electronics", 210.00, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Lenovo T420", "electronics",299.99, 60);
INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES ("Lenovo T500", "electronics", 430.00, 70);


SELECT * FROM products;


