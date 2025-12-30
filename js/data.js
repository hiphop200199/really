let mazeEvent = [
  "ceberus",
  "wizard",
  "apple",
  "snake",
  "potion",
  "orc",
  "fountain",
  "ghost",
];

let mazeConversation = {
  entry: "這裡...是哪裡？該怎麼走出去？手裡握著劍？",
  normal_end:'還好那只是一場夢而已',
  bad_end:'你陷在夢裡，無法離開',
  ceberus: {
    meet: "一隻地獄三頭犬出現了，散發著駭人的氣息...",
    pos: "三頭犬死了，散發可疑的氣味.",
    skip: "三頭犬隨著風消失了",
    image:'/image/cerberus.png'
  },
  orc: {
    meet: "獸人出現了，散發著駭人的氣息...",
    pos: "獸人倒下，但散發惡臭..",
    skip: "獸人消失了",
    image:'/image/orc.png'
  },
  snake: {
    meet: "出現了大蛇，散發著恐怖的氣息...",
    pos: "你揮劍砍下了蛇頭，但不安感並沒有消失..",
    skip: "大蛇隨著風消失了",
    image:'/image/snake.png'
  },
  ghost: {
    meet: "......",
    pos: "幽靈詭異的笑並離開了",
    skip: "幽靈隨著風消失了",
    image:'/image/ghost.png'
  },
  potion: {
    meet: "地上出現一罐看起來很神秘的藥水",
    pos: "沁涼的口感舒緩喉嚨的燒灼感，給人放鬆的感覺",
    skip: "你離開了藥水，不以為意",
    image:'/image/potion.png'
  },
  wizard: {
    meet: "一位看起來充滿睿智的巫師站在你面前。他似乎有話跟你說。",
    pos: "年輕人記住，別衝動對怪物下手，那只是表象、幻影。",
    skip: "...要難受了，這孩子。",
    image:'/image/wizard.png'
  },
  apple: {
    meet: "...蘋果？",
    pos: "是清爽甘甜的口感。",
    skip: "你離開了蘋果，不以為意",
    image:'/image/apple.png'
  },
  fountain: {
    meet: "一座噴泉出現在眼前",
    pos: "清澈的水、清爽的口感",
    skip: "你離開了噴泉，不以為意",
    image:'/image/fountain.png'
  },
};

let mazeButton = {
  monster_slash:{
    type: "monster",
    action: "slash",
    text: "揮動手邊的劍",
    score: -1,
  },
  monster_remind:{
    type: "monster",
    action: "remind",
    text: "告訴自己這不是真的",
    score: 1,
  },
  wizard_listen:{
    type: "wizard",
    action: "listen",
    text: "聆聽巫師",
    score: 1,
  },
  wizard_skip:{
    type: "wizard",
    action: "skip",
    text: "不理會",
    score: -1,
  },
  potion_drink:{
    type: "potion",
    action: "drink",
    text: "打開藥水來喝",
    score: 1,
  },
  potion_skip:{
    type: "potion",
    action: "skip",
    text: "略過它",
    score: 0,
  },
  fountain_drink:{
    type: "fountain",
    action: "drink",
    text: "舀一點水來喝",
    score: 1,
  },
  fountain_skip:{
    type: "fountain",
    action: "skip",
    text: "忽略噴泉",
    score: 0,
  },
  apple_eat:{
    type: "apple",
    action: "eat",
    text: "吃眼前的蘋果",
    score: 1,
  },
  apple_skip:{
    type: "apple",
    action: "skip",
    text: "直接離開",
    score: 0,
  },
};

let lakeConversation = {
  entry: "這裡...難道是湖嗎？",
};
