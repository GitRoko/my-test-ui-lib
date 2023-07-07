<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="my-input"
  />
</template>

<style scoped>
.my-input {
  padding: 8px 12px;
  border: 1px solid #009ee3;
  border-radius: 4px;
}

.my-input:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(0, 158, 227, 0.2);
}
</style>
