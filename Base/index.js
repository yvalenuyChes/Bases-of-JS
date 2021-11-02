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



//! Тз на вывод строк

// const serverData = {
//    "2020-09-22 00:00:00": { conversions: 0, clicks: 10, spent: 0 },
//    "2020-09-23 00:00:00": { conversions: 0, clicks: 10, spent: 0 },
//    "2020-09-24 00:00:00": { conversions: 0, clicks: 8, spent: 0 },
//    "2020-09-25 00:00:00": { conversions: 0, clicks: 1, spent: 0 },
//    "2020-09-26 00:00:00": { conversions: 0, clicks: 0, spent: 0 },
//    "2020-09-27 00:00:00": { conversions: 0, clicks: 6, spent: 0 },
//    "2020-09-28 00:00:00": { conversions: 0, clicks: 0, spent: 0 }
// }


// function dataFunc(data) {

//    const itemsData = []

//    class Item {
//       constructor(label, data) {
//          this.label = label
//          this.data = data
//       }
//    }

//    for (i = 0; i < Object.keys(Object.values(data)[0]).length; i++) {
//       let item = new Item()
//       item.label = Object.keys(Object.values(data)[0])[i]
//       item.data = []

//       for (j = 0; j < (Object.values(data).length); j++) {
//          item.data.push(Object.entries(Object.values(data)[j])[i])
//       }
//       itemsData.push(item)
//    }

//    return (itemsData)

// }

// viewData = dataFunc(serverData);

// console.log(viewData)



//console.log(`${i + 1} - ${Object.keys(Object.values(data)[i])}`)

//  1 - conversions,clicks,spent
//  2 - conversions,clicks,spent
//  3 - conversions,clicks,spent
//  4 - conversions,clicks,spent
//  5 - conversions,clicks,spent
//  6 - conversions,clicks,spent
//  7 - conversions,clicks,spent



//! reverse2

// const arr = [1, 2, 3, 4, 5, 6, 7]

// function reverse2(arr) {
//    let arr2 = []
//    for (i = arr.length - 1; i >= 0; i--) {
//       arr2.push(arr[i])
//    }
//    return arr2
// }

// console.log(reverse2(arr));


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



//! Задачи на функции работы с массивами в JavaScript



//? Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.


// const arr1 = [1, 2, 3]

// const arr2 = [4, 5, 6]

// const res = arr1.concat(arr2)

// console.log(res);



//? Дан массив ['js', 'css', 'jq']. Выведите на экран первый и последний элемент.


// const arr1 = ['js', 'css', 'jq']

// console.log(arr1.shift(), arr1.pop())


//?  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3],  другой [4,5].

// const arr1 = [1, 2, 3, 4, 5]

// const arr2 = arr1.slice(0, 3)
// const arr3 = arr1.slice(3, 5)

// console.log(arr2, arr3)




//? //////////////////////////////////////////////////////////////////////////////////////////////////////

// const arr = [1, 2, 3, 4, 5]

//? Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].

//* arr.splice(1, 2)

//? Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].

//* const arr2 = arr.splice(1, 3)

//?  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

//* arr.splice(3, 0, 'a', 'b', 'c')

//? Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// arr.splice(1, 0, 'a')
// arr.splice(2, 0, 'b')
// arr.splice(6, 0, 'c')
// arr.splice(8, 0, 'e')


// console.log(arr);


//? Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.

// const arr = [3, 4, 1, 2, 7]

// arr.sort()

// console.log(arr)



//? Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.


// const obj = { js: 'test', jq: 'hello', css: 'world' }

// let data = Object.keys(obj)

// console.log(data);


//!


//? Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

// function days(day) {
//    switch (day) {
//       case 1:
//          console.log('Понедельник')
//          break
//       case 2:
//          console.log('Вторник')
//          break
//       case 3:
//          console.log('Среда')
//          break
//       case 4:
//          console.log('Четверг')
//          break
//       case 5:
//          console.log('Пятница')
//          break
//       case 6:
//          console.log('Суббота')
//          break
//       case 7:
//          console.log('Воскресенье')
//          break
//    }
// }


// days(1)
// days(3)
// days(7)




//! На флаги

// const arr = [1, 2, 4, 5, 6, 7, 8]
// const arr1 = [5, 1, 1, 1, 1, 1, 5]
// const arr2 = [1, 2, 4, 6, 7, 8]
// const arr3 = [5, 5, 5, 5, 5, 5, 5]

