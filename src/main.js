import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import { FontAwesomeIcon } from './plugins/fontawesome.js'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

// Ripple-эффект для всех кнопок
function addRippleEffect(e) {
  const button = e.currentTarget
  const circle = document.createElement('span')
  const diameter = Math.max(button.clientWidth, button.clientHeight)
  const radius = diameter / 2
  circle.classList.add('button__ripple')
  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`
  circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`
  button.appendChild(circle)
  circle.addEventListener('animationend', () => circle.remove())
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button, .btn, .benefits__order-btn, .calc-order-btn, .faq__button').forEach(btn => {
    btn.addEventListener('click', addRippleEffect)
  })
})
