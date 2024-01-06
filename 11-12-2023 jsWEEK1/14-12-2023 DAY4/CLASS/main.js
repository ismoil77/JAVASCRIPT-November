let api = "http://localhost:3000/posts"
let box = document.querySelector('.box')
let formEdit = document.querySelector('.formEdit')
let formAdd = document.querySelector('.formAdd')
let dialogEdit = document.querySelector('.dialogEdit')
let dialogAdd = document.querySelector('.dialogAdd')
let idx = null
let btnAdd = document.querySelector('.btnAdd')
let search = document.querySelector('.search')
let select = document.querySelector('.select')

async function get() {
    try {
        const response = await fetch(`${api}`)
        const data = await response.json()
        getData(data)
        
    } catch (error) {
        console.log(error);
    }
}
function getData(data) {
    box.innerHTML = ""
    data.forEach((elem) => {
        let container = document.createElement('div')
        container.style.display = 'flex'
        container.style.gap = '20px'
        let h1 = document.createElement('h1')
        h1.innerHTML = elem.title

        let h11 = document.createElement('h1')
        h11.innerHTML = elem.completed


        let btnDel = document.createElement('button')
        btnDel.innerHTML = 'delete'

        let btnInfo = document.createElement('button')
        btnInfo.innerHTML = 'INFO'

        btnInfo.onclick = () => {
            alert(`Name: ${elem.title}, completed: ${elem.completed}`)
        }
        btnDel.onclick = () => {
            deleteUser(elem.id)
        }

        let btnEdit = document.createElement('button')
        btnEdit.innerHTML = 'edit'
        btnEdit.onclick = () => {
            idx = elem.id
            console.log(idx,elem.id);
            dialogEdit.showModal()
            formEdit['inpTitle'].value = elem.title
            formEdit.onsubmit = (event) => {
                event.preventDefault()

                let newUser = {
                    title: formEdit['inpTitle'].value,
                    completed:false
                }
                put(newUser,idx)
                dialogEdit.close()

                // formEdit.reset()
            }
        }


        let checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.checked = elem.completed
        
        select.onclick = async () => {
            console.log(select.value);
            try {
                const response = await fetch(`${api}?completed=${select.value}`)
                const info = await response.json()
                getData(info)


                // get()
            } catch (error) {
                console.log(error);

            }
        }
        
        checkBox.onclick = () => {
          
            elem.completed = !elem.completed
            compl(elem,elem.id)
        }
        if (elem.completed) {
               h1.style.color = 'red'
        }
       else {
            h1.style.color = 'black'
        }
         search.oninput = async() => {
            
            try {
                const response = await fetch(`${api}?q=${search.value}`)
                const info = await response.json()
                getData(info)
                
                
                // get()
            } catch (error) {
                console.log(error);
            
            }
        }
        container.append(h1,h11,btnEdit,btnDel,btnInfo,checkBox)
        box.append(container)

        
    })
}
get()
btnAdd.onclick = () => {
    dialogAdd.showModal() 
    formAdd.onsubmit = (event) => {
        let newUser = {
        title: formAdd['inpTitle'].value,
        completed:false
    }
        addUser(newUser)
        formAdd.reset()
    }
    
}
async function put(user, idx) {
    console.log(idx);
    try
    {
        const response = await fetch(`${api}/${idx}`,
            {
                method: "PUT",
                headers: { Accept: "application/json", "Content-Type": "application/json", },
                body: JSON.stringify(user)
            });
        // get()
    } catch (error) {
        console.log(error);
    }


}
async function compl(user, id) {
    try {
        const response = await fetch(`${api}/${id}`,
            {
                method: "PUT",
                headers: { Accept: "application/json", "Content-Type": "application/json", },
                body: JSON.stringify(user)
            });
        // get()
    } catch (error) {
        console.log(error);
    }


}
async function addUser(newUser) {
    try {
        const response = await fetch(`${api}`,
            {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json", },
                body: JSON.stringify(newUser)
            });
        // get()
    } catch (error) {
        console.log(error);
    }


}
async function deleteUser (id) {
    try {
        const response = await fetch(`${api}/${id}`, {
            method: "DELETE",
        });
        // get()
    } catch (error) {
        console.log(error);
    }
}