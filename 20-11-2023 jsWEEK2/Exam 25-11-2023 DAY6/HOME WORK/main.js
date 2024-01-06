//task1 90%

// function specialRev(a, b) {
//     let aa = a.split(' ')
//     let cnt = ' '
//     let cnt2 = ' '
//     for (let i = 0; i < aa.length; i++) {
//         if (aa[i][0] != b) {
//             cnt2 +=" "+ aa[i]
//         }
//         else if (aa[i][0] == b) {
//             // console.log(aa[i][4]);

//             for (let r = aa[i].length - 1; r >= 0; r--) {
//                 // console.log(r);
//                 cnt += aa[i][r]
//                 // console.log(aa[i][r]);
//             }
        
//               cnt2+=' '+cnt

//         }
      
           
        
      
        
//     }
//     return cnt2
// }
// console.log(specialRev("word searches are super fun","s"));





// task2

// function isVowelSandwich(a) {
//    let sogl = [
//         'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
//             'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'
//     ];
//     let a1 = false;
//     let a2 = false;
//     let a3 = false;
//     if (a.length == 3) {
//         for (let i = 0; i < sogl.length; i++){
//             if (a[0].toUpperCase() == sogl[i]) {
//                 a1=true
//             }
//             if (a[1].toUpperCase() == sogl[i]) {
//                 a2 = true

//             }
//             if (a[2].toUpperCase() == sogl[i]) {
//                 a3 = true

//             }
//         }
//         return a1==true&&a2==false&&a3==true?true:false
//     }
//     else {
//         return false
//     }
// }
// console.log(isVowelSandwich("ear"));




// task3
// function multiplyNums(a) {
//     let aa = a.split(", ")
//     let cnt = 1;
//     aa.forEach((value, index, array) => { cnt *= value })
//     return cnt
// }
// console.log(multiplyNums("54, 75, 453, 0"));




// task4

// function longBurp(a) {
//     let cnt = "Bu"
//     for (let i = 0; i < a; i++){
//         cnt+='r'
//     }
//     return cnt+'p'
// }
// console.log(longBurp(9)
// );



// task5 !80%
// function countVowels(a) {
//     let cnt=0
// let sogl = [
//         'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
//             'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z'
//     ];
//     let aa = a.split("")
//     for (let i = 0; i < aa.length; i++) {
// for (let index = 0; index < sogl.length; index++) {
//     console.log();  

//     if (aa[i] == sogl[index]) {
//         cnt+0
//     }
//     else {
//         cnt++
//     }
// }    
//  }
    
//     return cnt/50
// }
// console.log(countVowels("cheesecake"));





//task6
// function isHarshad(a) {
//     let cnt = 0
//     for (let i = a; i > 0; i = Math.floor(i / 10)){
//         // console.log(i%10);

//         cnt+=i%10
//     }
//         return a%cnt==0
    
// }
// console.log(isHarshad(12255));




// task7
// function getMiddle(a) {
//     let as = Math.floor(a.length / 2)
//     let aa = a.split('')
//     if (a.length % 2 == 0) {
//         return aa[as - 1] + "" + aa[as]
        
//     }
//     else {
//         return aa[as]

//     }
// }
// console.log(getMiddle('aoaa'));




// task8
// function perrin(a) {
//     if (a == 0) {
//        return 3
//     }
//     else if (a == 1) {
//         return 0
//     }
//     else if (a == 2) {
//         return 2
//     }
//     return perrin(a-2)+perrin(a-3)
// }
// console.log(perrin(26));




// task9
// function func(a) {
//     return function (b=a) {
//         if (b % 2 == 0) {
//             return a =b*2
//         }
//         else {
//             return a = b/2
//         }
//     }
// }
    
    
//     let IncOrDec1 = func(6)
// console.log(IncOrDec1())
// console.log(IncOrDec1())
// let IncOrDec2 = func(5)
// console.log(IncOrDec2())
// console.log(IncOrDec2())




// task10
// function first(a) {
//     return function (n=a) {
//         return n
//     }
// }
// const firstFunc = first(10)
// console.log(firstFunc(20))
// console.log(firstFunc());


