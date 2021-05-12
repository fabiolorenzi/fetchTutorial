async function finder(id) {
    fetch("https://reqres.in/api/users")
    .then(response => {
        if (response.ok) {
            console.log("Successful");
            return response.json();
        } else {
            throw Error("Not Successful");
        };
    })
    .then(data => {
        console.log(data);
        const html = data.data.map(user => {
            if (user.id >= id) {
                return `<p>Name: ${user.first_name}</p>`
            }
        }).join("");
        document.getElementById("app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => console.log(error));
};

finder(1);