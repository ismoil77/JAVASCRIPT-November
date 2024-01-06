<h1 style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;color: beige;text-align:center;font-size:50px;word-spacing:-5px">F u nc t i o n s</h1>
<h2>
Функция - это блок код для выполнения определённых дейcтвий, но работает только при вызове=> Первый способ - это просто вызвать функцию: // объявляем функцию, которая выводит надпись в консоль const myFunction = () => console. log("It's my function!"); // а теперь вызываем myFunction(); // => It's my function!


 По сути функции JavaScript это то же самое, что и процедуры или подпрограммы в других языках программирования. Функция JavaScript выполняется только тогда, когда "что-то" обращается к ней (вызывает ее).
</h2>



<h2>
<h1 style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;color: beige;text-align:center;font-size:50px;word-spacing:-5px">В и д ы</h1>
<h1 style="font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;color: beige;text-align:center;font-size:50px;word-spacing:-5px">Функций</h1>
<h2>
Есть три вида функций 1)"Function declaration"


Это самая распространенная но и самая простая обычная "

function calculation(x) {
    let y;
    y = 17 * x * x - 6 * x + 13;
    return y;
}
console.log(calculation(0));
"


2)Function expression 

Это функция (выражения) и он выржается через let a = function , 

 Есть 1) ((anonymous))
-->
 "let a = function () {
    return a
}"


 Есть 2) ((arrow)) --> "let a = () => {
    return a
}"


3)Function IIFE (Immediately Invoked Function Expression)
Это функция исползуется очень мало , она выполняется при первом открытии сайта и после обновления страницы сайта 

"(()=>{
    return ;
})()"
</h2>

