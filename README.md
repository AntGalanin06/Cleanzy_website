# 🧹 Cleanzy — Профессиональный сервис уборки

[![Демо](https://img.shields.io/badge/🌐_Посмотреть_демо--версию-22863a?style=for-the-badge&logo=github)](https://antgalanin06.github.io/Cleanzy_website/)

## 📋 О проекте

Cleanzy — это современный лендинг для сервиса профессиональной уборки. Сайт предлагает полный спектр услуг по уборке квартир, домов и офисов с удобным онлайн-калькулятором стоимости и системой заказа.

### 🚀 Основные возможности

- 💰 Интерактивный калькулятор стоимости услуг
- ⭐ Система отзывов с рейтингом
- 🖼️ Галерея работ "до/после"
- ❓ Раздел FAQ с ответами на частые вопросы
- 📱 Полностью адаптивный дизайн
- ⚡ Быстрая загрузка и оптимизированная производительность

## 🛠️ Технологии

<div align="center">
  <img src="https://img.shields.io/badge/Vue.js-3.5.13-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue.js"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
  <img src="https://img.shields.io/badge/HTML5-✓-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-✓-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/Node.js-✓-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express-5.1.0-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express"/>
  <img src="https://img.shields.io/badge/FontAwesome-6.5.1-228be6?style=for-the-badge&logo=fontawesome&logoColor=white" alt="FontAwesome"/>
  <img src="https://img.shields.io/badge/Vite-6.2.4-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/GitHub%20Pages-✓-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages"/>
</div>

### Frontend
- **Vue.js 3** - современный фреймворк для создания пользовательских интерфейсов
- **JavaScript (ES6+)** - основной язык программирования
- **HTML5** - семантическая разметка
- **CSS3** - стилизация и анимации
- **Vite** - быстрый сборщик проекта
- **FontAwesome** - иконки через CDN

### Backend
- **Node.js** - серверная платформа
- **Express.js** - веб-фреймворк
- **JSON** - формат данных для хранения заказов
- **REST API** - архитектура взаимодействия

### Адаптивность
- 📱 Мобильная версия (до 480px)
- 📱 Планшетная версия (480px - 1150px)
- 🖥️ Десктопная версия (от 1150px)
- 🎯 Поддержка всех современных браузеров

## 🖼️ Скриншоты

<div align="center">
  <img src="public/images/screens/fullpage-desktop.png" alt="Полная страница" width="100%"/>
</div>

### 📱 Адаптивные версии
<div style="display: grid; grid-template-columns: 48% 48%; gap: 4%; justify-content: center;">
  <div>
    <img src="public/images/screens/fullpage-mobile.png" alt="Мобильная версия" width="100%"/>
  </div>
  <div style="display: flex; flex-direction: column; gap: 20px;">
    <img src="public/images/screens/fullpage-tablet.png" alt="Планшетная версия" width="100%"/>
    <img src="public/images/screens/burger-menu.png" alt="Бургер-меню" width="100%"/>
  </div>
</div>

## 🏗️ Структура проекта

```
Cleanzy_website/
├── .github/               # GitHub конфигурация
│   └── workflows/        # GitHub Actions
│
├── .vscode/              # Настройки VS Code
│   └── settings.json     # Пользовательские настройки
│
├── public/               # Публичные ассеты
│   └── images/          # Изображения
│       └── screens/     # Скриншоты для документации
│
├── src/                  # Исходный код
│   ├── assets/          # Ассеты
│   │   ├── main.css    # Основные стили
│   │   └── base.css    # Базовые стили
│   │
│   ├── components/      # Vue-компоненты
│   │   ├── landing/    # Компоненты лендинга
│   │   │   ├── HeaderBlock.vue      # Шапка сайта
│   │   │   ├── HeroBlock.vue        # Главный экран
│   │   │   ├── BenefitsBlock.vue    # Блок преимуществ
│   │   │   ├── WhyUsBlock.vue       # Почему мы
│   │   │   ├── PriceCalc.vue        # Калькулятор цен
│   │   │   ├── TestimonialsSlider.vue # Отзывы
│   │   │   ├── BeforeAfterSlider.vue  # До/После
│   │   │   ├── FaqAccordion.vue     # FAQ
│   │   │   ├── FooterBlock.vue      # Подвал
│   │   │   ├── TermsOfService.vue   # Условия
│   │   │   └── PrivacyPolicy.vue    # Политика
│   │   │
│   │   ├── common/     # Общие компоненты
│   │   │   └── Modal.vue           # Модальные окна
│   │   │
│   │   └── icons/      # Иконки
│   │
│   ├── pages/          # Страницы
│   │   └── Home.vue    # Главная страница
│   │
│   ├── plugins/        # Плагины
│   │   └── fontawesome.js # FontAwesome
│   │
│   ├── router/         # Роутинг
│   │   └── index.js    # Конфигурация маршрутов
│   │
│   ├── App.vue         # Корневой компонент
│   └── main.js         # Точка входа
│
├── server.js            # Бэкенд на Node.js
├── orders.json          # База данных заказов
├── index.html           # Главный HTML
├── package.json         # Зависимости
├── package-lock.json    # Фиксация версий
├── vite.config.js       # Конфигурация Vite
├── jsconfig.json        # Конфигурация JS
├── .gitignore          # Игнорируемые файлы
├── LICENSE             # Лицензия
└── README.md           # Документация
```

## 🚀 Быстрый старт

1. **Клонируйте репозиторий:**
   ```bash
   git clone https://github.com/AntGalanin06/Cleanzy_website.git
   cd Cleanzy_website
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Запустите проект в режиме разработки:**
   ```bash
   npm run dev
   ```

4. **Запустите бэкенд:**
   ```bash
   node server.js
   ```

5. **Соберите проект для продакшена:**
   ```bash
   npm run build
   ```

## ✨ Особенности реализации

### Frontend
- 🎨 Современный дизайн с анимациями
- 📱 Адаптивная верстка для всех устройств
- ⚡ Оптимизированная производительность
- 🔍 SEO-friendly структура
- 🎯 Удобный UX/UI

### Backend
- 🔒 Безопасная обработка заказов
- 📊 Хранение данных в JSON
- 🚀 Быстрый API
- 📝 Логирование действий
