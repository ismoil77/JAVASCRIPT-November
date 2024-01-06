let box = document.querySelector('.box')
let form = document.querySelector('.form')
let api = "https://64f845be824680fd217f5861.mockapi.io/api/ismo/ismoil"


async function getUsers() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        get(data)
    }
    catch (error) {
        console.log(error)
    }
}
function get(data) {
    data.forEach((elem) => {
    let titleh = document.createElement('h1')
        titleh.innerHTML = elem.title
        
        let cityh = document.createElement('h1')
        cityh.innerHTML = elem.city
    
        box.append(titleh,cityh)

    })
}
getUsers()



async function post(user) {
    try {
        const response = await fetch(`${url}`, {
            method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json", },
            body: JSON.stringify(user)
        });
    }
    catch (error) {
        console.log(error);
    }
}

///event.target[]