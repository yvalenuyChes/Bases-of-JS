//?  Дана ссылка. Даны чекбоксы. По нажатию на ссылку меняйте состояние чекбоксов с отмеченного на неотмеченное и наоборот.


// const checkBoxList = document.querySelectorAll('.chkbox')
// const button = document.getElementById('button')


// function acsept() {
//    for (i = 0; i < checkBoxList.length; i++) {
//       console.log();
//       if (checkBoxList[i].checked === true) {
//          checkBoxList[i].checked = false
//       } else {
//          checkBoxList[i].checked = true
//       }


//    }
// }

// button.addEventListener('click', acsept)


//? Спросите у пользователя какой язык (html, css, js, php) он знает с помощью радио кнопочек. Выведите этот язык в абзац. 

// const checkBoxList = document.querySelectorAll('.radio')
// const paragraf = document.getElementById('p')


// for (i = 0; i < checkBoxList.length; i++) {
//    checkBoxList[i].addEventListener('change', event => {
//       paragraf.textContent = event.target.value
//    })
// }


//? Спросите у пользователя какие языки (html, css, js, php) он знает с помощью чекбоксов. Выбранные языки должны выводится в абзац ниже через запятую.


// const checkBoxList = document.querySelectorAll('.chkbox')
// const paragraf = document.getElementById('p')
// const arr = []


// for (i = 0; i < checkBoxList.length; i++) {
//    checkBoxList[i].addEventListener('click', event => {

//       arr.push(event.target.value)
//       paragraf.textContent = arr


//    })
// }


//? Дан чекбокс. Дан инпут. Сделайте так, что если чекбокс отмечен - инпут видимый, если не отмечен - не видимый.

// const input = document.getElementById('input')
// const checkBox = document.getElementById('checkbox')


// function setVisibilityInput() {
//    if (checkBox.checked === true) {
//       input.style.display = 'none'
//    } else {
//       input.style.display = 'inline-block'
//    }
// }

// checkBox.addEventListener('change', setVisibilityInput)


//? Даны чекбоксы. Под каждым чекбоксом размещен абзац. Сделайте так, что если чекбокс отмечен - соответствующий абзац видимый, а если не отмечен - не видимый

// const checkBox = document.getElementById('checkbox')
// const paragrafs = document.querySelectorAll('.p')

// function hideParagrafs() {
//    for (i = 0; i < paragrafs.length; i++) {
//       if (checkBox.checked === true) {
//          paragrafs[i].style.display = 'none'
//       } else {
//          paragrafs[i].style.display = 'block'
//       }
//    }
// }

// checkBox.addEventListener('change', hideParagrafs)

//?  Дан инпут. Даны li. В инпут пишется номер. Сделайте так, чтобы по вводу числа, li с заданным номером покрасился в красный цвет.

// const input = document.getElementById('input')
// const list = document.querySelectorAll('.li')

// function colorizedLi() {
//    for (i = 0; i < list.length; i++) {
//       if (input.value === list[i].textContent) {
//          list[i].style.color = 'red'
//       } else {
//          list[i].style.color = 'black'
//       }
//    }
// }

// input.addEventListener('change', colorizedLi)


//? Дан абзац. Даны чекбоксы 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
//? Если соответствующий чекбокс отмечен - заданное действие происходит с абзацем (становится красным, например). 
//? Если чекбоксу снять отметку - действие отменяется.

// const paragraf = document.getElementById('p')
// const checkBoxList = document.querySelectorAll('.chx')

// function decorationText() {
//    if (this.checked) {
//       paragraf.style.cssText = this.value
//    } else {
//       paragraf.style.cssText = 'none'
//    }
// }

// for (i = 0; i < checkBoxList.length; i++) {
//    checkBoxList[i].addEventListener('change', decorationText)
// }