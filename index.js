//! Факториал

// const fact = n => {
//    if (n === 1) {
//       return 1
//    }
//    return n * fact(n - 1)
// }

// console.log(fact(10));


// const fibonachi = n => {
//    if (n === 1 || n === 2) {
//       return 1
//    }

//    return fibonachi(n - 1) + fibonachi(n - 2)
// }


// const arr = [-1, 10, 40, 5, 11, 7, 8, 77, 98, -100, 50, 60, 90, 70, 12, 32, 41]

// const quickSort = array => {
//    if (array.length <= 1) {
//       return array
//    }

//    let pIndex = Math.floor(array.length / 2)

//    let p = array[pIndex]
//    let less = []
//    let grater = []

//    for (let i = 0; i < array.length; i++) {
//       if (i === pIndex)
//          continue
//       if (array[i] < p) {
//          less.push(array[i])
//       } else {
//          grater.push(array[i])
//       }
//    }
//    return [...quickSort(less), p, ...quickSort(grater)]
// }

// console.log(quickSort(arr))



//! Первый Урок


// 1.
// const str = 'abcde'

// const a = str[0]

// const b = str[1]

// const c = str[str.length - 1]

// console.log(`a:${a}`, `b:${b}`, `c:${c}`);


// 2.

// const secInHour = 60 * 60
// console.log(secInHour);


// 3.

// const a = 17

// const b = 10

// const c = a + b

// d = 7

// result = c + d

// console.log(result);

//! //! //! ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const num = '123456'

// const result = num => {
//    const num2 = num.split('')


//    if (num !== []) {
//       let sub = 1

//       for (let i = 0; i < num2.length; i++) {

//          sub *= +num2[i]
//       }
//       return sub
//    }
// }

// console.log(result(num));



// const trollString = "This website is for losers LOL!"

// disemvowel = str => str.replace(/[aeiou]/gi, '');

// console.log(disemvowel(trollString));




//! Работа с массивами


// const arr = ['Привет', 'Мир']

// arr[0] = 'Пока'

// const arr = {
//    'ru': ['голубой', 'красный', 'зеленый'],
//    'en': ['blue', 'red', 'green']
// }

// console.log(arr.en[2])



// const arr = ['a', 'b', 'c', 'd']

// const firstArr = `${arr[0]} + ${arr[1]}`

// const secondArr = `${arr[2]} + ${arr[3]}`

// console.log(`${firstArr}, ${secondArr}`);



// const arr = [2, 5, 3, 9]

// const firstSubArr = arr[0] * arr[1]

// const secondSubArr = arr[2] * arr[3]

// const result = firstSubArr + secondSubArr

// console.log(result)


//! Объекты (ассоциативные массивы)



// var obj = {Коля: '1000', Вася: '500', Петя: '200'};

// console.log(obj['Коля'], obj['Петя'])


// const obj = {
//    Понедельник: 1,
//    Вторник: 2,
//    Среда: 3,
//    Четверг: 4,
//    Пятница: 5,
//    Суббота: 6,
//    Восресенье: 7

// };

// console.log(Object.keys(obj)[2])


//! Многомерные массивы


//? Выведите на экран цифру 4 из этого массива.

// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// console.log(arr[1][0]);


//? Выведите с его помощью слово 'jQuery'.

// const arr = {
//    js: ['jQuery', 'Angular'],
//    php: 'hello',
//    css: 'world'
// }

// console.log(arr.js[0]);


//? Выведите с помощью этого массива понедельник по-русски и среду по английски

// const arr = {
//    ru: [
//       'Понедельник',
//       'Вторник',
//       'Среда',
//       'Четверг',
//       'Пятница',
//       'Суббота',
//       'Воскресенье'
//    ],
//    en: [
//       'Monday',
//       'Tuesday',
//       'Wednesday',
//       'Thursday',
//       'Friday',
//       'Saturday',
//       'Sunday'
//    ]
// }

// console.log(arr.ru[0], arr.en[2]);


//! Задачи на конструкции if-else, switch-case


//? Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'.

// const a = 10

// const b = 11

// function ten(num) {
//    if (num === 10) {
//       console.log('Верно');
//    } else {
//       console.log('Неверно');
//    }
// }

// ten(a)
// ten(b)



