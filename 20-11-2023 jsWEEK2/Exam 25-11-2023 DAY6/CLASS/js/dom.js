import { editUser, deleteUser, addUser, searchUser,filterr,sortt } from "./api.js"


let tbody = document.querySelector('tbody')
let idx = null
let invite = document.querySelector('.invite')
let sort = document.querySelector('.sort')
let editForm = document.querySelector('.editForm')
let editDialog = document.querySelector('.editDialog')
let infoDialog = document.querySelector('.infoDialog')
let addForm = document.querySelector('.addForm')
let addDialog = document.querySelector('.addDialog')
let st = null
let search = document.querySelector('.search')
let select = document.querySelector('.select')
let p1 = document.querySelector('.p1')
let p2 = document.querySelector('.p2')
let p3 = document.querySelector('.p3')
sort.onclick = () => {
    sortt()
}
select.onclick = () => {
    filterr(select.value)
    console.log(9);
}
search.oninput = () => {
    searchUser(search.value)
}
invite.onclick = () => {
    addDialog.showModal()
}

    addForm.onsubmit = (event) => {
        event.preventDefault()
        let user = {
            email: addForm["inpTitle"].value,
            role: addForm["inpRole"].value,
            status: false
        }
        addDialog.close()
        addUser(user)
    }
export function getData(data) {
    tbody.innerHTML = ''
    data.forEach((elem) => {
        let tr = document.createElement("tr")

        
        let tdEmail = document.createElement("td")
        tdEmail.innerHTML = elem.email
        
        let tdRole = document.createElement("td")
        tdRole.innerHTML = elem.role
        let ttd = document.createElement('td')
        let tdStatus = document.createElement('p')
        ttd.append(tdStatus)
        if (elem.status) {
            tdStatus.innerHTML = "ACTIVE"
            tdStatus.style.backgroundColor = 'green'
            tdStatus.style.width = '60px'

            tdStatus.style.color = 'white'

        }
        else {
            tdStatus.innerHTML = "INACTIVE"
            tdStatus.style.backgroundColor = 'red'
            tdStatus.style.color = 'white'
            tdStatus.style.width = '80px'
        
        }
        tdStatus.style.borderRadius = '5px'
        let tdInfo = document.createElement('button')
        tdInfo.innerHTML = "info"
        tdInfo.onclick = () => {
            infoDialog.showModal()
            p1.innerHTML = elem.email
            p2.innerHTML = elem.role
            p3.innerHTML = elem.status
        }

        let tdDel = document.createElement("span")
        tdDel.innerHTML = 'х'
        tdDel.style.fontSize = '30px'
        tdDel.onclick = () => {
            deleteUser(elem.id)
        }

        let tdEdit = document.createElement("button")
        tdEdit.innerHTML = 'Edit'
        tdEdit.onclick = () => {
            idx = elem.id
            st = elem.status
            editForm['inpRole'].value = elem.role
            editForm['inpTitle'].value = elem.email
            editDialog.showModal()
        }

        editForm.onsubmit = (event) => {
            event.preventDefault()
            let user = {
                email: editForm["inpTitle"].value,
                role: editForm["inpRole"].value,
                status: st
            }
            editUser(idx, user)
        }
        let tdtd = document.createElement('td')
        tdtd.style.gap = '30px'
        let tdcheck = document.createElement("input")
        tdcheck.type = 'checkbox'
        tdcheck.style.border = '1px solid gray'
        tdcheck.checked = elem.status
        tdcheck.onclick = () => {
            elem.status = !elem.status
            editUser(elem.id, elem)
      
        }
        if (elem.status) {
            tdEmail.style.color = 'red'
        }
        tdtd.append(tdInfo, tdcheck, tdEdit, tdDel)
        tdtd.style.textAlign='right'
        tr.append(tdEmail, tdRole, ttd,tdtd )
        tbody.append(tr)


    })
}