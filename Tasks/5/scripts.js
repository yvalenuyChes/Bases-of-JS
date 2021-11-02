//! 1

//? Даны два селекта. В первом находятся страны, во втором - города.
//? Сделайте так, чтобы когда выбирается определенная страна - в другом селекте появлялись города этой страны. 
//? В абзац ниже пишите выбранную страну и город через запятую.

// const selectCountrie = document.getElementById('input_countries')
// const selectCity = document.getElementById('input_cities')
// const result = document.getElementById('result')

// const citiesArr = {
//    Россия: ['Москва', 'Санкт-Петербург', 'Екатеренбург'],
//    Украина: ['Киев', 'Львов', 'Донецк'],
//    Канада: ['Торонто', 'Монреаль', 'Калгари']
// }




// function setCities() {
//    selectCity.innerHTML = ''
//    const countrie = selectCountrie.value
//    for (let i = 0; i < citiesArr[countrie].length; i++) {
//       let newOption = document.createElement('option')
//       newOption.innerHTML = citiesArr[countrie][i]
//       selectCity.appendChild(newOption)
//    }
// }

// function setResult() {
//    result.textContent = selectCountrie.value + ',' + selectCity.value
// }

// selectCountrie.addEventListener('change', setCities)
// selectCity.addEventListener('change', setResult)