//? В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// let minutes = Math.floor(Math.random() * 60 - 1)

// let minutes1 = Math.floor(Math.random() * 60 - 1)

// let minutes2 = Math.floor(Math.random() * 60 - 1)

// function howTimeIs(num) {
//    if (num <= 15) {
//       console.log('0-15');
//    } else if (15 >= num && num <= 30) {
//       console.log('15-30');
//    } else if (30 <= num && num <= 45) {
//       console.log('30-45');
//    } else if (num >= 45) {
//       console.log('45-59');
//    }
// }

// howTimeIs(minutes)
// howTimeIs(minutes1)
// howTimeIs(minutes2)



// const test = 'test'

// if (test === 'test') {
//    console.log('Верно');
// } else {
//    console.log('Неверно');
// }


// const test = false

// test ? console.log('Верно') : console.log('Неверно')



//? Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = Math.floor(Math.random() * 20)

// let b = Math.floor(Math.random() * 20)

// if (a > 2 && a < 11 || b > 6 && b < 14) {
//    console.log('Верно');
// } else {
//    console.log('Неверно');
// }




//? Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. 

// let a = Math.floor(Math.random() * 4 + 1)

// switch (a) {
//    case 1:
//       console.log('Зима')
//       break
//    case 2:
//       console.log('Весна');
//       break
//    case 3:
//       console.log('Лето');
//       break
//    case 4:
//       console.log('Осень');
//       break
//    default:
//       return null
// }




//? В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).


// let a = Math.floor(Math.random() * 31 + 1)
// console.log(a);

// if (a <= 10) {
//    console.log('Первая декада');
// } else if (a >= 10 && a <= 20) {
//    console.log('Вторая декада');
// } else {
//    console.log('Третья декада');
// }


//? В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

// let a = Math.floor(Math.random() * 12 + 1)
// console.log(a);

// if (a <= 3) {
//    console.log('Зима');
// } else if (a > 3 && a <= 6) {
//    console.log('Весна');
// } else if (a >= 6 && a <= 9) {
//    console.log('Лето');
// } else {
//    console.log('Осень');
// }



//? Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const str = 'abcde'

// if (str[0] === 'a') {
//    console.log('Верно');
// } else {
//    console.log('Неверно');
// }



//? Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const str = '12345'

// if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
//    console.log('Верно');
// } else {
//    console.log('Неверно');
// }




//? Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий.

// str = '723'

// const res = +str[0] + +str[1] + +str[2]

// console.log(res);




//? Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// const a = Math.floor(Math.random() * 100000 + 111111)

// const a = 111111

// console.log(a);

// if ((a.toString()[0] + a.toString()[1] + a.toString()[2]) == (a.toString()[3] + a.toString()[4] + a.toString()[5])) {
//    console.log('Верно');
// } else {
//    console.log('Неверно');
// }




//!  Циклы


//? Выведите столбец чисел от 1 до 50.

// i = 1

// while (i <= 50) {
//    console.log(i);
//    i++
// }

// for (i = 1; i <= 50; i++) {
//    console.log(i);
// }



//? Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.


// const arr = [1, 2, 3, 4, 5]


// for (i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }



//?  Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива.

// let result = 1
// const arr = [2, 3, 4, 5]

// for (i = 0; i < arr.length; i++) {

//    result *= arr[i]
// }

// console.log(result);


//? Задача. Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.


// const obj = {
//    'Минск': 'Беларусь',
//    'Москва': 'Россия',
//    'Киев': 'Украина'
// }

// for (let key in obj) {
//    console.log(key);
// }


// for (let key in obj) {
//    console.log(obj[key])
// }


// for (let key in obj) {
//    console.log(key + ' это ' + obj[key]);
// }



//? Выведите столбец чисел от 1 до 100.

// for (i = 1; i <= 100; i++) {
//    console.log(i);
// }



//?  Выведите столбец чисел от 11 до 33.

// for (i = 11; i <= 33; i++) {
//    console.log(i);
// }


//?  Выведите столбец четных чисел в промежутке от 0 до 100.

// for (i = 0; i <= 100; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }


//? С помощью цикла найдите сумму чисел от 1 до 100.

// let res = 0

// for (i = 0; i <= 100; i++) {
//    res += i
// }




//?  Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.

