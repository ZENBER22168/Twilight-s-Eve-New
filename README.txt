新暮光森林 v2.7.4
====================

這是第一版可操作的網站骨架。

目前已完成：
1. 首頁
2. 職業查看
3. 技能資料
4. 轉職 NPC 與位置
5. 裝備資料庫
6. 裝備需求材料
7. 六格裝備選擇
8. 材料自動加總
9. 配裝保存（使用瀏覽器 localStorage）
10. 材料資料庫
11. NPC 資料庫
12. 全站搜尋
13. 角色存檔讀取區塊（目前刻意留空）

啟動方式（推薦 VS Code）：
1. 用 VS Code 開啟這個資料夾。
2. 安裝 VS Code 擴充功能「Live Server」。
3. 右鍵 index.html。
4. 選「Open with Live Server」。
5. 瀏覽器會開啟網站。

資料在哪裡？
目前範例資料暫時放在 app.js 最上面的 data 物件。
之後資料量變大，再拆成：
data/classes.json
data/skills.json
data/items.json
data/materials.json
data/npcs.json

下一階段：
- 把你的真實 Google Sheet / 資料整理進來
- 補上真正的裝備、材料、NPC、技能圖示
- 製作地圖
- 最後才處理「代碼存檔」解析器
