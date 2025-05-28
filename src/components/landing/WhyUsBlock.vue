<template>
  <section class="why-us">
    <div class="container">
      <h2 class="why-us__title">Почему выбирают нас</h2>
      
      <div class="why-us__content">
        <div class="why-us__info">
          <div class="info-card" v-for="(item, index) in infoItems" :key="index">
            <div class="info-card__icon">
              <font-awesome-icon :icon="item.icon" />
            </div>
            <h3 class="info-card__title">{{ item.title }}</h3>
            <p class="info-card__text">{{ item.text }}</p>
          </div>
        </div>

        <div class="why-us__team">
          <h3 class="team-title">Наша команда</h3>
          <div class="team-grid">
            <div v-for="member in team" :key="member.id" class="team-member">
              <div class="team-member__photo">
                <img :src="member.photo" :alt="member.name">
              </div>
              <h4 class="team-member__name">{{ member.name }}</h4>
              <p class="team-member__position">{{ member.position }}</p>
              <p class="team-member__experience">{{ member.experience }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="why-us__stats">
        <div class="stat-item" v-for="stat in stats" :key="stat.id">
          <div class="stat-item__number">{{ stat.number }}</div>
          <div class="stat-item__label">{{ stat.label }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { faMedal, faClock, faShield, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'

const infoItems = [
  {
    icon: faMedal,
    title: 'Профессионализм',
    text: 'Наши клинеры проходят строгий отбор и регулярное обучение'
  },
  {
    icon: faClock,
    title: 'Пунктуальность',
    text: 'Приезжаем точно в назначенное время и соблюдаем сроки'
  },
  {
    icon: faShield,
    title: 'Гарантия качества',
    text: 'Используем только проверенные средства и методы уборки'
  },
  {
    icon: faHandHoldingHeart,
    title: 'Индивидуальный подход',
    text: 'Учитываем все пожелания и особенности вашего дома'
  }
]

const team = [
  {
    id: 1,
    name: 'Анна Петрова',
    position: 'Старший клинер',
    experience: 'Опыт работы: 5 лет',
    photo: `${import.meta.env.BASE_URL}images/team/cleaner1.png`
  },
  {
    id: 2,
    name: 'Мария Иванова',
    position: 'Клинер',
    experience: 'Опыт работы: 3 года',
    photo: `${import.meta.env.BASE_URL}images/team/cleaner2.png`
  },
  {
    id: 3,
    name: 'Елена Смирнова',
    position: 'Клинер',
    experience: 'Опыт работы: 4 года',
    photo: `${import.meta.env.BASE_URL}images/team/cleaner3.png`
  },
  {
    id: 4,
    name: 'Олег Кузнецов',
    position: 'Клинер',
    experience: 'Опыт работы: 2 года',
    photo: `${import.meta.env.BASE_URL}images/team/cleaner4.png`
  },
  {
    id: 5,
    name: 'Виктория Лебедева',
    position: 'Клинер',
    experience: 'Опыт работы: 3 года',
    photo: `${import.meta.env.BASE_URL}images/team/cleaner5.png`
  },
  {
    id: 6,
    name: 'Игорь Соловьёв',
    position: 'Клинер',
    experience: 'Опыт работы: 2 года',
    photo: `${import.meta.env.BASE_URL}images/team/cleaner6.png`
  }
]

const stats = [
  {
    id: 1,
    number: '1000+',
    label: 'Довольных клиентов'
  },
  {
    id: 2,
    number: '5000+',
    label: 'Выполненных уборок'
  },
  {
    id: 3,
    number: '4.9',
    label: 'Средний рейтинг'
  },
  {
    id: 4,
    number: '15+',
    label: 'Профессиональных клинеров'
  }
]
</script>

<style lang="scss" scoped>
.why-us {
  padding: 4rem 2rem;
  background-color: var(--background-color);

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  &__title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #333;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2.5rem;
  }

  &__team {
    .team-title {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      color: #333;
    }
  }

  &__stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    text-align: center;
  }
}

.info-card {
  background: white;
  padding: 2.2rem 1.5rem 1.5rem 1.5rem;
  border-radius: 12px;
  text-align: center;
  transition: transform 0.3s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 260px;
  @media (min-width: 1200px) {
    min-height: 280px;
  }
  &:hover {
    transform: translateY(-5px);
  }

  &__icon {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  &__text {
    color: #666;
    line-height: 1.6;
  }
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;

  &__photo {
    width: 200px;
    height: 200px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--primary-color);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__name {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 0.5rem;
  }

  &__position {
    color: var(--primary-color);
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  &__experience {
    color: #666;
    font-size: 0.9rem;
  }
}

.stat-item {
  &__number {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    margin-bottom: 0.5rem;
  }

  &__label {
    color: #666;
    font-size: 1.1rem;
  }
}

.benefit-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  min-width: 200px;
  min-height: 220px;
  padding: 2rem 1.2rem 1.2rem 1.2rem;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(47,128,237,0.04);
  margin: 0 auto;
}
</style> 