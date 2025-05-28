<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div v-if="isMenuOpen" class="header__overlay" @click="closeMenu"></div>
    <div class="container">
      <div class="header__content">
        <a class="header__logo" :href="baseUrl">
          <img :src="logoSrc" alt="Cleanzy" class="header__logo-img">
          <span class="header__logo-text">Cleanzy</span>
        </a>

        <nav class="header__nav" :class="{ 'header__nav--active': isMenuOpen }">
          <a href="#services" class="header__nav-link" @click.prevent="scrollToSection('services')">Услуги</a>
          <a href="#calculator" class="header__nav-link" @click.prevent="scrollToSection('calculator')">Калькулятор</a>
          <a href="#team" class="header__nav-link" @click.prevent="scrollToSection('team')">Сотрудники</a>
          <a href="#gallery" class="header__nav-link" @click.prevent="scrollToSection('gallery')">Галерея</a>
          <a href="#reviews" class="header__nav-link" @click.prevent="scrollToSection('reviews')">Отзывы</a>
          <a href="#faq" class="header__nav-link" @click.prevent="scrollToSection('faq')">FAQ</a>
        </nav>

        <div class="header__actions">
          <a href="tel:+79990858555" class="header__phone">
            <i class="fas fa-phone"></i>
            +7 (999) 085-85-55
          </a>
          <button class="header__order-btn" @click="scrollToOrder">
            Заказать уборку
          </button>
          <button class="header__menu-btn" 
                  :class="{ 'header__menu-btn--active': isMenuOpen }" 
                  @click="toggleMenu"
                  aria-label="Меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const baseUrl = import.meta.env.BASE_URL
const logoSrc = import.meta.env.BASE_URL + 'images/logo/logo.svg'
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const headerHeight = document.querySelector('.header').offsetHeight
    const sectionTop = section.offsetTop - headerHeight
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    })
    isMenuOpen.value = false
  }
}

const scrollToOrder = () => {
  const orderForm = document.querySelector('.footer__form')
  if (orderForm) {
    const headerHeight = document.querySelector('.header').offsetHeight
    const formTop = orderForm.offsetTop - headerHeight
    window.scrollTo({
      top: formTop,
      behavior: 'smooth'
    })
    isMenuOpen.value = false
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;

  &--scrolled {
    background: rgba(26, 26, 26, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.5rem 0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: flex;
    align-items: center;
    text-decoration: none;

    &-img {
      width: 40px;
      height: 40px;
      margin-right: 0.5rem;
    }

    &-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
    }
  }

  &__nav {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(26, 26, 26, 0.98);
      backdrop-filter: blur(10px);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      overflow-y: auto;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: 2000;
      padding: 2rem 0;

      &--active {
        transform: translateX(0);
      }

      .header__nav-link {
        font-size: 1.5rem;
        margin: 1.5rem 0;
        opacity: 0;
        transform: translateY(40px);
        transition: opacity 0.5s cubic-bezier(0.4,0,0.2,1), transform 0.5s cubic-bezier(0.4,0,0.2,1);

        @for $i from 1 through 6 {
          &:nth-child(#{$i}) {
            transition-delay: #{0.15 + $i * 0.08}s;
          }
        }
      }

      &--active .header__nav-link {
        opacity: 1;
        transform: translateY(0);
      }
    }

    &-link {
      color: white;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;

      &:hover {
        color: var(--primary-color);
      }
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  &__phone {
    display: flex;
    align-items: center;
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    i {
      margin-right: 0.5rem;
      color: var(--primary-color);
    }

    &:hover {
      color: var(--primary-color);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__order-btn {
    padding: 0.75rem 1.5rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: var(--primary-color);
      filter: brightness(0.9);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  &__menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 2001;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      display: flex;
    }

    span {
      display: block;
      width: 100%;
      height: 2px;
      background: #fff;
      border-radius: 1px;
      margin: 0 0 4px 0;
      box-shadow: none;
      transition: all 0.3s ease;
      transform-origin: left center;
    }

    span:last-child {
      margin-bottom: 0;
    }

    &--active {
      span {
        &:first-child {
          transform: rotate(45deg);
        }
        &:nth-child(2) {
          opacity: 0;
          transform: scaleX(0.5);
        }
        &:last-child {
          transform: rotate(-45deg);
        }
      }
    }

    &:hover span {
      background: var(--primary-color);
    }
  }

  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(26, 26, 26, 0.85);
    z-index: 999;
    transition: opacity 0.3s;
  }
}
</style> 