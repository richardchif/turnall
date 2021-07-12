-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2020 at 01:16 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `credit`
--

-- --------------------------------------------------------

--
-- Table structure for table `data`
--

CREATE TABLE `data` (
  `ID` int(11) NOT NULL,
  `InvoiceNumber` varchar(100) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Invoicedate` date NOT NULL,
  `Amount` double NOT NULL,
  `DueDate` date NOT NULL,
  `PhoneNumber` varchar(12) NOT NULL,
  `Paid` tinyint(1) NOT NULL,
  `Assigned` varchar(100) NOT NULL,
  `Driver` varchar(50) NOT NULL,
  `DriverPhoneNumber` varchar(15) NOT NULL,
  `Claim` varchar(500) NOT NULL,
  `DAmount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `data`
--

INSERT INTO `data` (`ID`, `InvoiceNumber`, `Name`, `Invoicedate`, `Amount`, `DueDate`, `PhoneNumber`, `Paid`, `Assigned`, `Driver`, `DriverPhoneNumber`, `Claim`, `DAmount`) VALUES
(14, '8777778888', 'Richard Chifamba', '2020-10-25', 44, '2020-12-25', '078', 1, 'chifambarichard2@gmail.com', 'R Chif', '0988', 'Wrong order', 40),
(23, '5656', 'Jassy', '2020-10-25', 7878, '2021-01-29', '098777', 1, 'chifambarichard2@gmail.com', 'Madziwanzira', '87877', 'Breakages', 7870),
(34, '567873', 'Lovemore chimuti', '2020-11-22', 44, '2020-11-25', '098777', 0, 'Richard', 'QQQQQQQQQQQ', '088888', 'Breakages', 44),
(35, '6787', 'Jasper Mangwiro', '2020-11-22', 44, '2020-11-25', '098777', 0, 'Richard', 'yyyy', '088888', 'Breakages', 23),
(70, '876', 'Sandra', '2020-12-06', 87, '2021-01-08', '9876', 0, 'chifambarichard2@gmail.com', 'Madziwanzira', '87', '', 0),
(71, '8888', 'Sandra', '2020-12-21', 87, '2021-01-09', '098777', 0, 'chifambarichard2@gmail.com', 'Madziwanzira', '88', '', 0),
(72, '87654', 'Natalie', '2020-12-12', 100, '2021-01-09', '0782428177', 0, 'none', 'Richard', '0782418872', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Surname` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Type` varchar(50) NOT NULL,
  `Password` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `Name`, `Surname`, `Email`, `Type`, `Password`) VALUES
(1, 'Richard', 'Mangwiro', 'chifambarichard2@gmail.com', 'General', 'pass'),
(3, 'Richard', 'Mangwiro', 'chifambarichard22@gmail.com', 'Admin', 'pass');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `data`
--
ALTER TABLE `data`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `data`
--
ALTER TABLE `data`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