// function checkArr(arr) {
//    for (i = 0; i <= arr.length; i++) {
//       if (arr[i] === 5) {
//          console.log(`Найдено число 5 в ${i} элементе`);
//       }
//    }
// }

// checkArr(arr)
// checkArr(arr1)
// checkArr(arr2)
// checkArr(arr3)



//?  Дано число, например 31. Проверьте, что это число не делится ни на одно другое число кроме себя самого и единицы. 
//?  То есть в нашем случае нужно проверить, что число 31 не делится на все числа от 2 до 30. 
//?  Если число не делится - выведите 'false', а если делится - выведите 'true'.


// const num = 38

// function checkNum(num) {
//    let res = []
//    for (i = 2; i < num; i++) {
//       if (num % i == 0) {
//          res.push(i);
//       }
//    }
//    if (res.length === 0) {
//       console.log('Делится только на себя и на еденицу');
//    } else {
//       console.log(res);
//    }

// }

// checkNum(num)


//?  Дан массив с числами. Проверьте, есть ли в нем два одинаковых числа подряд. Если есть - выведите 'да', а если нет - выведите 'нет'.


// const arr = [1, 2, 3, 4, 5, 6,]

// function isSimmilar(arr) {
//    arr.sort()
//    let data = []

//    for (i = 1; i <= arr.length; i++) {
//       if (arr[i] === (arr[i - 1]) || arr[i] === (arr[i + 1])) {
//          data.push(i);
//       }
//    }
//    if (arr.length = 0) {
//       console.log('Нет одинаковых элементов');
//    } else {
//       console.log(`Одинаковые элементы возле индексов: ${data}`);
//    }
// }

// isSimmilar(arr)




//?  Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

// function isEquil(a, b) {
//    if (a === b) {
//       console.log('Равны')
//    } else {
//       console.log('Не равны')
//    }
// }


// isEquil(1, 1)
// isEquil(2, 1)
// isEquil(1, 2)
// isEquil(11, 11)


//? Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.

// function moreThenTen(a, b) {
//    if ((a + b) >= 10) {
//       console.log(true);
//    } else {
//       console.log(false);
//    }
// }

// moreThenTen(4, 5)
// moreThenTen(10, 0)
// moreThenTen(15, 5)
// moreThenTen(1, 2)


//?  Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.

// function isNegative(num) {
//    if (num >= 0) {
//       console.log('Положительное');
//    } else {
//       console.log('Отрицательное');
//    }
// }

// isNegative(1)
// isNegative(-1)
// isNegative(-15)
// isNegative(15)


//! Пирамидки=333


//?  С помощью цикла for сформируйте строку '123456789' и запишите ее в переменную str.

// let str = ''

// for (i = 0; i <= 8; i++) {
//    str = str + `${i + 1}`
// }
// console.log(str);


//? С помощью цикла for сформируйте строку '987654321' и запишите ее в переменную str.


// let str = ''

// for (i = 8; i >= 0; i--) {
//    str = str + `${i + 1}`
// }
// console.log(str);


//? С помощью цикла for сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str.


// let str = ''

// for (i = 0; i <= 8; i++) {
//    if (i === 8) {
//       str = str + `-${i + 1}-`
//    } else {
//       str = str + `-${i + 1}`
//    }
// }
// console.log(str);


//?  Нарисуйте пирамиду, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5

//? x
//? xx
//? xxx
//? xxxx
//? xxxxx


// let piramide = ''

// for (i = 0; i < 20; i++) {
//    piramide = piramide + 'x'
//    console.log(piramide);
// }




//?  С помощью двух вложенных циклов нарисуйте следующую пирамидку:

//? 1
//? 22
//? 333
//? 4444
//? 55555
//? 666666
//? 7777777
//? 88888888
//? 999999999




// for (let i = 1; i <= 9; i++) {
//    let str = ''
//    for (let j = 1; j <= i; j++) {
//       str = str + i;
//    }
//    console.log(str);
// }



//! Заполнение массивов


//?  Заполните массив следующим образом: в первый элемент запишите 'x', во второй 'xx', в третий 'xxx' и так далее.

// const arr = []
// let x = ''
// for (i = 1; i <= 10; i++) {

//    x = x + 'x'
//    arr.push(x)
// }

// console.log(arr);


//? Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.

