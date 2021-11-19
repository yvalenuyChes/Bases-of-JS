//? Сделайте калькулятор, который будет находить площадь и периметр квадрата.

const squereContainer = document.querySelector('.squere')
const selectSquere = squereContainer.querySelector('.select')
const buttonSquere = squereContainer.querySelector('.button')
const inputSquere = squereContainer.querySelector('.input')
const resultSquere = squereContainer.querySelector('.result')


function getResultsSquere() {
   if (selectSquere.value === 'sqr') {
      resultSquere.textContent = 'Результат: '
      resultSquere.textContent = resultSquere.textContent + (inputSquere.value * inputSquere.value)
      inputSquere.value = ''
   } else {
      resultSquere.textContent = 'Результат: '
      resultSquere.textContent = resultSquere.textContent + (inputSquere.value * 4)
      inputSquere.value = ''
   }
}

buttonSquere.addEventListener('click', getResultsSquere)


//? Сделайте калькулятор, который будет находить площадь и периметр прямоугольника.

const rectangleContainer = document.querySelector('.rectangle')
const inputRectangleWidth = rectangleContainer.querySelector('.rectangle__input-width')
const inputRectangleHeight = rectangleContainer.querySelector('.rectangle__input-heght')
const selectRectungle = rectangleContainer.querySelector('.select')
const buttonRectangle = rectangleContainer.querySelector('.button')
const resultSquereRectangle = rectangleContainer.querySelector('.result')

function getResultsReactangle() {

   if (selectRectungle.value === 'sqr') {
      resultSquereRectangle.textContent = 'Результат: '
      resultSquereRectangle.textContent = resultSquereRectangle.textContent + (+inputRectangleWidth.value * +inputRectangleHeight.value)
      inputRectangleWidth.value = ''
      inputRectangleHeight.value = ''

   } else {
      resultSquereRectangle.textContent = 'Результат: '
      resultSquereRectangle.textContent = resultSquereRectangle.textContent + (2 * (+inputRectangleWidth.value + +inputRectangleHeight.value))
      inputRectangleWidth.value = ''
      inputRectangleHeight.value = ''
   }
}

buttonRectangle.addEventListener('click', getResultsReactangle)


//? Сделайте калькулятор, который будет находить площадь круга и длину окружности.

const circleContainer = document.querySelector('.circle')
const inputCircle = circleContainer.querySelector('.circle__input')
const selectCircle = circleContainer.querySelector('.select')
const buttonCircle = circleContainer.querySelector('.button')
const resultCircle = circleContainer.querySelector('.result')

function getResultsCircle() {

   if (selectRectungle.value === 'sqr') {
      resultCircle.textContent = 'Результат: '
      resultCircle.textContent = resultCircle.textContent + (Math.PI * (+inputCircle.value) ** 2).toFixed(2)
      inputCircle.value = ''

   } else {
      resultCircle.textContent = 'Результат: '
      resultCircle.textContent = resultCircle.textContent + Math.floor((2 * Math.PI * +inputCircle)).toFixed(2)
      inputCircle.value = ''
   }
}

buttonCircle.addEventListener('click', getResultsCircle)


//? Сделайте калькулятор, который будет находить площадь треугольника по трем сторонам.


const triangleContainer = document.querySelector('.triangle')
const firstSide = triangleContainer.querySelector('.first__side')
const secondSide = triangleContainer.querySelector('.second__side')
const thirdSide = triangleContainer.querySelector('.third__side')
const buttonTriangle = triangleContainer.querySelector('.button')
const resultTriangle = triangleContainer.querySelector('.result')

function getResultsTriangle() {
   resultTriangle.textContent = 'Результат: '
   const perimeter = ((+firstSide.value + +secondSide.value + +thirdSide.value) / 2)
   const result = Math.sqrt(perimeter * (perimeter - firstSide.value) * (perimeter - secondSide.value) * (perimeter - thirdSide.value))
   resultTriangle.textContent = resultTriangle.textContent + result.toFixed(2)
   firstSide.value = ''
   secondSide.value = ''
   thirdSide.value = ''
}

buttonTriangle.addEventListener('click', getResultsTriangle)


//////////////////////////////////////////////////////////////!


//? Напишите скрипт, который будет находить корни квадратного уравнения. Для этого сделайте 3 инпута, в которые будут вводиться коэффициенты уравнения.

