// task1

// function perimetr(a) {
//     return a * 4;
// }
// console.log(perimetr(7));


//task2

// function area(a) {
//     return a*a
// }
// console.log(area(8));

//task3
// function averageNum(a,b) {
//     return (a + b) / 2;
// }
// console.log(averageNum(7, 9)
// );


// task4

// function evenOrOdd(a) {
//     return a%2==0?3:4
// }

// console.log(evenOrOdd(8));



// task5
// function calculation(x) {
//     let y;
//     y = 17 * x * x - 6 * x + 13;
//     return y;
// }
// console.log(calculation(0));


// task6

// function longestTime(h, m, s) {
//     return h * 3600 > m * 60 && h * 3600 > s ? h : m * 60 > h * 3600 && m * 60 > s ? m : s > m * 60 &&s> h * 3600 ? s:"ВСЕ РАВНЫ"
// }
// console.log(longestTime(1, 59, 3599));


//task7

// function same(a) {let m =0;
//     for (let i = a; i <= 0; i = 88){
//       console.log(i);
//     }
  
// }
// console.log(same(212));



// task8

// function largestSwap(a) {
//     let rev = a % 10 * 10 + Math.floor(a / 10) % 10;
//     return a>rev
// }
// console.log(largestSwap(41));

// task9
// function addUp(a) {
//     let m = 0;
//     for (let i = 1; i <= a; i++){
//         m += i;
//     }
//     return m
// }
// console.log(addUp(600));


// task10
// function different(cc,bb,aa){

//     if (aa != cc && aa != bb) {

//         return 3
//     }
//     else if (cc != bb && cc != aa) {
//       return 1
//      }
//     else if (bb != cc && bb != aa) {
//         return  2
//     }

// }
// console.log(different(10,5,10));


// task11

// function evenNum(a, b) {
//     let sum = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             sum += i;
//         }

        
//     }
//     return sum
// }
// console.log(evenNum(-18, -14));


// task12

// function sum(n, k) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++){
//       sum+= Math.pow(i,k)
        
//     }
//     return sum
// }
// console.log(sum(4, 3));


// yask13

// function maxNum(a) {
//      let  chislo = 0;
//      let bigi = 0;
//     while (a > 0) {
        
//         chislo = a % 10;
//         if (chislo > bigi) {
//             bigi=chislo
//         }
//        a = Math.floor(a/10)
//     }
//    return bigi
// }
// console.log(maxNum(1432));


// task14

// function isSimmetrical(a) {
//     let rev = 0;
//     let orig = a;
//     while (a > 0) {
//         let otdelka = a % 10;
//         rev = rev * 10 + otdelka;
//         a = Math.floor(a / 10);

//     }
//     if (rev == orig) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isSimmetrical(44944));


//task15
// function addDigits(a) {
//     let
//     let dig = 0;
//     let ff = 0;
//     while (a > 0) {
//         dig = a % 10;
//         // a = Math.floor(a / 10)
        
//         // console.log(dig);
//         ff += dig
//         a = ff
       
//     }
//  return a
   
// }
// console.log(addDigits(138));

