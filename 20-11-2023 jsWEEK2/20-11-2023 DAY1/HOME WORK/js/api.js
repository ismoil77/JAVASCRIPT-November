import { get } from "./dom.js";

// let arr2 = arr.filter((value, index, array) => {return arr.indexOf(value)==index})
let api = 'http://localhost:3000/data'







export async function getData() {
    try {
        const {data} = await axios.get(api)
        get(data)
    } catch (error) {
        console.log(error);
    }
}


async function addTovar(newTovar) {
    try {
        const { data } = await axios.post(`${api}`, newTovar)
        getData()
    } catch (error) {
        console.log(error);
    }
}

async function kolvoIzmen(elem, id) {
    try {
        const response = await fetch(`${api}/${id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(elem),
            });
    }
    catch (error) {
        console.log(error);
    }
}