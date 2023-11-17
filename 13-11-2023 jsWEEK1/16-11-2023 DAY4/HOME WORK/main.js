// task1
// function generateSequence(a) {
//     let ma = a;
//      let b = ""

//     while (a>1) {
//         if (a % 2 == 0) {
            
//             a = a / 2
//             b += ", " + a
            
//         }
//         else {
          
//             a = a * 3 + 1
//             b += ", " + a
//         }
        
//     }
//     return `"${ma}${b}"`
  
// }
// console.log(generateSequence(6));


// let g = " "
// console.log(g += " " + 1);
// console.log(g += " " + 1);
// console.log(g += " " + 1);
// console.log(g += " " + 1);
// console.log(g += " " + 1);
// console.log(g += " " + 1);

// console.log(6+", "+6);
// let b = " ";
// let a = 6
// console.log(b = b + " " + a / 2);
// console.log(b = b + " " + a / 2);





// task2

// function isPalindromePrime(a) {
//     let sob = " ";
//     let cnt = 0;
//     for (let i = a; i > 0; i = Math.floor(i / 10)) {
//         console.log(i % 10);
//         sob += i % 10
        
//     }
//     for (let i = sob; i > 0; i--){
//         if (sob % i == 0) {
//            cnt++
//         }
        
//     }
//     return cnt==2
// }
// console.log(isPalindromePrime(131));




// task3


// function isPow(a) {
//     let sten = Math.sqrt(a)
//     return sten*sten==a?true:false
// }
// console.log(isPow(16)
// );


// task4
// function sumOfPrime(a,b) {
//    let sum = a+b
//     let cnt = 0;
   
//     for (let i = sum; i >= 0; i--) {
//         if (sum % i == 0) {
//             cnt++
//         }


//     }
//     console.log(cnt);
//     return cnt == 2 ? true : false
// }
// console.log(sumOfPrime(5,7));
// console.log();




// task5

// function fibonachiNum(a) {
//     let num1 = 1;
//     let num2 = 0;
//     for (let i = num2; i < a; i++){
//         let num3 = num1 + num2;
//         num1 = num2;
//         num2 = num3;
//     }
//     return num2
// }
// console.log(fibonachiNum(5));


// task6

// function quadraticEquationRoots(a, b, c) {
//    let d1 =  b * b - 4 * a * c
//     if (d1 < 0) {
//         return "Уравнение не имеет действительных корней"
//     }
//     let d = Math.round(Math.sqrt(b * b - 4 * a * c));
   
//     let b1 = (-b + d) / 2 * a;
//     let b2 = (-b - d) / 2 * a;
    
//     return "x1:" + b1 + ", "+"x2:" + b2
    

    
// }
// console.log(quadraticEquationRoots(1,-3,2)
// );


// let a = 5;

// function hh() {
//     let a = 2
//     console.log(a);
// }
// hh()