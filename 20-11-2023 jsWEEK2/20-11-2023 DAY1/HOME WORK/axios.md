*Axios - это библиотека JavaScript, которая позволяет делать HTTP-запросы из браузера или из Node.js. Она предоставляет простой и удобный интерфейс для выполнения запросов на сервер и обработки ответов. Axios поддерживает множество методов запросов, включая GET, POST, PUT, DELETE и другие. Он также поддерживает загрузку и отправку файлов, установку заголовков запроса и многое другое. Axios является одним из наиболее популярных инструментов для работы с HTTP-запросами в JavaScript.

Для сетевых запросов и обработки ответов существует и встроенный современный метод fetch. Axios и fetch, предоставляют возможность делать HTTP-запросы из JavaScript. Однако, Axios имеет несколько преимуществ:

Axios поддерживает более широкий диапазон браузеров, включая IE8+, а fetch не поддерживает IE вообще.

Axios позволяет легко настраивать запросы, включая установку заголовков, обработку ошибок и многое другое.

Axios имеет встроенную поддержку отмены запросов, что может быть полезно в некоторых случаях.*
*Axios — это широко известная JavaScript-библиотека. Она представляет собой HTTP-клиент, основанный на промисах и предназначенный для браузеров и для Node.js. Если вы работали в последние несколько лет JavaScript-программистом, то вы, совершенно определённо, этой библиотекой пользовались. В октябре 2019 года пакет Axios был загружен из npm 25 миллионов раз. Кажется, что будущее Axios безоблачно. Но что если я скажу вам, что Axios — это мёртвый проект. Именно этому было посвящено одно обсуждение на Reddit. А именно, речь идёт о следующем:

В GitHub-репозитории Axios наблюдается весьма низкий уровень активности разработчиков.
Проблемы и PR игнорируются.
Команда разработчиков хранит молчание.

Ситуацию ухудшает и широко обсуждаемая уязвимость. Об этой уязвимости сообщено 2017 году. Авторы проекта игнорировали её более двух лет.

Когда библиотека Axios стала популярной, в браузерах не было API, реализующего HTTP-клиент, основанный на промисах. Стандартный интерфейс XML HTTP Request (XHR) был неудобным, работать с ним было тяжело. Разработчики с радостью приняли Axios из-за того, что эта библиотека облегчала им жизнь.



В 2015 вышел API Fetch. Почему же мы, в 2019 году, до сих пор используем Axios? Давайте сравним эти две технологии.

Объём шаблонного кода

▍Fetch

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

▍Axios

axios.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(response => console.log("response", response.data))
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

При использовании Fetch приходится иметь дело с двумя промисами. А вот при работе с Axios у нас есть прямой доступ к JSON-результату в свойстве data объекта ответа.

Метод json() миксина Body принимает поток Response и полностью читает его. Он возвращает промис, который разрешается JSON-результатом разбора текста тела запроса.

Ещё больше шаблонного кода в Fetch приходится использовать при работе с POST-запросами.

▍Fetch

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "Title of post",
    body: "Post Body"
  })
})
  .then(res => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log(error));

▍Axios

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "Title of post",
    body: "Body of post"
  })
  .then(response => console.log(response.data))
  .catch(error => console.log(error));

Использование Axios позволяет избежать написания больших объёмов шаблонного кода и сделать код чище и понятнее.

Обработка ошибок

▍Fetch

fetch("https://jsonplaceholder.typicode.com/todos/100000")
  .then(response => {
    if (!response.ok) throw Error(response.statusText);
    return response.json();
  })
  .then(data => console.log("data", data))
  .catch(error => {
    console.log("error", error);
  });
// error Error: Not Found

▍Axios

axios
  .get("https://jsonplaceholder.typicode.com/todos/100000")
  .then(response => {
    console.log("response", response);
  })
  .catch(error => {
    console.log("error", error);
  });
// error Error: Not Found

Библиотека Axios выдаёт сведения о сетевых ошибках, а API Fetch — нет. Работая с Fetch всегда нужно проверять свойство response.ok. Для того чтобы упростить решение данной задачи, проверку этой ошибки можно оформить в виде отдельной функции:

const checkForError = response => {
  if (!response.ok) throw Error(response.statusText);
  return response.json();
};
fetch("https://jsonplaceholder.typicode.com/todos/100000")
  .then(checkForError)
  .then(data => console.log("data", data))
  .catch(error => {
    console.log("error", error);
  });

Отсутствующие возможности

Axios умеет следить за ходом выгрузки данных. Fetch это не поддерживает. Это может стать решающим фактором выбора технологии для тех, кто разрабатывает приложение, позволяющее пользователям выгружать на сервер фотографии или видеофайлы.

const config = {
  onUploadProgress: event => console.log(event.loaded)
};
axios.put("/api", data, config);

Альтернативные библиотеки

Вот пара альтернатив Axios и API Fetch:

Ky — миниатюрный и продуманный HTTP-клиент, основанный на window.fetch.
Superagent — маленькая прогрессивная клиентская HTTP-библиотека, основанная на XMLHttpRequest.

Итоги

Чем стоит пользоваться в 2019 году? Это зависит от многого. Например, если вам нужно отслеживать прогресс выгрузки материалов на сервер, то вам лучше всего подойдёт Axios или Superagent. Если вы можете справиться с ограничениями Fetch — тогда вам лучше воспользоваться именно этим API. А для того, чтобы немного улучшить Fetch-код, попробуйте библиотеку-обёртку наподобие Ky.*