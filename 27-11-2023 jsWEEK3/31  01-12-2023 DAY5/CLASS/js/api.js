import { getData,getData2 } from "./dom.js"



let api = 'http://localhost:3000/posts'
 
export async function deletw(id) {
    try {
        const { data } = await axios.delete(`${api}/${id}`) 
        get()
    } catch (error) {
        
        console.log(error);
    }
}

export async function edi(user,idx) {
try {
    const { data } = await axios.put(`${api}/${idx}`, user)
} catch (error) {
    
    console.log(error);
}    
}


export async function addUser(newUser) {
    try {
        const { data } = await axios.post(api, newUser)
        get()
    } catch (error) {
        
        console.log(error);
    }
}


export async function searc(val) {
try {
    const response = await fetch(`${api}?q=${val}`)
    const data = await response.json()
    getData(data)
    getData2(data)

} catch (error) {
    
    console.log(error);
}    
}


export async function get() {

    try {
        const response = await fetch(api)
        const  data  = await response.json()
        getData(data)
    getData2(data)
    } catch (error) {
        console.log(error);
    }
}
get()