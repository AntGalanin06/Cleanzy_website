# 🧹 Cleanzy — Профессиональный сервис уборки

<div align="center">
  <img src="public/images/screens/fullpage-desktop.png" alt="Полная страница" width="100%"/>
  
  [![Vue.js](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat-square&logo=vue.js&logoColor=white)](https://vuejs.org/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![HTML5](https://img.shields.io/badge/HTML5-✓-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-✓-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![Node.js](https://img.shields.io/badge/Node.js-✓-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
  [![Vite](https://img.shields.io/badge/Vite-4.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-✓-222222?style=flat-square&logo=github&logoColor=white)](https://pages.github.com/)
</div>

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
- 📱 Мобильная версия (до 768px)
- 📱 Планшетная версия (768px - 1024px)
- 🖥️ Десктопная версия (от 1024px)
- 🎯 Поддержка всех современных браузеров

## 🖼️ Скриншоты

<div align="center">
  <img src="public/images/screens/fullpage-desktop.png" alt="Полная страница" width="100%"/>
</div>

### 📱 Адаптивные версии
<div align="center">
  <img src="public/images/screens/fullpage-mobile.png" alt="Мобильная версия" width="48%" style="display: inline-block; margin-right: 2%;"/>
  <img src="public/images/screens/fullpage-tablet.png" alt="Планшетная версия" width="48%" style="display: inline-block;"/>
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
   git clone https://github.com/your-username/Cleanzy_website.git
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

## 🔗 Демо

Посмотреть работающий сайт можно по ссылке: [Cleanzy на GitHub Pages](https://antgalanin06.github.io/Cleanzy_website/)

## 📞 Контакты

Связаться со мной можно через:

[![Telegram](https://img.shields.io/badge/Telegram-@ant_gn-26A5E4?style=flat-square&logo=telegram)](https://t.me/ant_gn)  
[![Email](https://img.shields.io/badge/Email-info@galanin--nn.ru-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:info@galanin-nn.ru)
