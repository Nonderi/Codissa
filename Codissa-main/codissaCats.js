document.addEventListener("DOMContentLoaded", Get);
function Get() {
  fetch("https://codissacats.azurewebsites.net/api/cat")
    .then((res) => res.json())
    .then((data) => {
      console.dir(data);
      let cat_data = document.getElementById("cat-tbody");
      let cat_rows = "";

      for (let cat of data) {
        cat_rows += `
        <div class="card" style=" display: grid; grid-template-columns: 1fr 1fr">
            
                <div class="card-body">
                    <dd><img src="${cat.picture}" width=420px></a></dd>
                </div>
            
                <div id="cat-tbody" class="card">
                    <div class="card-body">
                    <dt>Name</dt>
                    <dd>${cat.name}</dd>
                    <dt>Age</dt>
                    <dd>${cat.age}</dd>
                    <dt>Character</dt>
                    <dd>${cat.character}</dd>
                    <dt>Color</dt>
                    <dd>${cat.color}</dd>
                    <dt>Family friendly</dt>
                    <dd>${cat.likeChildren}</dd>
                    <dt>Likes other animals</dt>
                    <dd>${cat.likeAnimal}</dd>
                    <dt>Needs companion</dt>
                    <dd>${cat.needCompanion}</dd>
                    <dt>Demanding</dt>
                    <dd>${cat.demanding}</dd>
                    <dt>Food</dt>
                    <dd>${cat.food}</dd>
                    <dt>Status</dt>
                    <dd>${cat.status}</dd>
                    <dt>Details</dt>
                    <dd>${cat.details}</dd>
                
                    <div class="form-group"><button class="btn btn-primary btn-block my-button" type="button"
                    onClick="parent.location='codissaFosterForm.html?catid=${cat.id}'">Pick me</button>
                    
                    <button class="btn btn-primary btn-block my-buttonOrange" type="button"
                    onClick="parent.location='codissaDeleteReservation.html?catid=${cat.id}'">Cancel reservation</button>
                    
                    <button class="btn btn-primary btn-block my-buttonRed" type="button"
                    onClick="parent.location='DeleteCat.html?catid=${cat.id}'">Delete cat</button>
                    </div>
                    </div>
          </div>
          </div><br><br>
        `;
      }
      cat_data.innerHTML = cat_rows;
    })
    .catch((err) => console.dir(err));
}

const showResponse = (data) => {
  document.getElementById("result").style.display = "block";

  document.getElementById("name").innerText = data.name;
};
