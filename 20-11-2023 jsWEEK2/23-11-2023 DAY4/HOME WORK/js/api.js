import { getData,idx } from "./dom.js";
let api = 'http://localhost:3000/posts'


 
export async function getAsync() {
    try {
       const { data } = await axios.get(api)
    getData(data) 
    } catch (error) {
        console.log(error);
    }
    
}
export async function editUser(idx, user) {
    try {
         const { data } = await axios.put(`${api}/${idx}`,user)
         getAsync()
    } catch (error) {
        console.log(error);
    }
   
}
export async function deleteUser(id) {
    try {
        const { data } = await axios.delete(`${api}/${id}`)
    getAsync()
    } catch (error) {
        console.log(error);
    }
    
}
export async function addUse(user) {
    const { data } = await axios.post(`${api}`, user)
    getAsync()
}
export async function filt(a) {
    try {
        if (a == 'All') {
            getAsync()
        }
        else {
            const { data } = await axios.get(`${api}?title=${a}`)
            getData(data)
        }
    }
    catch (error) {
        console.log(error);
    }
   
}
   
