const urlParams = new URLSearchParams(window.location.search);

function ApplyCat(id) {
  alert("Your application has been sent! We will contact you shortly!");
  let catid = urlParams.get("catid");

  let url = "https://codissacats.azurewebsites.net/api/cat/" + catid;
  fetch(url)
    .then((res) => res.json())
    .then((cat) => {
      cat.status = "Reserved";
      const putMethod = {
        method: "PUT", // Method itself
        headers: {
          "Content-type": "application/json; charset=UTF-8", // Indicates the content
        },
        body: JSON.stringify(cat),
      };
      fetch(url, putMethod)
        .then((response) => response.json())
        .then((data) => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
        .then((cat => cat.Fosters.Append(data)))
        .catch((err) => console.log(err)); // Do something with the error
    });
}
