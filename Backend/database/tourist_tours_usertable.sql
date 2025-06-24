use tourist_tours

-- DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) DEFAULT NULL,
  `pass` varchar(20) DEFAULT NULL,
  `token` varchar(20) DEFAULT NULL,
  `isadmin` tinyint DEFAULT NULL,
  PRIMARY KEY (`id`)
) 

INSERT INTO `usertable` VALUES (1,'thienthu','1234567','abcdefgh',1),(2,'thienha','123','ea3m0GIYLF',0),(3,'thiendong','123','369Ah2uAs1',0),(4,'thienxuan','333','VhNSsL0t1L',0);

