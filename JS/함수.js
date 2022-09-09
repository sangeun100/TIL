// 1~10 더하기 1+2+3+...+10
// 1~20 더하기

function sum(target) {
    let result = 0;
for (let i = 1; i <=target; i++) {
    target = target + i
}
return result;
};

console.log(sum(10));
console.log(sum(50));

// 익명함수는 호이스팅(끌어올리다)를 지원하지 않음 따라서 호출 전에 정의를 해줘야함
// const sum = function sum(target) {
//     let result = 0;
// for (let i = 1; i <=target; i++) {
//     target = target + i
// }
// return result;
// };


// 연습문제 BMI 
function BMI(height, weight) {
    const meterheight = height / 100;
    const result = weight / (meterheight * meterheight);
    return result;
}
console.log(BMI(167,60));