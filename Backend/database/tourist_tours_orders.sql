use tourist_tours

--
-- Table structure for table `orders`
-- DROP TABLE IF EXISTS `orders`;

CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(10) NOT NULL,
  `fullName` varchar(50) NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phone` varchar(10) NOT NULL,
  `note` varchar(500) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `totalPrice` int DEFAULT NULL,
  `date` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `userID` int DEFAULT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

INSERT INTO `orders` VALUES (28,'ORDER00001','Lê Đình Tú','letu260203@gmail.com','0983805141','Tôi sẽ liên hệ khi chuyến đi bắt đầu','active',1,1800000,'25-06-2025 09:00','Tour Vịnh Hạ Long',2,0,NULL,'2025-06-06 07:30:02','2025-06-07 11:02:43'),(30,'ORDER00002','Lê Đình Tú','letu260203@gmail.com','0983805141','','active',4,6336000,' 09:30','Tour Nha Trang',2,0,NULL,'2025-06-10 15:59:50','2025-06-10 16:00:39'),(31,'ORDER00003','12345678','tu260203@gmail.com','0983805141','','active',6,8870400,' 09:30','Tour Nha Trang',4,0,NULL,'2025-06-10 16:12:32','2025-06-10 16:13:00'),(32,'ORDER00004','Lê Đình Tú','letu260203@gmail.com','0983805141','','initial',3,6720000,' 10:00','Tour Phú Quốc',4,0,NULL,'2025-06-10 16:15:01','2025-06-10 16:15:01');

