// v2.74C 活動副本資料；活動結束後將此值改為 false 即可從副本頁隱藏。
const EVENT_DUNGEONS_ENABLED = true;
const EVENT_DUNGEONS = [
  {
    key: "sea-fortress-anniversary",
    title: "event｜海上要塞　　　Difficulty：活動　　　限制：Lv300",
    shortTitle: "event｜海上要塞",
    version: "v2.74C",
    prerequisite: "前置條件：進入關卡需先完成 Hell 1 ～ Hell 4 各一次",
    locationImages: [
      { file: "../images/event/sea-fortress-entrance.png", alt: "海上要塞 副本入口" },
      { file: "../images/event/sea-fortress-map.png", alt: "海上要塞 地圖位置" }
    ],
    drops: [
      { rawcode:"I0FQ", name:"指揮官之首", name_en:"Commander's Head", kind:"equipment", job:"所有職業", effect:"全能力 +500，20% 機率閃避攻擊；對 BOSS 額外造成 8% 傷害。", image:"../images/map-items/I0FQ__指揮官之首.png", name_color:"#ff66ff", provisional:true, rate:1.06 },
      { rawcode:"I0HL", name:"指揮官之箭", name_en:"Commander's Arrow", kind:"equipment", job:"弓箭手", effect:"攻擊 +4500、敏捷 +600、攻擊速度 +30%；8% 機率閃避攻擊。", image:"../images/map-items/I0HL__指揮官之箭.png", name_color:"#ff66ff", provisional:true, rate:1.06 },
      { rawcode:"I0HM", name:"指揮官之刃", name_en:"Commander's Blade", kind:"equipment", job:"近戰敏捷英雄", effect:"攻擊 +4500、敏捷 +800、攻擊速度 +30%；攻擊時 8% 機率造成目標目前生命 1% 的額外傷害。", image:"../images/map-items/I0HM__指揮官之刃.png", name_color:"#ff66ff", provisional:true, rate:1.06 },
      { rawcode:"I0HN", name:"指揮官之石", name_en:"Commander's Stone", kind:"equipment", job:"智力職業", effect:"智力 +1000、技能疾速 +10%；每次施法有 20% 機率回復已損失魔力的 2%。", image:"../images/map-items/I0HN__指揮官之石.png", name_color:"#ff66ff", provisional:true, rate:1.06 },

      { rawcode:"I0FP", name:"海洋之心", name_en:"Ocean Heart", kind:"drop", job:"", effect:"", image:"../images/map-items/I0FP__海洋之心.png", name_color:"#00FFFF", rateLabel:"固定 ×1" },
      { rawcode:"I086", name:"鑽石", name_en:"Diamond", kind:"drop", job:"", effect:"", image:"../images/map-items/I086__鑽石.png", name_color:"#00FF00", rate:11.68 },
      { rawcode:"I0AQ", name:"下界反應爐", name_en:"Nether Reactor", kind:"drop", job:"", effect:"", image:"../images/③_材料_合成商人_024.png", name_color:"#FFFF00", rate:5.31 },
      { rawcode:"I0HC", name:"光之結晶", name_en:"Light Synthesis", kind:"drop", job:"", effect:"", image:"../images/③_材料_合成商人_033.png", name_color:"#FFFF00", rate:2.65 },
      { rawcode:"I09F", name:"黑暗的祝福", name_en:"Blessing of Darkness", kind:"drop", job:"", effect:"", image:"../images/equipment/Blessing of Darkness__黑暗的祝福__副本裝備.png", name_color:"#FFFF00", rate:1.33 },
      { rawcode:"I09G", name:"黑暗斗篷", name_en:"Mantle of Darkness", kind:"drop", job:"", effect:"", image:"../images/equipment/Mantle of Darkness__黑暗斗篷__副本裝備.png", name_color:"#FFFF00", rate:1.33 },
      { rawcode:"I0AN", name:"龍之祝福", name_en:"Blessing of Dragon", kind:"drop", job:"", effect:"", image:"../images/equipment/Blessing of Dragon__龍之祝福__副本裝備.png", name_color:"#FFFF00", rate:1.33 },
      { rawcode:"I0AO", name:"龍蛋", name_en:"Dragon Egg", kind:"drop", job:"", effect:"", image:"../images/equipment/Dragon Egg__龍蛋__副本裝備.png", name_color:"#FFFF00", rate:1.06 },
      { rawcode:"I0AP", name:"龍牙", name_en:"Dragon Tooth", kind:"drop", job:"", effect:"", image:"../images/equipment/Dragon Tooth__龍牙__副本裝備.png", name_color:"#FFFF00", rate:1.06 }
    ]
  }
];
