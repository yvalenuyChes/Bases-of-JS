const container = document.querySelector('.container')
const result = container.querySelector('.result')
const input = container.querySelector('.input')
const button = container.querySelector('.button')

const num = Math.floor((Math.random() * 100 + 1))

function findNum(){
  
   const value = input.value
   
   if(num > value){
      result.textContent = 'Больше'
   }else if(num < value){
      result.textContent = 'Меньше'
   }else{
      result.textContent = 'Вы угадали число'
   }
}


button.addEventListener('click', findNum)
