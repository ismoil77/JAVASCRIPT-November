let api = 'http://localhost:3000/posts'
let box = document.querySelector(".box")
let dialogAdd = document.querySelector(".dialogAdd")
let btnAdd = document.querySelector(".btnAdd")
let formAdd = document.querySelector('.formAdd')
let dialogEdit = document.querySelector(".dialogEdit")
let formEdit = document.querySelector('.formEdit')
let idx = null
let select = document.querySelector('select')
let searchh = document.querySelector('.searchh')

searchh.oninput = async () => {
    try {
           const { data } = await axios.get(`${api}?q=${searchh.value}`)
    getData(data) 
    } catch (error) {
        console.log(error);
    }

}
select.onclick = async () => {
   if (select.value == "all") {
            getUsers()
        }
             const { data } = await axios.get(`${api}?completed=${select.value}`)
             getData(data)

}
btnAdd.onclick = () => {
    dialogAdd.showModal()
}
formAdd.onsubmit = (event) => {
    event.preventDefault()
    let newUser = {
        title: formAdd['inpTitle'].value,
        completed:false
    }
    post(newUser)
    formAdd.reset()
}
async function getUsers() {
    try {
        const { data } = await axios.get(`${api}`)
        getData(data)
    } catch (error) {
        console.log(error);
    }

}
async function post(newUser) {
    try {
         const { data } = await axios.post(api, newUser)
        getUsers()
    } catch (error) {
        console.log(error);
    }
   
}

function getData(data) {
    box.innerHTML = ""
    data.forEach((elem) => {
        let div = document.createElement('div')
        let h1 = document.createElement('h1')
        h1.innerHTML = elem.title

        let check = document.createElement('input')
        check.type = 'checkbox'
        check.checked = elem.completed
        check.onclick = () => {
            idx = elem.id
            elem.completed = !elem.completed
            edit(elem)
        }
        if (elem.completed == true) {
            h1.style.color = 'red'
        }
        let btnDel = document.createElement('button')
        btnDel.innerHTML = 'DELETE'
        btnDel.onclick = async() => {
            try {
                const { data } = await axios.delete(`${api}/${elem.id}`)
          getUsers()
            } catch (error) {
                console.log(error);
            }
        }
        

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'EDIT'
        
        btnEdit.onclick = () => {
            formEdit['inpTitle'].value = elem.title
            idx = elem.id
            dialogEdit.showModal()
            formEdit.onsubmit = (event) => {
                event.preventDefault()
                let user = {
                    ...user,
                    title: formEdit['inpTitle'].value,
                    completed:false
                }
             
                edit(user)
                formEdit.reset()
            }
        }
        
        div.append(h1,btnDel,btnEdit,check)
        box.append(div)
    })
}


async function edit(user) {
    try {
        const { data } = await axios.put(`${api}/${idx}`, user)
        getUsers()
    } catch (error) {
        console.log(error);
    }
}

getUsers()