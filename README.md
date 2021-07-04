### TEST PROJECT FOR BUSHE

**REACT PROJECT**
* Для начала использования необходимо подключить прокси сервер ->
[Link to proxy](https://cors-anywhere.herokuapp.com/)

* Далее перейдите по ссылке на gh-pages ->
[Start Progect](http://pavel-khokhlov.github.io/bushe-react)

**TECHNOLOGIES**
* HTML, CSS, JS, ReactJS
* Для навигации по сайту подключенв библиотека react-router-dom
* Настроен ProtectedRoute, как отдельный компонент
* Созданы формы входа и редактирования профиля
* Настроена валидация форм с деакцивацией кнопки отправки. Валидации происходит с помощью дополнительного хука
* Настроена проверка пользователя при перезакгрузке страницы. На данный момент данные пользователя сохраняются в LocalStorage. В дальнейшем необходимо настроить запросы авторизации через сервер и сохранять JWT.
* Попап закрывается по OVERLAY, по ESC и по кнопке крестик
* Повторяющиеся функции выведены в отдельные хуки, находятся в папке Hooks: useConvert, useForm, useMath

**PAGES**
* PROTECTED ROUTE
1. DATALIST - список всех зарагистрированных звонков, выводится по 20 позиций, для ускорения загрузки, настроена кнопка ЕЩЕ.. - добавляет дополнительный список из 20 позиций. Реализована функция по нажатию на номер, открывается всплывающее окно с детализацией. Подключен обьект Loader - пока загружается база, пользователь видит анимацию загрузки.
2. STATISTIC - показывает общую статистику по всей БД, настроена форма выбора оператора и вывода детальной информации.
3. PROFILE - форма редактирования данных пользователя и с кнопкой ВЫЙТИ из базы данных. При выходе удаляются данные из LocalStorage. Кнопка Редактировать неактивна пока не произошли изменения.

* OPEN ROUTE
1. MAIN - главная титульная страница с переходом на страницу с формой входа.
2. LOGIN - форма авторизации пользователя. Есть проверка на корректный email и проверка длины пароля. Нет возможности отправить форму пока введены неправильные данные.

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