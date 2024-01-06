import { adddUser, edyyt,dell,searc } from "./api.js";
let mem = document.querySelector('.mem')
let fun = document.querySelector('.fun')
let api = ' http://localhost:3000/posts'
let sta = document.querySelector('.sta')
let emp = document.querySelector('.emp')
mem.onclick = async() => {
    try {
        const { data } = await axios.get(api)
        data.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
        getData(data)
    } catch (error) {
        console.log(error);
    }
}
sta.onclick = async () => {
    try {
        const { data } = await axios.get(api)
        data.sort((a, b) => a.status.toLowerCase().localeCompare(b.status.toLowerCase()))
        getData(data)
    } catch (error) {
        console.log(error);
    }
}
emp.onclick = async () => {
    try {
        const { data } = await axios.get(api)
        data.sort((a, b) => a.employed.toLowerCase().localeCompare(b.employed.toLowerCase()))
        getData(data)
    } catch (error) {
        console.log(error);
    }
}
fun.onclick = async () => {
    try {
        const { data } = await axios.get(api)
        data.sort((a, b) => a.job.toLowerCase().localeCompare(b.job.toLowerCase()))
        getData(data)
    } catch (error) {
        console.log(error);
    }
}
mem.onclick = async () => {
    try {
        const { data } = await axios.get(api)
        data.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
        getData(data)
    } catch (error) {
        console.log(error);
    }
}
let idx = null
let tbody = document.querySelector('tbody');
let editBtn = document.querySelector('.editBtn');
let del = document.querySelector('.del');
let check = document.querySelector('.check');
let allModal = document.querySelector('.alllModal');
let dialogUser = document.querySelector('.dialogUser');
let addForm = document.querySelector('.addForm');
let dialogEdit = document.querySelector('.dialogEdit');
let editForm = document.querySelector('.editForm');
let btnAdd = document.querySelector('.btnAdd');
let search = document.querySelector('.search');
search.oninput = () => {
    searc(search.value)
}
btnAdd.onclick = () => {
    dialogUser.showModal()
}
console.log();
let ddat = null
let reader = new FileReader()
addForm['inpImg'].onchange = (even) => {
    let file = even.target.files[0]
    reader.readAsDataURL(file)
}
addForm.onsubmit = (event) => { 
    event.preventDefault();
    
    
    
    ddat = addForm['inpDate'].value.replaceAll('-','/')
   
    let newUser = {
        "email": addForm['inpEmail'].value,
        "title": addForm['inpTitle'].value,
        "img": reader.result,
        "job": addForm['inpJob'].value,
        "place": addForm['inpPlace'].value,
        "status": false,
        "employed": ddat
    }
    adddUser(newUser)
    
}

export function getData(data) {
    tbody.innerHTML = ""            
    data.forEach((elem) => {
        let tr = document.createElement('tr');
           let dd = document.createElement('td')

        let tdImg = document.createElement('td')
        // tdImg.style.display = 'flex'
        let img = document.createElement('img')
        img.src = elem.img
        img.style.width = '50px'
        tdImg.append(img,dd)
     
        let tdTitle = document.createElement('p')
        tdTitle.innerHTML = elem.title

        let tdEmail = document.createElement('p')
        tdEmail.innerHTML = elem.email
        dd.append(tdTitle, tdEmail)
        let tdFunction = document.createElement('td')
       tdFunction.style.display = 'flex'

        let tdJob = document.createElement('p')
        tdJob.innerHTML = elem.job

        let tdPlace = document.createElement('p')
        tdPlace.innerHTML = elem.place
        console.log(tdPlace);
         tdFunction.append(tdPlace,tdJob)
        let tdEmployed = document.createElement('td')
        tdEmployed.innerHTML = elem.employed
         let tdStatus = document.createElement('td')
        tdStatus.innerHTML = elem.status
       
        let tdModal = document.createElement('td')
        let tdd = document.createElement('td')
        let btnEd = document.createElement('button')
        btnEd.innerHTML = 'Edit'
        tdModal.append(btnEd)
        btnEd.onclick = () => {
            idx = elem.id
            // editForm['inpImg'].value = elem.img
            editForm['inpTitle'].value = elem.title
            editForm['inpJob'].value = elem.job
            editForm['inpEmail'].value = elem.email
            editForm['inpPlace'].value = elem.place
            editForm['inpDate'].value = elem.employed


            allModal.showModal()
        }
        
        
                    editBtn.onclick = () => { 
                    dialogEdit.showModal()
        }
        let iif = 0;
        editForm["inpImg"].onchange = (event) => {
            let editFile = event.target.files[0];
            const reader2 = new FileReader();
            reader2.readAsDataURL(editFile);
            iif = reader2.result
        }
        editForm.onsubmit = (eve) => { 
            eve.preventDefault()
            let userEd = {
                img: editForm['inpImg'].value,
                title: editForm['inpTitle'].value,
                job: editForm['inpJob'].value,
                email: editForm['inpEmail'].value,
                place: editForm['inpPlace'].value,

                status:false
            }
         
            edyyt(idx,userEd)
            
        }

           del.onclick = () => {
                dell(idx)
                allModal.close()
            }

        tr.append(tdImg,tdFunction,tdStatus,tdEmployed,tdModal)
     tbody.append(tr)
    })
}