// task1
// function isEmpty(a) {
//    return a==""

// }
// console.log(isEmpty(""));

// task2
// function concatName(a, b) {
//     return a.concat(", ",b)
// }
// console.log(concatName("First", "Last")
// );


// task3
// function oddOrEven(a) {
//    return a.length%2==0
// }
// console.log(oddOrEven("pears"));


// task4
// function lastN(a) {
//     return a.at(-1)=="n"
// }
// console.log(lastN("iissn"));

// task5
// function repeatString(a, b) {
//     let d = typeof (a);
//     if (d != "String") {
//         return "not"
//     }
//     else {
//           return a.repeat(b)
//     }


// }
// console.log(repeatString(1990, 2));


// task6
// function capitalLetters(a) {
//     let cnt = 0;
//     for (let i = 0; i < a.length; i++){
//         if (a[i] == a[i].toUpperCase()) {
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc"));

// task7
// function calculate(a, b, c) {
//     if (c == "*") {
//        return a * b
//     }
//     else if (c == "-") {
//         return a- b
//     }
//     else if (c == "+") {
//         return a + b
//     }
//     else if (c == "/") {
//         return a / b
//     }
//     else if (c == "%") {
//         return a % b
//     }
// }
// console.log(calculate(4, 9, "+"));


// task8
// function numberSyllables(a) {
//     let d =a.split('-')
//     return d.length
// }
// console.log(numberSyllables("beau-ti-ful"));

// task9
// function evenOddString(a) {
//     let count = "";
//     let count2 = "";
//     let rez = a.split('')
//     for (let i = 0; i < rez.length; i++){
//         [i]%2==0?count+=rez[i]:count2+=rez[i]
//         console.log(i);
//     }
//     return count.concat(" ",count2)
// }
// console.log(evenOddString("edabit")
// );


// task10+-90%
// function potatoes(a) {
//     let cnt = 0;
//     let m = a.split("potato");
//     a= a.concat(" ")
   
//     for (let i = 0; i < m.length; i++){
//         m[i] == '' ? cnt++ : null;
//         console.log(cnt);
//         console.log(m);
//     }
//     console.log(a.includes('potato'));
//     console.log(a);
//     return cnt
// }
// console.log(potatoes("potatowpotato"));


// task10
// function potatoes(a) {
//     let g = a.replaceAll("potato", "▲")
//     let cnt = 0;
    
//     for (let i = 0; i < g.length; i++){
//         if (g[i] == "▲") {
//             cnt++
//         }
//     }
//     return cnt
// }
// console.log(potatoes("potatopotatosd"));




// task11
// function detectWord(a) {
//     let cnt = "";
//     for (let i = 0; i < a.length; i++){
//         if (a[i] == a[i].toLowerCase()) {
//            cnt+=a[i]
//         }
//     }
//     return cnt
// }
// console.log(detectWord("UcUNFYGaFYFYGtNUH"));
