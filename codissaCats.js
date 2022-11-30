// document.addEventListener("DOMContentLoaded", () => {
//  document.querySelector("#findCats").addEventListener("click", get)
// })

// function get(){
// // console.log("painike toimii")
document.addEventListener("DOMContentLoaded", fetch);

fetch("https://localhost:7021/api/Cat")
  .then((res) => res.json())
  .then((data) => {
    console.dir(data);
    let customer_data = document.getElementById("customer-tbody");
    let customer_rows =
      "<tr><th>id</th><th>nimi</th><th>yritys</th><th>email</th><th>url</th></tr>";
    for (let customer of data) {
      customer_rows += `<tr><td>${customer.id}</td><td>${customer.nimi}</td><td>${customer.yritys}</td><td>${customer.email}</td><td>${customer.url}</td></tr>`;
    }
    customer_data.innerHTML = customer_rows;
  })
  .catch((err) => console.dir(err));

function ApplyCat() {
  alert("Your application has been sent! We will contact you shortly!");
}

function AddCat() {
  alert("We will contact you shortly!");
}

function ReservationCancel() {
  alert("Your reservation has now been cancelled!");
}
