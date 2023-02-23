<template>
  <button :aria-label="name">
    <p>{{ text }}</p>
    <IconComponent :path="icon" :size="22"></IconComponent>
  </button>
</template>

<script setup>
import IconComponent from "./IconComponent.vue";

defineProps({
  text: String,
  icon: String,
  name: String
});
</script>

<style scoped>
button {
  display: flex;
  column-gap: 14px;
  align-items: center;
  justify-content: center;
  align-self: center;
  padding: 8px 20px;
  min-width: 140px;
  background-color: var(--cyan);
  border-radius: 5px;
  color: #fff;
  text-transform: capitalize;
  font-size: 0.98em;
  font-weight: 500;
  transition: all .2s ease;
}

button:hover{
    filter: brightness(90%);
}

button:disabled{
    background-color: #21252c;
    color: #555;
    cursor: not-allowed;
}
</style>
