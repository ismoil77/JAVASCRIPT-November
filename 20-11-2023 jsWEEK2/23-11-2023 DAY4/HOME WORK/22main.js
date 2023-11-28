// task1
// function modifyLast(a, b) {
//     let g = a.at(-1)
//     return a+g.repeat(b-1)
// }
// console.log(modifyLast("excuse me what?", 5));


// task2
// function firstLast(a) {
//     let l = a.at(-1);
//     let s = a.at(0);
//     return s+l
// }
// console.log(firstLast("vishnu"));


// task3
// function toInt(a) {
//     return Number(a)
    //  return +a
// }
// function toStr(b) {
//     let s = String(b)
//     return `"${s}"`
       // return +b
// }
// console.log( toStr(77));
// console.log( toInt("77"));


// task4
// function isPlural(a) {
//     return a.at(-1)=="s"
// }
// console.log(isPlural("changes"));



// task5
// function reverseCapitalize(a) {
//     let rev=""
//     for (let i = a.length-1; i >= 0; i--){
//       rev+=a[i]
//     }
//     return rev.toUpperCase()
// }
// console.log(reverseCapitalize("hellothere"));


// task6(1)
// function checkEnding(a, b) {
//     return a.includes(b)
// let b = str.slice(-a.length) == a;
// return b
// }
// console.log(checkEnding("feminine", "nine"));



// task6(2)
// function checkEnding2(a, b) {
// let d = a.slice(-b.length) == b;
// return d
// }
// console.log(checkEnding2("feminine", "nine"));





// task7
// function palin(a) {
//     let rev = ""
//         for (let i = a.length-1; i >= 0; i--){
//           rev+=a[i]
//     }
//     console.log(rev);
//         return rev==a
    
// }
// console.log(palin("mom"));


// task8
// function charCount(a, b) {
//     let cnt = 0;
//     let raz = b.split("");
//     // console.log(raz);
//     for (let i = 0; i < raz.length; i++){
//         if (raz[i] == a) {
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(charCount("b", "big fat bubble"));



// task9

// function capToFront(a) {
//     let up = "";
//     let low = "";
//     let raz = a.split("")
//     for (let i = 0; i < raz.length; i++){
//         if (raz[i] == raz[i].toUpperCase()) {
//             up+=raz[i]
//         }
//         else if (raz[i] == raz[i].toLowerCase()) {
//             low+=raz[i]
//         }
//     }
//     return up+low
// }
// console.log(capToFront("hApPy"));


// task10

// function reverseAndNot(a) {
//     let rr = a.toString()
//     let uu = rr.split("")
//        let rev = ""
//         for (let i = uu.length-1; i >= 0; i--){
//             rev += uu[i]
//     }
//         return rev+rr

// }
// console.log(reverseAndNot(123));