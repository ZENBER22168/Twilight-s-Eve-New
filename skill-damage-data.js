window.SKILL_DAMAGE_FORMULAS_274C = Object.freeze({
  '冠軍': {
    W:[{label:'傷害',base:60000,armor:6,type:'physical'}],
    R:[{label:'傷害',base:75000,armor:7.5,type:'physical'}],
    F:[{label:'自身屬性部分',str:90,type:'physical',note:'另加目標目前生命 6%（依目標即時生命變動）'}]
  },
  '復仇者': {
    Q:[{label:'傷害',armor:25,type:'physical'}],
    F:[{label:'傷害',base:200000,hp:1,type:'magic'}]
  },
  '先知': {
    Q:[{label:'單體治療',base:16000,int:.8,kind:'heal'}],
    W:[{label:'第 1 跳治療',base:12000,int:.6,kind:'heal',repeat:8,decayPct:.06,note:'最多彈跳 8 次；每次彈跳治療降低 6%'}],
    R:[{label:'每秒治療',base:6000,int:.3,kind:'heal',repeat:5,note:'持續 5 秒'}],
    D:[{label:'傷害',heroLevel:50,type:'magic'}]
  },
  '教皇': {
    Q:[{label:'單體治療',base:16000,int:.8,kind:'heal'}],
    W:[{label:'治療',base:30000,int:1.5,kind:'heal'},{label:'護盾防禦',base:1400,int:.07,kind:'shield',note:'持續 10 秒'}],
    F:[{label:'回滿生命',targetMissingHp:1,kind:'heal',note:'完全恢復附近隊友生命；以治療目標目前缺失生命換算'}],
    D:[{label:'傷害',heroLevel:50,type:'magic'}]
  },
  '怪物獵人': {
    Q:[{label:'傷害',base:12000,agi:6,type:'physical',note:'脆弱標記後續傷害提高 50% 為條件效果'}],
    F:[{label:'每次刀刃傷害',base:38550,agi:2,type:'physical',note:'脆弱目標 ×2'}]
  },
  '狙擊手': {F:[{label:'傷害',base:625000,agi:31.25,type:'physical',note:'附近目標／非英雄只承受 50%；可觸發遊俠精熟暴擊'}]},
  '符文大師': {
    F:[{label:'啟動後攻擊力增加',base:10990,int:.75,kind:'attackBuff',note:'持續 15 秒並獲得 10% 吸血；巨狼型態使用野性憤怒時另有 +30% 傷害'}]
  },
  '召喚師': {
    Q:[{label:'傷害',base:200000,int:10,type:'magic'}],
    W:[{label:'15 秒總回血',base:27000,int:1.25,kind:'heal',note:'同額恢復魔力；此處顯示 15 秒總量'}],
    E:[{label:'傷害',base:70000,int:3.5,type:'magic'}],
    R:[{label:'傷害',base:60000,int:3,type:'magic'}],
    D:[{label:'初始傷害',base:80000,int:4,type:'absolute',note:'後續 5 秒區域傷害為初始傷害的 100%'}]
  },
  '幻影刺客': {Q:[{label:'範圍傷害',base:125000,agi:6.25,type:'physical',note:'主要目標 ×2'}]},
  '生命主宰': {
    Q:[{label:'基本近身傷害',base:90000,agi:5,type:'physical',note:'遠距施放為 75%；消耗 3 層時物理傷害 ×2，另追加同公式魔法傷害'}],
    D:[{label:'潛行首擊附加',agi:80,type:'physical'}],
    F:[{label:'終結傷害（未含儲存）',base:200000,agi:10,type:'absolute',note:'另加儲存傷害 30%'}]
  },
  '白袍法師': {
    Q:[{label:'傷害',base:130000,int:5,type:'magic'}],
    W:[{label:'每秒核心傷害',base:2600,perSkillLevel:600,int:.5,type:'magic',note:'持續 25 秒；迴響與 80% 重複命中屬條件效果'}],
    R:[{label:'傷害',base:250000,mp:1.1,type:'absolute'}]
  },
  '聖人': {
    Q:[{label:'傷害',base:60000,mp:1,type:'magic'}],
    W:[{label:'單目標傷害',base:100000,int:5,type:'magic',note:'同時攻擊最多 6 個單位；疊層每層提高 4% 傷害'}],
    R:[{label:'範圍傷害',base:250000,mp:1.25,type:'absolute',note:'範圍只有 1 個目標時 ×1.4'}]
  },
  '大審判者': {
    Q:[{label:'傷害',base:50000,hp:.25,type:'magic'}],
    W:[{label:'傷害',base:120000,hp:.6,type:'magic'}]
  },
  '巫妖': {
    Q:[{label:'每 0.25 秒傷害',base:6000,agi:.7,hp:.025,type:'absolute'}],
    R:[{label:'每擊傷害',base:1800,agi:.2,hp:.01,type:'physical',repeat:36,note:'36 擊總傷害；依目標魔力比例最高可提升至 4 倍'}],
    D:[{label:'每秒自我回血',hp:.01,kind:'heal',note:'每秒恢復 1% 自身最大生命'}]
  },
  '聖殿武士': {
    Q:[{label:'傷害',base:50000,mp:.3,type:'magic'}],
    W:[{label:'傷害',base:200000,int:10,type:'magic'}],
    E:[{label:'初始傷害',base:45000,mp:.25,type:'magic',note:'超載會再造成 150% 餘震'}],
    R:[{label:'每秒傷害',base:40000,mp:.2,type:'magic',repeat:5,note:'基本持續 5 秒；孤立目標 ×2，超載額外再持續 5 秒'}]
  },
  '暗殿武士': {
    Q:[{label:'每次本體攻擊',attackScale:.75,type:'physical',repeat:6,note:'接下來 6 次攻擊各為目前普攻的 75%；濺射對附近目標造成 100% 該次傷害，第 3 與第 6 下附加絕對緩速'}],
    W:[{label:'暴擊觸發傷害',attackScale:5.5,type:'physical',note:'55% 機率觸發 550% 暴擊傷害'}],
    D:[{label:'啟動後攻擊力增加',base:20000,agi:1,kind:'attackBuff',note:'持續 15 秒；另有 +15% 傷害、30% 減傷與 +300 護甲'}]
  },
  '上忍': {
    Q:[{label:'傷害',base:140000,agi:7,type:'physical',note:'附近被印記敵人會承受 60% 傷害'}],
    W:[{label:'去程',base:100000,agi:5,type:'physical'},{label:'回程',base:150000,agi:7.5,type:'physical'}],
    E:[{label:'傷害',base:180000,agi:9,type:'physical'}],
    R:[{label:'傷害',base:80000,agi:4,type:'physical',note:'印記目標 ×2'}]
  },
  '殲滅者': {
    Q:[{label:'自身屬性部分',base:200000,hp:1.5,type:'physical',note:'另加目標生命上限 0.25%；目標低於 30% 時 ×2；獎盃每層 +5%'},{label:'自我回血',hpMin:.075,hpMax:.30,kind:'healRange',note:'依失去生命比例，恢復自身最大生命 7.5%～30%'}],
    W:[{label:'每秒範圍傷害',base:10000,hp:.05,type:'magic',note:'釋放爆發另依消耗生命計算；技能期間所有傷害提高成 200%；獎盃每層 +5%'}],
    E:[{label:'每三次攻擊附加',base:14000,str:.7,type:'absolute',note:'6 層天命時額外 +50%；獎盃每層 +5%'}],
    R:[{label:'每擊傷害',base:20000,hp:.1,type:'absolute',repeat:6,note:'6 擊總傷害；非 Boss -25%'},{label:'每層天命回血',hp:.05,kind:'heal',note:'每消耗 1 層天命恢復 5% 自身最大生命'}]
  },
  '惡魔': {
    Q:[{label:'傷害',base:100000,hp:.5,type:'absolute'}],
    W:[{label:'每次普攻附加',base:13333,hp:.0666,type:'absolute',note:'持續 15 秒'}],
    E:[{label:'每個火焰新星',base:48000,hp:.1,type:'absolute',note:'持續 3.33 秒；新星次數依實際觸發間隔'}]
  },
  '光縛者': {
    Q:[{label:'範圍傷害',base:60000,int:3,type:'magic'},{label:'範圍治療',base:11000,int:.45,kind:'heal',altMultiplier:1.15,altLabel:'聖光目標 +15%'}],
    W:[{label:'傷害',base:80000,mp:.4,type:'magic'}],
    E:[{label:'單體治療',base:9000,int:.4,kind:'heal'}],
    R:[{label:'傷害',base:100000,int:5,type:'absolute'},{label:'友軍回血',base:25000,int:1.25,kind:'heal',note:'等於本技能絕對傷害的 25%'}]
  },
  '秘術大師': {
    Q:[{label:'傷害',base:190000,int:5,type:'magic'}],
    W:[{label:'紅牌附加',base:30000,int:2.5,type:'absolute',note:'黃牌為目標受傷 +4%；魔法反噬為 5% 機率 20,000 魔法傷害'}],
    E:[{label:'每次普攻附加',int:3,type:'magic',note:'命運值 50/75/100 時可向周圍擴散 60%/80%/100%'}],
    R:[{label:'命運期間 E 附加',int:6,type:'absolute',note:'等同卡牌騙術附加傷害 ×2；此技能本身不受技能疾速影響',ignoreHaste:true}]
  }
});

