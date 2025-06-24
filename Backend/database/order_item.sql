CREATE TABLE tourist_tours.order_item (
	id INT NOT NULL AUTO_INCREMENT,
    orderId INT NOT NULL,
    tourId INT NOT NULL,
    quantity INT NOT NULL,
    price INT NOT NULL,
    discount INT,
    timeStart TIMESTAMP NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (tourId) REFERENCES tours(id),
    FOREIGN KEY (orderId) REFERENCES orders(id)
);