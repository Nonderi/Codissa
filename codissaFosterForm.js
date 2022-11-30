function ApplyCat(id) {
    alert("Your application has been sent! We will contact you shortly!");
    console.log(id)

    let url = "https://codissacats.azurewebsites.net/api/cat" + "/" + id;
    fetch (url)
    .then(res=>res.json())
    .then(cat=>
        { cat.status = "Reserved"
            const putMethod = {
                method: 'PUT', // Method itself
                headers: {
                 'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
                },
                body: JSON.stringify(cat)
        }
       fetch(url, putMethod)
       .then(response => response.json())
       .then(data => console.log(data)) // Manipulate the data retrieved back, if we want to do something with it
       .catch(err => console.log(err)) // Do something with the error
    })

    
   
  }

