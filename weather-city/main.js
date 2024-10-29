let info = await fetch("https://api.dastyar.io/express/clock/cities");
if (info.ok) {
  let response = await info.json();
  console.log(response);
} else {
  console.error("HTTP-Error: " + info.status);
}
let query = document.getElementById("search");
let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {});
function search() {
  let matchingData = info.filter((data) => {
    let city = data.city.toLowerCase();

    return city.includes(query.value.toLowerCase());
  });
}
btn.addEventListener("click", function (e) {
  localStorage.setItem("city", query.value.toLowerCase());
  console.log(btn);
});

// function display(search = info) {
//   let localStorage
// }
