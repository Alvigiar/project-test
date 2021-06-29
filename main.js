import './style.css'
import './main.scss'
import jquery from 'jquery';

window.$ = jquery;


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

let one = prompt('Имя 1', 1)
let two = prompt('Имя 2', 2)
let fri = prompt('Имя 3', 3)
let sum = [`${one} ${two} ${fri}`]
// console.log(sum)

sum.forEach(element => {
  console.log(element)
  let div = document.createElement('div')
  $(div).append(`${element}`)
});