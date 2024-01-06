import { getData } from "./dom.js";



let api = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=70e1ed322b02acbc57d443dd91065f3e'




export async function getAsync() {
    try {
        const { data } = await axios.get(api) 
        getData(data)
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}
export async function getSearch(val) {
    try {
        const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${val}&appid=70e1ed322b02acbc57d443dd91065f3e`)
        getData(data)
        // console.log(data);
    } catch (error) {
        console.log(error);
    }
}