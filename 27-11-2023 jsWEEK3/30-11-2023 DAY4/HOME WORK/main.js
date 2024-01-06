// task1
// function generation(a, b) {
//     let m = {
//             "-3": "great grandfather",
//             "-2": "grandfather",
//             "-1": "father",
//             "0": "me",
//             "1": "son",
//             "2": "grandson",
//             "3": "great grandson"
//         }
//         let f = {
//             "-3": "great grandmother",
//             "-2": "grandmother",
//             "-1": "mother",
//             "0": "me",
//             "1": "daughter",
//             "2": "granddaughter",
//             "3": "great granddaughter"
//     }
//     if (b == "m") {
//         return m[a]
//     }
//     else if (b == "f") {
//         return f[a]
//     }
// }
// console.log(generation(2, "f"));





// // task2
// function toArray(a) {
//     return Object.entries(a)
// }
// console.log(toArray({}));



// // task3
// function keysAndValues(a) {

//     return [Object.keys(a), Object.values(a)]
// }
// console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// );


// // task4
// function getBudgets(a) {
//     return a.reduce((ele,elem) =>ele+elem.budget,0);

// }
// console.log(getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 }
// ]));



// // task5
// function freeShipping(a) {
//     let r = Object.values(a)
//     let r2 = r.reduce((ele,elem) =>ele+elem,0);

//     return r2>50
// }
// console.log(freeShipping({ "FlatscreenTV": 399.99 }));



// // task6
// function mapping(a) {
//     let t = {}
//     a.forEach(element => {

//         t[element]=element.toUpperCase()

//     });
//    return t

// }
// console.log(mapping(["p", "s"]));


// // task7
// function afterNYears(a, b) {
//     let dd = Object.values(a)
//     let dd2 = Object.keys(a);
//    dd.forEach(element => {
//     element+b
//    });
//     let cnn = -1;
//     let t = {}
//  dd2.forEach((element) => {
//       t[element]=dd[cnn+=1]+b
//   });
//     return t
// }
// console.log(afterNYears({
//     "Joel": 32, "Fred": 44, "Reginald": 65, "Susan": 33,
//     "Julian": 13
// }, 1));



// // task8
// function removeEntry(a, b) {
//     delete a[b]
//     return a
// } console.log(removeEntry({ mirror: 500, painting: 1 }, "mirror"));






// // task9
// function mostExpensiveItem(a) {
//     let bigNum = -99999999999999
//     let r = Object.values(a)
//     let r2 = Object.keys(a)

//     console.log(r);
//     r.forEach(element => {
//         if (element > bigNum) {
//              bigNum = element
//          }
//     });
//     let  io = r.indexOf(bigNum)

//   return r2[io]
// }
// console.log(mostExpensiveItem({ tv: 30})
// );


//task4
function longest(a) {
    let r = Object.values(a);
    r.sort((a, b) => b.length - a.length)
    return r[0]
}
console.log(longest({ name: 'Mr.Smith', city: 'Korea', profession:'none' }));


// task10
// function invert(a) {
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
// console.log(invert({"z": "q","w": "f"}));



