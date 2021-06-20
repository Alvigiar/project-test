import './style.css'
import './main.scss'
import './node_modules/normalizecss/normalize.css'



// document.querySelector('.btn').addEventListener('click', () => {
//     document.querySelector('.menu__list').classList.toggle('active')
// })

const one = document.querySelector('btn')
const two = document.querySelector('.menu__list')

one.addEventListener('click', function () {
    two.classList.toggle('active')
})