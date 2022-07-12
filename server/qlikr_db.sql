-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 11, 2022 at 08:17 AM
-- Server version: 10.4.16-MariaDB
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qlikr_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_backup`
--

CREATE TABLE `tbl_backup` (
  `ID` int(11) NOT NULL,
  `title` text NOT NULL,
  `location` text NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_banner`
--

CREATE TABLE `tbl_banner` (
  `ID` int(11) NOT NULL,
  `code` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `isActive` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `bannerList` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `layoutUrl` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_banner`
--

INSERT INTO `tbl_banner` (`ID`, `code`, `title`, `isActive`, `bannerList`, `layoutUrl`, `description`) VALUES
(1, 'layout1', 'Layout 1', 'Yes', '[]', '1020by230.png', 'Width 1020 x Height 230'),
(2, 'layout2', 'Layout 2', 'Yes', '[]', '300by305.png', 'Width 300 x Height 305'),
(3, 'layout3', 'Layout 3', 'Yes', '[]', '770by90.png', 'Width 770 x Height 90. This appears on search result'),
(4, 'layout4', 'Layout 4', 'Yes', '[]', '1080by740.png', 'Width 740 by 1080 This appear on the home page'),
(5, 'layout5', 'Layout 5', 'Yes', '[]', '', 'Width 770 x Height 90. This appears on search result');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category`
--

CREATE TABLE `tbl_category` (
  `ID` int(11) NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `avatar` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_category`
--

INSERT INTO `tbl_category` (`ID`, `code`, `parent`, `name`, `slug`, `avatar`, `description`) VALUES
(1, 'technology', '', 'Technology', 'technology', 'technology.svg', ''),
(2, 'c4qmox5w', '', 'Sports', 'Sports', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE `tbl_comments` (
  `ID` int(11) NOT NULL,
  `comment_post_ID` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_author` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_author_email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_author_IP` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_date` datetime NOT NULL,
  `comment_content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_approved` varchar(11) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_agent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_type` varchar(9) COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_parent` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_newsletter`
--

CREATE TABLE `tbl_newsletter` (
  `ID` int(11) NOT NULL,
  `code` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `newsName` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subject` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `body` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `planDate` date NOT NULL,
  `receiverId` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateCreate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_page_visit`
--

CREATE TABLE `tbl_page_visit` (
  `ID` int(11) NOT NULL,
  `page_id` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `page_visit` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `lastDate` date NOT NULL,
  `ipaddress` int(11) NOT NULL,
  `browser` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `os` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `http_referer` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_posts`
--

CREATE TABLE `tbl_posts` (
  `ID` int(11) NOT NULL,
  `post_date` datetime NOT NULL,
  `post_author` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_title` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_excerpt` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'open',
  `post_image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_modified` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_slug` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_type` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `comment_count` bigint(20) NOT NULL DEFAULT 0,
  `approveComment` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `relatedCategory` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `quote` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `subtitle` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `post_category` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `view_count` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_reset_password`
--

CREATE TABLE `tbl_reset_password` (
  `ID` int(11) NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fullname` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateCreate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_settings`
--

CREATE TABLE `tbl_settings` (
  `ID` int(11) NOT NULL,
  `companyName` text NOT NULL,
  `abbreviation` text NOT NULL,
  `softwareDate` date NOT NULL,
  `city` text NOT NULL,
  `district` text NOT NULL,
  `email` text NOT NULL,
  `mobile` text NOT NULL,
  `altMobile` text NOT NULL,
  `googleMap` text NOT NULL,
  `establishDate` date NOT NULL,
  `country` text NOT NULL,
  `currencySymbol` text NOT NULL,
  `currency` text NOT NULL,
  `theme` text NOT NULL,
  `motto` text NOT NULL,
  `playSound` text NOT NULL,
  `maintenance` text NOT NULL,
  `isValidRequire` text NOT NULL,
  `offline` text NOT NULL,
  `offlineMessage` text NOT NULL,
  `pageName` text NOT NULL,
  `metaKeywords` text NOT NULL,
  `metaDescription` text NOT NULL,
  `metaTitle` text NOT NULL,
  `whatsappPhone` text NOT NULL,
  `facebookId` text NOT NULL,
  `address` text NOT NULL,
  `description` text NOT NULL,
  `logoUrl` text NOT NULL,
  `banner` text NOT NULL,
  `website` text NOT NULL,
  `youtube` text NOT NULL,
  `twitter` text NOT NULL,
  `facebook` text NOT NULL,
  `linkedin` text NOT NULL,
  `app` text NOT NULL,
  `tax` text NOT NULL,
  `pickupAddress` text NOT NULL,
  `allowedIp` text NOT NULL,
  `allowComment` text NOT NULL,
  `province` text NOT NULL,
  `profileUpdate` text NOT NULL,
  `regNo` text NOT NULL,
  `video` text NOT NULL,
  `kmPrice` int(11) NOT NULL,
  `time_stamp` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `latitude` text NOT NULL,
  `longitude` text NOT NULL,
  `maxKmPrice` text NOT NULL,
  `instagram` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_subscriber`
--

CREATE TABLE `tbl_subscriber` (
  `ID` int(11) NOT NULL,
  `email` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `dateCreate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_login` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_pass` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_code` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_url` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL,
  `user_status` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`ID`, `user_login`, `user_pass`, `user_code`, `user_email`, `user_url`, `user_registered`, `user_status`, `display_name`, `description`) VALUES
(1, 'qlikr', '$2y$10$A4lM7DlmAiejzNko4ogi6OSI0RKvvW4eVM7rnRYyG6Cm8N9WdEqIG', 'busniyi', 'busariniyi7@gmail.com', 'niyi.jpeg', '2022-07-10 10:21:39', 'active', 'Peter Mathew', ''),
(16, 'Opeyemiademon', '$2y$10$RM5Dqgd/SL0i/NvcllX8SeCgz1EGw/tKGuGu.cq7gqKB02zRdX5mG', 'u54hvq5u', 'opeyemiademon@gmail.com', 'Opeyemiademon_gbkhqoata.png', '2022-07-11 20:12:19', 'active', 'Mansoor Opeyemi', ''),
(18, 'Blackcoin002', '$2y$10$E8bEXWTCOCCRyodpGNHMSeJ6qwiw/K5vldVK6ZMQ5hXgE8GtOVsCK', 'ugf5kni9', 'futurenexthero@gmail.com', 'blackcoin.jpeg', '2022-07-12 16:04:38', 'active', 'Jane Rooney', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_video_news`
--

CREATE TABLE `tbl_video_news` (
  `ID` int(11) NOT NULL,
  `code` text NOT NULL,
  `videoUrl` text NOT NULL,
  `post_slug` text NOT NULL,
  `status` varchar(10) NOT NULL,
  `photoUrl` text NOT NULL,
  `title` text NOT NULL,
  `author` text NOT NULL,
  `dateCreate` date NOT NULL,
  `category` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_video_news`
--

INSERT INTO `tbl_video_news` (`ID`, `code`, `videoUrl`, `post_slug`, `status`, `photoUrl`, `title`, `author`, `dateCreate`, `category`) VALUES
(1, 'opo', 'https://www.youtube.com/embed/vdw7Ls3kgaI', 'topo', 'Published', '', 'My new vidoes', 'busniyi', '2022-07-01', '9'),
(2, 'ouypo', 'https://www.youtube.com/embed/A-8l-7guF84', 'toppo', 'Published', '', 'My news vidoes', 'busniyi', '2022-07-01', '9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_backup`
--
ALTER TABLE `tbl_backup`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_banner`
--
ALTER TABLE `tbl_banner`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_category`
--
ALTER TABLE `tbl_category`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `code` (`code`(250)),
  ADD KEY `name` (`name`(250));

--
-- Indexes for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `postID` (`comment_post_ID`(768));

--
-- Indexes for table `tbl_newsletter`
--
ALTER TABLE `tbl_newsletter`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_page_visit`
--
ALTER TABLE `tbl_page_visit`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_posts`
--
ALTER TABLE `tbl_posts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `post` (`post_category`(250)),
  ADD KEY `post_slug` (`post_slug`(250)),
  ADD KEY `post_author` (`post_author`(250)),
  ADD KEY `code` (`code`(250));

--
-- Indexes for table `tbl_reset_password`
--
ALTER TABLE `tbl_reset_password`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_settings`
--
ALTER TABLE `tbl_settings`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_subscriber`
--
ALTER TABLE `tbl_subscriber`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_login_key` (`user_login`),
  ADD KEY `user_nicename` (`user_code`),
  ADD KEY `user_email` (`user_email`);

--
-- Indexes for table `tbl_video_news`
--
ALTER TABLE `tbl_video_news`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `code` (`code`(768));

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_backup`
--
ALTER TABLE `tbl_backup`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_banner`
--
ALTER TABLE `tbl_banner`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_category`
--
ALTER TABLE `tbl_category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_comments`
--
ALTER TABLE `tbl_comments`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `tbl_newsletter`
--
ALTER TABLE `tbl_newsletter`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_page_visit`
--
ALTER TABLE `tbl_page_visit`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_posts`
--
ALTER TABLE `tbl_posts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tbl_reset_password`
--
ALTER TABLE `tbl_reset_password`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tbl_settings`
--
ALTER TABLE `tbl_settings`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tbl_subscriber`
--
ALTER TABLE `tbl_subscriber`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `tbl_video_news`
--
ALTER TABLE `tbl_video_news`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
