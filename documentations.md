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

