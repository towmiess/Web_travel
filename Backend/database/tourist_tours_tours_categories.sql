use tourist_tours

CREATE TABLE `tours_categories` (
  `tour_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`tour_id`,`category_id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `tours_categories_ibfk_1` FOREIGN KEY (`tour_id`) REFERENCES `tours` (`id`),
  CONSTRAINT `tours_categories_ibfk_2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) 
INSERT INTO `tours_categories` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(2,3),(7,3),(8,3),(9,3),(10,4);

