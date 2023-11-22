// task1
// function sumDgit(a) {
//     if (a == 0) {
//         return 0;
//     }
//     return a%10 + sumDgit(Math.floor(a/10))

// }
// console.log(sumDgit(111));





// task2
// function addWord(a) {
//     return function (b) {
//         return `${b}`+a
//     }
// }
// let addLy = addWord("ly")
// console.log(addLy("Ismoil"));






// task3
// function multiply(a, b = 10) {
//     if (b == 0) {
//         return 0
//     }
//     return a * b + multiply(a,b - 1);
// }
// console.log(multiply(1));






// task4
// function evenOdd(a) {
//     a = a - 2
//     if (a == 0) {
//         return true
//     }
//     else if (a == 1) {
//         return false
//     }
//     return evenOdd(a)
// }
// console.log(evenOdd(6));






// task5
// function gsd(a, b) {
//     let cnt = 0;
//     if (a > b) {
//         for (let i = a; i > 0; i--) {
//             if (a % i == 0&&b%i==0) {
//                 cnt = i
//                 return cnt
//             }
           
//         }
       
//     }
//     else if (a < b) {
//         for (let i = b; i > 0; i--) {
//             // console.log(i);
//             if (a % i == 0 && b % i == 0) {
//                 cnt = i
//                 return cnt
//             }
            
//         }
       
//     }
    

// }
// console.log(gsd(6,2));


//task5

// function gsd2(a, b) {
//     let big = 0;
//     a > b ? big = a : big = b;
//     for (let i = big; i >= 0; i--){
//         if (a % i == 0 && b % i == 0) {
//             return i
//         }
       
//     }
// }
// console.log(gsd2(6,8));


// task6
// function sumNumber(a=0) {
//     return function(b=0) {
//         return function (c = 0) {
//             return function (d = 0) {
//                 return function (e = 0) {
//                     return function (f = 0) {
//                             return a+b+c+e+d+f
//                         }
//                     }
//                 }
//             }
//     }
// }
// console.log(sumNumber(2)(3)(4)()()(6));






// task7
// function incrementBy(a) {
//     let cnt = a;
//     return function (b) {
//         return cnt+=b
//     }
// }
// const addFive = incrementBy(5);
// console.log(addFive(10))
// console.log(addFive(10))