CREATE TABLE `USER` (
  `USER_ID` 			int  		 COMMENT '會員編號' NOT NULL AUTO_INCREMENT,
  `USER_ACCOUNT` 		varchar(50)  COMMENT '會員帳號' NOT NULL,
  `USER_PASSWORD` 		varchar(50)  COMMENT '會員密碼' NOT NULL,
  `USER_NAME` 			varchar(50)  COMMENT '會員姓名' NOT NULL,
  `USER_PHONE` 			varchar(50)  COMMENT '會員電話' NOT NULL,
  `USER_NICKNAME` 		varchar(50)  COMMENT '會員暱稱' DEFAULT NULL,
  `USER_AVATAR` 		longblob	 COMMENT '會員頭像',
  `USER_GENDER` 		bit(1) 		 COMMENT '會員性別' NOT NULL,
  `USER_BIRTHDATE` 		date 		 COMMENT '會員生日' NOT NULL,
  `USER_SIGN_DATETIME` 	datetime 	 COMMENT '註冊日期' NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `USER_EMAIL` 			varchar(50)  COMMENT '會員信箱' NOT NULL,
  `USER_STATUS` 		bit(1)  	 COMMENT '會員狀態' NOT NULL,
  `USER_NEWS_STATUS` 	tinyint(1)   COMMENT '會員訊息狀態',
  PRIMARY KEY (`USER_ID`)
) COMMENT '使用者資料表';

INSERT INTO USER(USER_ACCOUNT, USER_PASSWORD, USER_NAME, USER_PHONE, USER_NICKNAME, USER_GENDER, USER_BIRTHDATE, USER_EMAIL, USER_STATUS, USER_NEWS_STATUS)
VALUE('ABC123', '123456', 'Peter', '0911111111', 'Peter King', 1, '1888-01-01', 'peter001@gmail.com', 0, 0);

INSERT INTO USER(USER_ACCOUNT, USER_PASSWORD, USER_NAME, USER_PHONE, USER_NICKNAME, USER_GENDER, USER_BIRTHDATE, USER_EMAIL, USER_STATUS, USER_NEWS_STATUS)
VALUE('ASD123', '123456', 'Windy', '0922222222', 'Peter wife', 0, '1888-01-01', 'windy001@gmail.com', 1, 0);

INSERT INTO USER(USER_ACCOUNT, USER_PASSWORD, USER_NAME, USER_PHONE, USER_NICKNAME, USER_GENDER, USER_BIRTHDATE, USER_EMAIL, USER_STATUS, USER_NEWS_STATUS)
VALUE('QWE123', '123456', 'Leo', '0933333333', 'Peter dog2', 1, '1888-01-01', 'leo001@gmail.com', 0, 0);

INSERT INTO USER(USER_ACCOUNT, USER_PASSWORD, USER_NAME, USER_PHONE, USER_NICKNAME, USER_GENDER, USER_BIRTHDATE, USER_EMAIL, USER_STATUS, USER_NEWS_STATUS)
VALUE('QWE345', '123456', 'DSS', '0944444444', 'Peter dog3', 0, '1888-01-01', 'leo001@gmail.com', 1, 0);

INSERT INTO USER(USER_ACCOUNT, USER_PASSWORD, USER_NAME, USER_PHONE, USER_NICKNAME, USER_GENDER, USER_BIRTHDATE, USER_EMAIL, USER_STATUS, USER_NEWS_STATUS)
VALUE('QWE678', '123456', 'KSNA', '0955555555', 'Peter dog4', 0, '1888-01-01', 'leo001@gmail.com', 0, 0);

INSERT INTO USER(USER_ACCOUNT, USER_PASSWORD, USER_NAME, USER_PHONE, USER_NICKNAME, USER_GENDER, USER_BIRTHDATE, USER_EMAIL, USER_STATUS, USER_NEWS_STATUS)
VALUE('QWE901', '123456', 'ODKS', '0966666666', 'Peter dog5', 1, '1888-01-01', 'leo001@gmail.com', 1, 0);
