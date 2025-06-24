CREATE TABLE tourist_tours.tours_categories (
	tour_id INT,
    category_id INT,
    PRIMARY KEY (tour_id, category_id),
    FOREIGN KEY (tour_id) REFERENCES tours(id),
    FOREIGN KEY (category_id) REFERENCES categories(id)
);