import { addUser, deleteBtn, edituser, complUser }  from "./api.js"
export let body = document.querySelector('body')
export let tbody = document.querySelector('tbody')
export let dialogAddUser = document.querySelector('.dialogAddUser')
export let addForm = document.querySelector('.addForm')
export let modalAll = document.querySelector('.modalAll')
export let viewProfile = document.querySelector('.viewProfile')
export let nameDialog = document.querySelector('.nameDialog')
export let btnAddNewUser = document.querySelector('.btnAddNewUser')
export let emailDialog = document.querySelector('.emailDialog')
export let infoImg = document.querySelector('.infoImg')
export let viewInfo = document.querySelector('.viewInfo')
export let viewEdit = document.querySelector('.viewEdit')
export let closeVief = document.querySelector('.closeVief')
export let editForm = document.querySelector(".editForm")
export let dialogEdit = document.querySelector('.dialogEdit')
export let btnDel = document.querySelector('.delBtn')
export let btnDark1 = document.querySelector('.btnDark')
export let btnLight = document.querySelector('.btnLight')
export let tablee = document.querySelector('.tablee')
export let selectStatus = document.querySelector('.selectStatus')
export let selectCity = document.querySelector('.selectCity')
export let inputSearch = document.querySelector('.inputSearch')
export let idx = null
export let idxx = null


btnDark1.onclick = () => {
    document.body.style.background = 'white'
    document.body.style.color = 'black'
}
btnAddNewUser.onclick = () => {
    dialogAddUser.showModal()
}

closeVief.onclick = () => {
    viewProfile.close()
    console.log(9);

}



export function get(dat) {
    tbody.innerHTML = ""
    console.log(dat);
    dat.forEach((elem) => {
        let tr = document.createElement('tr')
        tr.classList.add('trr')
        let tdTitle = document.createElement('p')
        tdTitle.innerHTML = elem.title
        tdTitle.style.textAlign = "left"
        let tdEmail = document.createElement('p')
        tdEmail.innerHTML = elem.email

        let tdob = document.createElement("td")


        let tdImg = document.createElement('td')
        let imgg = document.createElement('img')
        imgg.src = elem.avatar


        let tdButton = document.createElement('td')
        let imgBut = document.createElement('img')
        imgBut.src = './img/Icon-Actions.svg'
        let size = Number(elem.id) * 100
        tdButton.onclick = () => {
            idxx = elem.id
            editForm["inpTitle"].value = elem.title
            editForm["inpCity"].value = elem.city
            editForm['inpPhone'].value = elem.phone
            editForm['inpEmail'].value = elem.email
            editForm['inpImg'].value = elem.avatar
            infoImg.src = elem.avatar
            nameDialog.innerHTML = elem.title
            emailDialog.src = elem.email
            idx = elem.id
            let posi = tdButton.getBoundingClientRect()
            modalAll.style.zIndex = 1000
            modalAll.style.top = `${posi.top - 70}px`
            tdButton.onclick =()=> {
                modalAll.classList.toggle('oppacity')
            } 

        }
        btnDel.onclick = () => {
            deleteBtn(idx)
            console.log(idx);

        }
        imgg.style.width = '60px'
        imgg.style.height = '60px'
        imgg.style.borderRadius = '1000px'


        let tdStatus = document.createElement('td')
        tdStatus.innerHTML = elem.status

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.checked = elem.status
        checkbox.onclick = () => {
            elem.status = !elem.status
            complUser(idx, elem)
        }

        let tdCity = document.createElement('td')
        tdCity.innerHTML = elem.city

        let tdPhone = document.createElement('td')
        tdPhone.innerHTML = elem.phone
        let titleEmail = document.createElement('div')
        if (elem.status) {
            tdTitle.style.color = 'red'
        }

        // console.log(elem.title);

        viewEdit.onclick = () => {
            dialogEdit.showModal()


        }
        viewInfo.onclick = () => {
            viewProfile.showModal()
            console.log(idxx);
            viewProfile.append(checkbox)


        }

        let btnEdit2 = document.createElement('button')
        btnEdit2.innerHTML = 'edit'
        // btnEdit2.onclick = () => {
        //     dialogEdit.showModal()
        //     idxx = elem.id
        //     editForm["inpTitle"].value = elem.title
        //     editForm["inpCity"].value = elem.city
        // }
        editForm.onsubmit = (event) => {
            event.preventDefault()
            let user = {
                title: editForm['inpTitle'].value,
                city: editForm['inpCity'].value,
                email: editForm['inpEmail'].value,
                avatar: editForm['inpImg'].value,
                phone: editForm['inpPhone'].value,
                status: false

            }

            console.log(idxx);

            edituser(idxx, user)
            dialogEdit.close()
        }
        tdob.style.display = "flex"
        tdob.style.alignItems = "center"
        
        titleEmail.append(tdTitle, tdEmail)
        tdob.append(tdImg, titleEmail)
        tdImg.append(imgg)
        tdButton.append(imgBut)
        tr.append(tdob, tdCity, tdStatus, tdPhone, tdButton)
        tbody.append(tr)
        btnDark1.onclick = () => {
            // body.style.background = 'black'
            // tr.style.backgroundColor = 'black'
            document.body.style.background = 'black'
            document.body.style.color = 'white'
        }


        btnLight.onclick = () => {
            document.body.style.background = 'white'
            document.body.style.color = 'black'
            // tr.style.backgroundColor = 'white'

        }
    })

}

addForm.onsubmit = (even) => {
    even.preventDefault()
    let userr = {
        title: addForm['inpTitle'].value,
        city: addForm['inpCity'].value,
        email: addForm['inpEmail'].value,
        avatar: addForm['inpImg'].value,
        phone: addForm['inpPhone'].value,
        status: false

    }
    console.log(userr);
    dialogAddUser.close()
    addUser(userr)
}