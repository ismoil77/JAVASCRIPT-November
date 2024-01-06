// task1

// function totalAmountAdjectives(a) {
//     let s = Object.values(a)

//     return s.length
// }
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));


// task2

// function nSidedShape(a) {
//     let obj = {
//         "1": "circle",
//         '2': "semi-circle",
//         "3": "triangle",
//         "4": "square",
//         "5": "pentagon",
//         "6": "hexagon",
//         "7": "heptagon",
//         "8": "octagon",
//         '9': "nonagon",
//         "10":"decagon"
//     }
//     return obj[`${a}`]
// }
// console.log(nSidedShape("3"));



// task3
// function isInRange(a, b) {
//     if (a > b.min && a < b.max) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(isInRange(7, { min: 0, max: 5 })
// );



// task4
// let s = { 1: "Mommy", 2: "please", 3: "help" }
// let d = s[1] + " " + s[2] + " " + s[3] + " " +s[2]
// console.log(d);



// task5
// function hasKey(a, b) {
//     let tt = Object.keys(a);
//     return tt.includes(b)
// }
// console.log(hasKey({ a: 44, b: 45, c: 46 },
//     "c"));




// task6
// function inkLevels(a) {
//     let res = Object.values(a)
//     let max = 1000000
//     res.filter((elem) => {
//         if (elem < max) {
//             max = elem
//         }
//     })
//     return max
// }
// console.log(inkLevels({ cyan: 3,magenta: 12 ,yellow: 10}));



// task7
// function isEmpty(a) {
//     let d = Object.keys(a)
//     return d.length==0
// }
// console.log(isEmpty({}));



//task8
// function calculateDifference(a, b) {
//     let cnt = 0;
//     let d = Object.values(a)
//     let r = d.forEach(element => {
//        cnt +=element
//     });
//     return Math.abs(cnt-b)
// }
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)
// );



//task9

// function maximumScore(a) {
//     let cnt = 0;
//     a.forEach(element => {
//       cnt +=  element.score
//  });
//     return cnt
// }
// console.log(maximumScore([
//     { tile: "B", score: 2 }, { tile: "V", score: 4 },
//     { tile: "F", score: 4 }, { tile: "U", score: 1 }, { tile: "D", score: 2 },
//     { tile: "O", score: 1 }, { tile: "U", score: 1 }
// ])
// );



// task10
// function addName(a, b, c) {
//   a[b]=c
//     return a
// }

// console.log(addName({}, "Brutus", 300));
