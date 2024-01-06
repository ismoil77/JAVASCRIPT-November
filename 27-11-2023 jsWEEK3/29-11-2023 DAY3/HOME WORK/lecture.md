*
"Объект"
Объект- это набор свойств какой либо вещи имеющий ключ (key) и значение(value);

Объекты можно брат несколкими спосробами :
1) console.log(obj.name )// ну через key
2) console.log(obj["full name"] )// ну через массив  string
let {name}=obj
3) consle.log(name)


Объект можно удалять --->  delete obj.name


Объект можно менять изменять значение ----> obj.name = "Ismoil"



Объект можно менять изменять ключи ----> let {name:name2} = obj


Объект destructuring  ----> let {name} = obj  ; consle.log(name)


Объект spread  ----> let obj2 = {...obj}  ; consle.log(obj2)









Методы объекта:
Метод Object.create()
Метод Object.create() позволяет создавать новые объекты и соединять их с прототипами существующих объектов.

Для примера можно создать экземпляр объекта job и расширить его.

// Initialize an object with properties and methods
const job = {
position: 'cashier',
type: 'hourly',
isAvailable: true,
showDetails() {
const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";
console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
}
};
// Use Object.create to pass properties
const barista = Object.create(job);
barista.position = "barista";
barista.showDetails();
The barista position is hourly and is accepting applications.

Объект barista теперь имеет одно свойство – position, но все остальные свойства и методы из job доступны через прототип. Метод Object.create() полезен для хранения кода DRY благодаря минимизации дублирования.

Метод Object.keys()
Метод Object.keys() создает массив ключей объекта.

Создайте объект и отобразите его массив ключей.

// Initialize an object
const employees = {
boss: 'Michael',
secretary: 'Pam',
sales: 'Jim',
accountant: 'Oscar'
};
// Get the keys of the object
const keys = Object.keys(employees);
console.log(keys);
["boss", "secretary", "sales", "accountant"]

Метод Object.keys можно использовать для итерации по ключам и значениям объектов.

// Iterate through the keys
Object.keys(employees).forEach(key => {
let value = employees[key];
console.log(`${key}: ${value}`);
});
boss: Michael
secretary: Pam
sales: Jim
accountant: Oscar

Метод Object.keys также позволяет проверить длину объекта.

// Get the length of the keys
const length = Object.keys(employees).length;
console.log(length);
4

С помощью свойства length вам удалось подсчитать свойства employees.

Метод Object.values()
Метод Object.values() создает массив значений объекта.

// Initialize an object
const session = {
id: 1,
time: `26-July-2018`,
device: 'mobile',
browser: 'Chrome'
};
// Get all values of the object
const values = Object.values(session);
console.log(values);
[1, "26-July-2018", "mobile", "Chrome"]

Методы Object.keys() и Object.values() позволяют возвращать данные объекта.

Метод Object.entries()
Метод Object.entries() создает вложенный массив пар «ключ-значение» объекта.

// Initialize an object
const operatingSystem = {
name: 'Ubuntu',
version: 18.04,
license: 'Open Source'
};
// Get the object key/value pairs
const entries = Object.entries(operatingSystem);
console.log(entries);
[
["name", "Ubuntu"] ["version", 18.04] ["license", "Open Source"] ]

Получив массив пар «ключ-значение», мы можем использовать метод forEach() для прохождения и работы с результатами.

// Loop through the results
entries.forEach(entry => {
let key = entry[0];
let value = entry[1];
console.log(`${key}: ${value}`);
});
name: Ubuntu
version: 18.04
license: Open Source

Метод Object.entries() возвращает только свойства экземпляра объекта, а не унаследованные свойства прототипа.

Метод Object.assign()
Метод Object.assign() копирует значения из одного объекта в другой.

Создайте два объекта и объедините их с помощью этого метода.

