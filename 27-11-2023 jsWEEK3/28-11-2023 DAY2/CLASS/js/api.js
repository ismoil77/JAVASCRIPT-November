
import { getData } from "./dom.js";

let api = ' http://localhost:3000/posts'
export async function searc(va) {
    try {
        const { data } = await axios.get(`${api}/?q=${va}`)
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

export async function dell(idx) {
    try {
        const { data } = await axios.delete(`${api}/${idx}`);
        get()

    } catch (error) {
        console.log(error);
    }
}

export async function get() {
    try {
        const { data } = await axios.get(api)
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

export async function edyyt(idx, userEd) {
    try {
        const { data } = await axios.put(`${api}/${idx}`, userEd)
        get()
    } catch (error) {
        
        console.log(error);
    }
}
export async function adddUser(user) { 
    try {
        const { data } = await axios.post(api,user)
get()
    } catch (error) {
        console.log(error);
    }
}
