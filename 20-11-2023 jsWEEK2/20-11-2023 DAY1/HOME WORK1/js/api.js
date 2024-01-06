let api = 'http://localhost:3000/data'
import { inputSearch, selectStatus, selectCity, idx,idxx,get,} from "./dom.js";


inputSearch.oninput = async () => {
    try {

        const { data } = await axios.get(`${api}?q=${inputSearch.value}`)
        get(data)

    }
    catch (error) {
        console.log(error);
    }
}
selectStatus.onclick = async () => {
    try {
        if (selectStatus.value == "al") {
            getData()
            console.log(selectStatus.value);
        }
        else {
            const { data } = await axios.get(`${api}?status=${selectStatus.value}`)
            get(data)

        }
    }
    catch (error) {
        console.log(error);
    }

}
selectCity.onclick = async () => {
    try {
        if (selectCity.value == "all") {
            getData()
        }
        else {
            const { data } = await axios.get(`${api}?city=${selectCity.value}`)
            get(data)

        }
    }
    catch (error) {
        console.log(error);
    }

}
export async function getData() {
    try {
        const { data } = await axios.get(api)
        get(data)
    } catch (error) {
        console.log(error);
    }
}


export async function addUser(userr) {
    try {
        const response = await axios.post(api, userr)

        getData()

    } catch (error) {
        console.log(error);
    }
}
export async function deleteBtn(idx) {
    try {
        const response = await axios.delete(`${api}/${idx}`)
        getData()
    } catch (error) {
        console.log(error);
    }

}

export async function edituser(idxx, user) {
    {
        try {
            const { data } = await axios.put(`${api}/${idxx}`, user)
            getData()
        } catch (error) {
            console.log(error);
        }
    }

}
export async function complUser(idx, user) {
    {
        try {
            const response = await axios.put(`${api}/${idx}`, user)
            getData()
        } catch (error) {
            console.log(error);
        }
    }

}