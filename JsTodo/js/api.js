import { getData } from "./dom.js";
let api = 'http://localhost:3000/posts'



export async function get() {
    try {
        const { data } = await axios.get(api)
        getData(data)
    } catch (error) {
        console.log(error);
    }
   
}

export async function deleteUser(id){
    try {
const { data } = await axios.delete(`${api}/${id}`)
      get()
    } catch (error) {
        console.log(error);
    }
}




export async function editUser(idx, user) {
    try {
        const { data } = await axios.put(`${api}/${idx}`, user)
        get()
    } catch (error) {
        console.log(error);
    }
}