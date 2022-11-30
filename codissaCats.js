// document.addEventListener("DOMContentLoaded", () => {
//  document.querySelector("#findCats").addEventListener("click", get)
// })

// function get(){
// // console.log("painike toimii")
document.addEventListener("DOMContentLoaded", Get);
function Get() {
  fetch("https://codissacats.azurewebsites.net/api/cat")
    .then((res) => res.json())
    .then((data) => {
      console.dir(data);
      let cat_data = document.getElementById("cat-tbody");
      let cat_rows =
        "<tr><th>id</th><th>name</th><th>color</th><th>food</th></tr>";
      for (let cat of data) {
        cat_rows += `<tr><td>${cat.id}</td><td>${cat.name}</td><td>${cat.color}</td><td>${cat.food}</td></tr>`;
      }
      cat_data.innerHTML = cat_rows;
    })
    .catch((err) => console.dir(err));
}

function ApplyCat() {
  alert("Your application has been sent! We will contact you shortly!");
}

function AddCat() {
  alert("We will contact you shortly!");
}

function ReservationCancel() {
  alert("Your reservation has now been cancelled!");
}