// Initialize an object
const name = {
firstName: 'Philip',
lastName: 'Fry'
};
// Initialize another object
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
// Merge the objects
const character = Object.assign(name, details);
console.log(character);
{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

Также можно использовать spread оператор (…). В приведенном ниже коде нужно изменить способ объявления character путем слияния объектов name и details.

// Initialize an object
const name = {
firstName: 'Philip',
lastName: 'Fry'
};
// Initialize another object
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
// Merge the object with the spread operator
const character = {...name, ...details}
console.log(character);
{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}

Метод Object.freeze()
Метод Object.freeze() предотвращает модификацию свойств и значений объекта и добавление или удаление свойств объекта.

// Initialize an object
const user = {
username: 'AzureDiamond',
password: 'hunter2'
};
// Freeze the object
const newUser = Object.freeze(user);
newUser.password = '*******';
newUser.active = true;
console.log(newUser);
{username: "AzureDiamond", password: "hunter2"}

В приведенном выше примере мы попытались переопределить пароль hunter2 с помощью *******, но свойство password осталось прежним. Мы также попытались добавить новое свойство, active, но оно не было добавлено.

Метод Object.isFrozen() позволяет определить, был ли объект заморожен или нет, и возвращает логическое значение.

Метод Object.seal()
Метод Object.seal()предотвращает добавление новых свойств объекта, но позволяет изменять существующие свойства. Этот метод похож на Object.freeze(). Обновите консоль, прежде чем выполнить нижеприведенный код, чтобы избежать ошибки.

// Initialize an object
const user = {
username: 'AzureDiamond',
password: 'hunter2'
};
// Seal the object
const newUser = Object.seal(user);
newUser.password = '*******';
newUser.active = true;
console.log(newUser);
{username: "AzureDiamond", password: "*******"}

Новое свойство active не было добавлено в объект, но свойство password было успешно изменено.

Метод Object.getPrototypeOf()
Метод Object.getPrototypeOf() используется для получения внутреннего скрытого [[Prototype]] объекта, также доступного через свойство __proto__.

В этом примере попробуйте создать массив с доступом к прототипу Array.

const employees = ['Ron', 'April', 'Andy', 'Leslie'];
Object.getPrototypeOf(employees);
[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]

В выводе вы увидите, что прототип массива employee имеет доступ к методам прототипов pop, find и других прототипов Array. Чтобы проверить это, протестируйте прототип employees.

Object.getPrototypeOf(employees) === Array.prototype;
true

Этот метод может предоставить дополнительную информацию об объекте или обеспечить доступ к прототипу другого объекта.

Существует также связанный с ним метод Object.setPrototypeOf(), который добавляет один прототип к другому объекту. Но вместо этого рекомендуется использовать Object.create(), поскольку он быстрее и эффективнее.

Заключение
У объектов есть много полезных методов, которые помогают модифицировать и итерировать их. В этом мануале вы узнали, как создавать и присваивать новые объекты, выполнять итерацию ключей и/или значений объекта, а также замораживать или блокировать объект.








Метод "this" keyword

this — это ключевое слово в JavaScript которое содержит в себе объект (контекст) выполняемого кода.

Мне кажется, что проще всего представить, что this — это уникальная переменная, которая хранит в себе контекст исполняемого кода. И наоборот — контекст — это значение ключевого слова this.

this имеет различные значения в зависимости от того, где используется:

Сама по себе - this относится к глобальному объекту (window).
В методе - this относится к родительскому объекту.
В функции - this относится к глобальному объекту.
В функции в 'strict mode' - this = undefined.
В стрелочной функции - this относится к контексту где функция была создана.
В событии - this ссылается на элемент запустивший событие.

this
Поведение ключевого слова this в JavaScript несколько отличается по сравнению с остальными языками. Имеются также различия при использовании this в строгом и нестрогом режиме.

В большинстве случаев значение this определяется тем, каким образом вызвана функция. Значение this не может быть установлено путём присваивания во время исполнения кода и может иметь разное значение при каждом вызове функции. В ES5 представлен метод bind(), который используется для привязки значения ключевого слова this независимо от того, как вызвана функция. Также в ES2015 представлены стрелочные функции, которые не создают собственные привязки к this (они сохраняют значение this лексического окружения, в котором были созданы).

Интерактивный пример


*