window.HEAL_FOCUSED_JOBS_274C = Object.freeze(new Set(['先知','教皇','光縛者']));
window.EQUIPMENT_RECOVERY_FORMULAS_274C = Object.freeze({
  'Horadric Staff': [{label:'主動治療',base:6500,targetMaxHp:.05,kind:'heal'}],
  'Scepter of Mastery': [{label:'主動治療',base:9000,targetMaxHp:.075,kind:'heal'}],
  'Book of Hylia': [{label:'主動治療',base:10000,int:.5,targetMissingHp:.25,kind:'heal',cd:30,note:'目標低於 50% 生命時另獲得 400 護甲'}],
  'Dragon Totem': [{label:'主動治療',base:10000,targetMaxHp:.08,kind:'heal',nearbyMultiplier:.5,note:'附近隊友治療量為 50%；另提供 100 護甲 5 秒'}],
  '恐懼圖騰': [{label:'主動治療',base:12500,targetMaxHp:.10,kind:'heal',nearbyMultiplier:.5,cd:15,note:'附近隊友治療量為 50%；另提供 130 護甲 5 秒'}],
  '拜爾納之杖': [{label:'主動治療',base:15000,targetMaxHp:.12,kind:'heal',nearbyMultiplier:.5,note:'附近隊友治療量為 50%；另提供 150 護甲 5 秒'}],
  '神聖魔法書': [{label:'主動治療',base:15000,int:.65,targetMissingHp:.25,kind:'heal',cd:30,note:'目標低於 50% 生命時另獲得 550 護甲'}],
  '命運的昇華之光': [{label:'主動治療',targetMissingHp:.25,kind:'heal',cd:55,note:'恢復目標 25% 已損失生命'}],
  '瓶中綠洲': [{label:'主動治療增幅',kind:'healBuff',pct:25,duration:10,cd:25,note:'啟動後治療能力 +25%'}],
  '預言': [{label:'主動治療增幅',kind:'healBuff',pct:30,duration:10,cd:20,note:'啟動後治療能力 +30%'}],
  'Hope': [
    {label:'被動 1｜範圍治療',base:5000,int:.25,kind:'heal',cd:4,trigger:'治療目標時',note:'每 3 次觸發被動 2'},
    {label:'被動 2｜追加治療',base:5000,int:.25,kind:'heal',trigger:'每 3 次被動 1',note:'並增加 200 護甲'}
  ],
  'Virtue': [{label:'被動治療',base:5000,int:.25,kind:'heal',cd:4,trigger:'技能造成傷害時',note:'同時對直線範圍造成真實傷害'}],
  'Harmony': [{label:'輔助模式治療',base:6000,int:.30,kind:'heal',cd:4,trigger:'施放輔助技能後'}],
  'Cosmos': [{label:'輔助模式治療',base:6000,int:.30,kind:'heal',cd:4,trigger:'施放輔助技能後'}],
  'Blade of Awe': [{label:'被動自我回血',selfHp:.08,kind:'heal',cd:4,trigger:'普通攻擊觸發'}],
  '穆德拉禁書': [{label:'被動治療效果',kind:'healPassive',pct:5,note:'法術治療效果 +5%'}],
  '異能者之戒': [{label:'主動回魔',selfMp:.10,int:.50,kind:'manaRestore',cd:12}],
  '異能者之血': [{label:'主動回魔',selfMp:.10,int:.65,kind:'manaRestore',cd:12}]
});

window.CHARACTER_PANEL_BONUSES_274C = Object.freeze({
  '冠軍': {attackPct:240,source:'E 致命攻擊'},
  '怪物獵人': {attackPct:210,source:'W 狩獵專攻'},
  '狙擊手': {attackPct:300,source:'W 真箭'},
  '符文大師': {attackPct:300,source:'Q/W 古代巨狼／巨熊',conditional:'變身後',applyToPanel:false},
  '幻影刺客': {attackPct:300,source:'W 殺人技巧'},
  '生命主宰': {attackPct:300,source:'E 背刺'},
  '大審判者': {attackPct:180,source:'E 信念'},
  '巫妖': {attackPct:300,source:'E 閃避'},
  '暗殿武士': {attackPct:360,source:'E 刀片專長'},
  '殲滅者': {attackPct:300,source:'E 殲滅意志'}
});
window.BASIC_ATTACK_FOCUSED_JOBS_274C = Object.freeze(new Set(['怪物獵人','狙擊手','符文大師','幻影刺客','生命主宰','大審判者','巫妖','暗殿武士','殲滅者','惡魔','秘術大師']));
