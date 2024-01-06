// // task1 not
// function mergeArrays(...a) {
//     let f= ""
//     let u = a.forEach((el,id) => {
//         console.log(el.concat(el));
       
//     })
//     return u
// }

// console.log(mergeArrays([1,3,45],[44,66,77]));


// task2
// function findIndex(a, n) {
//     return a.indexOf(n)
// }
// console.log(findIndex([1, 2, 3], 2));

// task3 not
// function removeDuplicates(a) {
//     let f = ""
//     let d = a.filter((element,id) => {
//         if (element == element) {
//            return element
//         }
//     });
//     return d
// }
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// task4
// function removeNegatives(a) {
//     let f = a.filter(e => e > 0)
//     return f
// }
// console.log(removeNegatives([-12, -32, -4, -7]));


// task5
// function calculateAverage(a) {
//     let cnt = 0
//     let r = a.forEach((element,id,er) => {
//         cnt += element
        
//     });
// return cnt/a.length
// }
// console.log(calculateAverage([2, 4, 6, 8, 10]));



// task6
// function isPalindromeArray(a) {
//     let cnt = 0;
//     let ff = a.toReversed()
//     console.log(ff);
//     console.log(a);
//     if (a.length == ff.length) {
//         for (let i = 0; i < ff.length; i++){
//             if (ff[i] == a[i]) {
//                 cnt++
//             }

//         }
//     }
//     else {
//         return false
//     }
//     return cnt==a.length
// }
// console.log(isPalindromeArray([2, 11,2]));



// task7

// function arrBetween(a,b,c) {
//     let cnt = [];
//     for (let m = 0; m < c.length; m++){
//          for (let i = a+1; i < b; i++){
            
//              if (c[m] == i) {
//                  cnt.push(i)
//              }
//              else {
                 
//              }
         
//     }
//     }
   
//     return cnt
    
    
// }
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));

// task8
// function sumArray(a) {
//     let cnt = 0
//     let f = a.forEach(element => {
//         cnt+=element
//     });
//     return cnt
// }
// console.log(sumArray([-1,0,1]));


// task9
// function arrayValuesTypes(...a) {
//     let cnt = []
//     let f = a.forEach(el => {
//         el.forEach(ele => {
//              cnt.push(typeof ele)
//         })
//     })
//    return cnt
// }
// console.log(arrayValuesTypes([1, 2,
//     "null"
//     , []]));


// task10
// function wordLengths(a) {
//     let cnt =[]
//     let f = a.forEach(element => {
//        cnt.push(element.length)
//     });
//     return cnt
// }
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));


// task11
// function checkSquareAndCube(a){
//     return a[0] / a[0] / 2 == a[1]/a[1] / 2 /a[1] / 2;
// }
// console.log(checkSquareAndCube([16, 48]));

// task12
// function invertArray(a) {
//     let d = a.map(element => {
//         return element*-1
//     });
// return d
// }
// console.log(invertArray([1, 2, -3, 4, 5]));


// task13
// function getMultipliedArr(a) {
//     let d = a.map(element => {
//         return element * 2
//         // console.log(element*2);
//     });
//     return d
// }
// console.log(getMultipliedArr([2, 5, 3]));




// task14
let arr = [1,2,3]
let d = arr.find(el,aAAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaAaA)
console.log(d);