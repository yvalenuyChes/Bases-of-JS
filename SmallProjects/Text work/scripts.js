//? Дан textarea. Пусть в него вводится текст. Сделайте так, чтобы по потери фокуса под текстареа вывелось сообщение о том, сколько в этом тексте слов.
const firstTask = document.querySelector('.firstTask')
const textarea = firstTask.querySelector('.textarea')
const textareaResult = firstTask.querySelector('.result')

function getWordsTextArea(){
   const value = textarea.value

  textareaResult.textContent = `${value.split(' ').length}`
}

textarea.addEventListener('blur',getWordsTextArea)

//? Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов.

// const secondTask = document.querySelector('.secondTask')
// const textarea2 = secondTask.querySelector('.textarea')
// const textareaResult2 = secondTask.querySelector('.result')

// function geSymbolsTextArea(){
//    const value = textarea2.value

//    textareaResult2.textContent = `${value.split('').length}`
// }

// textarea2.addEventListener('blur',geSymbolsTextArea)


//? Модифицируйте предыдущую задачу так, чтобы также вывелось сообщение о том, сколько в тексте символов за вычетом пробелов.


const secondTask = document.querySelector('.secondTask')
const textarea2 = secondTask.querySelector('.textarea')
const textareaResult2 = secondTask.querySelector('.result')

function geSymbolsTextArea(){
   const resultArr = []
   const value = textarea2.value
  for(let i = 0; i < value.length; i++){
    if(value[i] !== ' '){
      resultArr.push(value[i])
    }
  }

   textareaResult2.textContent = `${resultArr.length}`
}

textarea2.addEventListener('blur',geSymbolsTextArea)


