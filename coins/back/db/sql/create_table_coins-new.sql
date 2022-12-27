CREATE TABLE coins(
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	type VARCHAR(50) NOT NULL,
    name VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    information TEXT NOT NULL,
    issuing_country VARCHAR(200) NOT NULL,
    composition VARCHAR(50) NOT NULL,
    quality VARCHAR(50) NOT NULL,
    denomition VARCHAR(100) NOT NULL,
    year INT NOT NULL,
    weight VARCHAR(50) NOT NULL,
    price VARCHAR(50) NOT NULL,
    first TEXT NOT NULL,
    second TEXT NOT NULL
);