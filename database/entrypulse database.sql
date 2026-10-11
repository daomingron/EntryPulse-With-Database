-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: entrypulse_db
-- ------------------------------------------------------
-- Server version	8.0.46

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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `event_id` varchar(50) NOT NULL,
  `artist_name` varchar(100) NOT NULL,
  `tour_title` varchar(150) NOT NULL,
  `category` varchar(50) NOT NULL,
  `venue_name` varchar(150) NOT NULL,
  `event_date` timestamp NOT NULL,
  `status` varchar(20) DEFAULT 'UPCOMING',
  PRIMARY KEY (`event_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES ('evt_001','Taylor Swift','The Eras Tour 2026','cat-intl','Philippine Arena','2026-11-20 11:00:00','UPCOMING'),('evt_002','SB19','PAGTATAG! World Tour','cat-opm','Smart Araneta Coliseum','2026-10-12 12:00:00','UPCOMING'),('evt_003','Coldplay','Music of the Spheres','cat-intl','MOA Arena','2026-12-05 10:30:00','UPCOMING');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gate_passes`
--

DROP TABLE IF EXISTS `gate_passes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gate_passes` (
  `pass_id` varchar(50) NOT NULL,
  `transaction_id` varchar(50) DEFAULT NULL,
  `seat_id` varchar(50) DEFAULT NULL,
  `qr_token_hash` varchar(255) NOT NULL,
  `access_status` varchar(20) DEFAULT 'READY',
  `scanned_at` timestamp NULL DEFAULT NULL,
  `turnstile_gate` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`pass_id`),
  KEY `transaction_id` (`transaction_id`),
  KEY `seat_id` (`seat_id`),
  CONSTRAINT `gate_passes_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transactions` (`transaction_id`) ON DELETE CASCADE,
  CONSTRAINT `gate_passes_ibfk_2` FOREIGN KEY (`seat_id`) REFERENCES `seats` (`seat_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gate_passes`
--

LOCK TABLES `gate_passes` WRITE;
/*!40000 ALTER TABLE `gate_passes` DISABLE KEYS */;
INSERT INTO `gate_passes` VALUES ('gp_9001','tx_8800','st_103','QR_TS_2026_8800_SEC_A1_03','GRANTED','2026-09-20 10:45:12','GATE_04_NORTH'),('gp_9002','tx_8801','st_101','QR_TS_2026_8801_SEC_A1_01','READY',NULL,NULL);
/*!40000 ALTER TABLE `gate_passes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seat_tiers`
--

DROP TABLE IF EXISTS `seat_tiers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seat_tiers` (
  `tier_id` varchar(50) NOT NULL,
  `event_id` varchar(50) DEFAULT NULL,
  `tier_name` varchar(50) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `perks_description` text,
  PRIMARY KEY (`tier_id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `seat_tiers_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seat_tiers`
--

LOCK TABLES `seat_tiers` WRITE;
/*!40000 ALTER TABLE `seat_tiers` DISABLE KEYS */;
INSERT INTO `seat_tiers` VALUES ('tr_001','evt_001','VIP Soundcheck',18500.00,'Front Row access + Soundcheck Pass'),('tr_002','evt_001','Lower Box',10500.00,'Elevated prime view seat'),('tr_003','evt_001','Upper Box',5200.00,'Standard seated ticket'),('tr_004','evt_002','VIP Standing',12000.00,'Floor standing access'),('tr_005','evt_002','Patron',7500.00,'Reserved seating near stage');
/*!40000 ALTER TABLE `seat_tiers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seats`
--

DROP TABLE IF EXISTS `seats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seats` (
  `seat_id` varchar(50) NOT NULL,
  `event_id` varchar(50) DEFAULT NULL,
  `tier_id` varchar(50) DEFAULT NULL,
  `section_code` varchar(20) NOT NULL,
  `seat_label` varchar(20) NOT NULL,
  `status` varchar(20) DEFAULT 'AVAILABLE',
  `locked_by_user_id` varchar(50) DEFAULT NULL,
  `lock_expires_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`seat_id`),
  KEY `event_id` (`event_id`),
  KEY `tier_id` (`tier_id`),
  KEY `locked_by_user_id` (`locked_by_user_id`),
  CONSTRAINT `seats_ibfk_1` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE CASCADE,
  CONSTRAINT `seats_ibfk_2` FOREIGN KEY (`tier_id`) REFERENCES `seat_tiers` (`tier_id`) ON DELETE CASCADE,
  CONSTRAINT `seats_ibfk_3` FOREIGN KEY (`locked_by_user_id`) REFERENCES `users` (`user_id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seats`
--

LOCK TABLES `seats` WRITE;
/*!40000 ALTER TABLE `seats` DISABLE KEYS */;
INSERT INTO `seats` VALUES ('st_101','evt_001','tr_001','SEC_A1','A-01','HELD','usr_102','2026-09-20 14:01:44'),('st_102','evt_001','tr_001','SEC_A1','A-02','AVAILABLE',NULL,NULL),('st_103','evt_001','tr_001','SEC_A1','A-03','SOLD',NULL,NULL),('st_104','evt_001','tr_002','SEC_B1','B-01','AVAILABLE',NULL,NULL),('st_105','evt_001','tr_002','SEC_B1','B-02','HELD','usr_102','2026-09-20 14:01:44');
/*!40000 ALTER TABLE `seats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `transaction_id` varchar(50) NOT NULL,
  `user_id` varchar(50) DEFAULT NULL,
  `event_id` varchar(50) DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `payment_method` varchar(30) NOT NULL,
  `transaction_status` varchar(20) DEFAULT 'PENDING_PAYMENT',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`transaction_id`),
  KEY `user_id` (`user_id`),
  KEY `event_id` (`event_id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES ('tx_8800','usr_103','evt_002',12000.00,'MASTERCARD','COMPLETED','2026-09-18 06:20:00'),('tx_8801','usr_102','evt_001',29000.00,'GCASH','PENDING_PAYMENT','2026-09-20 13:51:44');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `role` varchar(20) DEFAULT 'CUSTOMER',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('usr_101','admin','admin@entrypulse.com','$2a$12$eXaMpLeHaShAdmin','ADMIN','2026-01-01 00:00:00'),('usr_102','dwight','dwight@entrypulse.com','$2a$12$eXaMpLeHaShDwight','CUSTOMER','2026-02-15 02:30:00'),('usr_103','ruellyn','ruellyn@entrypulse.com','$2a$12$eXaMpLeHaShRuellyn','CUSTOMER','2026-02-16 03:15:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-10-11 21:20:58
