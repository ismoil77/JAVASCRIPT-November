import { getData } from "./dom.js"


let api = "http://localhost:3000/data"
let apiInfo = 'http://localhost:3000/dataInfoJob'


export async function editUser(user, idx) {
    try {
        const { data } = await axios.put(`${api}/${idx}`, user)
        get()
    } catch (error) {
        console.log(error);
    }
}

export async function filtCat(val) {
    try {
        if (val == "all") {
            get()
        }
        else {
            const { data } = await axios.get(`${api}?catJob=${val}`)
        getData(data)
        }
        
    } catch (error) {
        console.log(error);
    }
}
export async function filtLevel(val) {
    try {
        if (val == "all") {
            get()
        }
        else {
            const { data } = await axios.get(`${api}?level=${val}`)
            getData(data)
        }

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