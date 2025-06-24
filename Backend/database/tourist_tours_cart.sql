-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
USE tourist_tours;

-- Table structure for table `cart`
-- DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `cartID` int NOT NULL AUTO_INCREMENT,
  `images` varchar(255) DEFAULT NULL,
  `price` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `userID` int DEFAULT NULL,
  `tourID` int DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `time` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`cartID`),
  KEY `tourID` (`tourID`),
  KEY `userID` (`userID`),
  CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`tourID`) REFERENCES `tours` (`id`),
  CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`userID`) REFERENCES `usertable` (`id`)
)

INSERT INTO `cart` VALUES (39,'https://bizweb.dktcdn.net/100/505/645/products/sp2-04d95c8f-9688-4cbc-a200-dbfa6a9c5e12.jpg?v=1703428504240',1584000,'Tour Nha Trang','TOUR000003',1,4,3,'17-06-2025','09:30');


