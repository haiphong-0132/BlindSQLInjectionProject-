﻿USE ATBM

CREATE TABLE Users (
	id INT IDENTITY(1,1) PRIMARY KEY,
	username VARCHAR(50) COLLATE Latin1_General_CS_AS UNIQUE,
	password VARCHAR(50) COLLATE Latin1_General_CS_AS,
	email VARCHAR(100) COLLATE Latin1_General_CS_AS,
	isAdmin INTEGER
);

INSERT INTO Users (username, password, email, isAdmin) VALUES
('user1', '123456', 'toi1@gmail.com', 0),
('user2', 'abcd', 'toiyeuptit@gmail.com', 0),
('user3', 'nguoi', 'toighetptit@gmail.com', 0),
('admin', 'Ad123', 'administrator@gmail.com', 1);



CREATE TABLE Products (
	id INT IDENTITY(1,1) PRIMARY KEY,
	name NVARCHAR(100) COLLATE Latin1_General_CS_AS,
	category NVARCHAR(100) COLLATE Latin1_General_CS_AS,
	price DECIMAL(15, 3),
	stock INTEGER
);

INSERT INTO Products (name, category, price, stock) VALUES
(N'Dell XPS', 'Electronics', 56990000, 15),
(N'Op lung Galaxy A54 Nhua cung vien deo Pure II JM', 'Accessory', 100000, 25),
(N'Tai nghe co day Samsung A50 chinh hang DYDX', 'Electronics', 50000, 40),
(N'Khan tay lau bep', 'Kitchen', 19000, 50),
(N'May anh ky thuat so CCD Mini CMin YP 44MP', 'Electronics', 312000, 10),
(N'Giay Adidas Handball Spezial Gazella', 'Clothing', 1700000, 30),
(N'Tin hoc lai', 'Other', 1080000, 20),
(N'Nuoc giat 2 trong 1 Canary', 'Household Supplies', 25700, 35),
(N'Noi chien khong dau SUNHOUSE', 'Kitchen', 1250000, 15),
(N'Coc pha ca phe', 'Kitchen', 25000, 100);

