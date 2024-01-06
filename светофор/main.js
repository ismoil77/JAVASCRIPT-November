let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')


let cntRed = 11
let cntYellow = 4
let cntGreen = 11

redd()
function redd() {
  let a1 = setInterval(() => {
    cntRed--
    red.innerHTML = cntRed
    red.style.background = 'red'
      if (cntRed == 0) {
            
          red.style.background = 'grey'
            cntRed = 11 
            clearInterval(a1)
           
        yelloww()
    }
    
},1000)
}




function yelloww() {
    let a2 = setInterval(() => { 
        cntYellow--
        yellow.innerHTML = cntYellow
       yellow.style.background = 'yellow'

        if (cntYellow == 0) {
            yellow.style.background = 'grey'

            cntYellow = 4
            clearInterval(a2)
            greenn()
        }
    },1000)
}
function yellow2() {
    let a2 = setInterval(() => {
        cntYellow--
        yellow.innerHTML = cntYellow
        yellow.style.background = 'yellow'

        if (cntYellow == 0) {
            yellow.style.background = 'grey'

            cntYellow = 4
            clearInterval(a2)
            redd()
        }
    }, 1000)
}
function greenn() {
    let a3 = setInterval(() => {
        cntGreen--
        green.innerHTML = cntGreen
        green.style.background = 'green'

        if (cntGreen == 0) {
            green.style.background = 'grey'

            cntGreen = 11
            clearInterval(a3)

            yellow2()
        }
    }, 1000)
}
 