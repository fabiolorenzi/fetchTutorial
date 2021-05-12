fetch("https://reqres.in/api/users")
    .then(res => {
        if (res.ok) {
            console.log("Successful");
        } else {
            throw Error("ERROR");
        };
        return res.json();
    })
    .then(data => {
        console.log(data);
        const html = data.data.map(user => {
            return `<p>Name: ${user.first_name}</p>`
        }).join("");
        document.getElementById("app").insertAdjacentHTML("afterbegin", html);
    })
    .catch(error => console.log(error))