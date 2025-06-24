use tourist_tours

-- Table structure for table `tours`
-- DROP TABLE IF EXISTS `tours`;

CREATE TABLE `tours` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `images` longtext,
  `price` int DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `information` longtext,
  `schedule` longtext,
  `timeStart` varchar(45) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `startPlace` varchar(45) DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `deleted` tinyint(1) DEFAULT NULL,
  `deleteAt` timestamp NULL DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
UNLOCK TABLES;

-- LOCK TABLES `tours` WRITE;
INSERT INTO `tours` VALUES (1,'Tour Vịnh Hạ Long','TOUR000001','https://th.bing.com/th/id/OIP.kazpU2K4sxgStY5loORdqwHaEK?w=282&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',2000000,10,'Duyệt thác, thăm các đảo lân cận, thưởng thức đặc sản','3N3Đ','09:00',50,'active','Hạ Long','tour-ha-long',0,NULL,'2025-04-16 18:26:01','2025-06-08 08:31:25'),(2,'Tour Đà Nẵng','TOUR000002','https://th.bing.com/th/id/OIP.7N-UK0kpOS0GHY84qEK5QwHaEK?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',2000000,15,'Thăm cầu Rồng, vui chơi trên bãi biển Mỹ Khê','5N4Đ','08:30',40,'active','Đà Nẵng','chuyen-di-da-nang',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01'),(3,'Tour Nha Trang','TOUR000003','https://bizweb.dktcdn.net/100/505/645/products/sp2-04d95c8f-9688-4cbc-a200-dbfa6a9c5e12.jpg?v=1703428504240',1800000,12,'Tham quan Vinpearl, tắm biển Nha Trang','2N1Đ','09:30',60,'active','Nha Trang','du-lich-nha-trang',0,NULL,'2025-04-16 18:26:01','2025-06-08 08:30:20'),(4,'Tour Sài Gòn','TOUR000004','https://th.bing.com/th/id/OIP.bHmSssW2sZ--HdbyjZSMQAHaEg?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',2200000,18,'Khám phá quận 1, thưởng thức ẩm thực','3N2Đ','10:00',30,'active','Sài Gòn','hanh-trinh-sai-gon',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01'),(5,'Tour Phú Quốc','TOUR000005','https://th.bing.com/th/id/OIP.GWPEyt14qB9O5f4YjrzMiAHaEK?w=286&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',2800000,20,'Dạo chợ đêm, tham quan hòn Móng Tay','4N3Đ','10:00',45,'active','Phú Quốc','hanh-trinh-phu-quoc',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01'),(6,'Tour Đảo Ngọc Cô Tô','TOUR000006','https://th.bing.com/th/id/OIP.QHHPOsb5MA9vmU-pnP2JywHaFS?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',2500000,15,'Ghé thăm làng Chài, tắm biển Cô Tô','2N1Đ','09:00',55,'active','Cô Tô','dao-ngoc-co-to',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01'),(7,'Tour Khám Phá Huế','TOUR000007','https://th.bing.com/th/id/OIP.FMO_DCWSmQBwb294LVT9CQHaFa?w=248&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7',1900000,12,'Tham quan đại cung điện, ngắm cầu Trường Tiền','3N2Đ','09:30',50,'active','Huế','kham-pha-hue',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01'),(8,'Tour Sapa','TOUR000008','https://cdn.getyourguide.com/img/tour/f8beb543552c97494fac503de3c935b66582828a8e4fba71f6ba4bb2772ba4e8.jpg/132.webp',3000000,25,'Leo đỉnh Phansipan, đi thăm thị trấn Sapa','3N2Đ','09:00',35,'active','Sapa','tham-hiem-sapa',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01'),(9,'Tour Vịnh Lan Hạ','TOUR000009','https://th.bing.com/th/id/OIP.2jj9995Of7b-Lxph5o07IgHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',2600000,18,'Thăm đảo Quan Lạn, tắm biển Vân Đồn','5N4Đ','09:00',48,'active','Cát Bà','vinh-lan-ha',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01'),(10,'Tour Miền Tây','TOUR000010','https://th.bing.com/th/id/OIP.R3W-mRM5HBu_MEdK9XvlWwHaDt?w=329&h=175&c=7&r=0&o=5&dpr=1.3&pid=1.7',1700000,10,'Tham quan cánh đồng lúa, đi cồn xem hội','4N3Đ','07:00',42,'active','Cà Mau','mien-tay-mat-nuoc',0,NULL,'2025-04-16 18:26:01','2025-04-16 18:26:01');
-- UNLOCK TABLES;
