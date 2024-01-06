let api = "http://localhost:3000/posts"
let tbody = document.querySelector('tbody')
let month = document.querySelector('.month')
let time = document.querySelector('.time')
let editDialog = document.querySelector('.editDialog')
let formEdit = document.querySelector('.formEdit')
let formAdd = document.querySelector('.formAdd')
let search = document.querySelector('.search')
let sorti = document.querySelector('.sort')
let remDup = document.querySelector('.remDup')
let remDup2 = document.querySelector('.remDup2')




sorti.onclick = async () => {
    try {
        const response = await fetch(api)
        const data = await response.json()
        data.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            }
            else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
            return 0;
         
        });
   getData(data)
   } catch (error) {
    console.log(error);
   }
    // const { data } = await axios.get(api)
    
   
}



let iddel = []
remDup.onclick = async () => {
    try {
        
        const {data} = await axios.get(api)
        data.sort((a, b) => a.title.localeCompare(b.title))
        for (let i = 0; i < data.length; i++) {
            if (data[i].title == data[i + 1].title) {
               
                iddel.push(data[i].id)
              
            }
          
            
        }
       

     
        // getData(data)
    } catch (error) {
        console.log(error);
        iddel.forEach((el) => {
            deleteodin(el)
        })
    }
    
}
// const { data } = await axios.get(api)
console.log(iddel);





async function deleteodin(el) {
    try {
        const { data } = await axios.delete(`${api}/${el}`)
        getAsync()
    } catch (error) {
        console.log(error);
  
    }
}




    formAdd.onsubmit = async (event) => {
        event.preventDefault()
        let newUser = {
            title: formAdd['inpTitle'].value,
            completed: false
        }
        try {
            const { data } = await axios.post(`${api}`, newUser)
            getAsync()
        } catch (error) {
            console.log(error);
        }
        // editDialog.close()
    }

search.oninput = async () => {
    const { data } = await axios.get(`${api}?q=${search.value}`)
    getData(data)
}

setInterval(() => {
    let date = new Date().toDateString()
    let datee = new Date().toTimeString()
    month.innerHTML = date
    time.innerHTML = datee.split(" ").slice(0,1)
}, 1000)

async function getAsync (){
    const { data } = await axios.get(api)
    getData(data)
    console.log(data);
}

let idx =null

function getData(data){
    tbody.innerHTML = ""
    data.forEach((elem) => {
        let tr = document.createElement('tr')
        let tdId = document.createElement('td')
        tdId.innerHTML = elem.id

        let tdTitle = document.createElement('td')
        tdTitle.innerHTML =elem.title
        
        let tdDelete = document.createElement('td')
        tdDelete.innerHTML = 'Delete'

        tdDelete.onclick = async () => {
            try {
                const { data } = await axios.delete(`${api}/${elem.id}`)
                getAsync()
            } catch (error) {
                console.log(error);
            }
        }
        let tdEdit = document.createElement('td')
        tdEdit.innerHTML = 'Edit'

        tdEdit.onclick = () => {
            idx = elem.id
            formEdit['inpTitle'].value = elem.title
            editDialog.showModal()
        }
        formEdit.onsubmit = async(event) => {
            event.preventDefault()
            let newUse = {
                title: formEdit['inpTitle'].value,
                completed: false
            }
            try {
                const { data } = await axios.put(`${api}/${idx}`, newUse)
            getAsync()
            } catch (error) {
                console.log(error);
            }
            editDialog.close()
        }


        let tdCap = document.createElement('td')
        tdCap.innerHTML = 'Cap'

        tdCap.onclick = async () => {
            elem.completed = !elem.completed
            try {
                const { data } = await axios.put(`${api}/${elem.id}`,elem)

            } catch (error) {
                console.log(error);
            }
        }
        if(elem.completed){
            tdTitle.style.color ='red'
        }
        tr.append(tdId,tdTitle,tdDelete,tdEdit,tdCap)
        tbody.append(tr)
    })
}

getAsync()