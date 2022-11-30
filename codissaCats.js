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
      let cat_rows = "";

        // "<tr><th>name</th><th>color</th><th>food</th></tr>";
      for (let cat of data) {
        cat_rows += 
        `<form class="post">
        <td><div id="cat-tbody" class="card" style="width: 30rem; height: 60rem;">
        <div class="card-body"><dt>Name</dt><dd>${cat.name}</dd>
        <dt>Age</dt><dd>${cat.age}</dd>
        <dt>Character</dt><dd>${cat.character}</dd>
        <dt>Color</dt><dd>${cat.color}</dd>
        <dt>Family friendly</dt><dd>${cat.likeChildren}</dd>
        <dt>Likes other animals</dt><dd>${cat.likeAnimal}</dd>
        <dt>Needs companion</dt><dd>${cat.needCompanion}</dd>
        <dt>Demanding</dt><dd>${cat.demanding}</dd>
        <dt>Food</dt><dd>${cat.food}</dd>
        <dt>Status</dt><dd>${cat.status}</dd>
        <dt>Details</dt><dd>${cat.details}</dd></div>

        <div class="form-group"><button class="btn btn-primary btn-block" type=button
        onClick="parent.location='codissaFosterForm.html'">Pick me</button>
        </div>
        </div>
        </td>
        </form>
        `;
        // `<tr><td id ="name">${cat.name}</td><td>${cat.color}</td><td>${cat.food}</td></tr>`;
      }
      cat_data.innerHTML = cat_rows;

    })
    .catch((err) => console.dir(err));
  }

const showResponse = (data) => {

  document.getElementById("result").style.display = "block"

  document.getElementById("name").innerText = data.name



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
