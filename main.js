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

let floor = +prompt('Floor')
// let floor = 10
let stepFloor2_4 = 20
let stepFloor5_7 = 30
let stepFloor8_10 = 40

let floor2 = +stepFloor2_4
let floor3 = +stepFloor2_4 * 2
let floor4 = +stepFloor2_4 * 3

let floor5 = +floor4 + +stepFloor5_7
let floor6 = +floor4 + +stepFloor5_7 * 2
let floor7 = +floor4 + +stepFloor5_7 * 3

let floor8 = +floor7 + +stepFloor8_10
let floor9 = +floor7 + +stepFloor8_10 * 2
let floor10 = +floor7 + +stepFloor8_10 * 3

switch (floor) {
  case 2:
    console.log(floor2)
    break;
  case 3:
    console.log(floor3)
    break;
  case 4:
    console.log(floor4)
    break;
  case 5:
    console.log(floor5)
    break;
  case 6:
    console.log(floor6)
    break;
  case 7:
    console.log(floor7)
    break;
  case 8:
    console.log(floor8)
    break;
  case 9:
    console.log(floor9)
    break;
  case 10:
    console.log(floor10)
    break;

    
  default:
    console.log('-')
    break;
}