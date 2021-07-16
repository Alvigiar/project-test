import './style.css'
import './main.scss'
// import jquery from 'jquery'; // ноут не импортит

// window.$ = jquery;


// document.querySelector('.burger__cell').addEventListener('click', () => {
//   document.querySelector('.menu__list').classList.toggle('active'),
//     document.querySelector('.burger__menu').classList.toggle('cross')
// })


// checklist

// let btnAddListItem = document.querySelector('.checklist__button')

// btnAddListItem.addEventListener('click', function (item) {
//   $('label').append(`
//     <div class="checklist__cell">
//       <input type="checkbox" name="item" id="item" class="checklist__item">
//       <textarea name="text" cols="20" rows="3" class="checklist__text"></textarea><input type="button" value="x">
//     </div>
//   `)
// })


// 1

// var a = 34;
// var b = 20;
// var c = "Новая";

// a = a + 2; // = 36
// b = b - 5; // = 15
// c = c + " строка!"; //= "Новая строка"
// console.log(a);
// console.log(b);
// console.log(c);

// 2

// let res = prompt('Сумма зарплаты')
// let prem = +res / 100 * 15 + +res
// let nalog = +prem - ((+prem * 10) / 100)
// let magaz = +nalog - 190
// let sum = +magaz / 2

// console.log(prem)
// console.log(nalog)
// console.log(magaz)
// console.log(sum)

// alert(`Премия 15%. На руки ${prem}`)
// alert(`Налог 10%. На руки ${nalog}`)
// alert(`Траты -190. На руки ${magaz}`)
// alert(`Жене. На руки ${sum}`)

// 4

// alert('Число')
// alert('* 2')
// alert('+ 7')

// let numb = prompt('Полученное число')

// let sum = (+numb / 2) - 7

// alert(sum)

// 5

// let one = prompt('Имя 1', 'Благоразумие')
// let two = prompt('Имя 2', 'Справедливость')
// let three = prompt('Имя 3', 'Умеренность')
// let four = prompt('Имя 4', 'Мужество')
// let sum = [`${one} ${two} ${three} ${four}`]
// console.log(sum)

// sum.forEach(element => {
//   let div = document.createElement('div')
//   div.className = 'test'
//   div.innerHTML = `${element}`
//   document.body.append(div)
//   console.log(element)
// });

// Условные конструкции if...else, switch ... case, тернарный оператор

// 1

// let name = prompt('Name')
// let birth = prompt('Year Birth')
// let now = new Date();
// let year = now.getFullYear()
// let age = +year - +birth
// console.log(age)
// document.body.innerHTML = name + ': ' + age

// 2

// let floor = +prompt('Floor')
// // let floor = 10
// let stepFloor2_4 = 20
// let stepFloor5_7 = 30
// let stepFloor8_10 = 40

// let floor2 = +stepFloor2_4
// let floor3 = +stepFloor2_4 * 2
// let floor4 = +stepFloor2_4 * 3

// let floor5 = +floor4 + +stepFloor5_7
// let floor6 = +floor4 + +stepFloor5_7 * 2
// let floor7 = +floor4 + +stepFloor5_7 * 3

// let floor8 = +floor7 + +stepFloor8_10
// let floor9 = +floor7 + +stepFloor8_10 * 2
// let floor10 = +floor7 + +stepFloor8_10 * 3

// switch (floor) {
//   case 2:
//     console.log(floor2)
//     break;
//   case 3:
//     console.log(floor3)
//     break;
//   case 4:
//     console.log(floor4)
//     break;
//   case 5:
//     console.log(floor5)
//     break;
//   case 6:
//     console.log(floor6)
//     break;
//   case 7:
//     console.log(floor7)
//     break;
//   case 8:
//     console.log(floor8)
//     break;
//   case 9:
//     console.log(floor9)
//     break;
//   case 10:
//     console.log(floor10)
//     break;


//   default:
//     console.log('-')
//     break;
// }

// 2 вариант этой же задачи

// 2 = 0
// 2 - 4 = 20
// 5 - 7 = 30
// 8 > .. = 40

// const box = document.querySelector('.price-box')
// const btn = document.querySelector('.price-box__btn')
// btn.addEventListener('click', () => {
//   const floor = document.querySelector('.price-box__floor').value
//   const floorPrice = (floor) => {
//     let price = 0
//     if (floor >= 8) {
//       return 40
//     } else if (floor >= 5) {
//       return 30
//     } else if (floor >= 2) {
//       return 20
//     }
//     return price
//   }
//   const priceSum = (floor) => {
//     let sum = 0
//     for (let i = 0; i <= floor; ++i) {
//       sum = sum + floorPrice(i)
//     }
//     return sum
//   }
//   console.log(priceSum(floor))
//   let res = document.createElement('div')
//   res.className = 'test'
//   res.innerHTML = `${priceSum(floor)}`
//   document.body.append('Вам необходимо будет оплатить: ' + `${priceSum(floor)}` + ' денег')
// })
// нет удаления предыдущего элемента

// 3 

// const buttonRoll = document.querySelector('.random-number__random-roll')
// buttonRoll.addEventListener('click', function () {
//   let getNumb = document.querySelector('.random-number__get-number').value
//   let getRandom = Math.floor((Math.random() * 10) + 1)
//   console.log(getRandom)
//   if (getNumb == getRandom) {
//     console.log('nice')
//   } else {
//     console.log('not')
//   }
// })

