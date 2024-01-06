import { deleteUser,editUser } from "./api.js"
let moh = document.querySelector('.moh')
let time = document.querySelector('.time')
let tbody = document.querySelector('tbody')
let editDialog = document.querySelector('.editDialog')
let editForm = document.querySelector('.editForm')
let addForm = document.querySelector('.addForm')

let idx = null;
let st = null
setInterval(() => {
    let date = new Date().toDateString()
    let time2 = new Date().toTimeString()
    let time3 = time2.split(' ')
    moh.innerHTML = date
    time.innerHTML = time3[0]
}, 1000)



export function getData(data) {
    tbody.innerHTML = ""
    data.forEach((elem) => {
        let tr = document.createElement("tr")
        
        let tdId = document.createElement("td")
        tdId.innerHTML = elem.id

        let tdTitle = document.createElement("td")
        tdTitle.innerHTML = elem.title

        let tdDel = document.createElement("td")
        tdDel.innerHTML = 'Delete'
        tdDel.onclick = () => {
            deleteUser(elem.id)
        }

        let tdEdit = document.createElement("td")
        tdEdit.innerHTML = 'Edit'
        tdEdit.onclick = () => {
            idx = elem.id
            st = elem.status
            editForm['inpTitle'].value = elem.title
            editDialog.showModal()
        }
        editForm.onsubmit = (event) => {
            event.preventDefault()
            let user = {
                title: editForm["inpTitle"].value,
                status:st
            }
            editUser(idx,user)
        }
        let tdCap = document.createElement("td")
        tdCap.innerHTML = 'Cap'
        tdCap.onclick = () => {
            elem.status = !elem.status
            editUser(elem.id, elem)

        }
        if (elem.status) {
            tdTitle.style.color = 'red'
        }
        tr.append(tdId,tdTitle,tdDel,tdEdit,tdCap)
        tbody.append(tr)

    })
}