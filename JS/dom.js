const productsData = [
    { title: "감자칩", weight: 300 },
    { title: "칙촉", weight: 100 },
    { title: "고구마칩", weight: 300 },
    { title: "오잉", weight: 50 },
  ];

  const app = document.querySelector("#app");

let result = "";

for (data of productsData) {
result += `<div class="item">상품명 : ${data.title}, 무게 : ${data.weight}gv</div>`
}
app.innerHTML = result;