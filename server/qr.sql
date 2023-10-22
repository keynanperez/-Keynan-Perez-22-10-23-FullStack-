CREATE TABLE `weather`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `city`          VARCHAR(255) NOT NULL ,
  `temp` INT NOT NULL ,
  `today_date`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`city`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;


CREATE TABLE `favorites`
(
  `id`            INT(11) NOT NULL auto_increment ,
  `city`          VARCHAR(255) NOT NULL ,
  `icon_phrase`          VARCHAR(255) NOT NULL ,
  `temp` INT NOT NULL ,
  `today_date`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (`id`),
  UNIQUE `idx_name_unique` (`city`(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci;


INSERT INTO weather(id,city,temp) 
VALUES 
(60592,'Tengzhou',14),
(188046,'Tegucigalpa',15)

INSERT INTO favorites(id,city,icon_phrase,temp) 
VALUES 
(60592,'Tengzhou','Sunny',14),
(188046,'Tegucigalpa','Sunny',14)


postman check
{
            "id": 6044572,
            "city": "'Tehout' ",
            "temp": 15
        }