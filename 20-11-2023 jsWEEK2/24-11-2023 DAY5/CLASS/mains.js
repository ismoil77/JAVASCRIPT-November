// task gsd
// function gsd(a,b) {
//     if (b == 0) {
//         return a
//     }
//     return gsd(b,a%b)
// }
// console.log(gsd(8,12));


// task isprime
// function isPrime(a, div = 2) {
//     if (n <= 2) {
//         return true
//     }
//     if(div)
// }
// console.log(isPrime(11));


// task 1

// function doubleLetter(a) {
//     let ff = 0;
//     for (let i = 0; i < a.length; i++){
//         if (a[i] == a[i + 1]) {
//             ff = true;
//         }
//     }
//     return ff==true

// }
// console.log(doubleLetter("lopp"));



// task2 to oxir kardan nashud

// function reverce(a) {
//     let m = 0;
//     let gg = a;
//     let chas = ""
//     let chas2 = ""
//     let raz = a.split(" ")
//     for (let i = 0; i < raz.length; i++) {
//         let yy = raz[i]
//         if (raz[i].length < 5) {
//         console.log(gg)
        
//         }
//         else if (raz[i].length >= 5)
//             for (let g = raz[i].length-1; g >=0 ; g--) {
                
//                 chas2 += yy[g];
//                 m = chas2
//             }

    
        

//     }
//     return
// }
// console.log(reverce("oop wetwoo ddd kemflk"));



// task3

// function findNemo(a) {
//     let d = a.split(' ')
//     let ddd = d.indexOf("Nemo")
//     return ddd+1
// }
// console.log(findNemo("Nemo is me"));


// task4

// function isUpperCase(a, b) {
//     console.log(a.at(5))
//     return a.at(5) == a.at(5).toUpperCase()
    
// }
// console.log(isUpperCase('task Javascript',6));

//task5
// function dashed(a) {
//     let raz = a.split('');

//     let obj = ''
//     for (let i = 0; i < raz.length; i++){
//         if (raz[i] == "a") {
//           obj=obj+'-'+'a'+'-'
//         }
//        else if (raz[i] == "e") {
//             obj = obj + '-' + 'e' + '-'
//         }
//         else if (raz[i] == "i") {
//             obj = obj + '-' + 'i' + '-'
//         }
//         else if (raz[i] == "o") {
//             obj = obj + '-' + 'o' + '-'
//         }
//         else if (raz[i] == "u") {
//             obj = obj + '-' + 'u' + '-'
//         }
//         else if (raz[i] == "a".toUpperCase()) {
//             obj = obj + '-' + 'A' + '-'
//         }
//         else if (raz[i] == "e".toUpperCase()) {
//             obj = obj + '-' + 'E' + '-'
//         }
//         else if (raz[i] == "i".toUpperCase()) {
//             obj = obj + '-' + 'I' + '-'
//         }
//         else if (raz[i] == "o".toUpperCase) {
//             obj = obj + '-' + 'O' + '-'
//         }
//         else if (raz[i] == "u".toUpperCase()) {
//             obj = obj + '-' + 'U' + '-'
//         }
//         else {
//             obj+=raz[i]
//         }
       
//     }
//     return obj
// }
// console.log(dashed('Carpe Diem'));


// task6
// function getMiddle(a) {
//     if (a.length % 2 == 0) {
//         return a.slice(a.length / 2-1, a.length / 2+1)
        
//     }
//     else {
//        return a[Math.floor(a.length/2)]
//     }
// }
// console.log(getMiddle('testing'));



// task potato
// function potato(a) {
//     let d = a.split('potato').length - 1
//     return d
// }
// console.log(potato("potatosfferfpotato"));