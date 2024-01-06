let api = ' http://localhost:3000/posts'
let tbody = document.querySelector('tbody')
let addUserDialog = document.querySelector('.addUserDialog')
let addForm = document.querySelector('.addForm')
let editForm = document.querySelector('.editForm')
let btnNewUser = document.querySelector('.btnNewUser')
let infoDialog = document.querySelector('.infoDialog')
let editDialog = document.querySelector('.editDialog')
let idx = null
let comcom = null
let select = document.querySelector('select')
let searchh = document.querySelector('.searchh')
let btnCopy = document.querySelector('.btnCopy')

btnCopy.onclick = () => {
    filterSame()
}
    get()

searchh.oninput = async() => {
    try {
        const response = await fetch(`${api}?q=${searchh.value}`)
        const data = await response.json()
        getData(data)

    } catch (error) {
        console.log(error);
    }
}
select.onclick = async () => {
    console.log(select.value);
    if (select.value == "all") {
        // try {
        //     const response = await fetch(`${api}?completed=${true}`)
        //     const data = await response.json()
        //     getData(data)

        // } catch (error) {
        //     console.log(error);
        // }
        // try {
        //     const response = await fetch(`${api}?completed=${false}`)
        //     const data = await response.json()
        //     getData(data)

        // } catch (error) {
        //     console.log(error);
        // }
        get()
    }
    else {
        try {
            const response = await fetch(`${api}?completed=${select.value}`)
            const data = await response.json()
            getData(data)

        } catch (error) {
            console.log(error);
        }
        try {
            const response = await fetch(`${api}?completed=${select.value}`)
            const data = await response.json()
            getData(data)

        } catch (error) {
            console.log(error);
        }
    }
   
}
async function get() {
    try {
        const response = await fetch(`${api}`)
        const data = await response.json()
       
        getData(data)

    } catch (error) {
        console.log(error);
    }
}
let samee = []
let cntt = 0
async function filterSame() {
    try {
        const response = await fetch(`${api}`)
        const data = await response.json()
        for (let i = 0; i < data.length; i++) {
            
            for (let index = ; index < data.length; index++) {
                if (data[i].title == data[index].title) {
                    samee.push(data[i])
                    cntt++
                    
                    // console.log(data[i].title);
                }
                console.log(data[i].title==data[index].title);
            }
            console.log(cntt);
        }
        let dataDelCopy = data.filter((value, index, array) => {return value.title != "ismoil" })
        getData(dataDelCopy)
    } catch (error) {
        console.log(error);
    }
}
console.log(samee);

btnNewUser.onclick = async () => {
    addUserDialog.showModal()

}
addForm.onsubmit = async(event) => {
    event.preventDefault()
    try {
        const response = await fetch(`${api}`,
            {
                method: "POST",
                headers: { Accept: "application/json", "Content-Type": "application/json", },
                body: JSON.stringify({
                    title: addForm['inpName'].value,
                    email: addForm['inpEmail'].value,
                    completed:false
                })
            });
    } catch (error) {
        console.log(error);
    }
}
let prosmotr = []
let odin = 0
function getData(data) {
    tbody.innerHTML = ""
    data.forEach((elem, index, array) => {
        prosmotr.push(elem)
        let tr = document.createElement('tr')
        
        let tdId = document.createElement('td')
        tdId.innerHTML = elem.id
        
        let tdName = document.createElement('td')
        tdName.innerHTML = elem.title
        
        let tdEmail = document.createElement('td')
        tdEmail.innerHTML = elem.email

        let tdComplete = document.createElement('td')
        tdComplete.innerHTML = elem.completed


        let tdAction = document.createElement('td')
        let tdInfo = document.createElement('button')
        tdInfo.innerHTML = 'Show'
        tdInfo.onclick = () => {
            infoDialog.showModal() 
            let namee = document.createElement('h1')
            namee.innerHTML = elem.title
            let emaill = document.createElement('h1')
            emaill.innerHTML = elem.email
            let clBtn = document.createElement('button')
            clBtn.innerHTML = "close"
            clBtn.onclick = () => {
                infoDialog.close()
                infoDialog.innerHTML = ""
            }
            infoDialog.append(namee, emaill,clBtn)
            
            
        }
        
        let tdEdit = document.createElement('button')
        tdEdit.innerHTML = 'Edit'
        // tdEdit.classList.add('tdEdit')
        tdEdit.onclick = async () => {
            editDialog.showModal()
            editForm['inpName'].value = elem.title
            editForm['inpEmail'].value = elem.email
            idx = elem.id
            comcom = elem.completed
            
        }
        editForm.onsubmit = async() => {
            try {
                const response = await fetch(`${api}/${idx}`,
                {
                    method: "PUT",
                        headers: { Accept: "application/json", "Content-Type": "application/json", },
                        body: JSON.stringify({
                            title: editForm['inpName'].value,
                            email: editForm['inpEmail'].value,
                            completed:comcom
                        })
                    });
                    // get()
                } catch (error) {
                    console.log(error);
                }
        }

        let tdDel = document.createElement('button')
        tdDel.innerHTML = 'Delete'
        // tdDel.classList.add('tdDel')
        tdDel.onclick = async() => {
            try {
                const response = await fetch(`${api}/${elem.id}`, {
                    method:'delete'
                })
            } catch (error) {
                
            }
        }
        
        let tdCheck = document.createElement('input')
        tdCheck.type = 'checkbox'
        tdCheck.checked = elem.completed
        tdCheck.onclick = async() => {
            elem.completed = !elem.completed
            compl(elem,elem.id)
        }
        if (elem.completed) {
            tdName.style.textDecoration = 'line-through'
        }
        
        
        
        
        
        





        
        
        tdAction.append(tdInfo,tdEdit,tdDel,tdCheck)
        tr.append(tdId,tdName,tdEmail,tdComplete,tdAction)
        tbody.append(tr)
    })
}

// get()
// console.log(prosmotr);



async function compl(user, id) {
    try {
        const response = await fetch(`${api}/${id}`,
        {
            method: "PUT",
            headers: { Accept: "application/json", "Content-Type": "application/json", },
            body: JSON.stringify(user)
        });
        // get()
    } catch (error) {
        console.log(error);
    }
    

}