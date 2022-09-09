// while문
// let 변수 = 초깃값;
// while(조건식) {
//     소스코드
//     증감식
// }

let i = 1;
while(i <= 10) {
    console.log("안녕");
    i++;
}

//while문을 사용하여 1-50까지의 숫자 중 5의 배수만 출력
let a = 1;
while(a <= 50) {
    if ( a % 5 === 0) {
           console.log(a);
    }
    a++;
}


//for 문
// for (초깃값;, 조건식;, 증감식) {
//     소스코드;
// }
for (let b = 1; b <= 10; b++) {
    console.log("안녕");
}

for(let c = 1;  c<=50; c++) {
    if (c % 5 === 0) {
        console.log(c);
    }
}

const arr = [5,6,7,8];
 
for (let index in arr) {
    console.log(arr[index]);
}

for (let item of arr) {
    console.log(item);
}

const jsonArr = {email: "dummy", password: "123"};

for(let key in jsonArr) {
    console.log(jsonArr[key]);
}

//반복문 탈출 : break
for (let i = 1; i <=10; i++) {
    if (i >=5) {
        break;
    }
    console.log(i);
}

//해당 반복 건너뛰기 : continue
for (let i = 1; i <=10; i++) {
    if (i ==5) {
        continue;
    }
    console.log(i);
}