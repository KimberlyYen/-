const players = [
  { name: "Bernard", email: "bernard@example.com" },
  { name: "Youchi", email: "youchi@example.com" },
  { name: "Yenting", email: "yenting@example.com" },
  { name: "Angela", email: "angela@example.com" },
  { name: "Yvonne", email: "yvonne@example.com" },
  { name: "Ellen", email: "ellen@example.com" },
  { name: "Walter", email: "walter@example.com" },
  { name: "Kevin", email: "kevin@example.com" },
  { name: "Tim", email: "tim@example.com" },
  { name: "Russell", email: "russell@example.com" },
];

const tickets = [];
// 抽取得獎者
function drawWinner(players, prize) {
  // random 0 ~ 0.9999
  // floor 去掉小數點
  const randomIndex = Math.floor(Math.random() * players.length);
  const player = players.splice(randomIndex, 1);
  announceMsg(players[randomIndex], prize);
}
// 宣布得獎者
function announceMsg(winner, prize) {
  console.log(
    `${winner.number} | ${encodeName(winner.name)} | ${encodeEmail(
      winner.email
    )} | ${prize} `
  );
}

// 加密姓名
function encodeName(name) {
  let eName = "";
  const first = name[0];
  const second = name[1];
  const star = name.length - 2;

  eName = eName + first + second;

  for (let i = 0; i < star; i++) {
    eName = eName + "*";
  }

  return eName;
}

function encodeEmail(email) {
  let eEmail = "";
  // 從 @ 切割
  const cutEmailByAt = email.split("@");
  // 把 @ 之前 / 2
  const emailLength = Math.floor(cutEmailByAt[0].length / 2);
  // 每一個都做一遍
  for (let i = 0; i < emailLength; i++) {
    // 組合新的 email
    // 新的 email 會是一半的前方
    eEmail = eEmail + email[i];
  }

  eEmail = eEmail + "...@" + cutEmailByAt[1];
  return eEmail;
}

//製作英文
function randomCapital() {
  const Capital = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
  const randonCapitalIndex = Math.floor(Math.random() * Capital.length);
  const randomCapital = Capital[randonCapitalIndex];
  return randomCapital;
}

function getTicket() {
  let ticketNumber = " ";
  //製作英文
  const capitals = randomCapital() + randomCapital();
  //製作數字
  let number =
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random() * 10).toString() +
    Math.floor(Math.random() * 10).toString();

  ticketNumber = capitals + number;

  // 抽獎號碼不重複 indexOf 有存在會在 0 ~ n , 沒有則返回 -1
  if (tickets.indexOf(ticketNumber) >= 0) {
    getTicket();
  } else {
    tickets.push(ticketNumber);
    return ticketNumber;
  }

  return ticketNumber;
}

for (let i = 0; i < players.length; i++) {
  players[i]["number"] = getTicket();
}

drawWinner(players, "頭獎");
drawWinner(players, "貮獎");
drawWinner(players, "叁獎");

for (let i = 0; i < players.length; i++) {
  announceMsg(players[i], "參加獎");
}

// // Q2: 加密姓名
// function announce(input) {
//   let anyString = input;
//   let anyString4 = anyString.substring(anyString.length - anyString.length / 2);

//   const who = anyString.replace(anyString4, "****");
//   return who;
// }

// // Q3: 加密信箱
// function secret(input) {
//   // @ 的前面
//   const emailCut = input.split("@");

//   // @ 的前面的一半
//   let howMany = Math.ceil(emailCut[0].length / 2);

//   // 字串倒著數一半，做取代
//   let replaceEmail = emailCut[0].slice(-howMany);
//   let result = input.replace(replaceEmail, "...");

//   return result;
// }
