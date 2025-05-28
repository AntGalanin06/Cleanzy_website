<template>
  <section class="hero">
    <div class="hero__overlay"></div>
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">
          Профессиональная уборка
          <span class="hero__title-highlight">вашего дома</span>
        </h1>
        <p class="hero__subtitle">
          Чистота и порядок в вашем доме - наша забота.
          Доверьте уборку профессионалам и наслаждайтесь свободным временем.
        </p>
        <div class="hero__features">
          <div class="hero__feature">
            <i class="fas fa-check-circle"></i>
            <span>Гарантия качества</span>
          </div>
          <div class="hero__feature">
            <i class="fas fa-clock"></i>
            <span>Пунктуальность</span>
          </div>
          <div class="hero__feature">
            <i class="fas fa-shield-alt"></i>
            <span>Безопасные средства</span>
          </div>
        </div>
        <div class="hero__actions">
          <button class="hero__order-btn" @click="scrollToOrder">
            Заказать уборку
            <i class="fas fa-arrow-right"></i>
          </button>
          <a href="#services" class="hero__more-btn">
            Узнать больше
            <i class="fas fa-chevron-down"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="hero__scroll-indicator">
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
const scrollToOrder = () => {
  const orderForm = document.querySelector('.footer__form')
  if (orderForm) {
    orderForm.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  min-height: 600px;
  background: url('/images/hero/hero-bg.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  color: white;
  overflow: hidden;

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.4) 100%
    );
  }

  .container {
    position: relative;
    z-index: 1;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__content {
    max-width: 600px;
  }

  &__title {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease forwards;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  &__title-highlight {
    color: var(--primary-color);
    display: block;
  }

  &__subtitle {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease 0.2s forwards;
  }

  &__features {
    display: flex;
    gap: 2rem;
    margin-bottom: 2.5rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease 0.4s forwards;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;

    i {
      color: var(--primary-color);
    }
  }

  &__actions {
    display: flex;
    gap: 1.5rem;
    opacity: 0;
    transform: translateY(30px);
    animation: fadeInUp 0.8s ease 0.6s forwards;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 1rem;
    }
  }

  &__order-btn {
    padding: 1rem 2rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s;

    &:hover {
      background: var(--primary-color);
      filter: brightness(0.9);

      i {
        transform: translateX(5px);
      }
    }

    i {
      transition: transform 0.3s;
    }
  }

  &__more-btn {
    padding: 1rem 2rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s;

    &:hover {
      background: white;
      color: var(--primary-color);
      transform: translateY(-2px);

      i {
        transform: translateY(3px);
      }
    }

    i {
      transition: transform 0.3s;
    }
  }

  &__scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    animation: fadeIn 0.8s ease 1s forwards;
  }

  &__scroll-line {
    width: 2px;
    height: 50px;
    background: white;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--primary-color);
      animation: scrollLine 2s ease-in-out infinite;
    }
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes scrollLine {
  0% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
</style> 