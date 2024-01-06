const api = 'http://localhost:3000/data'
let box = document.querySelector('.box')
let btnAdd = document.querySelector('.btnAdd')
let dialogAdd = document.querySelector('.dialogAdd')
let formAdd = document.querySelector('.formAdd')

let dialogEdit = document.querySelector('.dialogEdit')
let formEdit = document.querySelector('.formEdit')



async function getData () {
    try {
        const response = await fetch(api);
        const data = await response.json()
        get(data)
    }
    catch (error) {
        console.log(error)
    }
}

let idx = null
function get(data) {

    data.forEach((elem) => {
        let container = document.createElement('div')
        container.classList.add('container')
         let h1 = document.createElement('h1')
        h1.innerHTML = elem.title
        let h2 = document.createElement('h2')
        h2.innerHTML = elem.city
        let imgd = document.createElement('img')
        imgd.src = elem.avatar
        
        let delButton = document.createElement('button')
        delButton.innerHTML = 'delete'

        let editButton = document.createElement('button')
        editButton.innerHTML = 'EDIT'


        editButton.onclick = () => {
            dialogEdit.showModal()
            formEdit['inpTitle'].value = elem.title
            formEdit['inpCity'].value = elem.city
            idx = elem.id
        }
        formEdit.onsubmit = async(event) => {
            event.preventDefault()
            // editUser(idx)
            try {
                const response = await fetch(`${api}/${idx}`, {
                    method: "PUT",
                    headers:
                    {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        title: formEdit["inpTitle"].value,
                        avatar: URL.createObjectURL(formEdit["inpAvatar"].files[0]),
                        city: formEdit['inpCity'].value,
                        id:new Date().getMilliseconds
                    })
                });

                }

            catch (error) {
                console.log(error);
            }
            dialogEdit.close()
            
    }
       
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'



        delButton.onclick = () => {
            deleteUser(elem.id)
        }


        
        btnAdd.onclick = () => {
            dialogAdd.showModal()
            
        }
        formAdd.onsubmit = (event) => {
         event.preventDefault()
            addUser()
            dialogAdd.close()
        }
        
        container.append(imgd,h1,h2,delButton,checkbox,editButton)
        box.append(container)
    })
   
}
getData()
// function editUser(id) {
    
// }
function addUser() {
    let newUser = {
        id: new Date().getMilliseconds(),
        city: formAdd['inpCity'].value,
        title: formAdd['inpTitle'].value,
        status:false
    }
    post(newUser)
    formAdd.reset()
}

async function post(user) {
    try {
        const response = await fetch(`${api}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });
        getData()
    } catch (error) {
        console.log(error);
    }
}

async function deleteUser(id) {
    try {
         const response = await fetch(`${api}/${id}`, {
        method:"DELETE"
         })
        getData()
    } catch (error) {
        console.log(error);
    }
   
  
}