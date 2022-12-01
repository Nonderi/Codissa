const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get("catid"));

function DeleteCat(id) {
  alert("Cat deleted!");
  console.log(id);
  let catid = urlParams.get("catid");
  //let newid = document.getElementById("id").value;
  console.log(id);

  let url = "https://codissacats.azurewebsites.net/api/cat" + "/" + catid;
  fetch(url)
    .then((res) => res.json())
    .then((cat) => {
        const deleteMethod = {
        method: "DELETE", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        }
        // body: JSON.stringify(cat),
      };
      fetch(url, deleteMethod)
        .then((response) => response.text())
        .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch((err) => console.log(err)); // Do something with the error
    });
}