// 4

// let btnCreate = document.querySelector('.even-odd__create')
// btnCreate.addEventListener('click', () => {
//   let getNumber = document.querySelector('.even-odd__get-numb').value
//   let result = getNumber % 2
//   if (result == 0) {
//     document.body.append(`Число ${getNumber} четное`)
//   } else {
//     document.body.append(`Число ${getNumber} нечетное`)
//   }
// })

// 6

// 10 000 tax 10%
// 30 000 tax 15%
// 50 000 tax 17,5%
// 70 000 tax 20%

// let btn = document.querySelector('.salary__button')
// let summ
// function tax(salary) {
//   if (salary >= 70000) {
//     summ = (salary * 20) / 100
//     return summ
//   } else if (salary >= 50000) {
//     summ = (salary * 17.5) / 100
//     return summ
//   } else if (salary >= 30000) {
//     summ = (salary * 15) / 100
//     return summ
//   } else if (salary >= 10000) {
//     summ = (salary * 10) / 100
//     return summ
//   } else
//     return ('Это в долларах?')
// }
// btn.addEventListener('click', function () {
//   let salary = document.querySelector('.salary__numb').value
//   if (salary >= 10000) {
//     document.body.append(`Плоти налог в размере ${tax(salary)} денег`)
//   } else {
//     document.body.append('Это в долларах?')
//   }
// })

// 7 

// const btn = document.querySelector('.composite__btn')
// let fan = document.querySelector('#fan')
// let com = document.querySelector('#com')
// let det = document.querySelector('#det')
// let hor = document.querySelector('#hor')
// const book1 = '"Л.Н. Толстой. Война и мир"'
// const book2 = '"Джоан Роулинг.Гарри Поттер"'
// const book3 = '"Братья Стругацкие. Понедельник начинается в субботу."'
// const book4 = '"Агата Кристи. Вечеринка в Хэллоуин."'
// const book5 = '"Джонатан Страуд. Кричащая лестница."'
// const book6 = '"Диана Маш. Заноза для драконьего военачальника"'
// const book7 = '"Кирилл Круганский. Смешно или страшно."'
// const book8 = '"Стивен Кинг. Мизери."'
// const book9 = '"Эдгар По. Очень страшные истории."'
// const book10 = '"А. Маринина. Безупречная репутация"'

// btn.addEventListener('click', () => {
//   if (fan.checked && com.checked && det.checked && hor.checked) {
//     console.log(book5)
//   } else if (fan.checked && com.checked) {
//     console.log(book3, book4)
//   } else if (fan.checked && det.checked) {
//     console.log(book6)
//   } else if (com.checked && hor.checked) {
//     console.log(book7, book10)
//   } else if (det.checked && hor.checked) {
//     console.log(book9)
//   } else if (hor.checked) {
//     console.log(book8)
//   } else if (fan.checked) {
//     console.log(book2)
//   } else {
//     console.log(book1)
//   }
// })


// Циклы

// 1

// let cell = document.querySelector('.output__img')
// let btn = document.querySelector('.output__btn')

// let s = ''

// btn.addEventListener('click', () => {
//   for (let i = 1; i < 9; ++i) {
//     s += `<img src="/img/car${i}.jpg" alt=""><br />`
//   }
//   cell.innerHTML = s    
// })

//  2

// let argOne = 1
// let argTwo = 10
// let summArg = 0

// while (argOne <= argTwo) {
//     summArg += argOne
//     argOne++
// }
// console.log(summArg)

// 3 - 4

// const btn = document.querySelector('.btn-show')
// const stairs = document.querySelector('.stairs')


// btn.addEventListener('click', () => {
//     let step = [100, 200, 300, 400, 500]
//     for (let value of step) {
//         value += 100
//         step.indexOf(0)
//         console.log(value)
//     }

//     for (let i = 1; i < 6; i++) {
//         let stairs = document.createElement('div')
//         stairs.className = stairs
//         stairs.innerHTML = `<p style="background-color: rgb(${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)},${Math.floor((Math.random() * 255) + 1)}" class="stairs__${i}">Абзац</p>`
//         document.body.append(stairs)
//     }
// })

// Вложенные циклы

// Выведите методом document.write() или console.log() звездочки от 1 до 7 штук в виде треугольника таким образом:

// *
// **
// ***
// ****
// *****
// ******
// *******

// for (let i = 1; i < 8; i++) {
//     let div = document.createElement('div')
//     for (let i = 1; i < 8; i++) {
//     } 
//     div.textContent = `${i}`
//     document.body.append(div)
// }

// Массивы

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  const separator = ' '
  let userMassive = document.querySelector('.user__massive').value
  let massive = userMassive.split(separator)
  let userValue = document.querySelector('.user__value').value
  let value = +userValue - 1 // это для массива
  let userWord = document.querySelector('.user__word').value
  let corrWord = massive[`${value}`]
  let newWord = userMassive.replace(`${corrWord}`, `${userWord}`)

  let div = document.createElement('div')
  div.textContent = newWord
  document.body.append(div)

  console.log('Предложение:', userMassive)
  console.log('Массив:', massive)
  console.log('Число пользователя:', userValue)
  console.log('Число массива:', value)
  console.log('Слово пользователя:', userWord)
  console.log('Слово из массива:', corrWord)
  console.log('Новое предложение', newWord)

})