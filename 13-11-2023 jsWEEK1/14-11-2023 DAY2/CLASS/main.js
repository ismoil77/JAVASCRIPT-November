
// // 1) declaraiton
// function newIs() {
//     return 2
// }
// console.log(newIs());


// // 2) expression and anonymous
// let ismoil =  function () {
//     return 2
// }
// console.log(ismoil());



// // 2)  expression and arrow
// let salim = () => {
//     return 2
// }
// console.log(salim());


// //3) IIFE (immediatle invoked function expresiion)
// (()=> {
//     console.log("hello");
// })();














// //task1

// function sumTwoNumber(a, b) {
//     return a + b;
// }
// console.log(sumTwoNumber(2, 3)
// );


// // task2

// function checkNumber(a) {
//     if (a > 0) {
// return "positive"
//     }
//    else if (a < 0) {
//         return "negative"
//     }
//     else {
//         return "Zero"
//     }
// }
// console.log(checkNumber(5));


// task3

// function generateMultiplicationTable(a) {
//     let m = 0;
//     for (let i = 1; i <= 10;i++){
//         console.log(`${a}*${i}=${a*i}`)
//     }

// }
// generateMultiplicationTable(5)


// // task4
// function endNine(a) {
//     return a % 10 == 9 ?"YES":"NO"
// }
// console.log(endNine(149));

// task5
// function century(a) {
//     // return Math.floor(a/100)
//     if (a % 100 == 0) {
//          return (a - a % 100) / 100;
//     }
//     else  {return ((a - a % 100) / 100) + 1};
// }
// console.log(century(1600));


// // task6
// function calculateCircleArea(a) {
//     return Math.ceil(3.14 * a * a);
// }
// console.log(calculateCircleArea(5)
// );



// task7

// function sum3Digit(a) {
//     let first = a % 10;
//     let second = Math.floor(a / 10)%10;
//     let third = Math.floor(a / 100) % 10;
//     return first + second + third;
// }
// console.log(sum3Digit(123));

// task8

// function sumOfDigits(a) {
//     return a > 0 ? a + 1 : a - 2;
// }
// console.log(sumOfDigits(22)
// );


//task9

// function lessThan100(a,b) {
//     return a+b<100?true:false
// }
// console.log(lessThan100(22, 15));


//task10

// function longestTime(h,m,s) {
//     let ss = s;
//     let mm = m * 60;
//     let hh = h * 3600;
//     if (ss > mm && ss > hh) {
//         return s
//     }
    
//     else if (hh > mm && hh > ss) {
//         return h
//     }
//     else if (mm > hh && mm > ss) {
//         return m
//     }
// }
// console.log(longestTime(1, 59, 3598));

