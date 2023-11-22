// task1
// function limitCalls(a) {
//    let cnt = 1;

//    return function (b) {
//       return cnt>a?"Mnogo":cnt++
//    }
// }
// let d = limitCalls(3);
// console.log(d());
// console.log(d());
// console.log(d());
// console.log(d());
// console.log(d());




//task2
// function multiply(a, b) {
//     if (b == 0) {
//       return 0
//   }
//     return a + multiply(a,b-1)
// }
// console.log(multiply(5,5));


// task3
// let cnt = 0;
// function isprime(a) {

//     if (a == 1) {
//         return 1
//     }
//     // console.log(a);
//     // console.log(cnt);

//     if (cnt == 2) {
//         return true
//     }
//     else if (cnt != 2) {
//         return false
//     }
//     console.log(a);
//     return a % isprime(a - 1) == 0 ? cnt++ : null


// }
// console.log(isprime(7));

// task3
// let cnt = 0;
// function isPrime(a,b=a) {

//     if (b == 0) {
//        return ""
//     }
//     if (a % b == 0) {
//        cnt++
//     }

//     console.log(cnt == 2 ? true : cnt>2?false:cnt);

//     return isPrime(a,b - 1)

// }


// console.log(isPrime(8));



// task



// task4

// function pow(n,b){
//     if(b==0){
//         return 1;
//     }
//     return n * pow(n,b-1)
// }
// console.log(pow(2,2));
// console.log(pow(2,3));
// console.log(pow(2,4));

