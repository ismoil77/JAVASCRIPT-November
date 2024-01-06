


// task1
function countTrue(a) {
    let cnt = 0
    a.forEach((value, index, array) => {
        if (value) {
            cnt++
        }
    })
    return cnt
}
console.log(countTrue([true, false, false   ]));




//tasks2
// function arrayOfMultiples(a, b) {
//     let rt = []
//     for (let i = 1; i <= b; i++){
//       rt.push(a*i);
//     }
//     return rt
// }
// console.log(arrayOfMultiples(17, 6));




//task3
// function oldest(a) {
//     let yea = Object.entries(a)
//     let yea2 = Object.values(a)
//     let big = -999999
//     let small = 9999999
// let jj = 0
//     for (let i = 0; i < yea2.length; i++){
//         if (yea2[i] > big) {
//             big = yea2[i]
            
//         }
       
//     }
//     for (let m = 0; m < yea.length; m++){
//         if (yea[m][1] == big) {
//           jj =  yea[m][0]
            
//         }
//     }
   
// return jj
// }
// console.log(console.log(oldest({ Ali: 80, Umed: 50, Safar: 100 })
// ));





// task4
// function reverseArr(a) {
//     let as = String(a)
//     let aa = as.split('')
//     let rt = []
//     for (let i = aa.length - 1; i >= 0; i--){
//         rt.push(+aa[i])
//     }
//     return rt

// }
// console.log(reverseArr(1234567));




// task5
// function secondLargest(a) {
//     a.sort((a, b) => b-a)
//     for (let i = 0; i < a.length; i++) {
//        if (a[i] > a[i + 1]){
//             return a[i+1]
//      }
//     }
// }
// console.log(secondLargest([1, 1, 1, 1, 1, 9,8,9, 1, 1])
// );




// task6
// function stolen(a, b) {
//     let rt = Object.keys(a)
//   let bb = String(b)
   
//     if (rt.includes(bb.toLowerCase())) {
//         return b +" is gone"
//     }
//     else {
//         return b +"  is here"
//    }
   
   
// }
// console.log(stolen({ tv: 30, timmy: 20 }," Stereo")
// );





// task7
// function getVoteCount(a) {
//     return a.upvotes-a.downvotes;
// }
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));



// task9 
// function multipleOfOdd(...a) {
//     let cnt = 1
//     let cnt2 = 0

//     a.forEach((ele) => {
//         cnt = 1
//         ele.forEach((value, index, array) => {
//             if (value % 2 != 0) {
//                 cnt*=value
//             }
            
//         })
//        cnt2 += cnt
//     })
//     return cnt2
// }
// console.log(multipleOfOdd([1, 3], [2, 2, 3, 4, 7], [9, 7])
// );




// task10
// function subjectAverage(a) {
//     let cnt = a.length
//     let m = 0
//     let e = 0
//     let h = 0
//     let obj = {

//     }
//     for (let i = 0; i < a.length; i++) {
//         m += a[i].scores.math
//         e += a[i].scores.english
//         h += a[i].scores.history
        
//     }
//     obj['math'] = m / cnt
//     obj['english']=e/cnt
//     obj['history'] = h / cnt
//     return obj
// }
// console.log(subjectAverage([{
//     name: 'Alex', scores: {  math: 80, english: 75, history: 90
//     }
// }, {
//     name: 'Emily'
//     , scores: {math: 95, english:88, history: 92 }
//     },
//     {
//         name: 'Charlie'
//         , scores: {
//             math: 88, english:
//                 92, history: 85
//         }
//     }])
// );
