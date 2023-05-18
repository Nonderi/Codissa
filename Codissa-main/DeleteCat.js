const urlParams = new URLSearchParams(window.location.search);

function DeleteCat() {
  alert("Cat deleted!");
  let catid = urlParams.get("catid");

  let url = "https://codissacats.azurewebsites.net/api/cat" + "/" + catid;
  fetch(url)
    .then((res) => res.json())
    .then((cat) => {
        const deleteMethod = {
        method: "DELETE", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        }
      };
      fetch(url, deleteMethod)
        .then((response) => response.text())
        .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .catch((err) => console.log(err)); // Do something with the error
    });
}
