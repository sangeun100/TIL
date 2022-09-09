// 배열 create
const arr = [1,2,3,4];

// 배열 read
arr[0]
console.log(arr[3]);
arr.slice(1,2);
console.log(arr.slice(1,2));

//배열 update
arr[0] = 100;
console.log(arr);

// 배열 delete
arr.splice(0,1);
console.log(arr);

// 배열 연습문제

// 1. 문자열 생성
const namelist = ["짱구","철수"];
console.log(namelist);

// 2. 훈이 추가
// namelist[2] = "훈이";
// console.log(namelist);

namelist.push("훈이");
console.log(namelist);

// 3. 철수 -> 유리
namelist[1] = "유리";
console.log(namelist);

// 4. 짱구 삭제
namelist.splice(0,1);
console.log(namelist);



// 객체

// 객체 create
let userInfo = {
    email: "qortkddms96@naver.com",
    password: "1234"
}

// 객체 read
//userInfo.email or userInfo["email"]
console.log(userInfo.email);
console.log(userInfo["email"]);

// 객체 update
userInfo.email = "updated";
console.log(userInfo.email);

// 객체 delete
delete userInfo.email;
console.log(userInfo);