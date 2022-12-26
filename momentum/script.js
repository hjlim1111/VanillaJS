// true, false, null, undefined
/*
null - 존재하지 않음, 정의되지 않음, 아무것도 없음
ㄴ 자연적으로 발생하지 않음, 자바스크립트에 여긴 값이 "없다"라는 것을 알려주기 위함임

boolean - true, false

undefined - 값이 없음. 메모리는 정의되어 있는데 값이 들어가있지 않음
*/
const amIFat = null;
let something;
console.log(amIFat);
console.log(something);

// arrays (배열)
// 배열을 쓰지 않았을 경우
const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "tue";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const dayOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(dayOfWeek);
// 배열을 사용하였을 경우
const dayOfWeekArray = [mon, tue, wed, thu, fri, sat, sun];
const dayOfWeekArrays = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(dayOfWeekArray, dayOfWeekArrays);

// Get Item from Array
console.log(dayOfWeekArrays[4]);

// Add one more day to the array
dayOfWeekArrays.push("sun");
console.log(dayOfWeekArrays);

const nonsense = [1, 2, "hello", true, false, null, undefined, "nico"];

console.log(nonsense);
