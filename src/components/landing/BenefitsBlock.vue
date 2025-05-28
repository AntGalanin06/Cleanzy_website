<template>
  <section class="benefits" id="services">
    <div class="container">
      <div class="benefits__header">
        <h2 class="benefits__title">Наши преимущества</h2>
        <p class="benefits__subtitle">
          Мы делаем уборку профессионально, качественно и с заботой о вашем доме
        </p>
      </div>

      <div class="benefits__grid">
        <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
          <div class="benefit-card__icon">
            <i :class="benefit.icon"></i>
          </div>
          <h3 class="benefit-card__title">{{ benefit.title }}</h3>
          <p class="benefit-card__description">{{ benefit.description }}</p>
        </div>
      </div>

      <div class="benefits__cta">
        <button class="benefits__order-btn" @click="scrollToOrder">
          Заказать уборку
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const benefits = ref([
  {
    icon: 'fas fa-broom',
    title: 'Профессиональное оборудование',
    description: 'Используем современную технику и эффективные средства для идеальной чистоты'
  },
  {
    icon: 'fas fa-users',
    title: 'Опытные клинеры',
    description: 'Наши специалисты проходят тщательный отбор и регулярное обучение'
  },
  {
    icon: 'fas fa-clock',
    title: 'Экономия времени',
    description: 'Выполняем уборку быстро и качественно, экономя ваше время'
  },
  {
    icon: 'fas fa-leaf',
    title: 'Экологичные средства',
    description: 'Используем безопасные и гипоаллергенные чистящие средства'
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Гарантия качества',
    description: 'Даем гарантию на все виды уборки и бесплатно исправляем недочеты'
  },
  {
    icon: 'fas fa-hand-holding-usd',
    title: 'Доступные цены',
    description: 'Предлагаем оптимальное соотношение цены и качества услуг'
  }
])

const scrollToOrder = () => {
  const orderForm = document.querySelector('.footer__form')
  if (orderForm) {
    orderForm.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.benefits {
  padding: 6rem 0;
  background: #f8f9fa;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__header {
    text-align: center;
    margin-bottom: 4rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  &__subtitle {
    font-size: 1.2rem;
    color: #666;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }

  &__cta {
    text-align: center;
  }

  &__order-btn {
    padding: 1rem 2.5rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s;

    &:hover {
      background: var(--primary-color);
      filter: brightness(0.9);
      transform: translateY(-2px);

      i {
        transform: translateX(5px);
      }
    }

    i {
      transition: transform 0.3s;
    }
  }
}

.benefit-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 0.8s ease forwards;

  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      animation-delay: #{$i * 0.1}s;
    }
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }

  &__icon {
    width: 60px;
    height: 60px;
    background: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;

    i {
      font-size: 1.5rem;
      color: white;
    }
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }

  &__description {
    color: #666;
    line-height: 1.6;
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

@media (max-width: 768px) {
  .benefits {
    padding: 4rem 0;

    &__title {
      font-size: 2rem;
    }

    &__grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 