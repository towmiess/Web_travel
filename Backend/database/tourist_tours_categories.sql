use tourist_tours


--
-- Table structure for table `categories`
--

--- DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` longtext,
  `status` varchar(20) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- LOCK TABLES `categories` WRITE;

INSERT INTO `categories` VALUES (1,'Tour trong nước','https://th.bing.com/th/id/OIP.qF7DdgNTD96wHPhCR34dtwHaD1?w=289&h=179&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour du lịch trong nước','active','tour-trong-nuoc',0,NULL,'2025-04-16 18:51:21','2025-06-08 08:36:42'),(2,'Tour nước ngoài','https://th.bing.com/th/id/OIP.yiKPYJ13E1cVrvHWsvw-FgHaDg?w=322&h=165&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour du lịch quốc tế','active','tour-nuoc-ngoai',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(3,'Tour mùa hè','https://th.bing.com/th/id/OIP.pZopqOI24Z0p70_iFcy5gQHaE8?w=217&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour phù hợp cho mùa hè','active','tour-mua-he',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(4,'Tour mùa đông','https://www.vietnambooking.com/wp-content/uploads/2017/12/sapa-mua-dong-3.jpg','Các tour phù hợp cho mùa đông','active','tour-mua-dong',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(5,'Tour thám hiểm','https://th.bing.com/th/id/OIP.Sz8DRmBSzEgtIqPsshh6kQHaE8?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour khám phá và thám hiểm','active','tour-tham-hiem',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(6,'Tour nghỉ dưỡng','https://th.bing.com/th/id/OIP.dfWT5hCul3-pEisq-oOZfgHaC9?w=290&h=140&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour nghỉ dưỡng tại các khu resort','active','tour-nghi-duong',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(7,'Tour ẩm thực','https://th.bing.com/th/id/OIP.q-qWu6q1kokII3glxUiB9gHaEc?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour trải nghiệm ẩm thực độc đáo','active','tour-am-thuc',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(8,'Tour giáo dục','https://th.bing.com/th/id/OIP.puJ880bfrRaeN_cVxLODTwHaEK?w=299&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour học thuật và giáo dục','active','tour-giao-duc',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(9,'Tour thể thao','https://th.bing.com/th/id/OIP.ieaJlOqwxV8O4R48uGSiQQHaE7?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour liên quan hoạt động thể thao','active','tour-the-thao',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21'),(10,'Tour gia đình','https://th.bing.com/th/id/OIP.kqACnMClnF05rirWsLw7QwHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7','Các tour phù hợp cho cả gia đình','active','tour-gia-dinh',0,NULL,'2025-04-16 18:51:21','2025-04-16 18:51:21');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
-- UNLOCK TABLES;

