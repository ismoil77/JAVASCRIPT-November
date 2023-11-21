// tas1
// function sum(a) {
//     if (a == 1) {
//         return 1
//     }
    
//     return a+ sum(a-1)
// }
// console.log(sum(12));

// task2
// function factorial(a) {
//     if (a == 1) {
//         return 1
//     }
    
//     return a* factorial(a-1)
// }
// console.log(factorial(4));



// task3 
// function sumDigit(a)
// {
//     if (a == 0) {
//       return 0
//     }
//     return a%10+ sumDigit(Math.floor(a/10))
// }
// console.log(sumDigit(111));


// task4
// function doubleFactorial(a) {
//     if (a <= 1){return 1}
//   return a*doubleFactorial(a-2)
// }
// console.log(doubleFactorial(0));


// task5
// function fibo(a){
// if (a == 0){
//     return 0
// }
// else if (a==1){
//     return 1
// }
// return fibo(a - 1) + fibo(a - 2)
// }
// console.log(fibo(4));



// task6 90%
// function makePlusFunction(a){
//     return function plusFive(b){
//        return console.log(a+b)
//     }
// }
// const plusFive = makePlusFunction(5)
// plusFive(2)
// plusFive(-8)
// const plusTen = makePlusFunction(10)
// plusTen(0)
// plusTen(188)
// plusFive(plusTen(0))


// task7
// function product(a, b) {
//     return function (c, d) {
//         return function (e, f) {
//             return a*c*e+b*d*f
//         }
//     }
// }

// console.log(product(1, 2)(1, 1)(2, 3));


// task8   Kak 90%
// function multiply(a, b) {
//     return a * b
// }
// console.log(multiply(9,3));