// const obj = {
//    green: 'зеленый',
//    red: 'красный',
//    blue: 'голубой'
// }

// for (keys in obj) {
//    console.log(keys);
//    console.log(obj[keys]);
// }



//? Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.

// const obj = {
//    Костя: '200',
//    Вася: '300',
//    Петя: '400'
// }

// for (keys in obj) {
//    console.log(`${keys} - зарплата ${obj[keys]} долларов`);
// }




//? Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.

// const arr = [2, 5, 9, 15, 0, 4]

// for (i = 0; i < arr.length; i++) {
//    if (arr[i] > 3 && arr[i] < 10) {
//       console.log(arr[i]);
//    }
// }



//? Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива

// const arr = [-10, 15, 12, 55, -80, 9, 3, 21, 78, -2, -3, -7, 77, 42]

// let res = 0

// for (i = 0; i < arr.length; i++) {
//    if (arr[i] > 0) {
//       res += arr[i]
//    }
// }

// console.log(res);



//? Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
//? Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.

// const arr = [1, 2, 5, 9, 4, 13, 4, 10]

// for (i = 0; i < arr.length; i++) {
//    if (arr[i] === 4) {
//       console.log('Есть')
//       break
//    } else {
//       console.log('Нет');
//    }
// }



//? Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

// const arr = [10, 20, 30, 50, 235, 3000]

// for (i = 0; i < arr.length; i++) {
//    if (arr[i].toString()[0] === '1' || arr[i].toString()[0] === '2' || arr[i].toString()[0] === '3') {
//       console.log(arr[i]);
//    }
// }




//? Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let res = ''

// for (i = 0; i < arr.length; i++) {
//    res += `-${arr[i].toString()}`
// }

// console.log(res);



//? Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

// for (i = 0; i < arr.length; i++) {
//    if (arr[i].toString() === 'Суббота' || arr[i].toString() === 'Воскресенье') {
//       console.log(arr[i] + ' bold')
//    } else {
//       console.log(arr[i]);
//    }
// }




//? Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Текущий день должен храниться в переменной day.


// const arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

// const day = 'Суббота'

// for (i = 0; i < arr.length; i++) {
//    if (arr[i] === day) {
//       console.log(arr[i] + ' cursive')
//    } else {
//       console.log(arr[i]);
//    }
// }



//? Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? 
//? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.

// let n = 1000

// let num = 0

// for (i = 1; i < n; i++) {
//    if (n <= 50) {

//       break
//    } else {
//       n = n / 2
//       num += 1

//    }
// }
// console.log(n);
// console.log(num);



//! Задачи на математические функции JavaScript


//? Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b

// const a = 10

// const b = 3

// console.log(a % b);



//?  Даны переменные a и b. Проверьте, что a делится без остатка на b. Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления.


// const a = Math.floor(Math.random() * 100 + 1)
// const b = Math.floor(Math.random() * 100 + 1)

// if (a % b == 0) {
//    console.log(a);
//    console.log(b);
//    console.log('Делится')
// } else {
//    console.log(a);
//    console.log(b);
//    console.log('Не делится')
// }



//? Возведите 2 в 10 степень. Результат запишите в переменную st.

// st = Math.pow(2, 10)

// console.log(st);



//? Найдите квадратный корень из 245.

// const sqrt = Math.sqrt(245)

// console.log(sqrt);



//? Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

// const arr = [4, 2, 5, 19, 13, 0, 10]

// let sum = 0

// for (i = 0; i < arr.length; i++) {
//    sum += (arr[i] ** 2)
// }

// let res = Math.sqrt(sum)

// console.log(res)



//? Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// const arr = [4, -2, 5, 19, -130, 0, 10]

// const min = Math.min(...arr)
// console.log(min);

// const max = Math.max(...arr)
// console.log(max);


//?  Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while)

// const arr = []

// for (i = 1; i <= 10; i++) {
//    arr.push(Math.floor(Math.random() * 100))
// }

// console.log(arr);



//? Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

// const arr = [12, 15, 20, 25, 59, 79]

// let sum = 0

// for (i = 0; i < arr.length; i++) {
//    sum += arr[i]
// }

// const res = sum / arr.length

// console.log(res);


//?  Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

// let fact = 5
// let res = 1


// for (i = 0; i < fact; i++) {
//    res = res * (fact - i)
// }

// console.log(res);