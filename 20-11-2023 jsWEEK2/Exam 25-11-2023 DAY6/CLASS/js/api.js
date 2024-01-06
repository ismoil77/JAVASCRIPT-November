import { getData } from "./dom.js";


let api = 'http://localhost:3000/posts'

export async function sortt() {
    try {
        const response = await fetch(`${api}`)
        const data = await response.json()
        data.sort((a,b)=>a.email.toLocaleLowerCase().localeCompare(b.email.toLocaleLowerCase()))
    getData(data)
    } catch (error) {
        console.log();
    }
}

export async function get() {
    try {
        const { data } = await axios.get(`${api}`)
getData(data)
    getData(data)
    } catch (error) {
        console.log(error);
    }
   
}
export async function filterr(valuee) {
    try {
        console.log(valuee);
        if (valuee == "ALL") {
          get()
        }
        else {
            const { data } = await axios.get(`${api}?status=${valuee}`)
            getData(data)
        }
         
    } catch (error) {
        console.log(error);
        
    }
   
}
export async function searchUser(valu) {
    const response = await fetch(`${api}?q=${valu}`)
    const data = await response.json()
    getData(data)
}
export async function editUser(idx, user) {
    try {
        const { data } = await axios.put(`${api}/${idx}`,user)
        get()
    } catch (error) {
        console.log(error);
    }
}

export async function addUser(user) {
    try {
        const { data } = await axios.post(`${api}`, user)
        get()
    } catch (error) {
        console.log(error);
    }
}
export async function deleteUser(id) {
    try {
        const response = await fetch(`${api}/${id}`, {
            method:"DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}
