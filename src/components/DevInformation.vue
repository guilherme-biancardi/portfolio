<template>
  <div class="dev-content">
    <img src="../assets/foto-dev.jpeg" alt="Guilherme Biancardi photo" />
    <div class="dev-text">
      <h2>{{ state.name }}</h2>
      <p>{{ state.email }}</p>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const state = reactive({
  name: "guilherme biancardi",
  email: "guilhermerbiancardi@outlook.com",
});
</script>

<style scoped>
img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-position: center;
  object-fit: cover;
}

.dev-content,
.dev-text {
  display: flex;
}

.dev-content {
  align-items: center;
  column-gap: 14px;
}

.dev-text {
  flex-direction: column;
  row-gap: 3px;
}

.dev-text > h2{
    font-size: 1.05em;
    text-transform: capitalize;
    font-weight: 100;
}

.dev-text > p{
    font-size: 0.85em;
    color: var(--blue-gray);
}
</style>
