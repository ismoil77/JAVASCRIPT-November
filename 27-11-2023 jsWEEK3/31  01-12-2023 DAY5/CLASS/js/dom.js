import { searc, addUser, edi, deletw } from "./api.js"
let box = document.querySelector('.box')
let blockList = document.querySelector('.blockList')
let blockList1 = document.querySelector('.blockList1')
let bl = document.querySelector('.bl')
let bl1 = document.querySelector('.bl1')
let idx = null
let infoDialog = document.querySelector('.infoDialog')
let infoFull = document.querySelector('.infoFull')
let positionInfo = document.querySelector('.positionInfo')
let imgInfo = document.querySelector('.imgInfo')
let phoneInfo = document.querySelector('.phone')
let closee = document.querySelector('.closeModal')
closee.onclick = () => {
    infoDialog.close()
}
blockList.addEventListener('click', function () {
    document.querySelector(".box").style.display = "flex"

    document.querySelector("table").style.display = "none"
    blockList.classList.add("inverr")
    bl.classList.add("invertt")
    blockList1.classList.remove("inverr")
    bl1.classList.remove("invertt")
})
blockList1.addEventListener('click', function () {
    document.querySelector(".box").style.display = "none"

    document.querySelector("table").style.display = "block"
    blockList.classList.remove("inverr")
    bl.classList.remove("invertt")
    blockList1.classList.add("inverr")
    bl1.classList.add("invertt")
})

box.style.display = 'flex'
box.style.gap = '30px'
box.style.flexWrap = 'wrap'
let search = document.querySelector('.search')
search.oninput = () => {
    searc(search.value)
}
let tbody = document.querySelector('tbody')
let dialogEdit = document.querySelector('.dialogEdit')
let editForm = document.querySelector('.editForm')
let btnAdd = document.querySelector('.btnAdd').addEventListener('click', () => {
    document.querySelector('.dialogAdd').showModal()
})
let addForm = document.querySelector('.addForm')
let yyt = null
let ty = []
let reader = new FileReader()
addForm['avatarInp'].onchange = (event) => {
    let file = event.target.files[0]
  
    reader.readAsDataURL(file)
  
}

    addForm.addEventListener('submit', (event) => { 
        event.preventDefault()
       
        for (let i = 1; i <= 8; i++) { 
            if (addForm[`inpCheck${i}`].checked == true) {
                ty.push(addForm[`inpCheck${i}`].value);

            }
           
        }
      

    let newUser = {
        "fullName":addForm['fulInp'].value ,
        "avatar": reader.result,


        "phone": addForm['phoneInp'].value,
        "group":ty ,


        "position": addForm['positionInp'].value,
    }
    addUser(newUser)
})
console.log(yyt);
 let reader2 = new FileReader()
