import { deleteUser, putUser, addUser, editUse, filt, sear, sortUser, deleteDuplicat } from "./api.js"
import { deleteUser2, putUser2, addUser2, editUse2 } from "./api.js"

let box = document.querySelector('.box')
let box1 = document.querySelector('.box1')
let add = document.querySelector('.add')
let add2 = document.querySelector('.add2')
let addDialog = document.querySelector('.addDialog')
let formAdd = document.querySelector('.formAdd')
let editDialog = document.querySelector('.editDialog')
let formEdit = document.querySelector('.formEdit')
let idx = null
let comp = null
let select = document.querySelector('.select')
let search = document.querySelector('.search')
let dark = document.querySelector('.dark')
let light = document.querySelector('.light')
let sort = document.querySelector('.sort')
let delDup = document.querySelector('.delDup')


delDup.onclick = () => {
    deleteDuplicat()
}
sort.onclick = () => {
    sortUser()
}
dark.onclick = () => {
    document.body.style.backgroundColor = '#1c1c1c'
    document.body.style.color = 'white'
    search.style.backgroundColor = '#1c1c1c'
    search.style.border = '2px solid white'
    searchplaceholder.style.color = 'red'

}
light.onclick = () => {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
    search.style.backgroundColor = 'white'
    search.style.border = '2px solid black'


}
search.oninput = () => {
    sear(search.value)
}

select.onclick = () => {
    filt(select.value)
}
add.onclick = () => {
    addDialog.showModal()
}
formAdd.onsubmit = (event) => {
    event.preventDefault()
    let newUser = {
        title: formAdd['inpTitle'].value,
        completed:false
    }
    addUser2(newUser)
    formAdd.reset()
    addDialog.close()
}

export function getData(data) {
    box.innerHTML = ""
    data.forEach((elem) => {
        let tr = document.createElement('tr')

        let tdId = document.createElement('td')
        tdId.innerHTML = elem.id

        let tdName = document.createElement('td')
        tdName.innerHTML = elem.title
        let tdCom = document.createElement('td')
        tdCom.innerHTML = elem.completed

        let tdDel = document.createElement('img')
        tdDel.src = "/img/delete_4041994.png"
        tdDel.style.width = '25px'
        tdDel.onclick = () => {
            deleteUser(elem.id)
        }
        tdDel.onmouseover=()=>{
            tr.style.background = 'red'
        }
        tdDel.onmouseout = () => {
            tr.style.background = 'none'
        }



        let tdEdit = document.createElement('img')
        tdEdit.src = "/img/9349889.png"
        tdEdit.style.width = '25px'
    
        tdEdit.onclick = () => {
            editDialog.showModal()
            formEdit['inpTitle'].value = elem.title
            idx = elem.id
            comp = elem.completed
        }
        formEdit.onsubmit = (event) => {
            event.preventDefault()
            let user = {
                title: formEdit['inpTitle'].value,
                completed:comp
            }
            editUse(idx,user)
        }


        let tdCheck = document.createElement('input')
        tdCheck.type = 'checkbox'
        tdCheck.checked = elem.completed
        tdCheck.onclick = () => {
            elem.completed = !elem.completed
            putUser(elem.id,elem)
        }
        tdCheck.onmouseover = () => {
            tr.style.background = 'green'

        }
        tdCheck.onmouseout = () => {
            tr.style.background = 'none'

        }


        tr.append(tdId, tdName,tdCom, tdDel, tdEdit, tdCheck)
        box.append(tr)
    })
}







export function getData2(data) {
    box1.innerHTML = ""
    data.forEach((elem) => {
        let container = document.createElement('div')

        let tdId = document.createElement('h1')
        tdId.innerHTML = elem.id

        let tdName = document.createElement('h2')
        tdName.innerHTML = elem.title
        let tdCom = document.createElement('h3')
        tdCom.innerHTML = elem.completed

        let tdDel = document.createElement('button')
        tdDel.innerHTML = 'delete'
        tdDel.onclick = () => {
            deleteUser2(elem.id)
        }


        let tdEdit = document.createElement('button')
        tdEdit.innerHTML = 'Edit'
        tdEdit.onclick = () => {
            editDialog.showModal()
            formEdit['inpTitle'].value = elem.title
            idx = elem.id
            comp = elem.completed
        }
        formEdit.onsubmit = (event) => {
            event.preventDefault()
            let user = {
                title: formEdit['inpTitle'].value,
                completed: comp
            }
            editUse2(idx, user)
        }


        let tdCheck = document.createElement('input')
        tdCheck.type = 'checkbox'
        tdCheck.checked = elem.completed
        tdCheck.onclick = () => {
            elem.completed = !elem.completed
            putUser2(elem.id, elem)
        }



        container.append(tdId, tdName, tdCom, tdDel, tdEdit, tdCheck)
        box1.append(container)
    })
}