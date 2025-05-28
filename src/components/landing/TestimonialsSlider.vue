<template>
  <section class="testimonials" id="reviews">
    <div class="container">
      <h2 class="testimonials__title">Отзывы наших клиентов</h2>
      <p class="testimonials__subtitle">Более 1000 довольных клиентов</p>

      <div class="testimonials__slider">
        <button class="testimonials__nav-btn testimonials__nav-btn--prev" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="testimonials__slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonials__slide">
            <div class="testimonials__card">
              <div class="testimonials__header">
                <img :src="testimonial.avatar" :alt="testimonial.name" class="testimonials__avatar">
                <div class="testimonials__info">
                  <h3 class="testimonials__name">{{ testimonial.name }}</h3>
                  <div class="testimonials__rating">
                    <i v-for="star in 5" :key="star" 
                       class="fas fa-star"
                       :class="{ 'active': star <= testimonial.rating, 'inactive': star > testimonial.rating }"></i>
                    <span class="testimonials__rating-label">{{ testimonial.rating }} из 5</span>
                  </div>
                  <span class="testimonials__service">{{ testimonial.service }}</span>
                </div>
              </div>
              <p class="testimonials__text">{{ testimonial.text }}</p>
            </div>
          </div>
        </div>

        <button class="testimonials__nav-btn testimonials__nav-btn--next" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div class="testimonials__dots">
        <button v-for="(_, index) in testimonials" 
                :key="index"
                class="testimonials__dot"
                :class="{ 'active': currentSlide === index }"
                @click="currentSlide = index">
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    name: 'Анна Петрова',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar1.jpg`,
    rating: 5,
    text: 'Отличный сервис! Клинеры приехали вовремя, сделали всё качественно и быстро. Особенно порадовала уборка ванной комнаты - теперь блестит как новая!',
    service: 'Генеральная уборка'
  },
  {
    name: 'Иван Смирнов',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar2.jpg`,
    rating: 4,
    text: 'В целом доволен, но клинер немного опоздал. Качество уборки отличное, но хотелось бы больше внимания к деталям.',
    service: 'Уборка после ремонта'
  },
  {
    name: 'Елена Козлова',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar3.jpg`,
    rating: 5,
    text: 'Регулярно заказываю уборку раз в неделю. Всегда пунктуально, качественно и с улыбкой. Рекомендую всем, кто ценит свое время!',
    service: 'Регулярная уборка'
  },
  {
    name: 'Дмитрий Иванов',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar4.jpg`,
    rating: 3,
    text: 'Ожидал большего. В целом неплохо, но остались небольшие недочёты. Возможно, попробую ещё раз.',
    service: 'Мойка окон'
  },
  {
    name: 'Мария Сидорова',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar5.jpg`,
    rating: 5,
    text: 'Очень довольна сервисом! Клинеры профессионально подошли к делу, использовали качественные средства. Квартира сияет чистотой!',
    service: 'Генеральная уборка'
  },
  {
    name: 'Алексей Новиков',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar6.jpg`,
    rating: 4,
    text: 'Заказывал уборку офиса. Всё сделано быстро и качественно. Сотрудники остались довольны результатом. Будем обращаться еще!',
    service: 'Уборка офиса'
  },
  {
    name: 'Ольга Морозова',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar7.jpg`,
    rating: 5,
    text: 'Отличный сервис! Особенно понравилось отношение к работе - всё тщательно вымыто, протерто, пропылесосено. Рекомендую!',
    service: 'Регулярная уборка'
  },
  {
    name: 'Сергей Волков',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar8.jpg`,
    rating: 3,
    text: 'Уборка в целом хорошая, но не понравилось, что не убрали под диваном. В остальном всё ок.',
    service: 'Уборка после переезда'
  },
  {
    name: 'Татьяна Соколова',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar9.jpg`,
    rating: 5,
    text: 'Потрясающий сервис! Клинеры приехали вовремя, работали быстро и качественно. Квартира выглядит как новая!',
    service: 'Генеральная уборка'
  },
  {
    name: 'Андрей Лебедев',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar10.jpg`,
    rating: 4,
    text: 'Заказывал уборку коттеджа. Огромная площадь, но клинеры справились на отлично! Всё чисто, свежо, приятно пахнет.',
    service: 'Уборка коттеджа'
  },
  {
    name: 'Юлия Воробьева',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar11.jpg`,
    rating: 5,
    text: 'Регулярно пользуюсь услугами. Всегда на высоте! Особенно нравится отношение к работе и внимание к деталям.',
    service: 'Регулярная уборка'
  },
  {
    name: 'Павел Григорьев',
    avatar: `${import.meta.env.BASE_URL}images/testimonials/avatar12.jpg`,
    rating: 4,
    text: 'Заказывал уборку после вечеринки. Клинеры приехали рано утром, быстро и качественно привели дом в порядок. Спасибо!',
    service: 'Уборка после вечеринки'
  }
]

const currentSlide = ref(0)
let autoplayInterval

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.length) % testimonials.length
}

const startAutoplay = () => {
  autoplayInterval = setInterval(nextSlide, 5000)
}

const stopAutoplay = () => {
  clearInterval(autoplayInterval)
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  stopAutoplay()
})
</script>

<style lang="scss" scoped>
.testimonials {
  padding: 5rem 0;
  background: #f8f9fa;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  &__title {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1rem;
  }

  &__subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
  }

  &__slider {
    position: relative;
    margin: 0 auto;
    max-width: 800px;
  }

  &__slides {
    display: flex;
    transition: transform 0.5s ease;
  }

  &__slide {
    flex: 0 0 100%;
    padding: 0 1rem;
  }

  &__card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  &__header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
  }

  &__avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 1rem;
  }

  &__info {
    flex: 1;
  }

  &__name {
    font-size: 1.2rem;
    color: #333;
    margin: 0 0 0.5rem;
  }

  &__rating {
    display: flex;
    gap: 0.25rem;
    margin-bottom: 0.5rem;

    i {
      color: #ddd;
      font-size: 1.2rem;
      transition: all 0.3s ease;

      &.active {
        color: #ffd700;
        transform: scale(1.1);
        text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
      }
      &.inactive {
        color: #e0e0e0;
        opacity: 0.7;
      }
    }
  }

  &__service {
    font-size: 0.9rem;
    color: #666;
  }

  &__text {
    color: #444;
    line-height: 1.6;
    margin: 0;
  }

  &__nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
    z-index: 1;

    &:hover {
      background: var(--primary-color);
      color: white;
    }

    &--prev {
      left: -20px;
    }

    &--next {
      right: -20px;
    }
  }

  &__dots {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 2rem;
  }

  &__dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #ddd;
    border: none;
    cursor: pointer;
    transition: all 0.3s;

    &.active {
      background: var(--primary-color);
      transform: scale(1.2);
    }

    &:hover {
      background: var(--primary-color);
    }
  }

  &__rating-label {
    margin-left: 0.75rem;
    font-size: 0.95rem;
    color: #888;
    font-weight: 500;
  }
}
</style> 