CREATE TABLE tourist_tours.order (
	id INT NOT NULL AUTO_INCREMENT,
    code VARCHAR(10) NOT NULL,
    fullName VARCHAR(50) NOT NULL,
    phone VARCHAR(10) NOT NULL,
    note VARCHAR(500),
    status VARCHAR(20),
    deleted BOOLEAN,
    deleteAt TIMESTAMP,
    createAt TIMESTAMP,
    updateAt TIMESTAMP,
    PRIMARY KEY (id)
);