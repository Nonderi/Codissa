// function AddCat() {
//     alert("We will contact you shortly!");
//   }
//Get();
function AddCat(){
  var Name = document.getElementById("name").value;
  var Age = document.getElementById("age").value;
  var Character = document.getElementById("character").value;
  var Color = document.getElementById("catcolor").value;
  var LikeChildren = document.getElementById("likechildren").value;
  var LikeAnimal = document.getElementById("likeanimal").value;
  var Food = document.getElementById("food").value;
  var Status = document.getElementById("status").value;
  var Details = document.getElementById("details").value;

  var data = JSON.stringify({
    "name": Name,
    "age": Age,
    "character": Character,
    "catcolor": Color,
    "likechildren": LikeChildren,
    "likeanimal": LikeAnimal,
    "food": Food,
    "status": Status,
    "details": Details
  });

  fetch("https://codissacats.azurewebsites.net/api/cat",
  {method:"POST", body:data, headers:{"Content-Type":"application/json"}})
  .then(res=>res.json())
  .then(data => console.dir(data))


      // if(res.ok){
      //     Get()
      // }
      // else{
      //     console.dir(res)
      // }
  
  .catch(error=>console.dir(error))
 }




  // let newcat = {  Status: "looking for family", Details: "-", Picture: "" }
  //       const AddCat = () => {
  //           fetch("https://codissacats.azurewebsites.net/api/cat", {
  //               method: 'POST',
  //               body: JSON.stringify(newcat),
  //               headers: { "accept": "application/json", "Content-Type": "application/json" }
  //           }).then(res => res.json())
  //               .then(data => console.dir(data))
  //       }

  