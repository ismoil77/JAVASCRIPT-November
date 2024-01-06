import { getData } from "./dom.js"
import { getData2 } from "./dom.js"

let addForm = document.querySelector('.addForm')

let api = " http://localhost:3000/posts"

// let arr2 = arr.filter((value, index, array) => {return arr.indexOf(value)==index})








// export async function deleteDuplicat() {
//     try {
//         const { data } = await axios.get(api)

//         data.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
// let sd = [];
//         for (let i = 0; i < data.length; i++) {
//             if (data[i].title.toLowerCase() == data[i + 1].title.toLowerCase()) {
//                 sd.push(data[i].id)

//             }
//         }
//         // getData(arr2)
//         // getData2(arr2)

//     } catch (error) {
//         console.log(sd);
//         sd.forEach((el, index, array) => {
//             deleteDup(el)
//         })
//     }
// }

export async function addUser(newUser) {
    try {
        const {data} = await axios.post(api,newUser)
    } catch (error) {
        console.log(error);
    }
}

export async function sortUser(){
  try {
      const { data } = await axios.get(api)
      data.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
      getData(data)
      getData2(data)
  } catch (error) {
    console.log(error);
  }
}
   let sd = []
export async function deleteDuplicat() {
    try {
        const { data } = await axios.get(api)
       
        data.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
     
        for (let i = 0; i < data.length; i++) {
            if (data[i].title.toLowerCase() == data[i + 1].title.toLowerCase()) {
                sd.push(data[i].id)
               
                  }            
        }
        // getData(arr2)
        // getData2(arr2)
         
    } catch (error) {
   console.log(sd);
        sd.forEach((value) => {
           deleteDup(value)
       })
        console.log(error);
    }
}

export async function deleteDup(value) {
    const { data } = await axios.delete(`${api}/${value}`)
    getAsync()
}
export async function filt(valu) {
    try {
         if (valu == "all") {
        getAsync()
        getAsync2()
        }
         else {
            const { data } = await axios.get(`${api}?completed=${valu}`)
    getData(data)
    getData2(data)  
        }
       
    } catch (error) {
        console.log(error);
    }
   
    
}

export async function sear(valu) {
    try {
       
            const { data } = await axios.get(`${api}?q=${valu}`)
            getData(data)
            getData2(data)
        

    } catch (error) {
        console.log(error);
    }


}
export async function getAsync() {
    const { data } = await axios.get(api)
    getData(data)
}


export async function getAsync2() {
    const response = await fetch(api)
    const data = await response.json()
    getData2(data)
}

export async function deleteUser(id) {
    const { data } = await axios.delete(`${api}/${id}`)
    getAsync()
}

export async function deleteUser2(id) {
    try {
        const response = await fetch(`${api}/${id}`, {
            method: "DELETE",
        });
        getAsync2()
    } catch (error) {
        console.log(error);
    }
}

export async function putUser(id,elem) {
    const { data } = await axios.put(`${api}/${id}`,elem)
    getAsync()
}

export async function putUser2(id, elem) {
    try {
        const response = await fetch(`${api}/${id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(elem)
            });
        getAsync2()
    } catch (error) {
        console.log(error);
    }
}


// export async function addUser(newUser) {
//     const { data } = await axios.post(`${api}`,newUser)
//     getAsync()
// }

export async function addUser2(newUser) {
    try {
        const response = await fetch(api,
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });
        getAsync2()
    }
    catch (error) {
        console.log(error)
    }
}

export async function editUse(idx, user) {
    const { data } = await axios.put(`${api}/${idx}`, user)
    getAsync()
}


export async function editUse2(idx,user) {
    try {
        const response = await fetch(`${api}/${idx}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
        getAsync2()
    }
    catch (error) {
        console.log(error)
    }
}