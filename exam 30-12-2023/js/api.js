import { getData } from "./dom.js"


let api = ' http://localhost:3000/posts'



export async function post(newUser) {
    try {
        const response = await fetch(api,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });
        get()
    }
    catch (error) {
        console.log(error)
    }
}

export async function put(idx,newUser) {
    try {
        const response = await fetch(`${api}/${idx}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });
        get()
    }
    catch (error) {
        console.log(error)
    }
}

export async function delet(idx) {
    try {
        const response = await fetch(`${api}/${idx}`, {
            method:'delete'
        })

    } catch (error) {
        console.log(error);
    }
}


export async function searc(val) {
    try {
        const response = await fetch(`${api}?q=${val}`)
        const data = await response.json()
        console.log(data);
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

export async function get() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data);
        getData(data)
    } catch (error) {
        console.log(error);
    }
}


