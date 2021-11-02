//?  Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.

// const input = document.getElementById('input')
// const result = document.getElementById('result')

// input.addEventListener('blur', blurHandle)

// function blurHandle() {
//    let value = 0
//    let str = input.value
//    const arr = str.split('')
//    for (i = 0; i < arr.length; i++) {
//       value += +  arr[i]
//    }
//    result.innerText = value

// }


//? Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).

// const input = document.getElementById('input')
// const result = document.getElementById('result')

// function blurHandle() {
//    let value = 0
//    let str = input.value
//    const arr = str.split(',')
//    for (i = 0; i < arr.length; i++) {
//       value += +  arr[i]
//    }
//    result.innerText = value

// }

// input.addEventListener('blur', blurHandle)


//?  Дан инпут. В него вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в отдельные инпуты. 

// const input = document.getElementById('input')
// const nameInput = document.getElementById('name')
// const surnameInput = document.getElementById('surname')
// const patronymicInput = document.getElementById('patronymic')


// function getFullName() {

//    let str = input.value
//    const arr = str.split(' ')
//    nameInput.value = arr[0]
//    surnameInput.value = arr[1]
//    patronymicInput.value = arr[2]

// }

// input.addEventListener('blur', getFullName)


//? Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. 
//? Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в том же инпуте).


// const input = document.getElementById('input')


// function uswords(str) {

//    const arr = str.split(' ')
//    for (i = 0; i < arr.length; i++) {
//       arr[i] = arr[i].split('')
//       arr[i][0] = arr[i][0].toUpperCase()
//       arr[i] = arr[i].join('')
//    }
//    str = arr.join(' ')
//    return str
// }

// function bigLetter() {
//    input.value = uswords(input.value);
// }


// input.addEventListener('blur', bigLetter)


//?  Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.

// const input = document.getElementById('input')

// function howManyWords() {
//    str = input.value
//    let arr = str.split(' ')
//    console.log(arr.length);
// }

// input.addEventListener('blur', howManyWords)


//?  Дан инпут. В него вводится текст. По потери фокуса узнайте количество символов в самом длинном слове в этом тексте.

// const input = document.getElementById('input')

// function longestWord() {
//    let arr = (input.value).split(' ')
//    let maxWord = ''
//    for (i = 1; i < arr.length; i++) {
//       if (arr[i].split('').length > arr[i - 1].split('').length) {
//          maxWord = arr[i]
//       } else {

//       }
//    }
//    console.log(maxWord);
// }

// input.addEventListener('blur', longestWord)



//? Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.

// const input = document.getElementById('input')

// function reverseDate() {

//    const arr = input.value.split('.')

//    console.log(arr);

//    let reverseDate = ''
//    for (i = arr.length - 1; i >= 0; i--) {
//       if (i === arr.length - 1) {
//          reverseDate += `${arr[i]}`
//       } else {
//          reverseDate += `-${arr[i]}`
//       }

//    }

//    input.value = reverseDate
// }


// function reverseDate() {
//    let arr2 = []
//    let str = input.value
//    const arr = str.split('.')
//    arr2 = arr.reverse()
//    let str2 = arr2.join('-')
//    input.value = str2
// }

// input.addEventListener('blur', reverseDate)


//? Дан инпут. В него вводится год рождения пользователя. По нажатию на кнопку выведите в абзац ниже сколько пользователю лет. 



// const input = document.getElementById('input')
// const result = document.getElementById('result')


// function howManyYears() {
//    let birthYear = input.value
//    let date = new Date()
//    let nowYears = date.getFullYear() - birthYear
//    result.innerText = nowYears
// }

// input.addEventListener('blur', howManyYears)


//?  Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам). 

// const input = document.getElementById('input')

// function isPollindrom() {
//    let str = input.value

//    arr1 = str.split('').reverse().join('')
//    console.log(arr1);
//    if (str === arr1) {
//       console.log('это паллиндром');
//    } else {
//       console.log('это не паллиндром');
//    }
// }


// input.addEventListener('blur', isPollindrom)



//? Дан инпут. В него вводится число. Проверьте по вводу, что это число содержит внутри себя цифру 3. 

// const input = document.getElementById('input')

// function alert3() {
//    let str = input.value
//    const arr = str.split('')
//    for (i = 0; i < arr.length; i++) {
//       if (arr[i] == 3) {
//          console.log('Вы ввели 3');
//       }
//    }
// }

// input.addEventListener('blur', alert3)


//? Даны N абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер. 

// const button = document.getElementById('button')
// const paragrafs = document.querySelectorAll('p')

// function numberingParagrafs() {
//    for (i = 0; i < paragrafs.length; i++) {
//       paragrafs[i].innerHTML = paragrafs[i].textContent + i
//    }
// }

// button.addEventListener('click', numberingParagrafs)


//?  Даны N абзацев с числами. По нажатию на кнопку выведите эти числа в инпут через запятую в порядке возрастания.

// const input = document.getElementById('input')
// const button = document.getElementById('button')
// const paragrafs = document.querySelectorAll('p')

// function numberingParagrafs() {
//    for (i = 0; i < paragrafs.length; i++) {
//       input.value = input.value + paragrafs[i].textContent
//    }
// }

// button.addEventListener('click', numberingParagrafs)


//?  Даны ссылки. По загрузке страницы добавьте в конец каждой ссылки ее href в круглых скобках.


// const links = document.querySelectorAll('.link')

// for (i = 0; i < links.length; i++) {
//    links[i].textContent = links[i].attributes.href.value
// }



//? Даны ссылки. По загрузке страницы, если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;)

// const links = document.querySelectorAll('.link')

// for (i = 0; i < links.length; i++) {
//    if (links[i].textContent.indexOf('http://') == 0) {
//       links[i].textContent = links[i].textContent + '→'
//    }
// }


//? Даны N абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.


// const paragrafs = document.querySelectorAll('p')

// for (i = 0; i < paragrafs.length; i++) {
//    paragrafs[i].addEventListener('click', event => {
//       event.target.textContent = event.target.textContent ** 2
//    })
// }



//? Даны картинки. По нажатию на любую картинку увеличьте ее в 2 раза. 

// const images = document.querySelectorAll('.img')

// for (i = 0; i < images.length; i++) {
//    images[i].addEventListener('click', event => {
//       event.target.height = event.target.height * 2
//       event.target.width = event.target.width * 2
//    })
// }


//? Даны картинки. По первому нажатию на любую картинку увеличьте ее в 2 раза. По второму нажатию - уменьшите обратно.

// const images = document.querySelectorAll('.img')



// for (i = 0; i < images.length; i++) {
//    images[i].addEventListener('click', event => {

//       if (event.target.classList.value === 'img active') {
//          event.target.classList.remove('active')
//          event.target.height /= 2
//       } else {
//          event.target.classList.add('active')
//          event.target.height *= 2
//       }

//    })
// }

//? Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.


// const input = document.getElementById('input')
// document.getElementById('button1').addEventListener('click', () => {
//    input.value = +input.value + 1
// })
// document.getElementById('button2').addEventListener('click', () => {

//    if (input.value === '0') {
//       input.value = input.value
//    } else {
//       input.value = +input.value - 1
//    }

// })



