**Деструктуризация задания
Двумя наиболее часто используемыми структурами данных в JavaScript являются Objectи Array.

Объекты позволяют нам создавать единую сущность, которая хранит элементы данных по ключу.
Массивы позволяют нам собирать элементы данных в упорядоченный список.
Хотя, когда мы передаем их в функцию, это может не обязательно быть объект/массив в целом. Возможно, понадобятся отдельные детали.

Деструктурирующее присваивание — это специальный синтаксис, который позволяет нам «распаковывать» массивы или объекты в набор переменных, поскольку иногда это удобнее.

Деструктуризация также отлично работает со сложными функциями, имеющими множество параметров, значений по умолчанию и т. д. Скоро мы это увидим.

Деструктуризация массива
Вот пример того, как массив разбивается на переменные:

// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith
Теперь мы можем работать с переменными вместо членов массива.

Он отлично смотрится в сочетании с splitдругими методами возврата массива:

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith
Как видите, синтаксис прост. Однако есть несколько любопытных деталей. Давайте посмотрим больше примеров, чтобы лучше понять это.

«Деструктуризация» не означает «разрушение».
Это называется «деструктурирующим присваиванием», потому что оно «деструктуризует» путем копирования элементов в переменные. Но сам массив не изменяется.

Это просто более короткий способ записи:

// let [firstName, surname] = arr;
let firstName = arr[0];
let surname = arr[1];
Игнорировать элементы, использующие запятые
Ненужные элементы массива также можно отбросить с помощью лишней запятой:

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
В приведенном выше коде пропускается второй элемент массива, присваивается третий title, а также остальные элементы массива (поскольку для них нет переменных).

Работает с любой итерацией справа.
…На самом деле, мы можем использовать его с любыми итерируемыми объектами, а не только с массивами:

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
Это работает, потому что внутри присваивание деструктуризации работает путем перебора правильного значения. Это своего рода синтаксический сахар для вызова for..ofзначения справа =и присвоения значений.

Назначьте что-нибудь слева
Мы можем использовать любые «назначаемые объекты» с левой стороны.

Например, свойство объекта:

let user = {};
[user.name, user.surname] = "John Smith".split(' ');

alert(user.name); // John
alert(user.surname); // Smith
Цикл с помощью .entries()
В предыдущей главе мы видели метод Object.entries(obj) .

Мы можем использовать его с деструктуризацией для перебора ключей и значений объекта:

let user = {
  name: "John",
  age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}
Аналогичный код для a Mapпроще, поскольку он повторяем:

let user = new Map();
user.set("name", "John");
user.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
Трюк с заменой переменных
Существует известный трюк для замены значений двух переменных с помощью деструктурирующего присваивания:

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];

alert(`${guest} ${admin}`); // Pete Jane (successfully swapped!)
Здесь мы создаем временный массив из двух переменных и сразу деструктурируем его в порядке замены.

Таким образом мы можем поменять местами более двух переменных.