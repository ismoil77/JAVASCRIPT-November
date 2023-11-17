// task1

// function swap(a) {
//     let rev = "";
//     for (let i = a; i > 0; i = Math.floor(a/10)){
//         rev+=i%10
//     }
//     return rev>a?false:true
// }
//  console.log(swap(43));


// task2


// function primeInRange(a, b) {

//     for (let t = a; t <= b; t++) {
//         let cnt = 0;
//         for (let i = t; i > 0; i--) {
            
//             if (t % i == 0) {
//               cnt++
//             }
         
           
//         }
//         if (cnt == 2) {
//                 return true
//             }
//             else {
//                 return false
//             }
      
//     }
// }
// console.log(primeInRange(62,66));


// task3

function numberSquare(a) {
    let b = 1;
    for (let i = 1; i <= a; i++){
        b+=i**2
        // console.log(b);
    }
    return b-1
}
console.log(numberSquare(5));