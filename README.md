# webpack-module-federation

- Реализовал отдельные, переиспользуемые пакеты (shared, build-config)
- Реализовал микросервисную архитектуру с использованием `webpack-module-federation`
- Разобрался в принципах работы данной технологии, реализовав несколько, не зависимых модулей, которые подключаются в
  host приложение
- Настроил окружение для работы проекта

# Стек

- React
- Ts
- webpack, webpack-module-federation, lerna
- css-modules
- react-router-dom
- zustand

# Запуск проекта

- `yarn start` - `запуск приложения с помощью пакета concurrently`
- `yarn start:lerna` - `запуск приложения с помощью lerna`
- `yarn start:${service}` - `запуск отдельного модуля`