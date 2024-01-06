//// task1
// function multipleOfOdd(...a) {
//     let cnt2 = [];
//     let cnt3 = 0;
//     let r = a.forEach((value, index, array) => {
//         let cnt = 1;
//         value.forEach((value2, index, array) => {
//             if (value2 % 2 != 0) {
//                 cnt*=value2
                
//             }

//         })
//         cnt3+=cnt
       
//     })
//     return cnt3
// }
// console.log(multipleOfOdd([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));
// console.log(multipleOfOdd([1, 3], [2, 2, 3, 4, 7], [9, 7]));


////task2
// function isUnique(a) {
//     let cnt = 0;
//     let t = " ";
//     let rt = '';
//     let ty = 0;
//     a.forEach((value, index, array) => {
//         ty=value
        
//     })
//     for (let i = 0; i < a.length; i++) {
      
//         rt += a[i]
//            if (a[i] == a[i + 1] || a[a + 2] || a[a + 3] || a[a + 4] || a[a + 5]){
//             cnt++
//        }
        
//     }
//    return cnt==0
// }
// console.log(isUnique([1, 2, 3, 4, 5]));
console.log(isUnique([2, 3,2, 4, 8]));
function isUnique(a)
{

    for (let i = 0; a.length; i++)
    {
        if (i + i >= i + 1) {
            return false
        }
        else {
            return true
        }
        }
}






//// task3
// function sumOfEven(a) {
//     let valuee = Object.values(a);
//     let sum =0
//     valuee.forEach((value, index, array) => {
//         if (value % 2 == 0) {
//             sum+=value
//         }
//     })
//    return sum
// }
// console.log(sumOfEven({ a: 2, b: 5, c: 8, d: 3 }));
// console.log(sumOfEven({ a: 1, b: 5, c: 7, d: 3 }));




//// task4
// function longest(a) {
//     let ry = Object.values(a)
//     ry.sort((a, b) =>  b.length - a.length )
//     return ry[0]
// }
// console.log(longest({ name: 'John', city: 'New York', profession: 'developer' }));
// console.log(longest({ name: 'Mr.Smith', city: 'Korea', profession:'none' }));


////task5
// function convert(a) {
//     let obj = {}
//     let valueOfObject = Object.values(a);
//     let keyOfObject = Object.keys(a);
//     let allOfObject = Object.entries(a);
//     let cnt = -1;
//     let r = valueOfObject.forEach(element => {
//         obj[element]=keyOfObject[cnt+=1]
//     });
//     return obj
// }
// console.log(convert({ a: 'apple', b: 'banana', c: 'cherry' }));
// console.log(convert({ z: '1', x: '2', m: '3' }));






//// task6
// function average(a) {
//     let rw = 0;
//     let rt = [];
    
//     let isd = ",";
//     let yyi = [];
//     let r = a.forEach((value, index, array) => {
//         rt.push(Object.entries(value))
        
//         yyi.push(value.score)
       
//     })
//     let yy = rt.forEach((value2, index, array) => {
        
     
        
//     })
//     yyi.sort((a, b) => b - a)
//     let fin = {}
//     fin["highest"] = yyi[0]
//     fin["lowest"] = yyi[yyi.length-1]
//     fin["average"] =( yyi[0] + yyi[yyi.length - 1])/2
//     return fin
// }
// console.log(average([{ name: 'Alex', score: 80 }, { name: 'Emily', score: 95 },
// { name: 'Charlie', score: 88 }])
// );






//// task7
// function subjectAverage(a) {
//     let cnt = 0;
//     let cnt2 = 0;
//     let cnt3 = 0
//     a.forEach((value, index, array) => {
      
     
//         cnt += value.scores.math
//         cnt2 += value.scores.english
//         cnt3 += value.scores.history
//     })

//     let oobj = {}
//     oobj["math"] = (cnt / a.length);
//     oobj["english"] = cnt2 / a.length;
//     oobj["history"] = cnt3 / a.length
//     return oobj
// }
// console.log(subjectAverage([{ name: 'Alex', scores: {math: 80, english: 75, history:90}
// }, { name: 'Emily', scores: { math: 95, english: 88, history: 92 } }, { name: 'Charlie', scores: { math: 88, english: 92, history: 85 } }]));



//// task8
// function combine(a, b) {
//     return Object.assign(a,b)
// }
// console.log(combine({ a: 1, b: 2, c: 3 }, { b: 4, d: 5, e: 6 }));




//// task9

// function capMe(a) {
//     let dd = []
//     let yy =0
//     let rt = []
//     a.forEach((value, index, array) => {
//         dd.push(value[0].toUpperCase()+value.slice(1).toLowerCase())

        
//     })
//     return dd
// }
// console.log(capMe(['mavis', 'senaida', 'letty']));
// console.log(capMe(['samuel', 'MABELLE', 'KrYstal', 'CAListA'])
// );






////task10
// function squarePatch(a) {
//     cnt = [];
//     let ii =[]
//     for (let i = 0; i < a; i++) {
//        cnt.push([])
//     }
//     cnt.forEach((value, index, array) => {
//         for (let m = 0; m < a; m++) {
//         ii = value.push(a)
            
//         }
//     })
//     return cnt
// }
// console.log(squarePatch(1));
// console.log(squarePatch(2));
// console.log(squarePatch(3));