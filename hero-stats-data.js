// Twilight's Eve New v2.74C — Lv.300 naked hero panel stats
// Source: map hero object data + gameplay constants. Keep this separate so build/loadout pages can reuse it.
window.HERO_BASE_STATS_274C = [
  { order:1, name:'冠軍', primary:'str', str:2871, agi:1615, int:997, hp:59820, mp:16555, armor:536.20, atkMin:4335, atkMax:4345 },
  { order:2, name:'復仇者', primary:'str', str:3040, agi:1146, int:1296, hp:64000, mp:21440, armor:591.68, atkMin:4003, atkMax:4013 },
  { order:3, name:'先知', primary:'int', str:1111, agi:1096, int:2975, hp:23820, mp:47025, armor:248.68, atkMin:3777, atkMax:3787 },
  { order:4, name:'教皇', primary:'int', str:1141, agi:1111, int:2930, hp:24420, mp:46350, armor:248.88, atkMin:3472, atkMax:3482 },
  { order:5, name:'怪物獵人', primary:'agi', str:1216, agi:4396, int:1365, hp:25520, mp:21675, armor:355.68, atkMin:5897, atkMax:5907 },
  { order:6, name:'狙擊手', primary:'agi', str:947, agi:5293, int:947, hp:20140, mp:15405, armor:497.44, atkMin:7095, atkMax:7105 },
  { order:7, name:'符文大師', primary:'int', str:1674, agi:1316, int:2542, hp:35080, mp:40530, armor:110.28, atkMin:4843, atkMax:4853 },
  { order:8, name:'召喚師', primary:'int', str:1126, agi:977, int:2940, hp:24120, mp:46500, armor:159.16, atkMin:3742, atkMax:3752 },
  { order:9, name:'幻影刺客', primary:'agi', str:1071, agi:4037, int:797, hp:27020, mp:13355, armor:511.96, atkMin:5598, atkMax:5608 },
  { order:10, name:'生命主宰', primary:'agi', str:1325, agi:3563, int:967, hp:28100, mp:15905, armor:475.04, atkMin:4829, atkMax:4839 },
  { order:11, name:'白袍法師', primary:'int', str:941, agi:802, int:4037, hp:20420, mp:80555, armor:68.16, atkMin:4558, atkMax:4568 },
  { order:12, name:'聖人', primary:'int', str:952, agi:802, int:4286, hp:20640, mp:84290, armor:68.16, atkMin:5087, atkMax:5097 },
  { order:13, name:'大審判者', primary:'str', str:2233, agi:2148, int:1774, hp:47860, mp:29210, armor:371.84, atkMin:3197, atkMax:3207 },
  { order:14, name:'巫妖', primary:'agi', str:1595, agi:3195, int:997, hp:35100, mp:17155, armor:261.60, atkMin:5158, atkMax:5168 },
  { order:15, name:'聖殿武士', primary:'int', str:1575, agi:1126, int:2731, hp:33100, mp:43365, armor:252.08, atkMin:3533, atkMax:3543 },
  { order:16, name:'暗殿武士', primary:'agi', str:1156, agi:3738, int:737, hp:31620, mp:12855, armor:302.04, atkMin:5240, atkMax:5250 },
  { order:17, name:'上忍', primary:'agi', str:1565, agi:3120, int:797, hp:32900, mp:13355, armor:488.60, atkMin:3988, atkMax:3996 },
  { order:18, name:'殲滅者', primary:'str', str:2741, agi:1450, int:1291, hp:56420, mp:20765, armor:356.00, atkMin:3023, atkMax:3031 },
  { order:19, name:'惡魔', primary:'str', str:2666, agi:2666, int:2666, hp:53986, mp:40656, armor:313.28, atkMin:6666, atkMax:6666 },
  { order:20, name:'光縛者', primary:'int', str:1111, agi:1096, int:2975, hp:23820, mp:47025, armor:248.68, atkMin:3777, atkMax:3787 },
  { order:21, name:'秘術大師', primary:'int', str:1086, agi:1216, int:3334, hp:25120, mp:52210, armor:171.28, atkMin:5136, atkMax:5146 },
];

// v2.74C gameplay constants used by the loadout total-panel calculator.
window.HERO_STAT_FORMULA_274C = Object.freeze({
  hpPerStr: 20,
  mpPerInt: 15,
  armorPerAgi: 0.08,
  attackPerPrimary: 1,
  attackSpeedPerAgi: 0
});
