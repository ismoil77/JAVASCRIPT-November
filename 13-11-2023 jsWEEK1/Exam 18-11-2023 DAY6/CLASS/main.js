////// task1
// function counts(a) {
//     let cnt = 0;
//     for (let i = a; i > 0; i = Math.floor(i / 10)){

//         let h = i % 10;
//         if (h % 2 == 0) {
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(counts(123456));
// console.log(counts(13579));
// console.log(counts(20));







////// task2
// function sevenBoom(a) {
//     let rt = 0;
//     let e = 0;
//     for (let i = a; i > 0; i = Math.floor(i / 10)) {
//         let h = i % 10;
//         e=h
//         if (h == 7) {
//         rt = h
//     }


//     }
//     if (rt == 7) {
//         return "Boom"
//     }
//     else {
//         return "NoBoom"
//     }

// }
// console.log(sevenBoom(7));
// console.log(sevenBoom(56));
// console.log(sevenBoom(9874));








/////// task3

// function addDigits(a) {

//     while (a > 9) {
//         let num = a;
//         let sum = 0;
//         while (num > 0) {
//             sum += num % 10;
//             num = Math.floor(num / 10)
//         }
//         a = sum;


//     }
//  return a
// }
// console.log(addDigits(38));
// console.log(addDigits(0));









////// task4

// function sumCubes(a) {
//     let s = 0;
//     for (let i = 1; i <= a; i++){
//         s += i ** 3
//     }
//     return s

// }
// console.log(sumCubes(3));
// console.log(sumCubes(7));
// console.log(sumCubes(9));









////// task5

// function isSymmetrical(a) {
//     let r = ""
//     for (let i = a; i > 0; i = Math.floor(i / 10)){
//         r += i % 10;
//         // console.log(r);
//     }
//     return r==a
// }
// console.log(isSymmetrical(7227));
// console.log(isSymmetrical(9939));
// console.log(isSymmetrical(44444));








// ////task6
// function maxNum(a) {
//     let large = -999999999;
//     for (let i = a; i > 0; i = Math.floor(i / 10)){
//         let h = i % 10;
//         if (h > large) {
//             large = h
//         }
//     }
//     return large
// }
// console.log(maxNum(7132));
// console.log(maxNum(897));
// console.log(maxNum(811));









////// task7

// function fibonachiie(a) {
//    let num1 = 0;
//     let num2 = 1;
//     for (let i = num2; i < a; i++){
//         let num3 = num1+num2
//         num1 = num2;
//         num2 = num3;
    
//     }
//     return num2
// }

// console.log(fibonachiie(3));
// console.log(fibonachiie(7));
// console.log(fibonachiie(77));










////// task8
// function hasDoubleDigit(a) {
//     let ii = 0;
//     let colvoOdinak = 0;
//     for (let i = a; i > 0; i = Math.floor(i / 10)) {
        
//         let hh = i % 10;
//         let uu = Math.floor(i / 10) % 10;

//         if (hh == uu) {
//             colvoOdinak++
       
//         }

//     }


//       return colvoOdinak>=1?true:false
//     }
  
// console.log(hasDoubleDigit(123445));
// console.log(hasDoubleDigit(123789));
// console.log(hasDoubleDigit(112233));









// ////task9
// function sumOfEvenDigits(a) {
//     let co = 0;
//     for (let i = a; i > 0; i = Math.floor(i / 10)) {

//         let h = i % 10;
//         if (h % 2 == 0) {
//             co += h
//         }
//     }
//     return co
// }

// console.log(sumOfEvenDigits(1234));
// console.log(sumOfEvenDigits(13579));
// console.log(sumOfEvenDigits(2468642));










// task10
// function factorial(a) {
//     let y = 1;
//     for (let i = 1; i <= a; i++){
//        y*=i
//     }
//     return y
// }
// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(3));
