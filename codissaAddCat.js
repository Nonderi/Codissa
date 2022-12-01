// function AddCat() {
//     alert("We will contact you shortly!");
//   }

  let newbeer = { Name: "Kisu", Character: "Snuggly", Color: "Black", LikeChildren: true, LikeAnimal: false, Food:"likes everything", Status: "looking for family", Details: "-", Picture: "" }
        const AddCat = () => {
            fetch("https://codissacats.azurewebsites.net/api/cat", {
                method: 'POST',
                body: JSON.stringify(newbeer),
                headers: { "accept": "application/json", "Content-Type": "application/json" }
            }).then(res => res.json())
                .then(data => console.dir(data))
        }
