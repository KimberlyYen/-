const players = [
  { name: "Bernard", email: "bernard@example.com", ticket: "XL3558" },
  { name: "Youchi", email: "youchi@example.com", ticket: "AH9188" },
  { name: "Yenting", email: "yenting@example.com", ticket: "LO9903" },
  { name: "Angela", email: "angela@example.com", ticket: "HY7212" },
  { name: "Yvonne", email: "yvonne@example.com", ticket: "CH7684" },
  { name: "Ellen", email: "ellen@example.com", ticket: "BB1750" },
  { name: "Walter", email: "walter@example.com", ticket: "EI5724" },
  { name: "Kevin", email: "kevin@example.com", ticket: "TT1804" },
  { name: "Tim", email: "tim@example.com", ticket: "CK4592" },
  { name: "Russell", email: "russell@example.com", ticket: "SI0305" },
];

function drawWinner(players, prize) {
  //1. 所有的參賽者，任選一位(座號索引)
  let pickOne = Math.floor(Math.random() * players.length);

  //2. 由座號索引，叫出對應名單
  console.log(
    `${announce(players[pickOne].name)} | ${players[pickOne].ticket} | ${secret(
      players[pickOne].email
    )} | ${prize} `
  );
}

// Q2: 加密姓名
function announce(input) {
  let anyString = input;
  let anyString4 = anyString.substring(anyString.length - anyString.length / 2);

  const who = anyString.replace(anyString4, "****");
  return who;
}

// Q3: 加密信箱
function secret(input) {
  // @ 的前面
  const emailCut = input.split("@");

  // @ 的前面的一半
  let howMany = Math.ceil(emailCut[0].length / 2);

  // 字串倒著數一半，做取代
  let replaceEmail = emailCut[0].slice(-howMany);
  let result = input.replace(replaceEmail, "...");

  return result;
}

// 貳獎 推進陣列
// 參獎 推進陣列
// 剩下 推進陣列
drawWinner(players, "頭獎");
drawWinner(players, "貮獎");
drawWinner(players, "叁獎");
