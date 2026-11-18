const { useState, useEffect } = React;

const COURSES_DATA = [
    {
        id: 'js',
        title: 'JavaScript с нуля до Хардкора',
        desc: '60+ терминов и 10 уровней: от вывода текста до алгоритмов массивов и методов.',
        color: 'from-red-600 to-rose-900',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        level: '10 уровней',
        fileName: 'script.js',
        type: 'js-live',
        lessons: [
            {
                id: 'js-1',
                difficulty: '🟢 Ур. 1',
                title: '1. Вывод в консоль',
                theory: 'Команда console.log() выводит текст в терминал. Текст всегда пишется в кавычках.',
                vocabulary: [
                    { word: 'console', meaning: 'Объект среды разработки, отвечающий за вывод информации.' },
                    { word: 'log()', meaning: 'Метод, который печатает переданные данные на экран.' },
                    { word: 'Кавычки (" ")', meaning: 'Обозначают тип данных "строка" (текст).' }
                ],
                task: 'Выведи в консоль фразу "Кума Амбаш)"',
                starterCode: 'console.log("Привет, мир!");',
                check: (code, out) => out.includes('Привет, мир!')
            },
            {
                id: 'js-2',
                difficulty: '🟢 Ур. 2',
                title: '2. Математические операции',
                theory: 'В JS можно выполнять базовую математику: сложение (+), вычитание (-), умножение (*) и деление (/).',
                vocabulary: [
                    { word: '+', meaning: 'Оператор сложения чисел или конкатенации строк.' },
                    { word: '*', meaning: 'Оператор математического умножения.' }
                ],
                task: 'Выведи результат умножения 12 на 8.',
                starterCode: 'console.log(12 * 8);',
                check: (code, out) => out.includes('96')
            },
            {
                id: 'js-3',
                difficulty: '🟡 Ур. 3',
                title: '3. Переменные (const)',
                theory: 'Константа (const) — это неизменяемая коробка для хранения значений.',
                vocabulary: [
                    { word: 'const', meaning: 'Ключевое слово для создания константы (значение нельзя перезаписать).' },
                    { word: 'Имя переменной', meaning: 'Уникальное название ячейки памяти, к которой мы обращаемся.' }
                ],
                task: 'Создай константу score со значением 100 и выведи её.',
                starterCode: 'const score = 100;\nconsole.log(score);',
                check: (code, out) => code.includes('const') && out.includes('100') && out.includes('score')
            },
            {
                id: 'js-4',
                difficulty: '🟡 Ур. 4',
                title: '4. Переменные с перезаписью (let)',
                theory: 'В отличие от const, переменная let позволяет изменять свое значение в процессе работы программы.',
                vocabulary: [
                    { word: 'let', meaning: 'Ключевое слово для создания переменной, значение которой может меняться.' },
                    { word: '=', meaning: 'Оператор присваивания (записать значение справа в переменную слева).' }
                ],
                task: 'Объяви let points = 10, затем увеличь points на 5 (points = points + 5) и выведи.',
                starterCode: 'let points = 10;\npoints = points + 5;\nconsole.log(points);',
                check: (code, out) => code.includes('let') && out.includes('15')
            },
            {
                id: 'js-5',
                difficulty: '🟠 Ур. 5',
                title: '5. Условия (if / else)',
                theory: 'Конструкция if проверяет условие: если оно верно (true), выполняется первый блок кода, иначе — блок else.',
                vocabulary: [
                    { word: 'if', meaning: 'Слово «если» — запускает код, если условие в скобках истинно.' },
                    { word: 'else', meaning: 'Слово «иначе» — срабатывает, если условие if ложно.' },
                    { word: '>=', meaning: 'Оператор сравнения: больше или равно.' }
                ],
                task: 'Напиши условие: если level >= 5, выведи "Профи", иначе "Новичок". Пусть level = 6.',
                starterCode: 'let level = 6;\nif (level >= 5) {\n  console.log("Профи");\n} else {\n  console.log("Новичок");\n}',
                check: (code, out) => out.includes('Профи')
            },
            {
                id: 'js-6',
                difficulty: '🟠 Ур. 6',
                title: '6. Массивы (Arrays)',
                theory: 'Массив — это упорядоченный список элементов в квадратных скобках. Нумерация элементов начинается с 0.',
                vocabulary: [
                    { word: '[ ... ]', meaning: 'Квадратные скобки создают массив (список элементов).' },
                    { word: '[0]', meaning: 'Обращение к первому элементу массива по его индексу (номеру).' }
                ],
                task: 'Дан массив языков. Выведи второй элемент массива ("Python") через его индекс [1].',
                starterCode: 'const langs = ["JavaScript", "Python", "C++"];\nconsole.log(langs[1]);',
                check: (code, out) => out.includes('Python')
            },
            {
                id: 'js-7',
                difficulty: '🔴 Ур. 7',
                title: '7. Циклы (for loop)',
                theory: 'Цикл for выполняет блок кода многократно. Состоит из: инициализации (let i = 0), условия (i < 3) и шага (i++).',
                vocabulary: [
                    { word: 'for', meaning: 'Оператор цикла с фиксированным числом повторений.' },
                    { word: 'i++', meaning: 'Инкремент: увеличивает переменную i на 1 после каждой итерации.' }
                ],
                task: 'Напиши цикл от 1 до 3, выводящий число i на каждом шаге.',
                starterCode: 'for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}',
                check: (code, out) => out.includes('for') && out.includes('3')
            },
            {
                id: 'js-8',
                difficulty: '🔴 Ур. 8',
                title: '8. Функции (Functions)',
                theory: 'Функция — это поименованный блок кода, который можно вызывать многократно с разными аргументами.',
                vocabulary: [
                    { word: 'function', meaning: 'Ключевое слово для создания функции.' },
                    { word: 'return', meaning: 'Возвращает результат работы функции наружу и завершает её.' }
                ],
                task: 'Создай функцию sum(a, b), которая возвращает a + b. Выведи sum(10, 20).',
                starterCode: 'function sum(a, b) {\n  return a + b;\n}\nconsole.log(sum(10, 20));',
                check: (code, out) => out.includes('return') && out.includes('30')
            },
            {
                id: 'js-9',
                difficulty: '💀 Ур. 9 (Хардкор)',
                title: '9. Метод массива .map()',
                theory: 'Метод .map() берет каждый элемент массива, применяет к нему функцию и создает новый преобразованный массив.',
                vocabulary: [
                    { word: '.map()', meaning: 'Метод трансформации: создает новый массив на основе старого.' },
                    { word: 'x => x * 2', meaning: 'Стрелочная функция: каждый элемент x умножает на 2.' }
                ],
                task: 'Дан массив [1, 2, 3]. Умножь каждый элемент на 2 с помощью .map() и выведи результат.',
                starterCode: 'const nums = [1, 2, 3];\nconst doubled = nums.map(x => x * 2);\nconsole.log(doubled);',
                check: (code, out) => out.includes('map') && out.includes('2,4,6')
            },
            {
                id: 'js-10',
                difficulty: '💀 Ур. 10 (Босс)',
                title: '10. Фильтрация и свертка (.filter и .reduce)',
                theory: 'Фильтрация отсекает лишнее, а reduce сводит весь массив к одному итоговому значению (например, сумме).',
                vocabulary: [
                    { word: '.filter()', meaning: 'Оставляет в массице только те элементы, которые прошли проверку (true).' },
                    { word: '.reduce()', meaning: 'Аккумулирует значения массива в единый результат (например, сумму).' }
                ],
                task: 'Отфильтруй числа > 5 из [3, 6, 8, 2], сложи их через reduce и выведи сумму (14).',
                starterCode: 'const arr = [3, 6, 8, 2];\nconst res = arr.filter(n => n > 5).reduce((a, b) => a + b, 0);\nconsole.log(res);',
                check: (code, out) => out.includes('filter') && out.includes('reduce') && out.includes('14')
            }
        ]
    },
    {
        id: 'htmlcss',
        title: 'HTML5 & CSS3 Верстка от А до Я',
        desc: '10 уровней верстки: от базовых тегов до Flexbox, Grid и анимаций со словарем терминов.',
        color: 'from-rose-700 to-zinc-900',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
        level: '10 уровней',
        fileName: 'index.html',
        type: 'html-live',
        lessons: [
            {
                id: 'html-1',
                difficulty: '🟢 Ур. 1',
                title: '1. Заголовок и абзац',
                theory: 'Теги создают структуру документа. <h1> — самый главный заголовок, <p> — обычный текст.',
                vocabulary: [
                    { word: '<h1>', meaning: 'Главный заголовок страницы (Heading level 1).' },
                    { word: '<p>', meaning: 'Абзац текста (Paragraph).' }
                ],
                task: 'Создай заголовок <h1> с текстом "Привет" и абзац <p> с текстом "Я учу верстку".',
                starterCode: '<style>body{background:#111;color:#fff;font-family:sans-serif;padding:20px;}</style>\n<h1>Привет</h1>\n<p>Я учу верстку</p>',
                check: (code) => code.includes('<h1>') && code.includes('<p>')
            },
            {
                id: 'html-2',
                difficulty: '🟢 Ур. 2',
                title: '2. Кнопка и цвета (CSS)',
                theory: 'Тег <button> создает интерактивную кнопку. Внутри <style> мы настраиваем её цвет фона (background).',
                vocabulary: [
                    { word: '<button>', meaning: 'Кликабельный элемент интерфейса (кнопка).' },
                    { word: 'background', meaning: 'Свойство CSS, задающее фоновый цвет элемента.' }
                ],
                task: 'Создай кнопку <button> с текстом "Войти" и сделай её фон красным (#ef4444).',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  button { background: #ef4444; color: white; border: none; padding: 10px 20px; border-radius: 6px; }\n</style>\n\n<button>Войти</button>',
                check: (code) => code.includes('<button>') && code.includes('#ef4444')
            },
            {
                id: 'html-3',
                difficulty: '🟡 Ур. 3',
                title: '3. Блоки и скругление углов',
                theory: 'Блок <div> служит контейнером. Свойство border-radius скругляет его углы.',
                vocabulary: [
                    { word: '<div>', meaning: 'Универсальный блочный контейнер для группировки элементов.' },
                    { word: 'border-radius', meaning: 'Радиус скругления углов рамки или блока.' }
                ],
                task: 'Создай блок <div> с классом "card", задай ему фон #222 и скругление 12px.',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  .card {\n    background: #222;\n    padding: 20px;\n    border-radius: 12px;\n  }\n</style>\n\n<div class="card">Карточка</div>',
                check: (code) => code.includes('border-radius') && code.includes('12px')
            },
            {
                id: 'html-4',
                difficulty: '🟡 Ур. 4',
                title: '4. Ссылки и списки',
                theory: 'Для создания меню используют списки <ul>, элементы <li> и ссылки <a href="...">.',
                vocabulary: [
                    { word: '<ul> / <li>', meaning: 'Маркированный список и его элементы (List Item).' },
                    { word: '<a href>', meaning: 'Гиперссылка на другой документ или страницу.' }
                ],
                task: 'Добавь в список меню элемент с ссылкой <a href="#">Главная</a>.',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  ul { list-style: none; padding: 0; }\n  a { color: #ef4444; text-decoration: none; font-weight: bold; }\n</style>\n\n<ul>\n  <li><a href="#">Главная</a></li>\n</ul>',
                check: (code) => code.includes('<li>') && code.includes('Главная')
            },
            {
                id: 'html-5',
                difficulty: '🟠 Ур. 5',
                title: '5. Flexbox: Выравнивание в ряд',
                theory: 'display: flex превращает контейнер в гибкий ряд, а justify-content: space-between расталкивает дочерние элементы по краям.',
                vocabulary: [
                    { word: 'display: flex', meaning: 'Включает гибкую модель верстки Flexbox.' },
                    { word: 'justify-content', meaning: 'Выравнивает элементы по главной оси (горизонтали).' },
                    { word: 'space-between', meaning: 'Равномерно распределяет элементы с отступами между ними по краям.' }
                ],
                task: 'Добавь в класс .navbar свойства display: flex и justify-content: space-between.',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  .navbar {\n    background: #222;\n    padding: 15px;\n    /* Добавь flex и justify-content здесь */\n  }\n</style>\n\n<div class="navbar">\n  <span>Лого</span>\n  <button style="background:#ef4444;color:#fff;border:0;padding:6px 12px;border-radius:4px;">Кнопка</button>\n</div>',
                check: (code) => code.includes('display: flex') && code.includes('space-between')
            },
            {
                id: 'html-6',
                difficulty: '🟠 Ур. 6',
                title: '6. Псевдокласс :hover (Интерактив)',
                theory: 'Псевдокласс :hover срабатывает, когда пользователь наводит мышку на элемент.',
                vocabulary: [
                    { word: ':hover', meaning: 'Состояние элемента при наведении на него курсора мыши.' },
                    { word: 'transition', meaning: 'Плавное изменение свойств во времени (анимация перехода).' }
                ],
                task: 'Добавь для кнопки стиль .btn:hover, чтобы при наведении её фон менялся на #dc2626, а transition делал это плавно.',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  .btn {\n    background: #ef4444; color: #fff; border: 0; padding: 10px 20px; border-radius: 6px; cursor: pointer;\n    transition: background 0.3s;\n  }\n  /* Напиши .btn:hover ниже */\n</style>\n\n<button class="btn">Наведи на меня</button>',
                check: (code) => code.includes(':hover') && code.includes('background')
            },
            {
                id: 'html-7',
                difficulty: '🔴 Ур. 7',
                title: '7. Тени и свечение (box-shadow)',
                theory: 'Свойство box-shadow добавляет тень вокруг блока. С нулевым смещением и цветным размытием получается неоновое свечение.',
                vocabulary: [
                    { word: 'box-shadow', meaning: 'Параметры тени: сдвигX, сдвигY, размытие, растяжение, цвет.' },
                    { word: 'rgba()', meaning: 'Цветовая модель RGB с каналом прозрачности (альфа-канал).' }
                ],
                task: 'Добавь карточке .card неоновую красную тень: box-shadow: 0 0 20px rgba(239, 68, 68, 0.4);',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  .card {\n    background: #222; padding: 20px; border-radius: 10px;\n    /* Добавь box-shadow ниже */\n  }\n</style>\n\n<div class="card">Неоновая карточка</div>',
                check: (code) => code.includes('box-shadow') && code.includes('rgba')
            },
            {
                id: 'html-8',
                difficulty: '🔴 Ур. 8',
                title: '8. Адаптивность и медиазапросы (@media)',
                theory: 'Медиазапросы позволяют менять стили сайта в зависимости от ширины экрана устройства (например, телефонов).',
                vocabulary: [
                    { word: '@media', meaning: 'Правило CSS для применения стилей под конкретные экраны.' },
                    { word: 'max-width: 600px', meaning: 'Сработает на экранах шире до 600 пикселей (смартфоны).' }
                ],
                task: 'Напиши медиазапрос @media (max-width: 600px), который меняет фоновый цвет body на #1a0505.',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  /* Напиши медиазапрос ниже */\n</style>\n<h1>Адаптивный сайт</h1>',
                check: (code) => code.includes('@media') && code.includes('max-width')
            },
            {
                id: 'html-9',
                difficulty: '💀 Ур. 9 (Хардкор)',
                title: '9. CSS Grid Сетки',
                theory: 'CSS Grid — мощный инструмент двумерной сетки. repeat(2, 1fr) создает две колонки одинаковой ширины.',
                vocabulary: [
                    { word: 'display: grid', meaning: 'Включает сеточный двумерный макет Grid.' },
                    { word: 'repeat(2, 1fr)', meaning: 'Повторить колонку размером 1 фракция (1fr) 2 раза.' },
                    { word: 'gap', meaning: 'Универсальный отступ между ячейками сетки.' }
                ],
                task: 'Создай сетку .grid с двумя колонками (repeat(2, 1fr)) и отступом gap: 15px.',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  .grid {\n    display: grid;\n    /* Задай колонки и gap ниже */\n  }\n  .box { background: #222; padding: 15px; border-radius: 8px; }\n</style>\n\n<div class="grid">\n  <div class="box">Элемент 1</div>\n  <div class="box">Элемент 2</div>\n</div>',
                check: (code) => code.includes('grid-template-columns') || code.includes('repeat(2')
            },
            {
                id: 'html-10',
                difficulty: '💀 Ур. 10 (Босс)',
                title: '10. CSS Анимации (@keyframes)',
                theory: 'Правило @keyframes задает ключевые кадры анимации, а свойство animation запускает её бесконечно.',
                vocabulary: [
                    { word: '@keyframes', meaning: 'Каскад кадров, описывающий изменение стилей во времени.' },
                    { word: 'infinite', meaning: 'Бесконечное повторение созданной анимации.' }
                ],
                task: 'Создай анимацию пульсации @keyframes pulse, меняющую opacity от 1 до 0.5, и запусти её для .box.',
                starterCode: '<style>\n  body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }\n  @keyframes pulse {\n    0%, 100% { opacity: 1; }\n    50% { opacity: 0.5; }\n  }\n  .box {\n    background: #ef4444; padding: 20px; border-radius: 8px;\n    animation: pulse 2s infinite;\n  }\n</style>\n\n<div class="box">Пульсирующий блок</div>',
                check: (code) => code.includes('@keyframes') && code.includes('animation')
            }
        ]
    },
    {
        id: 'python',
        title: 'Python для начинающих и профи',
        desc: '10 уровней Python: от print и циклов до функций, словарей и списковых генераторов.',
        color: 'from-red-600 to-zinc-950',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
        level: '10 уровней',
        fileName: 'main.py',
        type: 'python-sim',
        lessons: [
            {
                id: 'py-1',
                difficulty: '🟢 Ур. 1',
                title: '1. Функция print()',
                theory: 'В Python вывод текста на экран делается встроенной функцией print().',
                vocabulary: [
                    { word: 'print()', meaning: 'Функция вывода данных в консоль Python.' },
                    { word: 'Строка ("...")', meaning: 'Текстовый тип данных (str).' }
                ],
                task: 'Напиши команду вывода фразы "Python рулит"',
                starterCode: 'print("Python рулит")',
                check: (code) => code.includes('print') && code.includes('Python рулит'),
                simulate: () => 'Python рулит'
            },
            {
                id: 'py-2',
                difficulty: '🟢 Ур. 2',
                title: '2. Переменные и типы данных',
                theory: 'В Python не нужно указывать тип переменной при создании. Числа (int) и текст (str) складываются по-разному.',
                vocabulary: [
                    { word: 'int', meaning: 'Целое число (Integer).' },
                    { word: 'str', meaning: 'Строковый тип данных (String).' }
                ],
                task: 'Создай переменную age = 20 и выведи её.',
                starterCode: 'age = 20\nprint(age)',
                check: (code) => code.includes('age') && code.includes('20'),
                simulate: () => '20'
            },
            {
                id: 'py-3',
                difficulty: '🟡 Ур. 3',
                title: '3. Условия if / elif / else',
                theory: 'Python проверяет ветвления с помощью ключевых слов if (если), elif (иначе если) и else (иначе). Обязательны отступы в 4 пробела!',
                vocabulary: [
                    { word: 'elif', meaning: 'Сокращение от "else if" — дополнительная проверка условия.' },
                    { word: 'Отступы', meaning: 'В Python отступы заменяют фигурные скобки {} других языков.' }
                ],
                task: 'Напиши условие: если score >= 90, выведи "Отлично". Пусть score = 95.',
                starterCode: 'score = 95\nif score >= 90:\n    print("Отлично")',
                check: (code) => code.includes('if') && code.includes('Отлично'),
                simulate: () => 'Отлично'
            },
            {
                id: 'py-4',
                difficulty: '🟡 Ур. 4',
                title: '4. Списки (Lists)',
                theory: 'Список в Python хранит набор элементов в квадратных скобках [].',
                vocabulary: [
                    { word: 'append()', meaning: 'Метод добавления нового элемента в конец списка.' }
                ],
                task: 'Добавь в список items элемент "Ноутбук" через метод .append("Ноутбук") и выведи список.',
                starterCode: 'items = ["Телефон", "Планшет"]\nitems.append("Ноутбук")\nprint(items)',
                check: (code) => code.includes('append') && code.includes('Ноутбук'),
                simulate: () => "['Телефон', 'Планшет', 'Ноутбук']"
            },
            {
                id: 'py-5',
                difficulty: '🟠 Ур. 5',
                title: '5. Цикл for и функция range()',
                theory: 'Функция range(1, 4) генерирует последовательность чисел от 1 до 3.',
                vocabulary: [
                    { word: 'range(start, stop)', meaning: 'Генератор числовой последовательности для циклов.' }
                ],
                task: 'Напиши цикл for i in range(1, 4): и выводи квадраты чисел i**2.',
                starterCode: 'for i in range(1, 4):\n    print(i ** 2)',
                check: (code) => code.includes('for') && code.includes('range'),
                simulate: () => '1\n4\n9'
            },
            {
                id: 'py-6',
                difficulty: '🟠 Ур. 6',
                title: '6. Функции (def и return)',
                theory: 'Функция в Python создается через def имя(аргументы):, а возвращает результат через return.',
                vocabulary: [
                    { word: 'def', meaning: 'Ключевое слово для определения (definition) функции.' },
                    { word: 'return', meaning: 'Возвращает значение из функции наружу.' }
                ],
                task: 'Напиши функцию cube(x), возвращающую x ** 3. Выведи cube(3).',
                starterCode: 'def cube(x):\n    return x ** 3\n\nprint(cube(3))',
                check: (code) => code.includes('def') && code.includes('return') && code.includes('** 3'),
                simulate: () => '27'
            },
            {
                id: 'py-7',
                difficulty: '🔴 Ур. 7',
                title: '7. Словари (Dictionaries)',
                theory: 'Словарь хранит данные парами "ключ": "значение" в фигурных скобках {}.',
                vocabulary: [
                    { word: 'dict["key"]', meaning: 'Обращение к значению словаря по его текстовому ключу.' }
                ],
                task: 'Создай словарь user = {"name": "Айдар", "role": "Admin"} и выведи user["role"].',
                starterCode: 'user = {"name": "Айдар", "role": "Admin"}\nprint(user["role"])',
                check: (code) => code.includes('user') && code.includes('"role"'),
                simulate: () => 'Admin'
            },
            {
                id: 'py-8',
                difficulty: '🔴 Ур. 8',
                title: '8. Работа с файлами (open)',
                theory: 'Python позволяет читать и записывать файлы с помощью встроенной функции open().',
                vocabulary: [
                    { word: 'open(file, "w")', meaning: 'Открывает файл для записи (write) или чтения (read).' },
                    { word: '.write()', meaning: 'Метод записи текста в открытый файл.' }
                ],
                task: 'Запиши текст "Hello" в файл "notes.txt" с помощью open("notes.txt", "w") as f:',
                starterCode: 'with open("notes.txt", "w") as f:\n    f.write("Hello")',
                check: (code) => code.includes('open') && code.includes('write'),
                simulate: () => 'Файл notes.txt успешно записан!'
            },
            {
                id: 'py-9',
                difficulty: '💀 Ур. 9 (Хардкор)',
                title: '9. List Comprehension (Генераторы списков)',
                theory: 'Компактный способ создания списков в одну строку: [expression for item in iterable if condition].',
                vocabulary: [
                    { word: '[x for x in ...]', meaning: 'Генератор списка: фильтрация и трансформация в 1 строчку.' }
                ],
                task: 'Создай список квадратов четных чисел от 1 до 5: [x**2 for x in range(1, 6) if x % 2 == 0]. Выведи его.',
                starterCode: 'res = [x**2 for x in range(1, 6) if x % 2 == 0]\nprint(res)',
                check: (code) => code.includes('for') && code.includes('if'),
                simulate: () => '[4, 16]'
            },
            {
                id: 'py-10',
                difficulty: '💀 Ур. 10 (Босс)',
                title: '10. Лямбда-функции и filter()',
                theory: 'lambda — это анонимная функция в одну строчку. Часто используется вместе с filter() или map().',
                vocabulary: [
                    { word: 'lambda', meaning: 'Создание безымянной короткой функции на лету.' },
                    { word: 'list()', meaning: 'Преобразует итератор (например, фильтр) в полноценный список.' }
                ],
                task: 'Отфильтруй четные числа из [1, 2, 3, 4, 5, 6] с помощью list(filter(lambda x: x % 2 == 0, nums)).',
                starterCode: 'nums = [1, 2, 3, 4, 5, 6]\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)',
                check: (code) => code.includes('lambda') && code.includes('filter'),
                simulate: () => '[2, 4, 6]'
            }
        ]
    },
    {
        id: 'react',
        title: 'React.js Компоненты и Хуки',
        desc: '10 уровней React: от JSX и Props до useState, useEffect и списков .map().',
        color: 'from-rose-600 to-red-950',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
        level: '10 уровней',
        fileName: 'App.jsx',
        type: 'pattern-check',
        lessons: [
            {
                id: 'react-1',
                difficulty: '🟢 Ур. 1',
                title: '1. Компонент и JSX',
                theory: 'React-компонент — это функция, возвращающая HTML-разметку (JSX).',
                vocabulary: [
                    { word: 'JSX', meaning: 'Расширение синтаксиса JavaScript, похожее на HTML внутри JS.' },
                    { word: 'return', meaning: 'Возвращает разметку, которую React отрисует на экране.' }
                ],
                task: 'Верни из компонента Title заголовок <h1>Привет, React!</h1>.',
                starterCode: 'function Title() {\n  return (\n    <div>\n      {/* Напиши h1 ниже */}\n    </div>\n  );\n}',
                check: (code) => code.includes('<h1>Привет, React!</h1>'),
                successMsg: 'Компонент успешно отрендерен!'
            },
            {
                id: 'react-2',
                difficulty: '🟢 Ур. 2',
                title: '2. Передача данных через Props',
                theory: 'Props (свойства) передают данные сверху вниз от родителя к дочернему компоненту.',
                vocabulary: [
                    { word: 'props', meaning: 'Объект с входными параметрами компонента.' },
                    { word: '{title}', meaning: 'Деструктуризация пропса для прямого использования в тексте.' }
                ],
                task: 'Выведи переданный пропс {name} внутри тега <h2>.',
                starterCode: 'function Greeting({ name }) {\n  return (\n    <div>\n      {/* Выведи name ниже */}\n    </div>\n  );\n}',
                check: (code) => code.includes('{name}'),
                successMsg: 'Пропс успешно выведен на экран!'
            },
            {
                id: 'react-3',
                difficulty: '🟡 Ур. 3',
                title: '3. Хук состояния (useState)',
                theory: 'useState дает компоненту реактивную память. Возвращает значение и функцию для его изменения.',
                vocabulary: [
                    { word: 'useState(0)', meaning: 'Хук состояния с начальным значением 0.' },
                    { word: 'const [val, setVal]', meaning: 'Массив: текущее состояние и функция-сеттер для его обновления.' }
                ],
                task: 'Инициализируй состояние счетчика с начальным числом 10: const [count, setCount] = useState(10);',
                starterCode: 'function Counter() {\n  // Установи useState(10) ниже\n  const [count, setCount] = useState(0);\n  return <span>{count}</span>;\n}',
                check: (code) => code.includes('useState(10)'),
                successMsg: 'Состояние инициализировано со значением 10!'
            },
            {
                id: 'react-4',
                difficulty: '🟡 Ур. 4',
                title: '4. Обработка кликов (onClick)',
                theory: 'Событие клика в React записывается в camelCase: onClick и принимает функцию-обработчик.',
                vocabulary: [
                    { word: 'onClick', meaning: 'Событие нажатия мыши на элемент интерфейса.' },
                    { word: 'setCount(...)', meaning: 'Изменяет состояние, заставляя React перерисовать компонент.' }
                ],
                task: 'Добавь кнопке событие onClick={() => setCount(count + 1)}.',
                starterCode: 'function PlusOne() {\n  const [count, setCount] = useState(0);\n  return (\n    <button /* Добавь onClick ниже */>\n      Кликов: {count}\n    </button>\n  );\n}',
                check: (code) => code.includes('onClick') && code.includes('setCount'),
                successMsg: 'Событие клика успешно добавлено!'
            },
            {
                id: 'react-5',
                difficulty: '🟠 Ур. 5',
                title: '5. Условный рендер (Тернарный оператор)',
                theory: 'Тернарный оператор condition ? true_block : false_block позволяет показывать разный JSX в зависимости от условия.',
                vocabulary: [
                    { word: 'condition ? A : B', meaning: 'Если условие истинно, показать A, иначе B.' }
                ],
                task: 'Выведи с помощью тернарного оператора: isLoggedIn ? "Вы вошли" : "Пожалуйста, войдите".',
                starterCode: 'function AuthStatus({ isLoggedIn }) {\n  return (\n    <div>\n      {/* Напиши тернарный оператор ниже */}\n    </div>\n  );\n}',
                check: (code) => code.includes('?') && code.includes(':'),
                successMsg: 'Условный рендер работает корректно!'
            },
            {
                id: 'react-6',
                difficulty: '🟠 Ур. 6',
                title: '6. Рендер списков (.map)',
                theory: 'Метод массивов .map() превращает массив данных в набор JSX-элементов. У каждого должен быть уникальный key.',
                vocabulary: [
                    { word: 'key={item.id}', meaning: 'Уникальный атрибут для оптимизации рендеринга списков в React.' }
                ],
                task: 'Отрендери список items через items.map(item => <li key={item}>{item}</li>).',
                starterCode: 'function List({ items }) {\n  return (\n    <ul>\n      {/* Отрендери .map ниже */}\n    </ul>\n  );\n}',
                check: (code) => code.includes('items.map') && code.includes('key='),
                successMsg: 'Список успешно отрендерен!'
            },
            {
                id: 'react-7',
                difficulty: '🔴 Ур. 7',
                title: '7. Управляемые инпуты (Forms)',
                theory: 'В React значение инпута контролируется через состояние (value={text} onChange={e => setText(e.target.value)}).',
                vocabulary: [
                    { word: 'e.target.value', meaning: 'Текущий текст, введенный пользователем в поле ввода.' },
                    { word: 'onChange', meaning: 'Событие изменения значения в инпуте.' }
                ],
                task: 'Свяжи инпут с состоянием: добавь value={text} и onChange={e => setText(e.target.value)}.',
                starterCode: 'function InputForm() {\n  const [text, setText] = useState("");\n  return <input /* Добавь value и onChange */ />;\n}',
                check: (code) => code.includes('value={text}') && code.includes('onChange'),
                successMsg: 'Управляемый инпут настроен правильно!'
            },
            {
                id: 'react-8',
                difficulty: '🔴 Ур. 8',
                title: '8. Хук эффекта (useEffect)',
                theory: 'useEffect позволяет выполнять побочные эффекты (запросы к серверу, таймеры, подписки) после монтирования.',
                vocabulary: [
                    { word: 'useEffect(fn, [])', meaning: 'Запускает код функции fn ровно один раз при загрузке компонента.' }
                ],
                task: 'Напиши useEffect с пустым массивом зависимостей [], выводящим console.log("Mounted").',
                starterCode: 'function Timer() {\n  // Напиши useEffect ниже\n  \n  return <div>Таймер активен</div>;\n}',
                check: (code) => code.includes('useEffect') && code.includes('[]'),
                successMsg: 'Хук useEffect настроен на монтирование!'
            },
            {
                id: 'react-9',
                difficulty: '💀 Ур. 9 (Хардкор)',
                title: '9. Кастомные хуки (Custom Hooks)',
                theory: 'Кастомные хуки — это функции, начинающиеся с слова use, которые инкапсулируют повторно используемую логику состояния.',
                vocabulary: [
                    { word: 'use...()', meaning: 'Соглашение об именовании кастомных хуков, использующих другие хуки React.' }
                ],
                task: 'Создай кастомный хук useCounter, возвращающий массив [count, increment].',
                starterCode: 'function useCounter() {\n  const [count, setCount] = useState(0);\n  const increment = () => setCount(c => c + 1);\n  return [count, increment];\n}',
                check: (code) => code.includes('useCounter') && code.includes('return'),
                successMsg: 'Кастомный хук написан по стандартам React!'
            },
            {
                id: 'react-10',
                difficulty: '💀 Ур. 10 (Босс)',
                title: '10. Подъем состояния (Lifting State Up)',
                theory: 'Если двум дочерним компонентам нужен доступ к общему состоянию, его поднимают в их общего родителя.',
                vocabulary: [
                    { word: 'Родительский компонент', meaning: 'Хранит состояние и передает его вниз через пропсы и функции-колбэки.' }
                ],
                task: 'Передай функцию сброса onReset из родителя дочерней кнопке.',
                starterCode: 'function Parent() {\n  const [val, setVal] = useState(10);\n  return <Child onReset={() => setVal(0)} />;\n}\nfunction Child({ onReset }) {\n  return <button onClick={onReset}>Сбросить</button>;\n}',
                check: (code) => code.includes('onReset') && code.includes('Child'),
                successMsg: 'Подъем состояния реализован безупречно!'
            }
        ]
    },
    {
        id: 'sql',
        title: 'Базы Данных & SQL (PostgreSQL)',
        desc: '10 уровней SQL: от SELECT и WHERE до ORDER BY, GROUP BY, подзапросов и INNER JOIN.',
        color: 'from-red-800 to-zinc-950',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
        level: '10 уровней',
        fileName: 'query.sql',
        type: 'pattern-check',
        lessons: [
            {
                id: 'sql-1',
                difficulty: '🟢 Ур. 1',
                title: '1. Выборка всех данных (SELECT)',
                theory: 'Команда SELECT извлекает данные из таблицы базы данных. Звездочка * означает выбор всех колонок.',
                vocabulary: [
                    { word: 'SELECT', meaning: 'Ключевое слово для чтения и выбора данных.' },
                    { word: 'FROM', meaning: 'Указывает таблицу, из которой нужно взять данные.' }
                ],
                task: 'Напиши запрос, выбирающий все столбцы из таблицы users.',
                starterCode: 'SELECT * FROM users;',
                check: (code) => /select\s+\*\s+from\s+users/i.test(code.trim()),
                successMsg: 'Все пользователи успешно выбраны из таблицы!'
            },
            {
                id: 'sql-2',
                difficulty: '🟢 Ур. 2',
                title: '2. Выбор конкретных колонок',
                theory: 'Вместо звездочки * можно перечислить через запятую только нужные столбцы.',
                vocabulary: [
                    { word: 'Столбцы через запятую', meaning: 'Ограничивает вывод только указанными полями.' }
                ],
                task: 'Выбери только столбцы name и email из таблицы users.',
                starterCode: 'SELECT name, email FROM users;',
                check: (code) => /select\s+name,\s*email\s+from\s+users/i.test(code.trim()),
                successMsg: 'Выбраны только имя и email!'
            },
            {
                id: 'sql-3',
                difficulty: '🟡 Ур. 3',
                title: '3. Фильтрация строк (WHERE)',
                theory: 'Оператор WHERE отсекает строки, не удовлетворяющие условию (например, age > 18).',
                vocabulary: [
                    { word: 'WHERE', meaning: 'Фильтрация строк по заданному булеву условию.' }
                ],
                task: 'Выбери всех пользователей из таблицы users, у которых age > 18.',
                starterCode: 'SELECT * FROM users WHERE age > 18;',
                check: (code) => /select\s+\*\s+from\s+users\s+where\s+age\s*>\s*18/i.test(code.trim()),
                successMsg: 'Отфильтрованы совершеннолетние пользователи!'
            },
            {
                id: 'sql-4',
                difficulty: '🟡 Ур. 4',
                title: '4. Сортировка (ORDER BY)',
                theory: 'ORDER BY сортирует результат. ASC — по возрастанию, DESC — по убыванию.',
                vocabulary: [
                    { word: 'ORDER BY', meaning: 'Сортировка результирующей выборки по указанному столбцу.' },
                    { word: 'DESC', meaning: 'Сортировка от большего к меньшему (по убыванию).' }
                ],
                task: 'Выбери всех пользователей и отсортируй их по возрасту по убыванию (ORDER BY age DESC).',
                starterCode: 'SELECT * FROM users ORDER BY age DESC;',
                check: (code) => /order\s+by\s+age\s+desc/i.test(code.trim()),
                successMsg: 'Сортировка по убыванию возраста применена!'
            },
            {
                id: 'sql-5',
                difficulty: '🟠 Ур. 5',
                title: '5. Ограничение выдачи (LIMIT)',
                theory: 'LIMIT ограничивает максимальное количество возвращаемых строк.',
                vocabulary: [
                    { word: 'LIMIT 5', meaning: 'Возвращает не более первых 5 строк результата.' }
                ],
                task: 'Выбери топ-3 самых старших пользователей: SELECT * FROM users ORDER BY age DESC LIMIT 3;',
                starterCode: 'SELECT * FROM users ORDER BY age DESC LIMIT 3;',
                check: (code) => /limit\s+3/i.test(code.trim()),
                successMsg: 'Лимит на 3 записи установлен!'
            },
            {
                id: 'sql-6',
                difficulty: '🟠 Ур. 6',
                title: '6. Агрегатные функции (COUNT, AVG)',
                theory: 'Агрегатные функции считают статистику по таблице: COUNT() считает строки, AVG() — среднее.',
                vocabulary: [
                    { word: 'COUNT(*)', meaning: 'Возвращает общее количество строк в выборке.' },
                    { word: 'AVG(score)', meaning: 'Вычисляет среднее арифметическое значение.' }
                ],
                task: 'Посчитай общее количество пользователей: SELECT COUNT(*) FROM users;',
                starterCode: 'SELECT COUNT(*) FROM users;',
                check: (code) => /select\s+count\(\*\)\s+from\s+users/i.test(code.trim()),
                successMsg: 'Общее количество подсчитано верно!'
            },
            {
                id: 'sql-7',
                difficulty: '🔴 Ур. 7',
                title: '7. Группировка (GROUP BY)',
                theory: 'GROUP BY объединяет строки с одинаковыми значениями в группы для агрегатных функций.',
                vocabulary: [
                    { word: 'GROUP BY', meaning: 'Группирует данные по указанному полю для анализа.' }
                ],
                task: 'Посчитай количество пользователей в каждом городе: SELECT city, COUNT(*) FROM users GROUP BY city;',
                starterCode: 'SELECT city, COUNT(*) FROM users GROUP BY city;',
                check: (code) => /group\s+by\s+city/i.test(code.trim()),
                successMsg: 'Группировка по городам выполнена успешно!'
            },
            {
                id: 'sql-8',
                difficulty: '🔴 Ур. 8',
                title: '8. Фильтрация групп (HAVING)',
                theory: 'HAVING фильтрует уже сгруппированные данные (в отличие от WHERE, который работает до группировки).',
                vocabulary: [
                    { word: 'HAVING', meaning: 'Условие фильтрации для агрегированных групп (после GROUP BY).' }
                ],
                task: 'Выведи города, где живет больше 5 пользователей: ... GROUP BY city HAVING COUNT(*) > 5;',
                starterCode: 'SELECT city, COUNT(*) FROM users GROUP BY city HAVING COUNT(*) > 5;',
                check: (code) => /having\s+count\(\*\)\s*>\s*5/i.test(code.trim()),
                successMsg: 'Группы успешно отфильтрованы через HAVING!'
            },
            {
                id: 'sql-9',
                difficulty: '💀 Ур. 9 (Хардкор)',
                title: '9. Объединение таблиц (INNER JOIN)',
                theory: 'INNER JOIN связывает две таблицы по общему идентификатору (foreign key).',
                vocabulary: [
                    { word: 'INNER JOIN', meaning: 'Возвращает только те строки, которые имеют совпадения в обеих таблицах.' },
                    { word: 'ON', meaning: 'Условие связи между таблицами (например, a.id = b.user_id).' }
                ],
                task: 'Свяжи таблицы users и orders через INNER JOIN по условию users.id = orders.user_id.',
                starterCode: 'SELECT users.name, orders.total \nFROM users \nJOIN orders ON users.id = orders.user_id;',
                check: (code) => /join\s+orders\s+on\s+users\.id\s*=\s*orders\.user_id/i.test(code.replace(/\s+/g, ' ')),
                successMsg: 'Таблицы успешно объединены по ключу!'
            },
            {
                id: 'sql-10',
                difficulty: '💀 Ур. 10 (Босс)',
                title: '10. Оконные функции (ROW_NUMBER)',
                theory: 'Оконные функции выполняют вычисления наборе строк, связанных с текущей строкой (например, нумерация внутри групп).',
                vocabulary: [
                    { word: 'OVER (PARTITION BY ...)', meaning: 'Определяет окно (партицию) для вычисления оконной функции.' },
                    { word: 'ROW_NUMBER()', meaning: 'Присваивает каждой строке уникальный порядковый номер внутри окна.' }
                ],
                task: 'Пронумеруй пользователей в каждом городе по возрасту: SELECT name, city, ROW_NUMBER() OVER(PARTITION BY city ORDER BY age DESC) as rn FROM users;',
                starterCode: 'SELECT name, city, ROW_NUMBER() OVER(PARTITION BY city ORDER BY age DESC) as rn FROM users;',
                check: (code) => /row_number\(\)\s+over/i.test(code) && /partition\s+by/i.test(code),
                successMsg: 'Оконная функция отработала идеально!'
            }
        ]
    },
    {
        id: 'git',
        title: 'Git & GitHub для командной работы',
        desc: '10 уровней Git: от init, add, commit и push до ветвления, merge, rebase и stash.',
        color: 'from-rose-900 to-zinc-950',
        iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
        level: '10 уровней',
        fileName: 'terminal.sh',
        type: 'pattern-check',
        lessons: [
            {
                id: 'git-1',
                difficulty: '🟢 Ур. 1',
                title: '1. Инициализация репозитория',
                theory: 'Команда git init превращает обычную папку на компьютере в локальный репозиторий Git.',
                vocabulary: [
                    { word: 'git init', meaning: 'Создает скрытую папку .git для отслеживания истории версий.' }
                ],
                task: 'Инициализируй новый репозиторий в текущей папке командой git init.',
                starterCode: 'git init',
                check: (code) => /git\s+init/.test(code),
                successMsg: 'Репозиторий успешно инициализирован!'
            },
            {
                id: 'git-2',
                difficulty: '🟢 Ур. 2',
                title: '2. Индексация файлов (git add)',
                theory: 'Команда git add добавляет измененные файлы в индекс (stage area) перед сохранением.',
                vocabulary: [
                    { word: 'git add .', meaning: 'Добавляет абсолютно все измененные файлы текущей папки в индекс.' }
                ],
                task: 'Добавь все файлы в индекс с помощью git add .',
                starterCode: 'git add .',
                check: (code) => /git\s+add\s+\./.test(code),
                successMsg: 'Файлы добавлены в индекс Git!'
            },
            {
                id: 'git-3',
                difficulty: '🟡 Ур. 3',
                title: '3. Фиксация изменений (git commit)',
                theory: 'Команда git commit создает снимок (версию) индексированных файлов с текстовым описанием.',
                vocabulary: [
                    { word: 'git commit -m', meaning: 'Создает коммит с обязательным сообщением-описанием (-m).' }
                ],
                task: 'Создай коммит с сообщением "first commit": git commit -m "first commit"',
                starterCode: 'git commit -m "first commit"',
                check: (code) => /git\s+commit\s+-m\s+["'].+["']/.test(code),
                successMsg: 'Коммит успешно сохранен в истории!'
            },
            {
                id: 'git-4',
                difficulty: '🟡 Ур. 4',
                title: '4. Проверка статуса (git status)',
                theory: 'Команда git status показывает текущее состояние репозитория: измененные и неиндексированные файлы.',
                vocabulary: [
                    { word: 'git status', meaning: 'Информационная команда о состоянии рабочей директории.' }
                ],
                task: 'Проверь статус репозитория командой git status.',
                starterCode: 'git status',
                check: (code) => /git\s+status/.test(code),
                successMsg: 'Статус репозитория проверен!'
            },
            {
                id: 'git-5',
                difficulty: '🟠 Ур. 5',
                title: '5. Удаленный репозиторий (git remote)',
                theory: 'Команда git remote add связывает локальный репозиторий с удаленным сервером на GitHub.',
                vocabulary: [
                    { word: 'origin', meaning: 'Стандартное имя для главного удаленного репозитория.' }
                ],
                task: 'Привяжи удаленный репозиторий: git remote add origin https://github.com/user/repo.git',
                starterCode: 'git remote add origin https://github.com/user/repo.git',
                check: (code) => /git\s+remote\s+add\s+origin/.test(code),
                successMsg: 'Удаленный репозиторий успешно привязан!'
            },
            {
                id: 'git-6',
                difficulty: '🟠 Ур. 6',
                title: '6. Отправка кода на сервер (git push)',
                theory: 'Команда git push отправляет твои локальные коммиты на удаленный сервер GitHub.',
                vocabulary: [
                    { word: 'git push', meaning: 'Загружает локальные ветки на удаленный хостинг.' }
                ],
                task: 'Отправь ветку main на удаленный сервер: git push -u origin main',
                starterCode: 'git push -u origin main',
                check: (code) => /git\s+push/.test(code),
                successMsg: 'Код успешно отправлен на GitHub!'
            },
            {
                id: 'git-7',
                difficulty: '🔴 Ур. 7',
                title: '7. Создание веток (git checkout -b)',
                theory: 'Ветки позволяют разрабатывать новые фичи изолированно от основного стабильного кода в main.',
                vocabulary: [
                    { word: '-b', meaning: 'Флаг создания новой ветки с одновременным переключением на неё.' }
                ],
                task: 'Создай новую ветку "auth-feature" и переключись на неё: git checkout -b auth-feature',
                starterCode: 'git checkout -b auth-feature',
                check: (code) => /git\s+(checkout\s+-b|switch\s+-c)\s+auth-feature/.test(code),
                successMsg: 'Ветка auth-feature создана, вы переключены на неё!'
            },
            {
                id: 'git-8',
                difficulty: '🔴 Ур. 8',
                title: '8. Слияние веток (git merge)',
                theory: 'Когда фича готова, ты возвращаешься в main и вливаешь в неё ветку с помощью git merge.',
                vocabulary: [
                    { word: 'git merge', meaning: 'Объединяет историю указанной ветки с текущей активной веткой.' }
                ],
                task: 'Переключись на main и влей в неё ветку auth-feature: git merge auth-feature',
                starterCode: 'git checkout main\ngit merge auth-feature',
                check: (code) => /git\s+merge\s+auth-feature/.test(code),
                successMsg: 'Ветка успешно слита в main!'
            },
            {
                id: 'git-9',
                difficulty: '💀 Ур. 9 (Хардкор)',
                title: '9. Временное сохранение (git stash)',
                theory: 'Если нужно срочно сменить ветку, а код не дописан, git stash прячет изменения в карман.',
                vocabulary: [
                    { word: 'git stash', meaning: 'Консервирует незакоммиченные изменения в рабочем каталоге.' },
                    { word: 'git stash pop', meaning: 'Достает сохраненные изменения обратно из кармана.' }
                ],
                task: 'Спрячь текущие незаконченные правки командой git stash.',
                starterCode: 'git stash',
                check: (code) => /git\s+stash/.test(code),
                successMsg: 'Изменения успешно спрятаны в stash!'
            },
            {
                id: 'git-10',
                difficulty: '💀 Ур. 10 (Босс)',
                title: '10. Интерактивный ребейс (git rebase -i)',
                theory: 'Интерактивный rebase позволяет переписывать историю коммитов: объединять, переименовывать и удалять их.',
                vocabulary: [
                    { word: 'rebase -i HEAD~3', meaning: 'Интерактивное сжатие последних 3 коммитов в единую чистую историю.' }
                ],
                task: 'Запусти интерактивный rebase для последних 3 коммитов: git rebase -i HEAD~3',
                starterCode: 'git rebase -i HEAD~3',
                check: (code) => /git\s+rebase\s+-i/.test(code),
                successMsg: 'Интерактивная история коммитов успешно переписана!'
            }
        ]
    }
];

function App() {
    const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('codeflow_user') || '');
    const [userHasPhoto, setUserHasPhoto] = useState(() => localStorage.getItem('codeflow_has_photo') === 'true');
    const [showAuthModal, setShowAuthModal] = useState(!localStorage.getItem('codeflow_user'));
    const [loginNameInput, setLoginNameInput] = useState('');

    const [theme, setTheme] = useState(() => localStorage.getItem('codeflow_theme') || 'red');

    const [activeTab, setActiveTab] = useState('courses'); 
    const [activeView, setActiveView] = useState('catalog'); 
    const [currentCourse, setCurrentCourse] = useState(COURSES_DATA[0]);
    const [currentLessonIdx, setCurrentLessonIdx] = useState(0);
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const [completedLessons, setCompletedLessons] = useState(() => {
        const u = localStorage.getItem('codeflow_user');
        if (!u) return [];
        try {
            return JSON.parse(localStorage.getItem(`codeflow_progress_${u}`)) || [];
        } catch {
            return [];
        }
    });

    const activeLesson = currentCourse.lessons[currentLessonIdx];

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('codeflow_theme', theme);
    }, [theme]);

    useEffect(() => {
        if (!currentUser) return;
        localStorage.setItem(`codeflow_progress_${currentUser}`, JSON.stringify(completedLessons));

        try {
            const students = JSON.parse(localStorage.getItem('codeflow_students') || '{}');
            students[currentUser] = {
                name: currentUser,
                hasPhoto: userHasPhoto,
                completed: completedLessons.length,
                xp: completedLessons.length * 10,
                lastActive: new Date().toLocaleDateString('ru-RU')
            };
            localStorage.setItem('codeflow_students', JSON.stringify(students));
        } catch (e) {
            console.error('Storage quota safe fallback', e);
        }
    }, [completedLessons, currentUser, userHasPhoto]);

    const completeAuth = () => {
        const cleanName = loginNameInput.trim();
        if (!cleanName) {
            alert('Пожалуйста, введите свой никнейм!');
            return;
        }

        localStorage.setItem('codeflow_user', cleanName);
        setCurrentUser(cleanName);

        let savedProgress = [];
        try {
            savedProgress = JSON.parse(localStorage.getItem(`codeflow_progress_${cleanName}`)) || [];
        } catch {
            savedProgress = [];
        }

        setCompletedLessons(savedProgress);
        setShowAuthModal(false);
    };

    const handleLogout = () => {
        localStorage.removeItem('codeflow_user');
        setCurrentUser('');
        setUserHasPhoto(false);
        setLoginNameInput('');
        setShowAuthModal(true);
    };

    const openCourse = (course, lessonIndex = 0) => {
        setCurrentCourse(course);
        setCurrentLessonIdx(lessonIndex);
        setCode(course.lessons[lessonIndex].starterCode);
        setOutput('');
        setIsSuccess(false);
        setActiveView('workspace');
        setActiveTab('courses');
    };

    const selectLesson = (idx) => {
        setCurrentLessonIdx(idx);
        setCode(currentCourse.lessons[idx].starterCode);
        setOutput('');
        setIsSuccess(false);
    };

    const runCode = () => {
        let resultOutput = '';
        let passed = false;

        if (currentCourse.type === 'js-live') {
            const logs = [];
            const customConsole = {
                log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ')),
                error: (...args) => logs.push('❌ Ошибка: ' + args.join(' ')),
                warn: (...args) => logs.push('⚠️ Предупреждение: ' + args.join(' '))
            };

            try {
                const runUserFn = new Function('console', code);
                runUserFn(customConsole);
                resultOutput = logs.length > 0 ? logs.join('\n') : '✅ Код выполнен (вывода в консоль нет)';
            } catch (err) {
                resultOutput = `❌ Ошибка синтаксиса:\n${err.message}`;
            }

            passed = activeLesson.check(code, resultOutput);

        } else if (currentCourse.type === 'html-live') {
            resultOutput = '✅ HTML/CSS успешно отрендерен в окне предпросмотра справа!';
            passed = activeLesson.check(code);

        } else if (currentCourse.type === 'python-sim') {
            resultOutput = activeLesson.simulate(code);
            passed = activeLesson.check(code);

        } else if (currentCourse.type === 'pattern-check') {
            passed = activeLesson.check(code);
            resultOutput = passed 
                ? `✅ Успешно!\n${activeLesson.successMsg}` 
                : '⚠️ Задача решена не до конца. Проверь синтаксис и условие задания слева.';
        }

        setOutput(resultOutput);
        setIsSuccess(passed);

        if (passed && !completedLessons.includes(activeLesson.id)) {
            setCompletedLessons(prev => [...prev, activeLesson.id]);
        }
    };

    const nextLesson = () => {
        if (currentLessonIdx + 1 < currentCourse.lessons.length) {
            selectLesson(currentLessonIdx + 1);
        } else {
            setActiveView('catalog');
            setActiveTab('courses');
        }
    };

    const totalLessonsCount = COURSES_DATA.reduce((acc, c) => acc + c.lessons.length, 0);
    const themeLabels = {
        red: { name: 'Красная', color: '#ef4444' },
        purple: { name: 'Фиолетовая', color: '#8b5cf6' },
        emerald: { name: 'Изумрудная', color: '#10b981' },
        light: { name: 'Светлая', color: '#2563eb' }
    };

    return (
        <div className="min-h-screen flex flex-col theme-bg-main theme-text-main">
            
            {showAuthModal && (
                <div className="fixed inset-0 bg-black/85 backdrop-blur-md flex items-center justify-center z-50 p-4">
                    <div className="w-full max-w-md p-8 rounded-3xl theme-bg-card border theme-border shadow-2xl text-center">
                        <h2 className="text-3xl font-black mb-2">
                            Code<span className="theme-accent-text">Flow</span>
                        </h2>
                        <p className="theme-text-muted text-sm mb-6">
                            Введите свой никнейм для сохранения прогресса и участия в рейтинге.
                        </p>

                        <div className="space-y-4">
                            <input 
                                type="text"
                                value={loginNameInput}
                                onChange={(e) => setLoginNameInput(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && completeAuth()}
                                placeholder="Ваш никнейм..."
                                className="w-full px-4 py-3.5 rounded-xl theme-bg-code border theme-border theme-text-main text-base focus:outline-none"
                                autoFocus
                            />
                            <button 
                                type="button"
                                onClick={completeAuth}
                                className="w-full py-3.5 rounded-xl theme-accent-bg font-bold text-base shadow-lg transition-all"
                            >
                                Войти на платформу
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* АДАПТИВНАЯ РЕЗИНОВАЯ ШАПКА */}
            <header className="sticky top-0 z-40 backdrop-blur-md theme-bg-header border-b theme-border">
                <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
                    
                    <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                        <div 
                            className="flex items-center gap-2 cursor-pointer group shrink-0" 
                            onClick={() => { setActiveView('catalog'); setActiveTab('courses'); }}
                        >
                            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl theme-accent-bg flex items-center justify-center glow-accent group-hover:scale-105 transition-transform">
                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                                </svg>
                            </div>
                            <span className="text-lg sm:text-xl font-extrabold tracking-tight truncate">
                                Code<span className="theme-accent-text">Flow</span>
                            </span>
                        </div>

                        {/* Навигация (на мобилках сжимается компактно, на ПК полная) */}
                        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-1 scrollbar-none">
                            <button 
                                onClick={() => { setActiveTab('courses'); setActiveView('catalog'); }}
                                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all shrink-0 ${
                                    activeTab === 'courses' && activeView === 'catalog'
                                        ? 'theme-accent-soft' 
                                        : 'border-transparent theme-text-muted hover:opacity-80'
                                }`}
                            >
                                Курсы
                            </button>
                            <button 
                                onClick={() => openCourse(currentCourse, currentLessonIdx)}
                                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all shrink-0 ${
                                    activeTab === 'courses' && activeView === 'workspace'
                                        ? 'theme-accent-soft' 
                                        : 'border-transparent theme-text-muted hover:opacity-80'
                                }`}
                            >
                                Тренажер
                            </button>
                            <button 
                                onClick={() => setActiveTab('leaderboard')}
                                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all shrink-0 ${
                                    activeTab === 'leaderboard'
                                        ? 'theme-accent-soft' 
                                        : 'border-transparent theme-text-muted hover:opacity-80'
                                }`}
                            >
                                🏆 Рейтинг
                            </button>
                            <button 
                                onClick={() => setActiveTab('profile')}
                                className={`px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all shrink-0 ${
                                    activeTab === 'profile'
                                        ? 'theme-accent-soft' 
                                        : 'border-transparent theme-text-muted hover:opacity-80'
                                }`}
                            >
                                👤 Профиль
                            </button>
                        </nav>
                    </div>

                    {/* Правая часть: Меню тем и профиль видны ВСЕГДА на любых экранах */}
                    <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                        <div className="theme-dropdown">
                            <button type="button" className="theme-dropdown-trigger">
                                <span className="theme-dot" style={{ backgroundColor: themeLabels[theme]?.color }}></span>
                                <span className="text-xs sm:text-sm">Тема</span>
                                <svg className="w-3.5 h-3.5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="theme-dropdown-menu">
                                <button type="button" className="theme-option" onClick={() => setTheme('red')}>
                                    <span className="theme-dot" style={{ background: '#ef4444' }}></span>
                                    <span>Красная</span>
                                </button>
                                <button type="button" className="theme-option" onClick={() => setTheme('purple')}>
                                    <span className="theme-dot" style={{ background: '#8b5cf6' }}></span>
                                    <span>Фиолетовая</span>
                                </button>
                                <button type="button" className="theme-option" onClick={() => setTheme('emerald')}>
                                    <span className="theme-dot" style={{ background: '#10b981' }}></span>
                                    <span>Изумрудная</span>
                                </button>
                                <button type="button" className="theme-option" onClick={() => setTheme('light')}>
                                    <span className="theme-dot" style={{ background: '#ffffff', border: '1px solid #94a3b8' }}></span>
                                    <span>Светлая</span>
                                </button>
                            </div>
                        </div>

                        {currentUser && (
                            <div 
                                onClick={() => setActiveTab('profile')}
                                className="flex items-center gap-2 px-2.5 py-1.5 rounded-xl theme-bg-code border theme-border cursor-pointer hover:opacity-90 max-w-[140px] sm:max-w-none"
                            >
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full theme-accent-bg flex items-center justify-center text-[10px] sm:text-xs font-bold shrink-0">
                                    {currentUser[0].toUpperCase()}
                                </div>
                                <span className="text-xs font-bold truncate">{currentUser}</span>
                            </div>
                        )}
                    </div>
                </div>
            </header>

            {activeTab === 'courses' && activeView === 'catalog' && (
                <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    
                    <div className="relative overflow-hidden rounded-3xl theme-bg-card border theme-border p-6 sm:p-12 mb-12 glow-accent">
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full theme-accent-soft border text-xs font-semibold mb-5">
                                    <span>🔥 60 уровней с детальным словарем терминов слева</span>
                                </div>
                                <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                                    Учись программировать <span className="theme-accent-text">с полным разбором</span>
                                </h1>
                                <p className="theme-text-muted text-sm sm:text-lg mb-8 leading-relaxed">
                                    Никакой путаницы: в каждом из 6 курсов по 10 уровней с нарастающей сложностью. Во время решения в левой колонке всегда доступен детальный словарь каждого слова и термина.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <button 
                                        onClick={() => openCourse(COURSES_DATA[0], 0)}
                                        className="px-6 py-3.5 rounded-xl theme-accent-bg font-semibold shadow-lg transition-all text-sm sm:text-base"
                                    >
                                        Начать обучение →
                                    </button>
                                    {completedLessons.length > 0 && (
                                        <button 
                                            onClick={() => setCompletedLessons([])}
                                            className="px-5 py-3.5 rounded-xl theme-bg-code border theme-border theme-text-muted hover:opacity-80 text-xs sm:text-sm font-medium transition-all"
                                        >
                                            Сбросить мой прогресс
                                        </button>
                                    )}
                                </div>
                            </div>

                            <div className="hidden lg:block lg:col-span-5">
                                <div className="rounded-2xl theme-bg-code border theme-border p-5 shadow-2xl">
                                    <div className="flex items-center justify-between pb-3 mb-3 border-b theme-border">
                                        <div className="flex space-x-1.5">
                                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                        </div>
                                        <span className="text-xs font-mono theme-text-muted">dictionary.js</span>
                                    </div>
                                    <pre className="font-mono text-xs sm:text-sm leading-relaxed">
                                        <code>
                                            <span className="theme-accent-text">const</span> explanation = {'{\n'}
                                            {'  '}term: <span className="text-amber-400">'Map / Filter / Join'</span>,{'\n'}
                                            {'  '}clarity: <span className="text-emerald-400">'100%'</span>,{'\n'}
                                            {'  '}understanding: <span className="theme-accent-text">true</span>{'\n'}
                                            {'};\n\n'}
                                            <span className="theme-text-muted">// Разбор каждого слова слева</span>{'\n'}
                                            <span className="theme-accent-text">masterCode</span>();
                                        </code>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold mb-6 flex items-center space-x-3">
                        <span className="w-2 h-6 theme-accent-bg rounded-full"></span>
                        <span>Выберите курс (по 10 уровней)</span>
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {COURSES_DATA.map((course) => {
                            const doneCount = course.lessons.filter(l => completedLessons.includes(l.id)).length;
                            const isAllDone = doneCount === course.lessons.length;

                            return (
                                <div 
                                    key={course.id}
                                    onClick={() => openCourse(course, 0)}
                                    className="group relative theme-bg-card border theme-border rounded-2xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-xl"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-5">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${course.color} p-2.5 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform border border-white/10`}>
                                                <img 
                                                    src={course.iconUrl} 
                                                    alt={course.title} 
                                                    className="w-full h-full object-contain drop-shadow"
                                                />
                                            </div>
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-md border ${isAllDone ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' : 'theme-bg-code theme-text-muted theme-border'}`}>
                                                {isAllDone ? '🏆 Пройдено' : `${doneCount} / 10 уровней`}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2">
                                            {course.title}
                                        </h3>
                                        <p className="text-sm theme-text-muted mb-6 leading-relaxed">
                                            {course.desc}
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <div className="w-full h-1.5 theme-bg-code rounded-full overflow-hidden mb-4">
                                            <div 
                                                className="h-full theme-accent-bg transition-all duration-500"
                                                style={{ width: `${(doneCount / course.lessons.length) * 100}%` }}
                                            ></div>
                                        </div>
                                        <div className="flex items-center justify-between text-sm font-semibold theme-accent-text">
                                            <span>Открыть 10 уровней</span>
                                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </main>
            )}

            {activeTab === 'courses' && activeView === 'workspace' && (
                <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b theme-border">
                        <div className="flex items-center space-x-3">
                            <button 
                                onClick={() => setActiveView('catalog')}
                                className="px-3 py-1.5 rounded-lg theme-bg-card border theme-border text-xs font-semibold hover:opacity-80"
                            >
                                ← Назад
                            </button>
                            <img src={currentCourse.iconUrl} alt="" className="w-6 h-6 object-contain" />
                            <h2 className="text-base sm:text-xl font-bold">{currentCourse.title}</h2>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                            {currentCourse.lessons.map((lesson, idx) => {
                                const isDone = completedLessons.includes(lesson.id);
                                const isCurrent = idx === currentLessonIdx;
                                return (
                                    <button
                                        key={lesson.id}
                                        onClick={() => selectLesson(idx)}
                                        className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all border ${
                                            isCurrent 
                                                ? 'theme-accent-bg border-transparent shadow-md' 
                                                : isDone
                                                    ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                                                    : 'theme-bg-card theme-text-muted theme-border'
                                        }`}
                                    >
                                        <span>{isDone ? '✓' : idx + 1}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        
                        <div className="lg:col-span-5 theme-bg-card border theme-border rounded-2xl p-6 flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-bold uppercase tracking-wider theme-accent-text">
                                        Уровень {currentLessonIdx + 1} из 10
                                    </span>
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full theme-bg-code border theme-border">
                                        {activeLesson.difficulty}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">
                                    {activeLesson.title}
                                </h3>
                                
                                <div className="text-sm theme-text-muted leading-relaxed mb-4 theme-bg-code p-4 rounded-xl border theme-border">
                                    {activeLesson.theory}
                                </div>

                                <div className="mb-6">
                                    <div className="text-xs font-bold theme-accent-text uppercase tracking-wider mb-2.5">
                                        📖 Словарь терминов и слов этого уровня:
                                    </div>
                                    <div className="space-y-2 theme-bg-code p-3.5 rounded-xl border theme-border">
                                        {activeLesson.vocabulary.map((item, vIdx) => (
                                            <div key={vIdx} className="text-xs leading-relaxed border-b theme-border pb-2 last:border-0 last:pb-0">
                                                <code className="theme-accent-text font-bold font-mono px-1.5 py-0.5 theme-bg-card rounded">{item.word}</code>
                                                <span className="theme-text-muted ml-2">— {item.meaning}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-4 rounded-xl theme-accent-soft border mb-6">
                                    <div className="text-xs font-bold uppercase mb-1.5">
                                        🎯 Практическое задание:
                                    </div>
                                    <p className="text-sm theme-text-main leading-relaxed">
                                        {activeLesson.task}
                                    </p>
                                </div>
                            </div>

                            {isSuccess && (
                                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40">
                                    <div className="text-sm font-bold text-emerald-400 mb-2">
                                        🎉 Отлично! Уровень пройден.
                                    </div>
                                    <button 
                                        onClick={nextLesson}
                                        className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all shadow-lg"
                                    >
                                        {currentLessonIdx + 1 < currentCourse.lessons.length ? 'Следующий уровень →' : 'Завершить курс 🏆'}
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-7 flex flex-col space-y-4">
                            <div className="theme-bg-card border theme-border rounded-2xl overflow-hidden shadow-xl">
                                <div className="theme-bg-code px-4 py-3 border-b theme-border flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                        <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                                        <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                        <span className="ml-2 text-xs font-mono theme-text-muted">{currentCourse.fileName}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <button 
                                            onClick={() => setCode(activeLesson.starterCode)}
                                            className="px-3 py-1.5 rounded-lg theme-bg-card border theme-border text-xs font-medium hover:opacity-80"
                                        >
                                            Сбросить код
                                        </button>
                                        <button 
                                            onClick={runCode}
                                            className="px-4 py-1.5 rounded-lg theme-accent-bg text-xs font-bold shadow-md transition-all"
                                        >
                                            ▶ Запустить и проверить
                                        </button>
                                    </div>
                                </div>

                                <textarea 
                                    value={code}
                                    onChange={(e) => setCode(e.target.value)}
                                    rows="10"
                                    className="w-full p-4 theme-bg-code theme-text-main font-mono text-sm focus:outline-none resize-none leading-relaxed"
                                    spellCheck="false"
                                ></textarea>
                            </div>

                            {currentCourse.type === 'html-live' ? (
                                <div className="theme-bg-card border theme-border rounded-2xl overflow-hidden">
                                    <div className="px-4 py-2 theme-bg-code border-b theme-border text-xs font-mono theme-text-muted flex justify-between">
                                        <span>ЖИВОЙ БРАУЗЕР (РЕЗУЛЬТАТ ВЕРСТКИ)</span>
                                        {isSuccess && <span className="text-emerald-400">✓ Условие выполнено</span>}
                                    </div>
                                    <iframe 
                                        title="preview"
                                        srcDoc={code}
                                        className="w-full h-48 bg-zinc-900 border-none"
                                    />
                                </div>
                            ) : (
                                <div className="theme-bg-card border theme-border rounded-2xl p-4">
                                    <div className="text-xs font-mono theme-text-muted mb-2 uppercase tracking-wider">
                                        Вывод терминала:
                                    </div>
                                    <pre className={`font-mono text-sm whitespace-pre-wrap p-3.5 rounded-xl border min-h-[90px] ${
                                        isSuccess 
                                            ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-400' 
                                            : output.includes('❌') || output.includes('⚠️')
                                                ? 'bg-red-950/20 border-red-500/30 text-red-400'
                                                : 'theme-bg-code theme-border theme-text-main'
                                    }`}>
                                        {output || 'Нажми «Запустить и проверить», чтобы выполнить код...'}
                                    </pre>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            )}

            {activeTab === 'leaderboard' && (
                <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-10">
                    <div className="theme-bg-card border theme-border rounded-3xl p-6 sm:p-8 shadow-xl">
                        <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 text-center">🏆 Рейтинг учеников</h2>
                        <p className="theme-text-muted text-center text-sm mb-8">
                            Статистика всех зарегистрированных пользователей и их прогресс обучения.
                        </p>

                        <div className="space-y-3">
                            {Object.values(JSON.parse(localStorage.getItem('codeflow_students') || '{}'))
                                .sort((a, b) => b.xp - a.xp)
                                .map((st, idx) => (
                                    <div key={idx} className="flex items-center justify-between theme-bg-code p-4 rounded-2xl border theme-border">
                                        <div className="flex items-center gap-4">
                                            <span className="font-black text-lg theme-accent-text w-7">#{idx + 1}</span>
                                            <div className="w-10 h-10 rounded-full theme-accent-soft border flex items-center justify-center font-bold">
                                                {st.name[0].toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-bold text-base">{st.name}</div>
                                                <div className="text-xs theme-text-muted">Активность: {st.lastActive || 'Сегодня'}</div>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-extrabold theme-accent-text text-lg">{st.xp} XP</div>
                                            <div className="text-xs theme-text-muted">Уроков: {st.completed} / {totalLessonsCount}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </main>
            )}

            {activeTab === 'profile' && (
                <main className="flex-1 max-w-lg w-full mx-auto px-4 py-10">
                    <div className="theme-bg-card border theme-border rounded-3xl p-8 shadow-xl text-center">
                        <div className="w-28 h-28 rounded-full theme-accent-bg flex items-center justify-center text-4xl font-black mx-auto mb-6 shadow-lg">
                            {currentUser ? currentUser[0].toUpperCase() : 'U'}
                        </div>

                        <h2 className="text-2xl font-black mb-1">{currentUser}</h2>
                        <p className="theme-text-muted text-sm mb-6">
                            Пройдено уроков: <strong>{completedLessons.length} из {totalLessonsCount}</strong> ({completedLessons.length * 10} XP)
                        </p>

                        <button 
                            onClick={handleLogout}
                            className="w-full py-3 rounded-xl border border-red-500/40 text-red-500 hover:bg-red-500/10 font-bold text-sm transition-all"
                        >
                            Выйти / Сменить аккаунт
                        </button>
                    </div>
                </main>
            )}

            <footer className="border-t theme-border theme-bg-card mt-auto py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs theme-text-muted gap-2">
                    <div>© 2026 CodeFlow — Интерактивная образовательная платформа By Zholchubaev Raatbek</div>
                    <div>Работает локально на React + Tailwind CSS</div>
                </div>
            </footer>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
