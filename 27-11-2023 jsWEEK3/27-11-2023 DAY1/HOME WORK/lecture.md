**Множество
Объект Array, как и массивы в других языках программирования, позволяет хранить коллекцию из нескольких элементов под одним именем переменной и имеет члены для выполнения общих операций с массивами .

Описание
В JavaScript массивы не являются примитивами , а представляют собой Arrayобъекты со следующими основными характеристиками:

Размер массивов JavaScript можно изменять , и они могут содержать различные типы данных . (Если эти характеристики нежелательны, используйте вместо них типизированные массивы .)
Массивы JavaScript не являются ассоциативными массивами , поэтому к элементам массива нельзя получить доступ с использованием произвольных строк в качестве индексов, но к ним необходимо обращаться с использованием неотрицательных целых чисел (или их соответствующей строковой формы) в качестве индексов.
Массивы JavaScript имеют нулевой индекс : первый элемент массива находится по индексу 0, второй по индексу 1и т. д., а последний элемент имеет значение lengthсвойства массива минус 1.
Операции копирования массива JavaScript создают неполные копии . (Все стандартные встроенные операции копирования с любыми объектами JavaScript создают поверхностные копии, а не глубокие копии ).
Индексы массива
Arrayобъекты не могут использовать произвольные строки в качестве индексов элементов (как в ассоциативном массиве ), но должны использовать неотрицательные целые числа (или их соответствующую строковую форму). Установка или доступ через нецелые числа не будет устанавливать или извлекать элемент из самого списка массива, но будет устанавливать или получать доступ к переменной, связанной с коллекцией свойств объекта этого массива . Свойства объекта массива и список элементов массива разделены, и к этим именованным свойствам нельзя применить операции обхода и мутации массива .

Элементы массива являются свойствами объекта в том же смысле, в котором они toStringявляются свойствами (но, если быть точным, toString()это метод). Тем не менее, попытка доступа к элементу массива следующим образом вызывает синтаксическую ошибку, поскольку имя свойства недопустимо:

JS

arr.0; // a syntax error
Синтаксис JavaScript требует, чтобы свойства, начинающиеся с цифры, были доступны с использованием скобочной записи вместо точечной записи . Индексы массива также можно заключать в кавычки (например, years['2']вместо years[2]), хотя обычно это не обязательно.

In преобразуется в строку движком JavaScript посредством неявного 2преобразования . В результате и будет относиться к двум разным слотам объекта , и следующий пример может быть таким :years[2]toString'2''02'yearstrue

JS

console.log(years["2"] !== years["02"]);
Только years['2']фактический индекс массива. years['02']— это произвольное строковое свойство, которое не будет посещаться при итерации массива.

Связь между длиной и числовыми свойствами
Свойство массива JavaScript lengthи числовые свойства связаны.

Некоторые встроенные методы массива (например, join(), slice(), indexOf()и т. д.) учитывают значение lengthсвойства массива при их вызове.

Другие методы (например, push(), splice()и т. д.) также приводят к обновлению свойства массива length.

JS

const fruits = [];
fruits.push("banana", "apple", "peach");
console.log(fruits.length); // 3
При установке свойства в массиве JavaScript, когда свойство является допустимым индексом массива и этот индекс находится за пределами текущих границ массива, движок lengthсоответствующим образом обновит свойство массива:

JS

fruits[5] = "mango";
console.log(fruits[5]); // 'mango'
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 6
Увеличение расширяет lengthмассив за счет добавления пустых слотов без создания новых элементов — даже undefined.

JS

fruits.length = 10;
console.log(fruits); // ['banana', 'apple', 'peach', empty x 2, 'mango', empty x 4]
console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
console.log(fruits.length); // 10
console.log(fruits[8]); // undefined
lengthОднако уменьшение свойства приводит к удалению элементов.

JS

fruits.length = 2;
console.log(Object.keys(fruits)); // ['0', '1']
console.log(fruits.length); // 2
Это объясняется далее на lengthстранице.

Методы массива и пустые слоты
Пустые слоты в разреженных массивах ведут себя несогласованно между методами массива. Как правило, старые методы пропускают пустые слоты, а новые рассматривают их как файлы undefined.

Среди методов, которые перебирают несколько элементов, следующие выполняют проверку inперед доступом к индексу и не объединяют пустые слоты с undefined:

concat()
copyWithin()
every()
filter()
flat()
flatMap()
forEach()
indexOf()
lastIndexOf()
map()
reduce()
reduceRight()
reverse()
slice()
some()
sort()
splice()