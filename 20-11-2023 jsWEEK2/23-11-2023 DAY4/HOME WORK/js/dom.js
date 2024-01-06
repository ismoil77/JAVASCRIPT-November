import { editUser, deleteUser ,addUse,filt} from "./api.js"
let box = document.querySelector('.box')
export let idx = null
let editForm = document.querySelector('.editForm')
let editDialog = document.querySelector('.editDialog')
let addForm = document.querySelector('.addForm')
let addDialog = document.querySelector('.addDialog')
let addFood = document.querySelector(".addFood")
let btnAll = document.querySelector('.btnAll')
let btnButter = document.querySelector('.btnButter')
let btnPancakes = document.querySelector('.btnPancakes')
let btnMilk = document.querySelector('.btnMilk')

btnAll.onclick = () => {
    filt(btnAll.value)
}
btnButter.onclick = () => {
    filt(btnButter.value)
}
btnPancakes.onclick = () => {
    filt(btnPancakes.value)
}
btnMilk.onclick = () => {
    filt(btnMilk.value)
}
addFood.onclick = () => {
    addDialog.showModal()
}
addForm.onsubmit = (event)=>{
    event.preventDefault()
    let newUser = {
        img: addForm['inpImg'].value,
        title: addForm['inpTitle'].value,
        price: addForm['inpPrice'].value,
        description: addForm['inpDesc'].value,
        completed: false
    }
    addUse(newUser)
}
export function getData(data) {
    box.innerHTML = ""
    data.forEach((elem) => {
        let container = document.createElement('div')
        container.style.width = '45%'
        container.style.display = 'flex'
        box.style.gap = '30px'
        box.style.marginTop = '60px'
        container.style.gap = '15px'
        let div1 = document.createElement('div')
        let div2 = document.createElement('div')

        let div3 = document.createElement('div')
        div3.style.display = 'flex'
        div3.style.justifyContent = 'space-between'
        let img = document.createElement('img')
        img.src = elem.img
        img.style.height = '150px'
        img.style.width = '250px'
        img.style.border = '5px solid rgb(148, 116, 36)'
        img.style.borderRadius = '10px'

        let price = document.createElement('p')
        price.innerHTML = `$${elem.price}`
         price.classList.add('price')
        let title = document.createElement('p')
        title.innerHTML = elem.title
        title.classList.add('title')

        let description = document.createElement('p')
        description.innerHTML = elem.description
        description.classList.add('descc')

        let edit = document.createElement('button')
        edit.classList.add('uniBtn')
        edit.innerHTML = 'edit'
        let com = 0
        edit.onclick = () => {
            editForm['inpImg'].value = elem.img
            editForm['inpTitle'].value = elem.title
            editForm['inpPrice'].value = elem.price
            editForm['inpDesc'].value = elem.description
            com = elem.completed
            idx = elem.id
            editDialog.showModal()
        }
        editForm.onsubmit = (event) => {
            event.preventDefault()
            let user = {
                img: editForm['inpImg'].value,
                title: editForm['inpTitle'].value,
                price: editForm['inpPrice'].value,
                description: editForm['inpDesc'].value,
                completed: com
            }
            editUser(idx, user)
        }

        let delet = document.createElement('button')
        delet.classList.add('uniBtn')

        delet.innerHTML = 'delete'
        delet.onclick = () => {
            deleteUser(elem.id)
        }
        let check = document.createElement('input')
        check.classList.add('checc')

        check.type = 'checkbox'
        check.checked = elem.completed
        check.onclick = () => {
            elem.completed = !elem.completed
            editUser(elem.id,elem)
        }
        if (elem.completed) {
            title.style.color = 'red'
        }
        div1.append(img)
        div2.append(div3, description, edit, delet, check)
        div3.append(title,price)
        container.append(div1,div2)
        // container.append(img, price, title, description, edit, delet, check)
        box.append(container)
    })
}