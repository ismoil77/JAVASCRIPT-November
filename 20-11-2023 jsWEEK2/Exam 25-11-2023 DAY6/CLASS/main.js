// task1

// function doubleChar(a) {
//     let chas = ""

//     if (typeof(a) == "string") {
//         for (let i = 0; i < a.length; i++) {
//             chas += a[i] + "" + a[i]

//         }
//     }
//     else {
//         return "not a string"
//     }
//   return chas
// }
// console.log(doubleChar("qwerty"));



// task2(2)
// function seven(a) {
//     let otvet = "";
//     let razdelit = a.split(", ");
//     console.log(razdelit.length);
//     let soe = "";
//     let soe2 = "";
//     for (let i = 0; i < razdelit.length; i++){
//             soe += razdelit[i]
//     }
//     for (let rt = soe; rt > 0; rt = Math.floor(rt / 10)){
//         if (rt % 10 == 7) {
//             otvet="Boom"
//         }
//     }
//     return otvet=="Boom"?"Boom":"Not!"
// }
// console.log(seven("1, 2, 7, 4, 5, 65, 8"));



// task3
// function removesNumbers(a) {
//     let raz = a.split('');
//     let d = "";
//     let ff = 0;
//     // console.log(1 == "1");
//     for (let i = 0; i < raz.length; i++) {

//         if (raz[i] =="0"||raz[i] == "1" || raz[i] == "2" || raz[i] == "3" || raz[i] == "4" || raz[i] == "5" || raz[i] == "6" || raz[i] == "7" || raz[i] == "8" || raz[i] == "9") {
//             d += ""
//         }
//         else {
//             d += raz[i]
//         }


//     }
//     return d
// }
// console.log(removesNumbers("mubashir1234567890"));


// task4
// function reverse(a) {
//     let raz = a.split('');
//     let d = " "
//     for (let i = raz.length - 1; i >= 0; i--){
//         if (raz[i] == raz[i].toUpperCase()) {
//             d+=raz[i].toLowerCase()
//         }
//         else {
//             d += raz[i].toUpperCase()
//         }
//     }
// return d
// }
// console.log(reverse("Hello World"));



// task5

// function unrepeated(a) {
//     let dd = ""
//     let raz = a.split('');
//     for (let i = 0; i < raz.length; i++){
//         if (raz[i] == raz[i + 1]) {
//             dd+=""
//         }
//         else {
//             dd+=raz[i]
//         }
//     }
//     return dd
// }
// console.log(unrepeated("aaaaaa!!"));



// task6

// function createCounter() {
//     let cnt=1
//     return function(){
//       console.log(cnt++)
//     }
// }
// const counter1 = createCounter();
// counter1()
// counter1()
// counter1()



// task7
// function sumOfDigit() {
   

//     return function (a) {
//         let d = 0
//         for (let i = a; i > 0; i = Math.floor(i / 10)) {
//             d += i % 10
           
//         }
//        console.log(d);
//     }
// }
// const getSumOfDigit = sumOfDigit()
// getSumOfDigit(12345)
// getSumOfDigit(12345)



// task8

// function sumCubes(a,b=3) {
//     if (a == 1) {
//         return 1
//     }
//     return a ** b + sumCubes(a-1)
// }
// console.log(sumCubes(3));
// console.log(sumCubes(9));


// task9 with "for"
// function factFact(a, b = 4) {
//     let n = 1;
//     for (let i = 1; i <= b; i++){
        
//         for (let m = i; m >0; m--){
//             // console.log(m);
//             n*=m
//         }
       
//     }
//     return n
// }
// console.log(factFact(4));


//task9  with recursion

// function fact(n) {
//     if (n == 1) {
//         return 1;
//     }
//         return n * fact(n - 1);
// }
// function factFact(num) {
//     if (num == 1) {
//         return 1;
//     }
//         return fact(num) * factFact(num - 1);
// }

// console.log(factFact(5));





// task10

// function longestWord(a){
//      let m = 0;
//      let znach = ""
//      let raz = a.split(" ")
//     let dde = -99999999
    
//     for (let i = 0; i < raz.length; i++) {
//         let yy = raz[i]
   

//         if (raz[i].length > dde) {
//             dde = raz[i].length
//            znach = raz[i]
              
//         } 

//     }
//     return znach
// }
// console.log(longestWord('I play fooltball'));