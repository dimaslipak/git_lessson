let input = document.querySelector('input')
function MyObject(name, age) {   //задание 5
  this.name = name //задание 5
  this.age = age} //задание 5

document.querySelector('.buttonFind').onclick = function () {

  setTimeout(zadanie4, 3000)
  setTimeout(zadanie5, 3000)
  setTimeout(superSum, 3000)
  setTimeout(zadanie7, 3000)
  setTimeout(zadanie8, 3000)
}
//задание 4
function zadanie4() {
  if (input.value == 'google') alert('Yandex круче. Но это не точно')
  else alert('Результаты поискового запроса: ' + input.value)
}
//задание 5
function zadanie5 () {
  let myObject1 = new MyObject('Dima', '32')
  let myObject2 = new MyObject('Vasia', '34')
  let myObject3 = new MyObject('Sasha', '28')
  let arrObject = [myObject1, myObject2, myObject3]
  alert('Cв-во name первого объекта в массиве: ' + myObject1.name)
}
// задание 6
function superSum() {
  let num1 = prompt('Найдем сумму любых 2-х чисел. Введите число 1: ', defaultStatus)
  let num2 = prompt('Введите число 2: ', defaultStatus)
  if (!isNaN(num1) && !isNaN(num2)) {
    alert(parseFloat(num1) + parseFloat(num2))
  } else {
    if (isNaN(num1) && isNaN(num2)) {
      alert('Вы не правильно ввели оба числа')
    } else if (isNaN(num1)) {
      alert('Вы не правильно ввели число 1')
    } else alert('Вы не правильно ввели число 2') }
}
// задание 7
function zadanie7() {
  let randArr = []
  for (let i = 0; i < 20; i++) {
    randArr[i] = Math.floor(Math.random() * 100)
  }
  let numMax = randArr[0]
  let numMin = randArr[0]
  for (let i = 1; i < randArr.length; i++ ) {
    if (randArr[i] > numMax) {
      numMax = randArr[i]
    }
  }
  for (let i = 1; i < randArr.length; i++ ) {
    if (randArr[i] < numMin) {
      numMin = randArr[i]
    }
  }
  alert('Результат 7-го задания. Максимальное число: ' + numMax + '; ' + 'Минимальное число: ' + numMin)
}
// задание 8
function zadanie8() {
  let a = "XXX"
  let b = "YYY"
  b = [a, a = b][0]
  console.log(a); // то что было изначально в b
  console.log(b); // то что было изначально в a
}
// задание 9
function findMax(randArr) {
  let numMax = randArr[0]
  for (let i = 1; i < randArr.length; i++ ) {
    if (randArr[i] > numMax) {
      numMax = randArr[i]
    }
  }
  return numMax
}



