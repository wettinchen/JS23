## JavaScript Chapter 23
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 JavaScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6Oi6xNtL_fwCrwpuqylMsgT

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## JavaScript Chapter 23
   Quick Concept outline
   中文摘要說明與重點提問

###  1. Intro 
        教學影片開頭和介紹

###  2. Web Storage is part of the global window object
        (1)回傳 ok!
        (2)回傳 url 位置
        (3)宣告 myObject 為 object，key 為 name，value 為 Dave；key 為 logName，value 為 函數 回傳 myObject.name；
        宣告 myArray 為 ["eat", "sleep", "code"]。使用 myObject.logName() 讀取方法

###  3. Session Storage
        只在期間保存資料，比如登入網站後，關閉網站，期間資料不再儲存

###  4. Local Storage for persistent data
        持續在瀏覽器儲存資料，所以能重開網站返回相同網站取得資料

###  5. setItem
        使用 sessionStorage.setItem(keyName, keyValue) 保存期間資料，keyName 為 mySessionStore", keyValue 為 myObject

###  6. The dev tools application tab
        在 Google 開發工具，
        選取 Application >> Storage >> Session Storage

###  7. What type of data does web storage store?
        資料為 json: [object, object]

###  8. getItem
        (1)宣告 mySessionData 使用 sessionStorage.getItem(keyName)
        回傳結果為 [object, object]
        (2)使用 sessionStorage.setItem(keyName, keyValue)，keyName 為 mySessionStore, keyValue 改為 myArray，資料為 eat,sleep,code
        (3)如果儲存的資料型態不是 String，會轉換為 String

###  9. Why JSON is the perfect match for web storage
        取得資料可以轉換回 object 或 array 資料
        (1)使用 JSON.stringify() 將 myObject 轉換為 string，
        使用 JSON.parse() 將 keyName 獲取值儲存至 sessionStorage 轉換為 object
        (2)使用 JSON.stringify() 將 myArray 轉換為 string，
        使用 JSON.parse() 將 keyName 獲取值儲存至 sessionStorage 轉換為 array

### 10. A look at localStorage for persistent data
        在 Google 開發工具，
        選取 Application >> Storage >> Local Storage
        將資料轉存 Local Storage，重新開啟瀏覽器資料未消失

### 11. removeItem
        使用 localStorage.removeItem(keyName)，keyName 為 mylocalStore，
        移除 localStorage 資料

### 12. Retrieving an item that does not exist
        回傳 null

### 13. Clear all items
        使用 localStorage.clear();，
        移除 localStorage 資料

### 14. Get the key at a specific index position
        使用 Storage.key() 回傳 第一個元素，結果為 keyName myLocalStore

### 15. Return how many keys are in storage
        使用 Storage.length() 回傳 key 的數量