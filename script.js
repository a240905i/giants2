const players = {
  "6": { name: "坂本 勇人", position: "内野手" },
  "18": { name: "菅野 智之", position: "投手" },
  "25": { name: "岡本 和真", position: "内野手" },
  "22": { name: "大勢", position: "投手" },
  const giantsData = {
  // 一軍
  "83": { name: "阿部慎之助", position: "監督" },
  "73": { name: "橋上秀樹", position: "オフェンスチーフコーチ" },
  "78": { name: "川相昌弘", position: "ディフェンスチーフコーチ" },
  "74": { name: "村田善則", position: "バッテリーチーフコーチ" },
  "86": { name: "ゼラス・ウィーラー", position: "打撃コーチ" },
  "90": { name: "李承燁", position: "打撃コーチ" },
  "76": { name: "吉川大幾", position: "内野守備兼走塁コーチ" },
  "79": { name: "亀井善行", position: "外野守備兼走塁コーチ" },
  "81": { name: "杉内俊哉", position: "投手チーフコーチ" },
  "77": { name: "内海哲也", position: "投手コーチ" },
  "88": { name: "實松一成", position: "バッテリーコーチ" },

  // 二軍
  "75": { name: "石井琢朗", position: "監督" },
  "87": { name: "金城龍彦", position: "オフェンスチーフコーチ" },
  "85": { name: "脇谷亮太", position: "ディフェンスチーフコーチ" },
  "89": { name: "田口昌徳", position: "バッテリーコーチ" },
  "93": { name: "大田泰示", position: "打撃コーチ" },
  "82": { name: "鈴木尚広", position: "外野守備兼走塁コーチ" },
  "71": { name: "山口鉄也", position: "投手チーフコーチ" },
  "72": { name: "大竹寛", position: "投手コーチ" },

  // 三軍
  "70": { name: "会田有志", position: "監督" },
  "103": { name: "橋本到", position: "オフェンスコーチ" },
  "106": { name: "若林晃弘", position: "ディフェンスコーチ" },
  "102": { name: "市川友也", position: "バッテリーコーチ" },
  "107": { name: "立岡宗一郎", position: "外野守備兼走塁コーチ" },
  "104": { name: "野上亮磨", position: "投手チーフコーチ" },
  "101": { name: "西村健太朗", position: "投手コーチ" },

  // 巡回
  "80": { name: "矢野謙次", position: "打撃コーチ" },
  "84": { name: "久保康生", position: "投手コーチ" },

  // 投手
  "11": { name: "田中将大", position: "投手" },
  "15": { name: "大勢", position: "投手" },
  "17": { name: "西舘勇陽", position: "投手" },
  "19": { name: "山﨑伊織", position: "投手" },
  "20": { name: "戸郷翔征", position: "投手" },
  "21": { name: "竹丸和幸", position: "投手" },
  "26": { name: "フォレスト・ウィットリー", position: "投手" },
  "28": { name: "スペンサー・ハワード", position: "投手" },
  "30": { name: "田和廉", position: "投手" },
  "31": { name: "赤星優志", position: "投手" },
  "36": { name: "山城京平", position: "投手" },
  "41": { name: "中川皓太", position: "投手" },
  "42": { name: "ブライアン・マタ", position: "投手" },
  "43": { name: "則本昂大", position: "投手" },
  "45": { name: "田中瑛斗", position: "投手" },
  "46": { name: "又木鉄平", position: "投手" },
  "47": { name: "森田駿哉", position: "投手" },
  "49": { name: "アルベルト・バルドナード", position: "投手" },
  "53": { name: "高梨雄平", position: "投手" },
  "54": { name: "松浦慶斗", position: "投手" },
  "56": { name: "北浦竜次", position: "投手" },
  "57": { name: "宮原駿介", position: "投手" },
  "58": { name: "船迫大雅", position: "投手" },
  "62": { name: "横川凱", position: "投手" },
  "63": { name: "泉圭輔", position: "投手" },
  "64": { name: "山田龍聖", position: "投手" },
  "65": { name: "石川達也", position: "投手" },
  "66": { name: "平内龍太", position: "投手" },
  "91": { name: "堀田賢慎", position: "投手" },
  "92": { name: "ライデル・マルティネス", position: "投手" },
  "97": { name: "井上温大", position: "投手" },
  "011": { name: "冨重英二郎", position: "投手（育成）" },
  "012": { name: "林燦", position: "投手（育成）" },
  "014": { name: "堀江正太郎", position: "投手（育成）" },
  "015": { name: "鈴木圭晋", position: "投手（育成）" },
  "016": { name: "千葉隆広", position: "投手（育成）" },
  "018": { name: "木下幹也", position: "投手（育成）" },
  "019": { name: "園田純規", position: "投手（育成）" },
  "021": { name: "松井颯", position: "投手（育成）" },
  "023": { name: "田村朋輝", position: "投手（育成）" },
  "026": { name: "吉村優聖歩", position: "投手（育成）" },
  "028": { name: "富田龍", position: "投手（育成）" },
  "029": { name: "西川歩", position: "投手（育成）" },
  "030": { name: "吹田志道", position: "投手（育成）" },
  "034": { name: "森本哲星", position: "投手（育成）" },
  "035": { name: "エルビス・ルシアーノ", position: "投手（育成）" },
  "041": { name: "黃錦豪", position: "投手（育成）" },
  "042": { name: "フランシス・グズマン", position: "投手（育成）" },
  "047": { name: "河野優作", position: "投手（育成）" },
  "050": { name: "板東湧梧", position: "投手（育成）" },
  "063": { name: "花田侑樹", position: "投手（育成）" },
  "068": { name: "代木大和", position: "投手（育成）" },
  "077": { name: "石田隼都", position: "投手（育成）" },
  "090": { name: "石田充冴", position: "投手（育成）" },
  "099": { name: "京本眞", position: "投手（育成）" },

  // 捕手
  "10": { name: "甲斐拓也", position: "捕手" },
  "22": { name: "小林誠司", position: "捕手" },
  "24": { name: "大城卓三", position: "捕手" },
  "27": { name: "岸田行倫", position: "捕手" },
  "37": { name: "郡拓也", position: "捕手" },
  "67": { name: "山瀬慎之助", position: "捕手" },
  "006": { name: "松井蓮太朗", position: "捕手（育成）" },
  "020": { name: "喜多隆介", position: "捕手（育成）" },
  "022": { name: "亀田啓太", position: "捕手（育成）" },
  "024": { name: "坂本達也", position: "捕手（育成）" },

  // 内野手
  "0": { name: "増田大輝", position: "内野手" }, // ※CSV上、湯浅大選手と番号重複
  "2": { name: "吉川尚輝", position: "内野手" },
  "5": { name: "門脇誠", position: "内野手" },
  "6": { name: "坂本勇人", position: "内野手" },
  "23": { name: "石塚裕惺", position: "内野手" },
  "29": { name: "ボビー・ダルベック", position: "内野手" },
  "32": { name: "浦田俊輔", position: "内野手" },
  "33": { name: "小濱佑斗", position: "内野手" },
  "35": { name: "泉口友汰", position: "内野手" },
  "52": { name: "リチャード", position: "内野手" },
  "60": { name: "荒巻悠", position: "内野手" },
  "61": { name: "増田陸", position: "内野手" },
  "99": { name: "藤井健翔", position: "内野手" },
  "002": { name: "中田歩夢", position: "内野手（育成）" },
  "004": { name: "村山源", position: "内野手（育成）" },
  "005": { name: "田上優弥", position: "内野手（育成）" },
  "007": { name: "宇都宮葵星", position: "内野手（育成）" },
  "025": { name: "竹下徠空", position: "内野手（育成）" },
  "027": { name: "北村流音", position: "内野手（育成）" },
  "033": { name: "平山功太", position: "内野手（育成）" },
  "067": { name: "川原田純平", position: "内野手（育成）" },

  // 外野手
  "8": { name: "丸佳浩", position: "外野手" },
  "9": { name: "松本剛", position: "外野手" },
  "12": { name: "萩尾匡也", position: "外野手" },
  "13": { name: "トレイ・キャベッジ", position: "外野手" },
  "38": { name: "岡田悠希", position: "外野手" },
  "39": { name: "皆川岳飛", position: "外野手" },
  "40": { name: "中山礼都", position: "外野手" },
  "44": { name: "佐々木俊輔", position: "外野手" },
  "51": { name: "浅野翔吾", position: "外野手" },
  "59": { name: "若林楽人", position: "外野手" },
  "96": { name: "三塚琉生", position: "外野手" },
  "001": { name: "鈴木大和", position: "外野手（育成）" },
  "003": { name: "知念大成", position: "外野手（育成）" },
  "008": { name: "相澤白虎", position: "外野手（育成）" },
  "013": { name: "フリアン・ティマ", position: "外野手（育成）" },
  "049": { name: "クリスチャン・フェリス", position: "外野手（育成）" },
  "069": { name: "笹原操希", position: "外野手（育成）" }
};
  
  
};

document.getElementById("searchBtn").addEventListener("click", function () {
  const num = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  if (players[num]) {
    result.innerHTML = `
      <h2>${players[num].name}</h2>
      <p>背番号：${num}</p>
      <p>ポジション：${players[num].position}</p>
    `;
  } else {
    result.textContent = "その背番号の選手はいません";
  }
});