// const arr = []

// let num = ''

// for (let i = 1; i <= 9; i++) {
//    num = ''
//    for (let j = 1; j <= i; j++) {
//       num = num + i

//    }
//    arr.push(num)
// }

// console.log(arr);


//?  Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, 
//?  а вторым - сколько элементов должно быть в массиве. Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

// function arrayFill(arr, x) {
//    const returnedArr = []
//    for (i = 0; i <= x; i++) {
//       returnedArr.push(arr)
//    }
//    return returnedArr
// }


// console.log(arrayFill('x', 5));


//?  Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

// const arr = [1, 6, 3, 4, 5, 6, 8, 7, 9, 7]

// function arrSumTen(arr) {
//    let sum = 0
//    for (i = 0; i <= arr.length; i++) {
//       if (sum >= 10) {
//          console.log(sum, arr[i - 1]);
//          break
//       } else {
//          sum = sum + arr[i]
//       }
//    }
// }

// arrSumTen(arr)


//? Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

// const arr = ['1', '2', '3', '4', '5', '6']
// const arr1 = [1, 2, 3, 4, 5, 6]

// function reverse2(array) {
//    let inreriorArr = []
//    for (i = array.length - 1; i >= 0; i--) {
//       inreriorArr.push(array[i])
//    }
//    return inreriorArr
// }

// console.log(reverse2(arr));
// console.log(reverse2(arr1));


//? Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

// const arr = [[1, 2, 3], [4, 5], [6]]

// const arr1 = [[1, 1, 1], [1, 1, 1, 1], [1, 1]]

// function sumArr(array) {
//    let sum = 0
//    for (i = 0; i < array.length; i++) {

//       for (j = 0; j < array[i].length ; j++) {
//          sum += array[i][j]
//       }
//    }
//    return sum
// }

// console.log(sumArr(arr1));
// console.log(sumArr(arr));


//? Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. 

// const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

// const arr1 = [[[1, 1]], [[1, 1]], [[1, 1]]]

// function sumArr3(array) {
//    let sum = 0
//    for (i = 0; i < array.length; i++) {
//       for (j = 0; j < array[i].length; j++) {
//          for (k = 0; k < array[i][j].length; k++) {
//             sum += array[i][j][k]
//          }
//       }
//    }
//    return sum
// }

// console.log(sumArr3(arr));


//? Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.


// function numRange(num) {
//    if (num < 10 && num > 0) {
//       return true
//    } else {
//       return false
//    }
// }

// console.log(numRange(10));
// console.log(numRange(0));
// console.log(numRange(5));
// console.log(numRange(-5));
// console.log(numRange(11));


//? Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

// const arr = [1, 11, 45, -15, 11, 65, 2, 5, 4, 8, 8, 47, 32]

// const arr1 = []

// for (i = 0; i < arr.length; i++) {
//    if (numRange(arr[i])) {
//       arr1.push(arr[i])
//    }
// }

// console.log(arr1);


//? Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

// function getDigitsSum(num) {
//    numStr = `${num}`
//    let sum = 0

//    for (i = 0; i < numStr.length; i++) {
//       sum += +numStr[i]
//    }
//    return sum
// }
// console.log(getDigitsSum(45));
// console.log(getDigitsSum(78));
// console.log(getDigitsSum(11));
// console.log(getDigitsSum(5));



//? Найдите все года от 1 до 2021, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

//!

// let sum1 = 0

// function getDigitsSum(num) {
//    numStr = `${num}`
//    let sum = 0

//    for (i = 0; i < numStr.length; i++) {
//       sum += +numStr[i]
//    }
//    return sum
// }

// for (i = 1; i <= 2021; i++) {
//    if (getDigitsSum(i) === 13) {
//       sum1 += i
//    }
// }

// console.log(sum1);


//?  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

// function isEven(num) {
//    if (num % 2 == 0) {
//       return true
//    } else {
//       return false
//    }
// }

// console.log(isEven(10))
// console.log(isEven(5))
// console.log(isEven(11))
// console.log(isEven(6))


//? Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.


// const arr = [11, 12, 4, 7, 45, 47, 43, 14, 5, 1, 2, 7]

// function evenArray(arr) {
//    const arr1 = []
//    for (i = 0; i < arr.length; i++) {
//       if (isEven(arr[i])) {
//          arr1.push(arr[i])
//       }
//    }
//    return arr1
// }

