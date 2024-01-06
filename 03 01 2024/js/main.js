import { a,ab } from "./dom.js";



let user = {
    name: 'Ismoil',
    age:'20 '
}


let user2 = {
    name: 'Ismoil1',
    age: '201'
}
localStorage.setItem("user", JSON.stringify(user));
// localStorage.removeItem("user");

console.log(a);
console.log(ab); 

sessionStorage.setItem("user2", JSON.stringify(user2));
