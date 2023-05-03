CREATE TABLE ADMIN (
	ADMIN_ID INT AUTO_INCREMENT COMMENT '管理者編號',
	ADMIN_ACCOUNT VARCHAR(50) NOT NULL COMMENT '管理者帳號',
    ADMIN_PASSWORD VARCHAR(50) NOT NULL COMMENT '管理者密碼',
    ADMIN_NAME VARCHAR(50) NOT NULL COMMENT '管理者名稱',
    PRIMARY KEY(ADMIN_ID)
) COMMENT '管理者資料表';

INSERT INTO ADMIN(ADMIN_ID,ADMIN_ACCOUNT,ADMIN_PASSWORD,ADMIN_NAME)
VALUES(1,"ROOT","12345678","ROOT");

SELECT * FROM ADMIN;

#DELETE FROM ADMIN;

DROP TABLE ADMIN;
