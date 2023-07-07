# Vue 3 + Vite build library 

## Установка
```shell
npm install 
```

## Сборка
```shell  
npm run build
```
Библиотека компонентов соберется в папку ```/lib```

## Добавление новых компонентов
1. Создать компонент в папке ```/src/components/MyComponent.vue```
2. Добавить компонент в файл ```/src/index.js```
```javascript
// /src/index.js
import MyComponent from './components/MyComponent.vue'
export { MyComponent }
```

## Использование

Скопировать папку ```/lib``` в проект и импортировать компоненты в свой проект:
```javascript 
//MyComponent.vue
<script setup>
  import { MyButton, MyInput } from '../lib/my-test-ui-lib.js'
  import '../lib/style.css';
</script>
```





