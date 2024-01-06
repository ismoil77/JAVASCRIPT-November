import { searc,sel,lan,searcRus } from "./api.js"
let modes = document.querySelector('.modes')
    // modes.addEventListener("click", function () { modes.value = !modes.value })
let imgDark = document.querySelector('.imgDark')
let lanRus = ["а", "б", "в", "г", "д", "е", "ё", "ж", "з", "и", "й", "к", "л", "м", "н", "о", "п", "р", "с", "т", "у", "ф", "х", "ц", "ч", "ш", "щ", "ъ", "ы", "ь", "э", "ю", "я"]
let lanEng = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
modes.onclick = () => {
    document.querySelector("body").classList.toggle('ddr')
    
    imgDark.classList.toggle('obb')
    if (modes.innerHTML == 'Dark') {
        modes.innerHTML = 'light'
    }
    else {
        modes.innerHTML = 'Dark'

    }

}

let box = document.querySelector('.box')
let searchInp = document.querySelector('.searchInp')
let selectRegion = document.querySelector('.selectRegion')
let selectLanguages = document.querySelector('.selectLanguages')

selectLanguages.onclick = () => {
    
    lan(selectLanguages.value)
}
selectRegion.onclick = () => {
   
    sel(selectRegion.value)
}
searchInp.oninput = () => {
    lanRus.forEach((value, index, array) => {
        if (value == searchInp.value[1]) {
     
 }})
    searc(searchInp.value)
}

//target blank in link
export function getData(data) {
    box.innerHTML = ''
    box.style.display = 'flex'
    box.style.flexWrap = 'wrap'
    box.style.gap = '60px'
    data.forEach((elem, index, array) => {
        let container = document.createElement('div')
        container.style.width = '230px'
        container.style.margin = '0px auto'
        container.style.marginTop ='30px' 
        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.justifyContent = 'center'
        container.style.paddingLeft = '50px'
        container.style.paddingTop = '20px'
        container.style.paddingBottom = '20px'
        container.style.gap = '10px'
        container.style.boxShadow = '0 10px 10px grey'
        container.style.color = '#42001D'
        container.style.fontFamily = "Franklin Gothic Medium"
        container.style.background = '#DDE9FA'
        let flag = document.createElement('img')
        flag.src = elem.flags.png
        flag.style.width = '200px'
        flag.style.height = '100px'
        let nameCountry = document.createElement('p')
        nameCountry.innerHTML = elem.name.common
        nameCountry.style.fontFamily = 'Franklin Gothic Medium'
        nameCountry.style.fontSize = '20px'
        nameCountry.style.fontWeight = 'bold'
        nameCountry.style.color = 'black'


        let population = document.createElement('p')
        population.innerHTML = "Population : " +elem.population
        
        let region = document.createElement('p')
        region.innerHTML = "Region : "+elem.region


        let capital = document.createElement('p')
        capital.innerHTML = "Capital : " +elem.capital

        let llink = document.createElement('a')

        let ddiv = document.createElement('div')
        ddiv.style.background = '#3C72FA'
        ddiv.style.width = '150px'
        ddiv.style.height = '30px'
        ddiv.style.borderRadius = '5px'
        ddiv.style.justifyContent = 'center'
        
        ddiv.style.display = 'flex'
        ddiv.style.alignItems = 'center'
        let btnMore = document.createElement('img')
        btnMore.src = "./img/icons8-green-earth-48 (1).png"
      
        btnMore.style.width= '25px'
        let rr =  "AUD"
        let learnMore = document.createElement('p')
        learnMore.innerHTML = "LEARN MORE"
        llink.append(ddiv)
        llink.href = './info.html'
        llink.target = '_blank'
        llink.classList.add('llink')
        llink.onclick = () => {
            let obj = {
                title: elem.name.common,
                population: elem.population,
                region: elem.region,
                city: elem.capital,
                // money: elem.rr.name + `${elem.rr.symbol}`,
                flag: elem.flags.png,
                mapp: elem.maps.googleMaps

            }
            localStorage.user = JSON.stringify(obj);
        }
        ddiv.append(btnMore,learnMore)

        container.append(flag,nameCountry,population,region,capital,llink)
        box.appendChild(container)
    })
}