const squareQuationsContainer = document.querySelector('.square__equations')
const a = squareQuationsContainer.querySelector('.first__argument')
const b = squareQuationsContainer.querySelector('.second__argument')
const c = squareQuationsContainer.querySelector('.third__argument')
const buttonSquareQuations = squareQuationsContainer.querySelector('.button')
const resultSquareQuations = squareQuationsContainer.querySelector('.result')

function getRootSquareQuations(){
   resultSquareQuations.textContent = 'Результат: '

   const a1 = +a.value
   const b1 = +b.value
   const c1 = +c.value

   const D = b1**2 - (4 * a1 * c1)
   console.log(D);

   if(D > 0){
    const x1 = (-b1 + Math.sqrt(D)) / (2 * a1)
    const x2 = (-b1 - Math.sqrt(D)) / (2 * a1)
    resultSquareQuations.textContent = resultSquareQuations.textContent + `${x1}, ${x2}`
    a.value = ''
    b.value = ''
    c.value = ''
   }else if(D === 0){
    resultSquareQuations.textContent = resultSquareQuations.textContent + `${(-b1 / (2 * a1)).toFixed(2)}`
    a.value = ''
    b.value = ''
    c.value = ''
   }else{
    resultSquareQuations.textContent = resultSquareQuations.textContent + 'Уравнение не имеет корней'
    a.value = ''
    b.value = ''
    c.value = ''
   }
}

buttonSquareQuations.addEventListener('click', getRootSquareQuations)



//? Даны 3 инпута. В них вводятся числа. Проверьте, что эти числа являются тройкой Пифагора: квадрат самого большого числа должен быть равен сумме квадратов двух остальных.

const pifagor = document.querySelector('.pifagor')
const ap = pifagor.querySelector('.first__argument')
const bp = pifagor.querySelector('.second__argument')
const cp = pifagor.querySelector('.third__argument')
const buttonP = pifagor.querySelector('.button')
const resultP = pifagor.querySelector('.result')

function pif(...args){
   resultP.textContent = 'Результат: '
   let sum = 0
   let max = 0
   for(i = 0; i < arguments.length; i++){
    if(arguments[i] > max){
       max = arguments[i]
    }else if(arguments[i] < max){
     sum += arguments[i]
    }
   }
   if((max**2) === (sum**2)){
      resultP.textContent = 'Результат: Это тройка Пифагора'
   }else{
      resultP.textContent ='Результат: Это не тройка Пифагора'
   }
}

buttonP.addEventListener('click', () => pif(+ap.value, +bp.value, +cp.value))


//? Дан инпут и кнопка. В инпут вводится число. По нажатию на кнопку выведите список делителей этого числа.

const dividersContainer = document.querySelector('.dividers ')
const dividersInput = dividersContainer.querySelector('.input')
const dividersButton = dividersContainer.querySelector('.button')
const divideRsresult = dividersContainer.querySelector('.result')

function getDividers(){
   const value = +dividersInput.value
   const arrResult = []

   for(i = 1; i <= value; i++){
      if(value % i == 0){
         arrResult.push(i)
      }
   }

   divideRsresult.textContent = `Результат: ${arrResult}`
}

dividersButton.addEventListener('click', getDividers)

//? Даны 2 инпута и кнопка. В инпуты вводятся числа. По нажатию на кнопку выведите наибольший общий делитель этих двух чисел.


const dividersContainer2 = document.querySelector('.dividers__two')
const dividersInput1 = dividersContainer2.querySelector('.input')
const dividersInput2 = dividersContainer2.querySelector('.input2')
const dividersButton2 = dividersContainer2.querySelector('.button')
const divideRsresult2 = dividersContainer2.querySelector('.result')


function getDividers2(){
  const firstVal = +dividersInput1.value
  const secondVal = +dividersInput2.value

  const arrDeviders1 = []
  const arrDeviders2 = []
  const arrResult = []

   for(i = 1; i <= firstVal; i++){
      if(firstVal % i == 0){
         arrDeviders1.push(i)
      }
   }

   for(i = 1; i <= secondVal; i++){
      if(secondVal % i == 0){
         arrDeviders2.push(i)
      }
   }

   for(i = 0; i < arrDeviders1.length; i++){
      if(arrDeviders1[i] === arrDeviders2[i]){
         arrResult.push(arrDeviders1[i])
      }

   }

   divideRsresult.textContent = `Результат: ${arrResult}`
}


dividersButton2.addEventListener('click', getDividers2)
