// 選手データ
const players = {
  "6":  { name: "坂本 勇人", position: "内野手" },
  "18": { name: "菅野 智之", position: "投手" },
  "25": { name: "岡本 和真", position: "内野手" },
  "22": { name: "大勢", position: "投手" }
};

document.getElementById("searchBtn").addEventListener("click", function () {
  const num = document.getElementById("numberInput").value;
  const result = document.getElementById("result");

  console.log("入力された背番号:", num);

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
