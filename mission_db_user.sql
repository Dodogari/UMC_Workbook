-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: mission_db
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL,
  `name` varchar(20) NOT NULL,
  `access_token` varchar(225) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `platform` int NOT NULL,
  `birth` datetime(6) NOT NULL,
  `sex` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `email` varchar(50) NOT NULL,
  `addr` varchar(100) NOT NULL,
  `addr_detail` varchar(100) NOT NULL,
  `point` int NOT NULL,
  `phone` varchar(30) DEFAULT NULL,
  `created_time` datetime NOT NULL,
  `updated_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (15654984894984,'김철수','dagfaghtrhyt',0,'2001-01-12 00:00:00.000000','m','dfdf@kakao.com','서울특별시','121동 501호',2000,'010-1569-5459','2023-07-12 15:45:11','2023-07-12 15:45:11'),(15654984894985,'김영희','hethterhtrh',0,'2004-05-21 00:00:00.000000','f','tryetrhs@kakao.com','서울특별시','239-45',500,'010-4859-1568','2023-07-12 15:47:12','2023-07-12 15:47:12'),(15654984894986,'서지우','trduikjygtfhdzg',1,'2005-05-27 00:00:00.000000','f','fafeff@naver.com','서울특별시','145-25',0,'010-1598-5489','2023-07-12 16:15:43','2023-07-12 16:15:43'),(15654984894987,'구형준','resghrejythgfd',3,'2009-02-28 00:00:00.000000','f','fafeff@gmail.com','서울특별시','313',1000,'010-7564-1597','2023-07-12 17:46:15','2023-07-12 17:46:15'),(15654984894988,'이주영','trytrwyterwrhj',0,'2002-07-31 00:00:00.000000','m','jieroa@kakao.com','서울특별시','548-15',0,'010-1984-1897','2023-07-12 21:45:32','2023-07-12 21:45:32'),(15654984894989,'이지현','regtrewhrwhyrwy',3,'1995-09-17 00:00:00.000000','f','fafeff@gmail.com','서울특별시','207동 104호',500,'010-4895-1898','2023-07-15 17:41:02','2023-07-15 17:41:02'),(15654984894990,'주영재','fgrsgfsghtr',1,'1997-12-14 00:00:00.000000','m','dfdff@naver.com','서울특별시','908동 110호',1000,'010-4594-1984','2023-07-18 01:45:11','2023-07-18 01:45:11'),(15654984894991,'황은진','tyuiryiujytsreewerte',0,'1998-08-15 00:00:00.000000','f','feqwfeq@kakao.com','서울특별시','107동 107호',1500,'010-8497-1595','2023-07-19 10:45:12','2023-07-19 10:45:12');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-13 19:53:23
