# TimeToTravel

![](https://img.shields.io/badge/Spring_Boot-3.0.6-181717?style=for-the-badge?style=plastic&logo=springboot&color) ![](https://img.shields.io/badge/MySQL-8.0-181717?style=for-the-badge?style=plastic&logo=mysql&color=blue)

![Cover](/src/main/resources/static/images/cover/cover1.png)

##  專案介紹

&ensp;&ensp;「**Time To Travel**」，是一個讓無論是有訂房需求的使用者，或者具有特色民宿、飯店的業者，都能夠滿足自己需求的訂房網站。  
&ensp;&ensp;此專案為緯育 TibaMe - Java 雲端服務開發技術養成班期末發表專案，小組成員共八人，各自完成分配到的功能之前後端所有部分。  
&ensp;&ensp;我所負責的功能為:
    1. **房型搜尋、景點搜尋**
    2. **房型下訂**
    3. **消費者訂房紀錄查看**
    4. **消費者評論新增與修改**
    5. **前端公版頁面**

## 專案目錄

- [專案介紹](#專案介紹)
- [專案目錄](#專案目錄)
- [專案使用技術](#專案使用技術)
    - [前端](#前端)
    - [後端](#後端)
    - [資料庫](#資料庫)
    - [其他](#其他)
- [專案畫面預覽](#專案畫面預覽)
- [專案API說明](#專案API說明)

## 專案使用技術

此專案採**前後端分離模式**進行開發

### 前端

- HTML
- CSS、SCSS、Bootstrap
- Javascript、jQuery
- NPM

### 後端

- Java、Servlet、JDBC
- Spring、Spring MVC、Spring Boot
- Spring Data JPA、Hibernate
- Maven

### 資料庫

- MySQL
- Redis

### 其他

- Git、GitHub
- IntelliJ IDEA

## 專案畫面預覽

![房型搜尋](/src/main/resources/static/images/cover/%E6%88%BF%E5%9E%8B%E6%90%9C%E5%B0%8B.png)
![景點搜尋](/src/main/resources/static/images/cover/%E6%99%AF%E9%BB%9E%E6%90%9C%E5%B0%8B.png)
![景點搜尋-查看](/src/main/resources/static/images/cover/%E6%99%AF%E9%BB%9E%E6%90%9C%E5%B0%8B-%E6%9F%A5%E7%9C%8B.png)
![房型資訊](/src/main/resources/static/images/cover/%E6%88%BF%E5%9E%8B%E8%B3%87%E8%A8%8A.png)
![房型下訂](/src/main/resources/static/images/cover/%E6%88%BF%E5%9E%8B%E4%B8%8B%E8%A8%82.png)
![消費者訂房紀錄](/src/main/resources/static/images/cover/%E6%B6%88%E8%B2%BB%E8%80%85%E8%A8%82%E6%88%BF%E7%B4%80%E9%8C%84.png)
![消費者訂房紀錄-查看](/src/main/resources/static/images/cover/%E6%B6%88%E8%B2%BB%E8%80%85%E8%A8%82%E6%88%BF%E7%B4%80%E9%8C%84-%E6%9F%A5%E7%9C%8B.png)
![消費者訂房紀錄-評論](/src/main/resources/static/images/cover/%E6%B6%88%E8%B2%BB%E8%80%85%E8%A8%82%E6%88%BF%E7%B4%80%E9%8C%84-%E8%A9%95%E8%AB%96.png)

## 專案API說明

我所實作的功能可以歸納為以下:

|功能|前綴|簡述|
|:-|:-|:-|
|搜尋房型|rooms/search|負責房型的搜尋|
|搜尋景點|scenes/search|負責景點的搜尋|
|房型資訊|rooms/booking|負責房型資訊呈現|
|房型付款|rooms/paid|負責房型下訂資訊呈現|
|房型訂單|rooms/orders|負責訂房訂單查詢及新增修改評論|

## 搜尋房型

|URL|Method|簡述|
|:-|:-|:-|
|/rooms/search/{keyword}/{people}/{startDate}/{endDate}/{currPage}|GET|列出關鍵字所搜尋出並且時間區間內尚有庫存的所有房型資訊|
|/rooms/search/{keyword}/{people}/{startDate}/{endDate}|GET|列出與被點擊的景點同所在縣市的隨機三間房型資訊|

**以下僅列出一筆示意**

```json
{
    "pageSize": 6,
    "rows": [
        {
            "comId": 5,
            "comName": "THA101",
            "comAddress": "台北市宏春大樓",
            "roomId": 28,
            "roomName": "新星經典單人房",
            "roomDesc": "輕觸在悠然自得的湖光水色，一彈一指間的沈迷放肆與您眼前那一片垂手可得",
            "roomPhoto": "base64 image",
            "orderRanks": [ ]
        }, 
    ]
}
```

## 搜尋景點

|URL|Method|簡述|
|:-|:-|:-|
|/scenes/search/{keyword}/{currPage}|GET|列出關鍵字所搜尋出的所有景點|

**以下僅列出一筆示意**

```json
{
    "pageSize": 9,
    "rows": [
        {
            "sceneId": 2,
            "adminId": 1,
            "sceneName": "大稻埕碼頭",
            "sceneDesc": "早期的大稻埕，原是平埔族的居住地，後來因萬華同安人發生激烈的械鬥，許多人便移至大稻埕定居，此後，這裡便成為台北盆地內的物資集散中心，與重要的外貿重要地點，當地的領事館、洋行、商號雲集，茶館、茶行林立，這裡便成了當時全口最大的茶葉、樟腦交易中心，今日的大稻埕，仍可在街道裡看出一些些的遺留下的歷史記錄，而碼頭更經常成為演出活動的舉辦地點，我相信這裡將永遠不會被人們所遺忘。",
            "scenePhoto": "base64 image",
            "sceneAddr": "台北市大同區長安西路39號",
            "sceneLat": "25.050754681647852",
            "sceneLng": "121.51912729848034",
            "scenePlaceId": "ChIJc-TxSWypQjQR-8Eh7elK97Q"
        }, 
    ]
}
```

## 房型資訊

|URL|Method|簡述|
|:-|:-|:-|
|/rooms/booking/{comId}/{roomId}/{startDate}/{endDate}|GET|列出剛剛所點擊的房間資訊以及該商家的所有房間及庫存狀態|

**以下僅列出一筆示意**

```json
{
    "comName": "Servlet企業",
    "comAddress": "新北市板橋",
    "roomName": "台中麗寶美味魔法師",
    "roomDesc": "咻~熊大的魔法棒一揮，變出了許多美味可口的甜點讓你一進房就會不自覺想流口水",
    "roomPrice": 25000,
    "orderRanks": [ ],
    "rooms": [
        {
            "roomId": 5,
            "comId": 2,
            "roomName": "台中麗寶閃亮星空",
            "roomPrice": 30000,
            "roomDesc": "夢幻的星空裡有著無數顆星星，只要對著房間壁貼上最大顆的星星許願，今晚就會甜甜進入夢鄉",
            "roomRelease": "2023-06-09 00:00:00",
            "roomWifi": false,
            "roomPet": false,
            "roomBreakfast": true,
            "roomParking": false,
            "roomSmoking": true,
            "room24Hours": false,
            "roomStock": 1,
            "roomBed": "四人房",
            "roomPeople": 4,
            "roomStatus": true,
        }
    ],
    "privateScenes": [ ],
    "orderWithUsers": [ ]
}
```

## 房型付款

## 房型訂單
