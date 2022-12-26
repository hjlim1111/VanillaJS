// object
const player = {
  name: "nico",
  point: 10,
  fat: true,
};

console.log(player);

// object 불러올 때 방법 두가지
console.log(player.name);
console.log(player["name"]);

// 중간에 값을 변경할 수도 있음 / 업데이트 가능
player.fat = false;
player.point = player.point + 15;
console.log(player);

// 내용 추가도 가능
player.lastName = "potato";
console.log(player);
