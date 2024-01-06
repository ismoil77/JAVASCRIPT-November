let box = document.querySelector('.box')
let editForm = document.querySelector('.editForm')
let editModal = document.querySelector('.dialogEdit');
let formAdd = document.querySelector('.addForm')
let api = 'http://localhost:3000/posts'
let info = document.querySelector('.info');
let infoImg = document.querySelector('.infoImg');
let infoP = document.querySelector('.infoP');
async function get() {
    try {
        const { data } = await axios.get(api)
        getData(data)
    } catch (error) {
        console.log(error);
    }
}

async function editData(id, read) {
    try {
        const { data } = await axios.put(`${api}/${id}`, read)
        get()
    } catch (error) {
        console.error(error);
    }
}

async function postUser(newUser) {
    try {
        const { data } = await axios.post(api, newUser)
        get()
        
    } catch (error) {
        console.log(error);
    }
}


async function delet(id) {
    try {
        const { data } = await axios.delete(`${api}/${id}`)
        get()

    } catch (error) {
        console.log(error);
    }
}
let reader = new FileReader()
formAdd['img'].onchange = (event) => {

    let file = event.target.files[0]

    reader.readAsDataURL(file)
}
formAdd.onsubmit = (event) => {
    event.preventDefault()
    let obj = {
        title: formAdd['title'].value,
        img: reader.result,
        completed: false
    }
    postUser(obj)
    formAdd.reset()


}

get()
let idx = null
function getData(data) {
    box.innerHTML = ""
    data.forEach((elem) => {
        let div = document.createElement("div")
        let h1 = document.createElement("h1")
        h1.innerHTML = elem.title

        let img = document.createElement("img")
        img.src = elem.img
        img.style.width = "100px"

        let btnEdit = document.createElement("button")
        btnEdit.innerHTML = "Edit"
        
        let btnCompl = document.createElement("span")
        btnCompl.innerHTML = elem.completed
        let comp = document.createElement("input")
        comp.type = 'checkbox' 
        comp.checked = elem.completed

        comp.onclick = () => {
            elem.completed = !elem.completed
            editData(elem.id,elem)
        }


        let btnInfo = document.createElement("button")
        btnInfo.innerHTML = "Info"
        btnInfo.onclick = () => {
            infoP.innerHTML = elem.title
            infoImg.src = elem.img
    info.showModal()
}
        let btnDel = document.createElement("button")
        btnDel.innerHTML = "delete"
        btnDel.onclick = () => {
            delet(elem.id)
        }
        btnEdit.onclick = () => {
            idx = elem.id
            edit(elem.id)
        }

        function edit(idx) {

            editModal.showModal();
            editForm["title"].value = elem.title;
            editForm['imgEdit'].src = elem.img;
           
            let iif = null
            editForm["imgEdit"].file = elem.img;
            editForm["imgEdit"].onchange = (event) => {
                let editFile = event.target.files[0];
                const reader2 = new FileReader();
                reader2.readAsDataURL(editFile);
                iif = reader2.result
                editForm.onsubmit = (event) => {
                    event.preventDefault();
                    let user = {
                        img: reader2.result ,
                        title: editForm["title"].value,
                        completed:false
                    }
                    editData(idx, user);
                }
            }

        }


            div.append(img, h1,btnEdit,btnDel,btnInfo,btnCompl,comp)
            box.append(div)
        
        })

}
