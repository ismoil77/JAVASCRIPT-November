import { filtCat ,filtLevel,editUser} from "./api.js"
let boxJob = document.querySelector('.boxJob')
let pp = document.querySelector('.pp')
let selectCategory = document.querySelector('.selectCategory')
let selectLevel = document.querySelector('.selectLevel')
selectCategory.onclick = () => {
    filtCat(selectCategory.value)
}
selectLevel.onclick = () => {
    filtLevel(selectLevel.value)
}


export function getData(data) {
    boxJob.innerHTML = ""
    boxJob.style.display = "flex"
    boxJob.style.gap = '20px'
  

    data.forEach((elem) => {
        let container = document.createElement('div')
        container.style.backgroundColor = 'wheat'
        container.style.width = '400px'
        container.style.display ="flex"
        let title = document.createElement('h1')
        title.innerHTML = elem.titleJob

        let catJob = document.createElement('h3')
        catJob.innerHTML = elem.catJob

        let level = document.createElement('h4')
        level.innerHTML = elem.level

        let tddiv = document.createElement('div')
        let tddiv1 = document.createElement('div')

        tddiv.style.display = 'flex'
        // tddiv.style.alignItems = 'center'
        tddiv.style.justifyContent = 'space-between'
        let city = document.createElement('h4')
        city.innerHTML = elem.city
        
        let buttonSee = document.createElement('td')
        buttonSee.innerHTML = 'See More'
        buttonSee.onclick = () => {
            location = `./index jobInfo.html`
           let obj = {
               titleJob: elem.titleJob,
               level: elem.level,
               catJob: elem.catJob,
               city:elem.city
               
            }
            localStorage.user = JSON.stringify(obj);
            localStorage.setItem('test', 1);
            console.log(localStorage.getItem('test'));
            // let user = JSON.parse(localStorage.user);
            // console.log(user);
        }
        tddiv1.append(title, catJob)
        tddiv.append(tddiv1,level)
        container.append(tddiv, city, buttonSee)
        buttonSee.classList.add('gradient-button')
        if (window.location.pathname == '/index%20admin.html') {
            
            let editDialog = document.querySelector('.editDialog')
            let editForm = document.querySelector('.editForm')
            let idx = null
            let tdEdit = document.createElement('button')
            tdEdit.innerHTML = 'edit'
            container.append(tdEdit)
            tdEdit.onclick = () => {
                console.log(editForm['select1']);
                editForm["select1"].value = elem.catJob
            editForm["select2"].value = elem.level
            editForm["select3"].value = elem.city
            editForm["select4"].value = elem.titleJob
                editDialog.showModal()
                idx = elem.id
            }
            editForm.onsubmit = (event) => {
                event.preventDefault()
                let user = {
                    "titleJob": editForm["select4"].value ,
                    "catJob": editForm["select1"].value,
                    "level": editForm["select2"].value ,
                    "city": editForm["select3"].value,
                    "completed": false
                }
                editUser(user,idx)
            }
        }
        boxJob.append(container)
    })
}