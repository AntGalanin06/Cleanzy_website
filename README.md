# Cleanzy — Сервис профессиональной уборки

![Главная страница](public/images/screens/main.png)

## О проекте

Cleanzy — это современный лендинг для сервиса профессиональной уборки квартир, домов и офисов. Сайт адаптивен, быстро работает, поддерживает калькулятор стоимости, отзывы, галерею, FAQ и онлайн-заказ.

- **Технологии:** Vue 3, Vite, SCSS, FontAwesome (CDN), адаптивная верстка
- **Деплой:** GitHub Pages
- **Демо:** [Посмотреть сайт на Pages](https://anton-github-username.github.io/Cleanzy_website/)

## Скриншоты

- ![Главная](public/images/screens/main.png)
- ![Калькулятор](public/images/screens/calc.png)
- ![Отзывы](public/images/screens/reviews.png)
- ![Галерея](public/images/screens/gallery.png)
- ![Мобильная версия](public/images/screens/mobile.png)

> Скриншоты лежат в папке `public/images/screens/`. Добавьте свои, если нужно.

## Структура проекта

```
Cleanzy_website/
├── public/
│   └── images/
│       └── screens/         # Скриншоты для README
├── src/
│   ├── assets/              # Стили, иконки, базовые ассеты
│   ├── components/          # Vue-компоненты (landing, common, icons)
│   ├── pages/               # Страницы (SPA)
│   ├── plugins/             # Плагины (FontAwesome)
│   ├── router/              # Роутинг
│   └── main.js              # Точка входа
├── index.html               # Главный HTML
├── package.json             # Зависимости
├── vite.config.js           # Конфиг Vite
├── README.md                # Документация
```

## Быстрый старт

1. **Установите зависимости:**
   ```bash
   npm install
   ```
2. **Запустите проект в режиме разработки:**
   ```bash
   npm run dev
   ```
3. **Соберите для продакшена:**
   ```bash
   npm run build
   ```
4. **Деплой на GitHub Pages:**
   - Используйте ветку `gh-pages` или автоматический workflow.

## Особенности

- Адаптивная шапка с анимированным бургер-меню
- Калькулятор стоимости с анимацией кнопки
- Отзывы с красивыми звёздами
- Галерея до/после
- Современные иконки FontAwesome через CDN
- Чистая структура и кроссбраузерные стили

## Контакты

- Автор: [Ваше имя](https://github.com/anton-github-username)
- Вопросы и предложения: issues или pull request

---

**Скриншоты для README кладите в папку `public/images/screens/` и обновляйте ссылки по мере необходимости.**
