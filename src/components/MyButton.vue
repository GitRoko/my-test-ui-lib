<template>
  <button class="my-button" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
.my-button {
  background-color: #009ee3;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}

.my-button:hover {
  background-color: #0070d2;
}
</style>
