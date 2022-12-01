// function AddCat() {
//     alert("We will contact you shortly!");
//   }
//Get();
function AddCat(){
  let Name = document.getElementById("Name").value;
  let Age = document.getElementById("age").value;
  let Character = document.getElementById("character").value;
  let Color = document.getElementById("catcolor").value;
  let LikeChildren = document.getElementById("likechildren").value;
  let LikeAnimal = document.getElementById("likeanimal").value;
  let Food = document.getElementById("food").value;
  let Status = document.getElementById("status").value;
  let Details = document.getElementById("details").value;

  var data = JSON.stringify({
    "Name": Name,
    "age": Age,
    "character": Character,
    "catcolor": Color,
    "likechildren": LikeChildren,
    "likeanimal": LikeAnimal,
    "food": Food,
    "status": Status,
    "details": Details
  });

  fetch("https://codissacats.azurewebsites.net/api/cat", requestOptions)
        .then(res=>res.json())
        .then(data=>{
            console.dir(data)
            showResponse(data)
        })
        .catch(error=>console.dir(error))

      }

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

  