# Cleanzy - Сайт клининговой компании

Современный лендинг для клининговой компании, разработанный на Vue 3 и Vite.

## Технологии

- Vue 3
- Vite
- SCSS
- Express.js (для обработки заявок)

## Установка и запуск

### Локальная разработка

1. Клонируйте репозиторий:
```bash
git clone https://github.com/yourusername/cleanzy_project.git
cd cleanzy_project
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите сервер разработки:
```bash
npm run dev
```

4. Запустите сервер для обработки заявок:
```bash
node server.js
```

### Сборка для продакшена

```bash
npm run build
```

## Структура проекта

- `src/components/landing/` - компоненты лендинга
- `src/pages/` - страницы приложения
- `server.js` - сервер для обработки заявок
- `orders.json` - файл для хранения заявок

## Деплой на GitHub Pages

Проект автоматически деплоится на GitHub Pages при пуше в ветку `main`.

## Лицензия

MIT

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```