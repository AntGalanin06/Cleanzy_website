<template>
  <section class="faq">
    <div class="container">
      <h2 class="faq__title">Часто задаваемые вопросы</h2>
      <p class="faq__subtitle">Ответы на популярные вопросы о наших услугах</p>

      <div class="accordion">
        <div v-for="(item, index) in faqItems" 
             :key="index" 
             class="accordion__item"
             :class="{ 'active': activeIndex === index }">
          <button class="accordion__header" @click="toggleAccordion(index)">
            <h3 class="accordion__title">{{ item.question }}</h3>
            <span class="accordion__icon">
              <font-awesome-icon :icon="activeIndex === index ? faMinus : faPlus" />
            </span>
          </button>
          <div class="accordion__content" 
               :style="{ maxHeight: activeIndex === index ? contentHeight[index] + 'px' : '0' }">
            <div class="accordion__text" ref="contentRefs">
              <p v-html="item.answer"></p>
            </div>
          </div>
        </div>
      </div>

      <div class="faq__contact">
        <p>Не нашли ответ на свой вопрос?</p>
        <button class="faq__button" @click="sendMail">
          Задать вопрос
          <font-awesome-icon :icon="faArrowRight" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { faPlus, faMinus, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const faqItems = [
  {
    question: 'Как заказать уборку?',
    answer: 'Заказать уборку можно несколькими способами:<br>1. Через форму на сайте<br>2. По телефону +7 (999) 085-85-55<br>3. В мессенджерах WhatsApp или Telegram'
  },
  {
    question: 'Сколько стоит уборка?',
    answer: 'Стоимость уборки зависит от нескольких факторов:<br>- Площадь помещения<br>- Тип уборки (генеральная, поддерживающая, после ремонта)<br>- Дополнительные услуги<br>Точную стоимость можно рассчитать с помощью нашего калькулятора на сайте.'
  },
  {
    question: 'Какие средства используются при уборке?',
    answer: 'Мы используем только профессиональные экологичные средства, которые:<br>- Безопасны для людей и животных<br>- Не оставляют разводов<br>- Эффективно удаляют загрязнения<br>- Имеют приятный ненавязчивый аромат'
  },
  {
    question: 'Сколько времени занимает уборка?',
    answer: 'Длительность уборки зависит от:<br>- Площади помещения<br>- Степени загрязнения<br>- Типа уборки<br>В среднем, генеральная уборка 2-комнатной квартиры занимает 3-4 часа.'
  },
  {
    question: 'Что входит в генеральную уборку?',
    answer: 'Генеральная уборка включает:<br>- Мытье полов и плинтусов<br>- Чистку сантехники<br>- Мытье окон и зеркал<br>- Удаление пыли со всех поверхностей<br>- Чистку кухонной техники<br>- Уборку шкафов и полок'
  },
  {
    question: 'Можно ли заказать уборку в выходные?',
    answer: 'Да, мы работаем ежедневно с 8:00 до 22:00, включая выходные и праздничные дни. При заказе уборки в выходные действуют стандартные тарифы.'
  }
]

const activeIndex = ref(null)
const contentRefs = ref([])
const contentHeight = ref([])

const toggleAccordion = async (index) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
    await nextTick()
    if (contentRefs.value[index]) {
      contentHeight.value[index] = contentRefs.value[index].offsetHeight
    }
  }
}

const sendMail = () => {
  window.location.href = 'mailto:info@cleanzy.ru?subject=Вопрос по уборке&body=Здравствуйте! У меня есть вопрос:'
}

onMounted(() => {
  // Инициализация высоты контента
  contentHeight.value = new Array(faqItems.length).fill(0)
})
</script>

<style lang="scss" scoped>
.faq {
  padding: 4rem 2rem;
  background-color: var(--background-color);

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  &__subtitle {
    text-align: center;
    color: #666;
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }

  &__contact {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #eee;

    p {
      color: #666;
      margin-bottom: 1rem;
    }
  }

  &__button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background: var(--primary-color);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: none;

    :deep(svg) {
      transition: transform 0.3s;
    }

    &:hover {
      background: var(--primary-color);
      filter: brightness(0.9);
      transform: translateY(-2px);

      :deep(svg) {
        transform: translateX(8px);
      }
    }
  }
}

.accordion {
  &__item {
    margin-bottom: 1rem;
    border-radius: 12px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  &__header {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }

  &__title {
    font-size: 1.2rem;
    color: #333;
    margin: 0;
    padding-right: 2rem;
  }

  &__icon {
    color: var(--primary-color);
    font-size: 1.2rem;
    transition: transform 0.3s;
  }

  &__content {
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.4s cubic-bezier(0.4,0,0.2,1);
    opacity: 0;
    max-height: 0;
    will-change: max-height, opacity;
  }

  .active &__content {
    opacity: 1;
    max-height: 500px;
  }

  &__text {
    padding: 0 1.5rem 1.5rem;
    color: #666;
    line-height: 1.6;

    p {
      margin: 0;
    }
  }

  .active {
    .accordion__icon {
      transform: rotate(180deg);
    }
  }
}

@media (max-width: 768px) {
  .faq {
    padding: 3rem 1rem;

    &__title {
      font-size: 2rem;
    }
  }

  .accordion {
    &__title {
      font-size: 1.1rem;
    }
  }
}
</style> 