export function getData4(data) {
    box.innerHTML = ''
    box.style.display = 'flex'
    box.style.flexWrap = 'wrap'
    box.style.gap = '60px'
    data.forEach((elem, index, array) => {
        let container = document.createElement('div')
        container.style.width = '230px'
        container.style.margin = '0px auto'
        container.style.marginTop = '30px'
        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.justifyContent = 'center'
        container.style.paddingLeft = '50px'
        container.style.paddingTop = '20px'
        container.style.paddingBottom = '20px'
        container.style.gap = '10px'
        container.style.boxShadow = '0 10px 10px grey'
        container.style.color = '#42001D'
        container.style.fontFamily = "Franklin Gothic Medium"
        container.style.background = '#DDE9FA'
        let flag = document.createElement('img')
        flag.src = elem.flags.png
        flag.style.width = '200px'
        flag.style.height = '100px'
        let nameCountry = document.createElement('p')
        nameCountry.innerHTML = elem.translations.rus.common
        nameCountry.style.fontFamily = 'Franklin Gothic Medium'
        nameCountry.style.fontSize = '20px'
        nameCountry.style.fontWeight = 'bold'
        nameCountry.style.color = 'black'


        let population = document.createElement('p')
        population.innerHTML = "Население : " + elem.population

        let region = document.createElement('p')
        region.innerHTML = "Регион : " + elem.region


        let capital = document.createElement('p')
        capital.innerHTML = "Центр : " + elem.capital

        let llink = document.createElement('a')

        let ddiv = document.createElement('div')
        ddiv.style.background = '#3C72FA'
        ddiv.style.width = '150px'
        ddiv.style.height = '30px'
        ddiv.style.borderRadius = '5px'
        ddiv.style.justifyContent = 'center'

        ddiv.style.display = 'flex'
        ddiv.style.alignItems = 'center'
        let btnMore = document.createElement('img')
        btnMore.src = "./img/icons8-green-earth-48 (1).png"

        btnMore.style.width = '25px'
        let rr = "AUD"
        let learnMore = document.createElement('p')
        learnMore.innerHTML = "Много"
        llink.append(ddiv)
        llink.href = './info.html'
        llink.target = '_blank'
        llink.classList.add('llink')
        llink.onclick = () => {
            let obj = {
                title: elem.name.common,
                population: elem.population,
                region: elem.region,
                city: elem.capital,
                // money: elem.rr.name + `${elem.rr.symbol}`,
                flag: elem.flags.png,
                mapp: elem.maps.googleMaps

            }
            localStorage.user = JSON.stringify(obj);
        }
        ddiv.append(btnMore, learnMore)

        container.append(flag, nameCountry, population, region, capital, llink)
        box.appendChild(container)
    })
}



