CREATE TABLE COM_TO_ADMIN (
	MSG_ID INT AUTO_INCREMENT COMMENT 'C2A 訊息編號',
	SENDER_ID INT COMMENT '發信商家編號',
    RECEIVER_ID INT COMMENT '收件平台編號',
    SENDING_TIME DATETIME NOT NULL DEFAULT (NOW()) COMMENT '訊息發送時間',
    MSG_TITLE VARCHAR(50) NOT NULL COMMENT '訊息標題',
    MSG_CONTENT VARCHAR(1000) NOT NULL COMMENT '訊息內容',
    PRIMARY KEY(MSG_ID)
#   CONSTRAINT FK_COM_TO_ADMIN_SENDER_ID FOREIGN KEY (SENDER_ID) REFERENCES COMPANY(COM_ID)
#	CONSTRAINT FK_COM_TO_ADMIN_RECV_ID FOREIGN KEY (RECEIVER_ID) REFERENCES ADMIN(ADMIN_ID)
) COMMENT 'C2A 訊息表';

INSERT INTO COM_TO_ADMIN(MSG_ID,SENDER_ID,RECEIVER_ID,SENDING_TIME,MSG_TITLE,MSG_CONTENT)
VALUES(1,10,1,(NOW()),"帳號註冊的審核","你好，關於本公司的帳號審核已經過了2天沒有受理，請幫忙看下是否漏掉了");

SELECT * FROM COM_TO_ADMIN;

#DELETE FROM COM_TO_ADMIN;

#DROP TABLE COM_TO_ADMIN;