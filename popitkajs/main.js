let inp = document.querySelector('.inp')

function addValue(a) {
    inp.value +=a
}
function addComp(b) {
    inp.value += b
}
let aa = null
function addCompDel(b) {
    aa = b
    inp.value += b
}

function result() {
    if (aa == "%") {
        inp.value = inp.value[0]/100*inp.value[inp.value.length-1]
    }
    else {
        inp.value = eval(inp.value) 
    }
   
}