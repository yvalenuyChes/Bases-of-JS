//?  Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.


// const input = document.getElementById('input')

// function checkNum() {
//    if (+input.value >= 0 && +input.value <= 100) {
//       input.style.border = '3px solid green'
//       console.log(input.value);
//    } else {
//       input.style.border = '3px solid red'
//    }
// }

// input.addEventListener('blur', checkNum)


//?  Дан инпут. Выделите любой текст на странице. По окончанию выделения этот текст должен записаться в этот инпут. 

// const input = document.getElementById('input')

// function getText() {
//    let content = window.getSelection().toString()
//    input.value = content
// }

// document.addEventListener('mouseup', getText)


//? Даны абзацы с числами. По нажатию на кнопку найдите абзац, в котором хранится максимальное число, и сделайте его красного цвета. 

// const paragrafs = document.querySelectorAll('.p')
// const button = document.getElementById('button')

// function getMaxNumberInPar() {
//    let max = 0
//    let maxP = null
//    for (i = 0; i < paragrafs.length; i++) {

//       if (+paragrafs[i].textContent > max) {
//          max = paragrafs[i].textContent
//          maxP = paragrafs[i]
//       }
//    }
//    maxP.style.color = 'red'
// }


// button.addEventListener('click', getMaxNumberInPar)


//? Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.

// const input = document.getElementById('input')
// const paragrafs = document.querySelectorAll('.p')



// for (i = 0; i < paragrafs.length; i++) {
//    paragrafs[i].addEventListener('click', event => {
//       event.target.textContent = +event.target.textContent + 1
//    })
// }


// document.getElementById('button').addEventListener('click', () => {
//    let sum = 0
//    for (i = 0; i < paragrafs.length; i++) {
//       sum = sum + +paragrafs[i].textContent
//    }
//    input.value = sum
// })

//? Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут. 
//? Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задается длина случайной строки
//? Модифицируйте предыдущую задачу так, чтобы был еще один инпут, в котором задаются символы, из которых формируется эта случайна строка. Символы задаются без всяких разделитетей, в одну строку.


// const input = document.getElementById('input')
// const inputLengthStr = document.getElementById('input_str_length')
// const inputStrValue = document.getElementById('input_str_value')
// const button = document.getElementById('button')

// function randString() {
//    let str = ''
//    const mainStr = inputStrValue.value
//    for (i = 0; i < inputLengthStr.value; i++) {
//       str += mainStr.charAt(Math.floor(Math.random() * mainStr.length))
//    }
//    input.value = str
// }

// button.addEventListener('click', randString)


//? Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот. 
// const paragraf = document.querySelector('.p')


// window.setInterval(changeColor, 1000)

// function changeColor() {
//    if (paragraf.style.color == 'red') {
//       paragraf.style.color = 'green'
//    } else {
//       paragraf.style.color = 'red'
//    }
// }




