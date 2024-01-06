let api = 'http://localhost:3000/data'
let shopCart = document.querySelector('.shopCart')
let totalBill = document.querySelector('.totalBill')
let checkOut = document.querySelector('.checkOut')
let clearCart = document.querySelector('.clearCart')
let box1 = document.querySelector('.box1')
let shopYou = document.querySelector(".shopYou")
let dialogAdd = document.querySelector('.dialogAdd')
let add = document.querySelector('.add')
let formAdd = document.querySelector('.formAdd')
clearCart.onclick = () => {
    box1.innerHTML=""
}
add.onclick = () => {
    dialogAdd.showModal()
}
formAdd.onsubmit = () => {
    let newTovar = {
        "title": formAdd['inpTovar'].value,
        "price": formAdd['inpPrice'].value,
        "avatar": formAdd['inpAvatar'].value,
        "kolvo": 0,
        "status": false,
    }
    addTovar(newTovar)
    dialogAdd.close()
}
// async function getData() {
//     try {
//         const {data} = await axios.get(api)
//         get(data)
//     } catch (error) {
//         console.log(error);
//     }
// }


async function getData() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        get(data)
    } catch (error) {
        console.log(error);
    }
}
let con = ""
let conu = 1
let allKolvo = 0
let ttt = 0
function get(data) {
    box1.innerHTML = ''
    data.forEach((elem) => {
        let container = document.createElement('div')
        container.classList.add('container')
        let img = document.createElement('img')
        img.style.width = '300px'
        img.src = elem.avatar

        let plusBtn = document.createElement('p')
        plusBtn.innerHTML = '+'
        plusBtn.classList.add('fontSize')
        let minusBtn = document.createElement('p')
        minusBtn.innerHTML = '-'
        minusBtn.classList.add('fontSize')

        let title = document.createElement("h3")
        title.innerHTML = elem.title
        
        let price = document.createElement("h3") 
        price.innerHTML = `$${elem.price}`
        
        let uprav = document.createElement('div')
        uprav.style.display = 'flex'
        uprav.style.gap = '5px'
        uprav.style.justifyContent = 'center'
        let kolvo = document.createElement('h3')
        kolvo.innerHTML = elem.kolvo
        kolvo.classList.add('fontSize')
        let btnDel = document.createElement('button')
        btnDel.innerHTML = "delete"
        btnDel.onclick = async () => {
            try {   
                const response = await fetch(`${api}/${elem.id}`, {
                    method:'DELETE'
                })
                getData()
            } catch (error) {
                
            }
        }
        minusBtn.onclick = () => {
            if (elem.kolvo <= 0) {
                elem.kolvo = 0
            }
            else if (elem.kolvo>0) {
                elem.kolvo--
            }
            
            
            kolvoIzmen(elem,elem.id)
        }
        plusBtn.onclick = () => {
            
            elem.kolvo++
            
            
            
            kolvoIzmen(elem, elem.id)
        }
        let resul = Number(elem.kolvo) * Number(elem.price)
        let result = document.createElement('h3')
        ttt = resul
        result.innerHTML = "$"+Number(elem.kolvo)*Number(elem.price)
        allKolvo+=resul
        totalBill.innerHTML = `Total Bill: $${allKolvo}`

         let boxu = document.createElement('div')
            boxu.append(img, title, price, uprav, result)
        con = con + " " + conu++ + ") " + "Tovar: " + elem.title + " price: " + elem.price + "$" + " количество: " + elem.kolvo + "шт;  cумма" + ttt + " $||| " + " " 
        
        console.log(boxu);
        uprav.append(minusBtn, kolvo, plusBtn)
        container.append(btnDel,img,title,price,uprav,result)
        box1.append(container)
    })
}
let ioo = ''
let gh = 0
shopCart.onclick = () => { 

    gh =  "К оплате картой: " + allKolvo + "$"
    let diiv = document.createElement('div')
      diiv.append(con)  
    shopYou.showModal()
    con = ''
    
    shopYou.append(diiv,gh)
   
}

shopYou.onclick = ()=> {
    shopYou.close()
    gh =0
}


getData()



// async function kolvoIzmen(elem, id) {
//     try {
//         const {data} = await axios.put(`${api}/${id}`,elem)
//     } catch (error) {
//         console.log(error);
//     }
// }

async function addTovar(newTovar) {
    try {
        const { data } = await axios.post(`${api}`, newTovar)
        getData()
    } catch (error) {
        console.log(error);
    }
}



async function kolvoIzmen(elem, id) {
    try {
        const response = await fetch(`${api}/${id}`,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(elem),
            });
    }
       catch (error) {
        console.log(error);
    }
}