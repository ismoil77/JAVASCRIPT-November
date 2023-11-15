// TAsk1
// function isPrime(a) {
//     let cnt = 0;
//     for (let i = a; i >= 0; i--){
//         if (a % i == 0) {
//             cnt++
//         }
        
        
//     }
//     console.log(cnt);
//      return cnt==2?true:false
// }
// console.log(isPrime(111));



// task2
// function factorial(a) {
//     let sum = 1
//     for (let i = a; i >= 1; i--){
//         sum*=i
//     }
//     return sum
// }
// console.log(factorial(4));


// task3
// function sumOfDigit(a) {
//     let sum = 0;
//     for (let i = 1; i <= a; i++){
//         sum += i;
//     }
//     return sum
// }
// console.log(sumOfDigit(5));


// task4
// function ariphmetic(a) {
//     let sum = 0;
//     let cnt = 0;
//     while (a > 0) {
//         sum += a % 10;
//         cnt++
//         a = Math.floor(a / 10)
        
//     }
//     return sum/cnt

// }
// console.log(ariphmetic(2456));


// task5

// function minOrMax(a) {
//      let max = 0;
//     let min = a;
//     while (a > 0) {
//         let num = a % 10;
//         if (max < num) {
//             max = num
//         }
//         if (min > num) {
//             min = num
//         }

//         a = Math.floor(a/10)
        
        
//     }
//     return `min:${min} max:${max}`
// }
// console.log(minOrMax(5732));




// task6
// function polindrom(a) {
//     let rev = ""
//     for (let i = a; i > 0; i = Math.floor(i / 10)){
//             rev+=i%10
//     }
//     return rev==a
// }
// console.log(polindrom(1331));


// task7
// function equation(a, b) {
//     if (a == 0) {
//         return "На ноль делить нельзя"
//     }
//     return -b/a

// }
// console.log(equation(4, 5));




// task8


    // function fibonachi(a) {
    //     if (a == 1) {
    //         return 0
    //     }
    //     else if (a == 2) {
    //         return 1
    //     }
    //     return fibonachi(a - 1) + fibonachi(a - 2)
    // }
    // console.log(fibonachi(2));


// let a = 1;
// var b = 2;
// function aa() {
//     let c = 3;
//     var d = 4;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     console.log(f);
// }
// while (true) {
//     let e = 5;
//     var f = 6;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(e);
//     console.log(f);
// }
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);
// console.log(aa());


