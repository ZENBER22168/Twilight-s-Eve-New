新暮光之晨｜圖片直接名稱對應

本版圖片不再使用「第 001 張、第 002 張」這種不可靠的流水編號來判斷裝備。
圖片是從 XLSX 的圖片錨點（A 欄圖示）依照同一列的英文名稱＋中文名稱精確對應。

檔名格式：
英文名稱__中文名稱__分類.副檔名

例如：
Blade of the Ruined King__殞落王者之劍__鍛造裝備.png
Corrupted Crystal__腐化水晶__神祇鍛造.png
Sharp Claws__鋒利的爪子__副本裝備.png

資料庫 database.json 也保存：
- image
- image_name
- image_source_sheet
- image_source_row
- image_source_col

因此之後新增/修改裝備時，可以直接用名稱查找圖片，不需要猜圖片編號。