let cnt = -4
export function getData2(data) {
    tbody.innerHTML = ""
   
    data.forEach((elem, index, array) => {
      cnt++   
        let tr = document.createElement('tr')
        let tdFullName = document.createElement('td')
        tdFullName.style.width = '100px'
        tdFullName.style.lineHeight = '20px'
        tdFullName.innerHTML = `${elem.id}.${elem.fullName}`
        let tdGroup = document.createElement('td')
        let tdDiv = document.createElement('div')
        tdDiv.classList.add('tdDiv')
       for (let i = 0; i < elem.group.length; i++) {
           let gr = document.createElement('span')
           gr.innerHTML = elem.group[i] + ' December' + " "
           gr.classList.add('gr')
           tdDiv.append(gr)
        } 
        let btnEdir = document.createElement('img')
        btnEdir.src = './img/icons8-edit.gif'
        let btnInf = document.createElement('img')
        btnInf.src = './img/icons8-info.gif'
        btnInf.onclick = () => {
            infoDialog.showModal()
            infoFull.innerHTML = elem.fullName
            positionInfo.innerHTML = elem.position + ' Developer'
            imgInfo.src = elem.avatar
            imgInfo.style.width = '70px'
            phoneInfo.innerHTML = elem.phone
        }
        let btnDel = document.createElement('img')
        btnDel.src = './img/icons8-delete.gif'
        btnDel.onclick = () => {
            deletw(elem.id)
        }
        let rrt = 0
        btnEdir.onclick = () => { 
            idx = elem.id
            rrt = elem.group
            editForm['fulInp'].value = elem.fullName
            editForm['phoneInp'].value = elem.phone
            editForm['positionInp'].value = elem.position
            editForm['avatarInp'].file = elem.avatar
            
            for (let i = 1; i <= 8; i++){
                for (let j = 0; j < rrt.length; j++){
                    if (editForm[`inpCheck${i}`].value==rrt[j]) {
                     editForm[`inpCheck${i}`].checked = true
                 }
                }
               
                
            }
            dialogEdit.showModal()
            editForm['avatarInp'].onchange = (ev) => {
                let file2 = ev.target.files[0]
               
                reader2.readAsDataURL(file2)
            }
            editForm.onsubmit = (event) => { 
                event.preventDefault()
                editt()

            }

            
        }
       

        let tdPhone = document.createElement('td')
        tdPhone.innerHTML = elem.phone

        let tdPosition = document.createElement('td')
        tdPosition.innerHTML = elem.position + ' Developer'
        let tddi = document.createElement('div')
        tddi.append(btnEdir, btnInf, btnDel)
        tddi.style.display = 'flex'
        tddi.style.alignItems = 'center'
        tddi.style.justifyContent = 'center'
        tddi.style.marginTop = '40px'
        tdGroup.append(tdDiv)

        tr.append(tdFullName,tdGroup,tdPhone,tdPosition,tddi)
       tbody.append(tr)
    })
}

let ty1 = []
function editt() {

    for (let i = 1; i <= 8; i++) {
        if (editForm[`inpCheck${i}`].checked == true) {
            ty1.push(editForm[`inpCheck${i}`].value);

        }

    }
    let newUser = {
        "fullName": editForm['fulInp'].value,
        "avatar": reader2.result,


        "phone": editForm['phoneInp'].value,
        "group": ty1,


        "position": editForm['positionInp'].value,
    }
    edi(newUser,idx)
}
























export function getData(data) {
    box.innerHTML = ''
   data.forEach((elem, index, array) => {
       let container = document.createElement('div')
       container.style.width = '335px'
       container.style.marginTop = '30px'
       container.style.borderRadius = '15px'
       container.style.background =  'white'
       let ddiv1 = document.createElement('div')
       ddiv1.style.display = 'flex'
       ddiv1.style.alignItems = 'center'
       ddiv1.style.margin = '25px 25px 0 25px'
       ddiv1.style.justifyContent = 'space-between'
       ddiv1.style.borderBottom = '1px solid rgb(169, 169, 169)'
       let ddiv2 = document.createElement('div')
        let fullName = document.createElement('p')

       fullName.innerHTML = elem.fullName
       fullName.classList.add('fullName12')
        let phone = document.createElement('p')
       phone.innerHTML = "Phone:" + elem.phone
       phone.classList.add('phone12')

       ddiv2.append(fullName, phone)
       let avatar = document.createElement('img')
       avatar.src = elem.avatar
       avatar.style.width = '70px'
       avatar.style.height = '70px'
       avatar.style.borderRadius = '50%'
       ddiv1.append(ddiv2, avatar)
       let group = document.createElement('ul')
       group.style.margin = '0 0 25px 0'
       group.innerHTML = 'Group'
       group.classList.add('group12')

        for (let i = 0; i < elem.group.length; i++) { 
           let li = document.createElement('li')
            li.classList.add('li12')

            li.innerHTML = elem.group[i]
            li.style.marginLeft = '50px'
           group.append(li)
       }
        
      
    
        
        container.append(ddiv1,group)
        box.append(container)
    })
}