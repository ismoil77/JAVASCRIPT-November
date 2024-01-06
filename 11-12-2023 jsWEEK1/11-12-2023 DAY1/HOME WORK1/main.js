let api = 'http://localhost:3000/data'
let body = document.querySelector('body')
let tbody = document.querySelector('tbody')
let dialogAddUser = document.querySelector('.dialogAddUser')
let addForm = document.querySelector('.addForm')
let modalAll = document.querySelector('.modalAll')
let viewProfile = document.querySelector('.viewProfile')
let nameDialog = document.querySelector('.nameDialog')
let btnAddNewUser = document.querySelector('.btnAddNewUser')
let emailDialog = document.querySelector('.emailDialog')
let infoImg = document.querySelector('.infoImg')
let viewInfo = document.querySelector('.viewInfo')
let viewEdit = document.querySelector('.viewEdit')
let closeVief = document.querySelector('.closeVief')
let editForm = document.querySelector(".editForm")
let dialogEdit = document.querySelector('.dialogEdit')
let btnDel = document.querySelector('.delBtn')
let btnDark1 = document.querySelector('.btnDark')
let btnLight = document.querySelector('.btnLight')
let tablee = document.querySelector('.tablee')
let selectStatus = document.querySelector('.selectStatus')
let selectCity = document.querySelector('.selectCity')
selectStatus.onclick = async () => {
    try {
        if (selectStatus.value == "al") {
            getData()
            console.log(selectStatus.value);
        }
        else {
            const { data } = await axios.get(`${api}?status=${selectStatus.value}`)
            get(data)
 
        }
    }
    catch (error) {
        console.log(error);
    }
   
}
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
async function getData() {
    try {
        const {data} = await axios.get(api)
        get(data)
    } catch (error) {
        console.log(error);
    }
}
let idx = null
let idxx = null
getData()
function get(dat) {
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
            idx = elem.id
            let posi = tdButton.getBoundingClientRect()
            console.log(posi.left);
            modalAll.classList.toggle('zindex')
            modalAll.style.top = `${posi.top -70}px`
            
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
            complUser(elem.id,elem)
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
            infoImg.src = elem.avatar
            nameDialog.innerHTML = elem.title
            emailDialog.src = elem.email

           
        }

        let btnEdit2 = document.createElement('button')
        btnEdit2.innerHTML = 'edit'
        btnEdit2.onclick = () => {
            dialogEdit.showModal()
            idxx = elem.id
            editForm["inpTitle"].value = elem.title
            editForm["inpCity"].value = elem.city
        }
        editForm.onsubmit = (event) => {
            event.preventDefault()
            let user = {
                    title : editForm['inpTitle'].value,
                    email:editForm['inpEmail'].value,
                    avatar:editForm['inpImg'].value,
                    status: false

                 }
                       
                    console.log(idxx);
                
            edituser(idxx, user)
            dialogEdit.close()
        }
        tdob.style.display = "flex"
        tdob.style.alignItems = "center"
        titleEmail.append(tdTitle, tdEmail)
        tdob.append(tdImg,titleEmail)
        tdImg.append(imgg)
        tdButton.append(imgBut)
        tr.append(tdob,tdCity,tdStatus,tdPhone,tdButton,btnEdit2,checkbox)
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
        status:false
    }
    console.log(userr);
    dialogAddUser.close()
    addUser(userr)
}

async function addUser(userr){
    try {
        const response = await fetch(`${api}`,
            {
                method: "POST",
                headers:
                {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userr)
            });
        getData()
    
   } catch (error) {
    console.log(error);
   }
}
async function deleteBtn(idx) {
        try {
            const response = await fetch(`${api}/${idx}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log(error);
        }
    
}

async function edituser(idxx,user) {
    {
        try {
            const response = await fetch(`${api}/${idxx}`,
                {
                    method: "PUT",
                    headers:
                    {
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

}
async function complUser(id, user) {
    {
        try {
            const response = await fetch(`${api}/${id}`,
                {
                    method: "PUT",
                    headers:
                    {
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

}