// console.log(evenArray(arr));


//? Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).


// function getDivisors(num) {
//    let arr = []
//    for (i = 1; i <= num; i++) {
//       if (num % i == 0) {
//          arr.push(i)
//       }
//    }
//    return arr
// }

// console.log(getDivisors(5));
// console.log(getDivisors(10));
// console.log(getDivisors(12));
// console.log(getDivisors(4));
// console.log(getDivisors(100));



//?  Дана строка. Сделайте заглавным первый символ каждого слова этой строки. 
//?  Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

// function ucfirst(word) {
//    let str = ''
//    for (i = 0; i < word.length; i++) {
//       if (i === 0) {
//          str = word[i].toUpperCase()
//       } else {
//          str += word[i]
//       }
//    }
//    return str
// }

// console.log(ucfirst('cheese'));


//! Отработка циклов

//? Выведите с помощью цикла столбец чисел от 1 до 100.

// for (i = 1; i <= 100; i++) {
//    console.log(i);
// }

//? Выведите с помощью цикла столбец чисел от 100 до 1.

// for (i = 100; i >= 1; i--) {
//    console.log(i);
// }


//? Выведите с помощью цикла столбец четных чисел от 1 до 100.

// for (i = 1; i <= 100; i++) {
//    if (i % 2 == 0) {
//       console.log(i);
//    }
// }


//?  Заполните массив 10-ю иксами с помощью цикла. 

// const arr = []

// for (i = 0; i < 9; i++) {
//    arr.push('x')
// }

// console.log(arr);


//? Заполните массив числами от 1 до 10 с помощью цикла. 

// const arr = []

// for (let i = 0; i <= 9; i++) {
//    arr.push(i + 1)
// }

// console.log(arr);


//? Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

// const arr = []

// for (i = 0; i < 9; i++) {
//    arr.push(Math.floor(Math.random() * 100 + 1) / 100)
// }

// console.log(arr);


//?  Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла.


// const arr = []

// for (i = 0; i < 9; i++) {
//    arr.push(Math.floor(Math.random() * 10 + 1))
// }

// console.log(arr);


//? Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.


// const arr = [1, 2, 4, 45, 78, -71, 4, 5, 6, 8]
// const arr1 = []

// for (i = 0; i <= arr.length; i++) {
//    if (arr[i] >= 0 && arr[i] <= 10) {
//       arr1.push(arr[i])
//    }
// }

// console.log(arr1);



//? Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. 
//? Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.


// const arr = [1, 2, 5]
// const arr1 = [1, 2, 5, 10]
// const arr2 = [5, 5, 5]
// const arr3 = [5, 1, 1]
// const arr4 = [1, 1, 1]

// function finndFive(arr) {
//    for (i = 0; i <= arr.length; i++) {
//       if (arr[i] === 5) {
//          console.log('Есть', i + 1);
//          break
//       }
//    }
// }

// finndFive(arr)
// finndFive(arr1)
// finndFive(arr2)
// finndFive(arr3)
// finndFive(arr4)


//? Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.


// const arr = [1, 2, 4, 45, 78, -71, 4, 5, 6, 8]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i]
// }

// console.log(sum);


//? Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

// const arr = [1, 2, 4, 45, 78, -71, 4, 5, 6, 8]

// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i] ** 2
// }

// console.log(sum);


//? Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

// const arr = [1, 2, 4, 45, 78, -71, 4, 5, 6, 8]

// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//    sum = sum + arr[i]
// }

// const res = sum / arr.length

// console.log(res);




//!!! Практика JavaScript

//? Даны 3 инпута и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в четвертый инпут.


// const inputs = document.querySelectorAll('.cls')
// const button = document.getElementById('button')
// let sumValue = document.querySelector('.sum')

// function getValues() {
//    let sum = 0
//    for (i = 0; i < inputs.length; i++) {
//       sum += inputs[i].value
//    }
//    sumValue.value = sum
// }

// button.addEventListener('click', getValues)


//?  Даны N инпутов с классом .num и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац с id="result"

// const inputs = document.querySelectorAll('.cls')
// const button = document.getElementById('button')
// let sumValue = document.getElementById('result')

// function getValues() {
//    let sum = 0
//    for (i = 0; i < inputs.length; i++) {
//       sum += +inputs[i].value
//    }
//    sumValue.innerHTML = sum
// }

// button.addEventListener('click', getValues)


