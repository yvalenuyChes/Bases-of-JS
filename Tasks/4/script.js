//? В инпут через запятую вводятся страны. По нажатию на кнопку сделайте так, чтобы эти страны записались в ul под инпутом (каждая страна отдельный li).

// const input = document.getElementById('input')
// const list = document.getElementById('list')
// const button = document.getElementById('button')



// function printCountries() {
//    const arr = input.value.split(',')
//    const arrLength = arr.length
//    console.log(arrLength);
//    list.innerHTML = ''
//    let item = null

//    for (i = 0; i < arrLength; i++) {
//       item = document.createElement('li')
//       item.innerHTML = arr[i]
//       list.appendChild(item)
//    }

// }

// button.addEventListener('click', printCountries)



//?  В инпут вводится страна и нажимается Enter. 
//?  По нажатию на Enter сделайте так, чтобы введенные страны записывались в абзац под инпутом через запятую. 
//?  То есть по каждому нажатию Enter в абзац будут добавляться все новые и новые страны.


// const input = document.getElementById('input')
// const p = document.getElementById('p')



// function addCountries(event) {
//    if (event.key === 'Enter') {
//       p.textContent += input.value + ','
//       input.value = ''
//    }

// }

// input.addEventListener('keypress', addCountries)
