DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,4) NOT  NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (001, "Candle", "Home Goods", 50, 300);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (002, "Espresso Mug", "Home Goods", 4.50, 1000);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (003, "Hammer", "Tools", 10, 900);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (004, "Paints", "Arts & Crafts", 20, 500);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (005, "Moisturizer", "Beauty", 65, 200);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (006, "Drill", "Tools", 150, 350);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (007, "Pillow", "Home Goods", 25, 700);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (008, "Catnip", "Pets", 7, 4000);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (009, "Batteries", "Tools", 50, 300);

INSERT INTO products (item_id, product_name,  department_name, price, stock_quantity)
VALUES (010, "Phone Charger", "Electronics", 15, 500);
