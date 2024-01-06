let api ='http://localhost:3000/posts'
let box = document.querySelector('.box');
let rt = 0
let iim = document.querySelector('.iim')
let formAdd = document.querySelector('.formAdd');
formAdd['imgAdd'].onchange = (eve) => {
    eve.preventDefault()
    let file = eve.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
   
console.log(eve);

    formAdd.onsubmit = (event) => {
        event.preventDefault()
 

        let newUser = {
            img: reader.result,
            completed: false,
            title: formAdd["title"].value
        }
        post(newUser)

    }
}
async function post(newUser) {
    try {
        const { data } = await axios.post(api,newUser)
   getData()
    } catch (error) {
        console.log(error);
    }
}





async function getData() {
    try {
        const { data } = await axios.get(api)
        get(data)
    } catch (error)  {
        
        console.log(error);
    }
}

function get(data) { 
    box.innerHTML = ''
    data.forEach((elem, index, array) => {
        
        let container = document.createElement('div')
        
        container.style.position = 'relative'
        container.style.left ='-100px'
        let h1 = document.createElement('h1')
        h1.innerHTML = elem.title
        
        let img = document.createElement('img')
        img.src = elem.img
        img.style.width = "100px"

        let compl = document.createElement('h3')
        compl.innerHTML = elem.completed

        container.append(h1, img, compl)
        box.append(container)


    })
}


getData()