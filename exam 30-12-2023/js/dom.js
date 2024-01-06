// const postUser = async (user) => {
//     try {
//         const response = await fetch(“...“,
//             {
//                 method: "POST",
//                 headers: {
//                     Accept: "application/json",
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(user),
//             });
//     }
//     catch (error) {
//         console.log(error)
//     }

import { post,delet,put,searc } from "./api.js";






let search = document.querySelector('.search');
let idx = null
let imgAvatar = document.querySelector('.imgAvatar');
let imgAvatar1 = document.querySelector('.imgAvatar1');
let dialogAdd = document.querySelector('.dialogAdd')
let formAdd = document.querySelector('.formAdd')
let dialogEdit = document.querySelector('.dialogEdit')
let formEdit = document.querySelector('.formEdit')
let btnAdd = document.querySelector('.btnAdd')
let btnDe = document.querySelector('.btnD')

search.oninput = () => {
    searc(search.value)
    
}
btnAdd.onclick = () => {
    dialogAdd.showModal()
    
}
let iimg = 0


    let reader = new FileReader()
imgAvatar.onchange = (ev) => {
   let file = ev.target.files[0]
    reader.readAsDataURL(file)
    console.log(reader.result);
    iimg = reader.result
}
    formAdd.onsubmit = (event) => {
        event.preventDefault()

        let newUser = {
        
            "name": formAdd["name"].value,
            "avatar": reader.result,
            "email": formAdd["email"].value,
            "role": formAdd["role"].value,
            "lastLogin": 'yesterday',
            "join": formAdd["join"].value,
            "completed": false
        }
        post(newUser)
    }




let tbody = document.querySelector('tbody')

let rtt = []
export function getData(data) {
    tbody.innerHTML = ""
    data.forEach((elem, index, array) => {
        let tr = document.createElement('tr')
        let tdCheck = document.createElement('td')
        let check = document.createElement('input')
        check.type = 'checkbox'
        
        check.onclick = () => {
            rtt.push(elem.id)
            console.log(rtt);
            // elem.completed = !elem.completed
            // put(idx,elem)
        }
        check.checked = elem.completed

        tdCheck.append(check)
        let td1 = document.createElement('td')

        let ddiv = document.createElement('div')
        ddiv.style.display = 'flex'
        let img = document.createElement('img')
        img.src = elem.avatar
        img.style.width = '100px'
        let ddiv1 = document.createElement('div')
        let name = document.createElement('p')
        name.innerHTML = elem.name

        let email = document.createElement('p')
        email.innerHTML = elem.email

        let tdComp = document.createElement('td')
        let comp = document.createElement('p')
        comp.innerHTML =elem.completed
       tdComp.append(comp)
         
        ddiv1.append(name,email)
        ddiv.append(img,ddiv1)
        td1.append(ddiv)
  


        let td2 = document.createElement('td')
         td2.innerHTML = elem.role

        let td3 = document.createElement('td')
        td3.innerHTML = elem.lastLogin


        let td4 = document.createElement('td')
        td4.innerHTML = elem.join


        let td5 = document.createElement('td')
        let select = document.createElement('select')
        let option1 = document.createElement('option')
        option1.innerHTML = 'edit'
        option1.value = 'edit'
        let option = document.createElement('option')
        option.innerHTML = ''
        option.value = ''

        select.onclick = () => {
            formEdit['avatar'].file = elem.avatar
            formEdit['name'].value = elem.name
            formEdit['email'].value = elem.email
            // formEdit['role'].value = elem.role
            formEdit['join'].value = elem.join
            idx = elem.id

            if (select.value == "edit") {
                // console.log(9);
                 dialogEdit.showModal()
                imgAvatar1.onchange = (ev) => {
                    let file = ev.target.files[0]
                    reader.readAsDataURL(file)
                    console.log(reader.result);
                    iimg = reader.result
                }
                formEdit.onsubmit = (event) => {
                    event.preventDefault()

                    let newUser = {

                        "name": formEdit["name"].value,
                        "avatar": reader.result,
                        "email": formEdit["email"].value,
                        "role": formEdit["role"].value,
                        "lastLogin": 'yesterday',
                        "join": formEdit["join"].value,
                        "completed": false
                    }
                    put(idx,newUser)
                }
                


            }
           else if(select.value == "delete") {
               delet(idx)


            }
            
        }
        let option2 = document.createElement('option')
        option2.innerHTML = 'delete'
        option2.value = 'delete'

       select.append(option,option1,option2)


  tr.append(tdCheck,td1,td2,td3,tdComp,td4,select)

        tbody.append(tr)

    })
} 
btnDe.onclick = () => {
for (let i = 0; i <rtt.length; i++) {
    // rtt[i]
    delet(rtt[i])
    
}
}
