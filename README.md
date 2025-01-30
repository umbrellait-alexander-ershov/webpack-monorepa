<div style="display: flex; justify-content: center">
<img alt="cat" src="https://memi.klev.club/uploads/posts/2024-04/memi-klev-club-xqak-p-memi-litso-kota-12.jpg" width="150px"/>
</div>

# Webpack Module Federation

- Разработал переиспользуемые пакеты (shared, build-config).
- Реализовал микросервисную архитектуру с webpack-module-federation.
- Изучил технологию, внедрив независимые модули в host-приложение.
- Настроил окружение и инфраструктуру проекта.
- Создал небольшой UI-kit и интегрировал его в Storybook.

# Стек

- Frontend: React, TypeScript
- Сборка: Webpack, Module Federation, Lerna
- UI: Storybook, CSS Modules
- Роутинг и состояние: React Router, Zustand

# Запуск

- `yarn start:services` — `запуск приложения через concurrently`
- `yarn start:lerna` — `запуск через lerna`
- `yarn start:${service}` — `запуск отдельного модуля`
- `yarn storybook:start` — `запуск UI-kit в Storybook`
- `yarn storybook:build` — `билд UI-kit`