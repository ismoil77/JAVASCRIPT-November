import { getData,getData2 ,getData3,getData4} from "./dom.js";



let api = 'https://restcountries.com/v3.1/all'


export async function getAsync() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        getData(data)
    } catch (error) {
        
        console.log(error);
    }
}

export async function searc(val) {
    try {
        const response = await fetch(api)
        const data = await response.json()
        // val = val.trim()
        // val[0].toUpperCase()
        let val2 = val.charAt(0).toUpperCase()+val.slice(1)
        if (val2 == "") {
            getData(data)
        }
        data.forEach((value, index, array) => {

            if (value.name.common == val2) {
                getData2(value)
            }
            
        })
        // data.name.common
       
    } catch (error) {

        console.log(error);
    }
}


export async function searcRus(val) {
    try {
        const response = await fetch(api)
        const data = await response.json()
        // val = val.trim()
        // val[0].toUpperCase()
        let val2 = val.charAt(0).toUpperCase() + val.slice(1)
        if (val2 == "") {
            getData(data)
        }
        data.forEach((value, index, array) => {

            if (value.name.common == val2) {
                getData2(value)
            }

        })
        // data.name.common

    } catch (error) {

        console.log(error);
    }
}
export async function sel(val) {
  let obsh = []
    try {
        const response = await fetch(api)
        const data = await response.json()
        val = val.trim()
        // val[0].toUpperCase()
        let val2 = val.charAt(0).toUpperCase() + val.slice(1)
        if (val2 == "All") {
            getAsync()
        }
        if (val2 == "") {
            getData(data)
        }
        data.forEach((value, index, array) => {
        
            if (value.region == val2) {
               obsh.push(value)
            }

        })
       
            getData3(obsh)
         
        // data.name.common

    } catch (error) {

        console.log(error);
    }
}






export async function lan(val) {
    try {
        const response = await fetch(api)
        const data = await response.json()
        if (val == "eng") {
            getAsync()
        }
       getData4(data)
        // data.name.common

    } catch (error) {

        console.log(error);
    }
}