export function getData2(data) {
    box.innerHTML = ''
    box.style.display = 'flex'
    box.style.flexWrap = 'wrap'
    box.style.gap = '60px'
    
        let container = document.createElement('div')
        container.style.width = '230px'
        container.style.margin = '0px auto'
        container.style.marginTop = '30px'
        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.justifyContent = 'center'
        container.style.paddingLeft = '50px'
        container.style.paddingTop = '20px'
        container.style.paddingBottom = '20px'
        container.style.gap = '10px'
        container.style.boxShadow = '0 10px 10px grey'
        container.style.color = '#42001D'
        container.style.fontFamily = "Franklin Gothic Medium"
        container.style.background = '#DDE9FA'
        let flag = document.createElement('img')
        flag.src = data.flags.png
    flag.style.width = '200px'
    flag.style.height = '100px'
        let nameCountry = document.createElement('p')
        nameCountry.innerHTML = data.name.common
        nameCountry.style.fontFamily = 'Franklin Gothic Medium'
        nameCountry.style.fontSize = '20px'
        nameCountry.style.fontWeight = 'bold'
        nameCountry.style.color = 'black'


        let population = document.createElement('p')
        population.innerHTML = "Population : " + data.population

        let region = document.createElement('p')
        region.innerHTML = "Region : " + data.region


        let capital = document.createElement('p')
        capital.innerHTML = "Capital : " + data.capital

        let llink = document.createElement('a')

        let ddiv = document.createElement('div')
        ddiv.style.background = '#3C72FA'
        ddiv.style.width = '150px'
        ddiv.style.height = '30px'
        ddiv.style.borderRadius = '5px'
        ddiv.style.justifyContent = 'center'

        ddiv.style.display = 'flex'
        ddiv.style.alignItems = 'center'
        let btnMore = document.createElement('img')
        btnMore.src = "./img/icons8-green-earth-48 (1).png"

        btnMore.style.width = '25px'

        let learnMore = document.createElement('p')
        learnMore.innerHTML = "LEARN MORE"
        llink.append(ddiv)
        llink.href = './info.html'
        llink.target = '_blank'
        llink.classList.add('llink')

        ddiv.append(btnMore, learnMore)

        container.append(flag, nameCountry, population, region, capital, llink)
        box.appendChild(container)
  
}










export function getData3(data) {
    box.innerHTML = ''
    box.style.display = 'flex'
    box.style.flexWrap = 'wrap'
    box.style.gap = '60px'
    data.forEach((elem, index, array) => {
        let container = document.createElement('div')
        container.style.width = '230px'
        container.style.margin = '0px auto'
        container.style.marginTop = '30px'
        container.style.display = 'flex'
        container.style.flexDirection = 'column'
        container.style.justifyContent = 'center'
        container.style.paddingLeft = '50px'
        container.style.paddingTop = '20px'
        container.style.paddingBottom = '20px'
        container.style.gap = '10px'
        container.style.boxShadow = '0 10px 10px grey'
        container.style.color = '#42001D'
        container.style.fontFamily = "Franklin Gothic Medium"
        container.style.background = '#DDE9FA'
        let flag = document.createElement('img')
        flag.src = elem.flags.png
        flag.style.width = '200px'
        flag.style.height = '100px'
        let nameCountry = document.createElement('p')
        nameCountry.innerHTML = elem.name.common
        nameCountry.style.fontFamily = 'Franklin Gothic Medium'
        nameCountry.style.fontSize = '20px'
        nameCountry.style.fontWeight = 'bold'
        nameCountry.style.color = 'black'


        let population = document.createElement('p')
        population.innerHTML = "Population : " + elem.population

        let region = document.createElement('p')
        region.innerHTML = "Region : " + elem.region


        let capital = document.createElement('p')
        capital.innerHTML = "Capital : " + elem.capital

        let llink = document.createElement('a')

        let ddiv = document.createElement('div')
        ddiv.style.background = '#3C72FA'
        ddiv.style.width = '150px'
        ddiv.style.height = '30px'
        ddiv.style.borderRadius = '5px'
        ddiv.style.justifyContent = 'center'

        ddiv.style.display = 'flex'
        ddiv.style.alignItems = 'center'
        let btnMore = document.createElement('img')
        btnMore.src = "./img/icons8-green-earth-48 (1).png"

        btnMore.style.width = '25px'

        let learnMore = document.createElement('p')
        learnMore.innerHTML = "LEARN MORE"
        llink.append(ddiv)
        llink.href = './info.html'
        llink.target = '_blank'
        llink.classList.add('llink')

        ddiv.append(btnMore, learnMore)

        container.append(flag, nameCountry, population, region, capital, llink)
        box.appendChild(container)
    })
}



