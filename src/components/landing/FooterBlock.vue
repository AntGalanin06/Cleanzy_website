<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__info">
          <div class="footer__logo">
            <a class="footer__logo" :href="baseUrl">
              <img :src="logoSrc" alt="Cleanzy" class="footer__logo-img">
              <h2 class="footer__logo-text">Cleanzy</h2>
            </a>
          </div>
          <p class="footer__description">
            Профессиональная клининговая компания, которая заботится о чистоте вашего дома
          </p>
          <div class="footer__contacts">
            <a href="tel:+79990858555" class="footer__contact">
              <font-awesome-icon :icon="faPhone" />
              +7 (999) 085-85-55
            </a>
            <a href="mailto:info@cleanzy.ru" class="footer__contact">
              <font-awesome-icon :icon="faEnvelope" />
              info@cleanzy.ru
            </a>
          </div>
          <div class="footer__social">
            <a href="https://vk.com/cleanzy_ru" class="footer__social-link" target="_blank" rel="noopener" aria-label="ВКонтакте">
              <font-awesome-icon :icon="faVk" />
            </a>
            <a href="https://t.me/+79990858555" class="footer__social-link" target="_blank" rel="noopener" aria-label="Telegram">
              <font-awesome-icon :icon="faTelegram" />
            </a>
            <a href="https://wa.me/79990858555" class="footer__social-link" target="_blank" rel="noopener" aria-label="WhatsApp">
              <font-awesome-icon :icon="faWhatsapp" />
            </a>
          </div>
        </div>

        <div class="footer__form">
          <h3 class="footer__form-title">Быстрый заказ</h3>
          <form @submit.prevent="submitForm" class="quick-order">
            <div class="quick-order__field">
              <input type="text" 
                     :value="form.name"
                     @input="handleNameInput"
                     placeholder="Ваше имя"
                     :class="{ 'error': errors.name }"
                     required>
              <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
            </div>
            <div class="quick-order__field">
              <input type="tel" 
                     :value="form.phone"
                     @input="handlePhoneInput"
                     @paste="handlePhonePaste"
                     @keydown="handlePhoneKeyDown"
                     placeholder="+7 (___) ___-__-__"
                     :class="{ 'error': errors.phone }"
                     required
                     maxlength="18"
                     inputmode="tel">
              <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
            </div>
            <div class="quick-order__field">
              <select v-model="form.service" required>
                <option value="" disabled>Выберите услугу</option>
                <option value="general">Генеральная уборка</option>
                <option value="regular">Регулярная уборка</option>
                <option value="after-repair">Уборка после ремонта</option>
                <option value="windows">Мойка окон</option>
              </select>
            </div>
            <div class="quick-order__field">
              <textarea v-model="form.comment" 
                        placeholder="Дополнительная информация"></textarea>
            </div>
            <button type="submit" 
                    class="quick-order__submit"
                    :disabled="!isFormValid">
              Заказать уборку
              <font-awesome-icon :icon="faBroom" />
            </button>
          </form>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copyright">
          © 2025 Cleanzy. Все права защищены
        </p>
        <div class="footer__links">
          <a href="#" class="footer__link" @click.prevent="openPrivacyPolicy">Политика конфиденциальности</a>
          <a href="#" class="footer__link" @click.prevent="openTermsOfService">Условия использования</a>
        </div>
      </div>
    </div>
    <PrivacyPolicy ref="privacyPolicy" />
    <TermsOfService ref="termsOfService" />
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue'
import PrivacyPolicy from './PrivacyPolicy.vue'
import TermsOfService from './TermsOfService.vue'
import { 
  faPhone,
  faEnvelope,
  faBroom
} from '@fortawesome/free-solid-svg-icons'
import {
  faVk,
  faTelegram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'

const baseUrl = import.meta.env.BASE_URL
const logoSrc = import.meta.env.BASE_URL + 'images/logo/logo.svg'

const form = ref({
  name: '',
  phone: '',
  service: '',
  comment: ''
})

const errors = ref({
  name: '',
  phone: ''
})

const privacyPolicy = ref(null)
const termsOfService = ref(null)

const validateName = (name) => {
  const nameRegex = /^[а-яА-Яa-zA-Z\s-]+$/
  if (!name) {
    return 'Имя обязательно для заполнения'
  }
  if (!nameRegex.test(name)) {
    return 'Имя должно содержать только буквы'
  }
  return ''
}

const formatPhone = (value) => {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length === 0) return ''
  
  let formatted = '+7 ('
  if (numbers.length > 1) {
    formatted += numbers.slice(1, 4)
  }
  if (numbers.length > 4) {
    formatted += ') ' + numbers.slice(4, 7)
  }
  if (numbers.length > 7) {
    formatted += '-' + numbers.slice(7, 9)
  }
  if (numbers.length > 9) {
    formatted += '-' + numbers.slice(9, 11)
  }
  return formatted
}

const validatePhone = (phone) => {
  const numbers = phone.replace(/\D/g, '')
  if (numbers.length !== 11) {
    return 'Введите корректный номер телефона'
  }
  if (numbers[0] !== '7') {
    return 'Номер должен начинаться с 7'
  }
  return ''
}

const handleNameInput = (event) => {
  form.value.name = event.target.value
  errors.value.name = validateName(form.value.name)
}

const handlePhoneInput = (event) => {
  let value = event.target.value.replace(/\D/g, '')
  if (value.length > 11) value = value.slice(0, 11)
  
  const formatted = formatPhone(value)
  form.value.phone = formatted
  errors.value.phone = validatePhone(value)
}

