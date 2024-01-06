// let box = document.querySelector('.box')
// let cnt = 0;


// // setInterval(() => {
// //     cnt += 1
// //     box.innerHTML = cnt
// // }, 1000)
// setInterval(() => {
//     let date = new Date()
//     if (date.getHours() < 10) { box.innerHTML = `${date.getHours()}:0${date.getMinutes()}:${date.getSeconds()}` }
//    else box.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
// }, 1000)



// 2) promise



// resolve
// function prom(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Заработало")
//         }, ms);
//     })
// }
// console.log(prom(3000).then((responseee) => {
//      console.log(responseee);
// }));



// reject
function prom(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("нет")
        }, ms);
    })
}
console.log(prom(3000).then((responseee) => {
     console.log(responseee);
}).catch((er)=> console.log(er)));
