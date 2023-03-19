// dynamic 객체를 선택하는 쿼리셀렉터
let target = document.querySelector("#dynamic");
let stringArr = [
  "Learn To HTML",
  "Learn To CSS",
  "Learn To Javascript",
  "Learn To Python",
  "Learn To Ruby",
];
let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
let selectStringArr = selectString.split("");

function randomString() {
  let stringArr = [
    "Learn To HTML",
    "Learn To CSS",
    "Learn To Javascript",
    "Learn To Python",
    "Learn To Ruby",
  ];
  let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  let selectStringArr = selectString.split("");

  return selectStringArr;
}

// 타이핑 리셋
function resetTyping() {
  target.textContent = "";
  dynamic(randomString());
}

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}

dynamic(randomString());

function blink() {
  target.classList.toggle("active");
}
// blink 함수를 0.5초 마다 깜빡여라
setInterval(blink, 500);
