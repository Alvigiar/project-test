import './style.css'
import './main.scss'
import './node_modules/normalizecss/normalize.css'



document.querySelector('.burger__cell').addEventListener('click', () => {
    document.querySelector('.menu__list').classList.toggle('active'),
    document.querySelector('.burger__menu').classList.toggle('cross')
})