### TEST PROJECT FOR BUSHE

**REACT PROJECT**
* Для начала использования необходимо подключить прокси сервер ->
[Link to proxy](https://cors-anywhere.herokuapp.com/)

* Далее перейдите по ссылке на gh-pages ->
[Start Progect](https://pavel-khokhlov.github.io/bushe-react/)

**TECHNOLOGIES**
* HTML, CSS, JS, ReactJS
* Для навигации по сайту подключенв библиотека react-router-dom
* Настроен ProtectedRoute, как отдельный компонент
* Созданы формы входа и редактирования профиля
* Настроена валидация форм с деакцивацией кнопки отправки. Валидации происходит с помощью дополнительного хука
* Настроена проверка пользователя при перезакгрузке страницы. На данный момент данные пользователя сохраняются в LocalStorage. В дальнейшем необходимо настроить запросы авторизации через сервер и сохранять JWT.
* Попап закрывается по OVERLAY, по ESC и по кнопке крестик

**PAGES**
* PROTECTED ROUTE
1. DATALIST - список всех зарагистрированных звонков, выводится список из 20 позиций, для облегчения загрузки, настроена кнопка ЕЩЕ.. - добавляет дополнительный список из 20 позиций. Реализована функция по нажатию на номер, открывается всплывающее окно с детализацией.
2. STATISTIC
3. PROFILE - форма редактирования данных пользователя и с кнопкой ВЫЙТИ из базы данных. При выходе удаляются данные из LocalStorage

* OPEN ROUTE
1. MAIN - главная титульная страница с переходом на страница с формой входа.
2. LOGIN - форма авторизации пользователя.

### ABOUT PROJECT
ТЕСТОВОЕ ЗАДАНИЕ НА ПОЗИЦИЮ
JUNIOR FRONTEND DEVELOPER
Существует таблица с данными о состоявшихся звонках и их характеристиках.
Сервер по адресу http://109.248.175.136/ с использованием порта 5000 принимает get- запрос и возвращает данные указанной таблицы в формате json.
Каждая строка данных содержит: number - номер телефона,
calltime - время вызова в формате unix, s_in_wait - время ожидания ответа, s_in_talk - время в процессе разговора, agent – id оператора, принявшего звонок.

Задача:
Реализовать приложение, которое будет получать данные из указанной таблицы и:
1. Отображать в дружелюбном виде данные о звонках.
2. По кнопке «Статистика» отображать статистику о количестве звонков с фильтром по любому доступному полю.
3. При нажатии на номер телефона выводить всю доступную историю звонков с этим номером в отдельном окне.
4. Дополнительный функционал: панель авторизации пользователей.
Требования:
Все действия должны происходить без перезагрузки страницы.
Адаптивная верстка приветствуется, но не обязательна.
Разрешается использование любых языков/библиотек/фреймворков, если вы способны объяснить свой выбор.
Приветствуется глубокое погружение в задачу с пониманием задач бизнеса, креативность визуализации и проявление инициативы при выполнении задачи.
Задание будет оцениваться с точки зрения UI/UX-дизайна, эффективности и скорости работы приложения.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
