// function AddCat() {
//     alert("We will contact you shortly!");
//   }
//Get();
const apiURL = "https://codissacats.azurewebsites.net/api/cat";
const AddCat = () => {
  let Name = document.getElementById("name").value;
  let Age = document.getElementById("age").value;
  let Character = document.getElementById("character").value;
  let Color = document.getElementById("catcolor").value;
  let LikeChildren = document.getElementById("likechildren").checked;
  let LikeAnimal = document.getElementById("likeanimal").checked;
  let Food = document.getElementById("food").value;
  let Status = "Looking for home";
  let Details = document.getElementById("details").value;
  let Demanding = document.getElementById("demanding").checked;

  let Picture = document.getElementById("picture").value;

  let newcat = {
    Name: Name,
    Age: Age,
    Character: Character,
    Color: Color,
    LikeChildren: LikeChildren,
    LikeAnimal: LikeAnimal,
    Food: Food,
    Status: Status,
    Details: Details,
    Demanding: Demanding,
    Picture: Picture,
  };

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(newcat),
  };
  fetch(apiURL, requestOptions)
    .then((res) => res.json())
    .then((data) => {
      console.dir(data);
      console.log("toimii");
    })
    .catch((error) => console.dir(error));
};