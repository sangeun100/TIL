var num = 1;

var num = 10;

// 콘솔 창에서 웹브라우저에 () 안에 있는거 바로 출력해줘라
console.log(num);

// let const 재선언 불가
// let 재할당가능, const 재할당 불가능
let num2 = 2;
num2 = 20;

const num3 = 3;
// num3 = 30;

//문자형 자료 선언
let string = "안녕"

//논리형 자료 선언
let bool = true;
let t = 100 > 10;

console.log(t);

// 연산자 실습 적정체중 구하기
const height = 167;
const goodweight = (height - 100) * 0.9;

console.log("당신의 키는", height, "cm이며 적정체중은", goodweight, "입니다.");

console.log(`당신의 키는 ${height}cm이며 적정체중은 ${goodweight}kg입니다.`);

//조건문
const a = 13;

if (a < 10) {
    console.log("a는 10보다 작다.");
}else if (a == 10){ 
    console.log("a는 10이다.");
}else {
    console.log("a는 10보다 크다");
}

// 짝수 홀수 판단
const num4 = 9;

if (num4 % 2 === 0) {
    console.log("num4는 짝수이다.");
}else {
    console.log("num4는 홀수이다.");
}