const handlePhonePaste = (event) => {
  event.preventDefault()
  const paste = (event.clipboardData || window.clipboardData).getData('text')
  let numbers = paste.replace(/\D/g, '').slice(0, 11)
  
  // Если вставляется номер без 7 в начале, добавляем её
  if (numbers.length === 10) {
    numbers = '7' + numbers
  }
  
  const formatted = formatPhone(numbers)
  form.value.phone = formatted
  errors.value.phone = validatePhone(numbers)
}

const handlePhoneKeyDown = (event) => {
  // Разрешаем: backspace, delete, tab, escape, enter, стрелки
  if ([8, 46, 9, 27, 13, 37, 38, 39, 40].includes(event.keyCode)) {
    return
  }
  // Разрешаем только цифры
  if (!/^\d$/.test(event.key)) {
    event.preventDefault()
    return
  }
  // Блокируем ввод, если уже 11 цифр
  const numbers = form.value.phone.replace(/\D/g, '')
  if (numbers.length >= 11) {
    event.preventDefault()
  }
}

const isFormValid = computed(() => {
  return !errors.value.name && !errors.value.phone && form.value.service
})

const submitForm = async () => {
  if (isFormValid.value) {
    // Проверяем, работаем ли мы на GitHub Pages (статический режим)
    const isStatic = window.location.hostname.includes('github.io');
    if (isStatic) {
      alert('Спасибо! Ваша заявка отправлена (демо-режим, без отправки на сервер)');
      form.value = {
        name: '',
        phone: '',
        service: '',
        comment: ''
      }
      errors.value = {
        name: '',
        phone: ''
      }
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.value.name,
          phone: form.value.phone,
          service: form.value.service,
          comment: form.value.comment
        })
      })

      const result = await response.json()
      
      if (result.success) {
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
        // Очищаем форму после успешной отправки
        form.value = {
          name: '',
          phone: '',
          service: '',
          comment: ''
        }
        errors.value = {
          name: '',
          phone: ''
        }
      } else {
        alert('Ошибка при отправке заявки. Попробуйте ещё раз.')
      }
    } catch (error) {
      console.error('Ошибка отправки:', error)
      alert('Ошибка соединения с сервером. Проверьте подключение к интернету.')
    }
  }
}

const openPrivacyPolicy = () => {
  privacyPolicy.value.open()
}

const openTermsOfService = () => {
  termsOfService.value.open()
}

const setOrderFromCalc = (orderData) => {
  if (orderData && orderData.service) {
    form.value.service = orderData.service
  }
  if (orderData && orderData.comment) {
    form.value.comment = orderData.comment
  }
}

defineExpose({ setOrderFromCalc })
</script>

<style lang="scss" scoped>
.footer {
  background-color: #1a1a1a;
  color: white;
  padding: 4rem 2rem 2rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }

  &__info {
    max-width: 400px;
  }

  &__logo {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    &-img {
      width: 40px;
      height: 40px;
      margin-right: 1rem;
    }

    &-text {
      font-size: 1.8rem;
      font-weight: 700;
      color: white;
    }
  }

  &__description {
    color: #999;
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  &__contacts {
    margin-bottom: 2rem;
  }

  &__contact {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    margin-bottom: 1rem;
    transition: color 0.3s;

    :deep(svg) {
      margin-right: 1rem;
      color: var(--primary-color);
      font-size: 1.1rem;
    }

    &:hover {
      color: var(--primary-color);
    }
  }

  &__social {
    display: flex;
    gap: 1rem;
  }

  &__social-link {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s;

    :deep(svg) {
      font-size: 1.2rem;
      transition: transform 0.3s;
    }

    &:hover {
      background: var(--primary-color);
      filter: brightness(0.9);

      :deep(svg) {
        transform: scale(1.1) rotate(10deg);
      }
    }
  }

  &__form {
    background: rgba(255, 255, 255, 0.05);
    padding: 2rem;
    border-radius: 12px;
  }

  &__form-title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  &__bottom {
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }

  &__copyright {
    color: #999;
  }

  &__links {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__link {
    color: #999;
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    padding: 0.5rem 0;

    &:hover {
      color: var(--primary-color);
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-color);
      transition: width 0.3s;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

.quick-order {
  &__field {
    margin-bottom: 1rem;
    position: relative;

    input, select, textarea {
      width: 100%;
      padding: 0.75rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      color: white;
      font-size: 1rem;
      transition: all 0.3s;

      &.error {
        border-color: #ff4444;
      }

      &::placeholder {
        color: #999;
      }

      &:focus {
        outline: none;
        border-color: var(--primary-color);
        background: rgba(255, 255, 255, 0.15);
      }

      &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .error-message {
      color: #ff4444;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      display: block;
    }
  }

  &__submit {
    width: 100%;
    padding: 1rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 0.3s;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: var(--primary-color);
      filter: brightness(0.9);
      transform: translateY(-2px);
    }

    :deep(svg) {
      transition: transform 0.3s;
    }

    &:not(:disabled):hover :deep(svg) {
      transform: rotate(15deg);
    }
  }

  &__field select {
    background: rgba(255,255,255,0.08);
    color: #fff;
    border: 1.2px solid rgba(255,255,255,0.2);
    border-radius: 12px;
    font-size: 1rem;
    padding: 0.75rem 1rem;
    transition: var(--transition);
    appearance: none;
    outline: none;
    box-shadow: none;
  }

  &__field select:focus {
    border-color: var(--primary-color);
    background: rgba(255,255,255,0.15);
  }

  &__field option {
    background: #232323;
    color: #fff;
  }
}
</style> 