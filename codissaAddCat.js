// function AddCat() {
//     alert("We will contact you shortly!");
//   }
//Get();
const apiURL='https://codissacats.azurewebsites.net/api/cat'
const AddCat = () => {
  let Name = document.getElementById("name").value;
  let Age = document.getElementById("age").value;
  let Character = document.getElementById("character").value;
  let Color = document.getElementById("catcolor").value;
  let LikeChildren = document.getElementById("likechildren").value;
  let LikeAnimal = document.getElementById("likeanimal").value;
  let Food = document.getElementById("food").value;
  let Status = document.getElementById("status").value;
  let Details = document.getElementById("details").value;

  let newcat={Name:Name, Age:Age, Character:Character,Color:Color,LikeChildren:LikeChildren, LikeAnimal:LikeAnimal, Food:Food, Status:Status, Details:Details}

  var myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method:'POST',
    headers: myHeaders,
    body: JSON.stringify(newcat)
  };
  fetch(apiURL, requestOptions)
    .then(res=>res.json())
    .then(data=>{
      console.dir(data)
      showResponse(data)
      console.log("toimii")
    })
    .catch(error=>console.dir(error))
  }

  const showResponse = (data) => {

      //document.getElementById("result").style.display = "block"

      document.getElementById("id").innerText = data.Id
      document.getElementById("name").innerText = data.Name
      document.getElementById("age").innerText = data.Age
      document.getElementById("character").innerText = data.Character
      document.getElementById("color").innerText = data.Color
      document.getElementById("likechildren").innerText = data.LikeChildren
      document.getElementById("likeanimal").innerText = data.LikeAnimal
      document.getElementById("food").innerText = data.Food
      document.getElementById("status").innerText = data.Status
      document.getElementById("details").innerText = data.Details




  }

//   var data = JSON.stringify({
//     "Name": Name,
//     "age": Age,
//     "character": Character,
//     "catcolor": Color,
//     "likechildren": LikeChildren,
//     "likeanimal": LikeAnimal,
//     "food": Food,
//     "status": Status,
//     "details": Details
//   });

//   fetch("https://codissacats.azurewebsites.net/api/cat", {
//   method: 'POST',
//   body: JSON.stringify(AddCat),
//   headers: { "accept": "application/json", "Content-Type": "application/json" }
// })
//   .then(res=>res.json())
//         .then(data=>{
//             console.dir(data)
//             showResponse(data)
//         })
//         .catch(error=>console.dir(error))

//       }

//   fetch("https://codissacats.azurewebsites.net/api/cat",
//   {method:"POST", body:data, headers:{"Content-Type":"application/json"}})
//   .then(res=>res.json())
//   .then(data => console.dir(data))


//       // if(res.ok){
//       //     Get()
//       // }
//       // else{
//       //     console.dir(res)
//       // }
  
//   .catch(error=>console.dir(error))
//  }




  // let newcat = {  Status: "looking for family", Details: "-", Picture: "" }
  //       const AddCat = () => {
  //           fetch("https://codissacats.azurewebsites.net/api/cat", {
  //               method: 'POST',
  //               body: JSON.stringify(newcat),
  //               headers: { "accept": "application/json", "Content-Type": "application/json" }
  //           }).then(res => res.json())
  //               .then(data => console.dir(data))
  //       }

  