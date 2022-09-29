<template>
  <div class="article-content">
    <IconComponent :name="icon"></IconComponent>
    <div class="text">
      <h2>{{ title }}</h2>
      <p v-if="description">{{ description.title }} {{ description.text }}</p>
    </div>
  </div>
</template>

<script setup>
import IconComponent from '../util/IconComponent.vue';
defineProps({
  title: String,
  description: Object,
  icon: String,
});
</script>

<style scoped>
.article-content{
  --gray-article: rgb(65, 68, 64);
}

.text, .article-content{
  display: flex;
}

.article-content{
  align-items: center;
  column-gap: 12px;
  background-color: var(--gray-article);
  padding: 4px 16px;
  border-radius: 10px;
}

.text{
  flex-direction: column;
  row-gap: 3px;
}

.text h2{
  font-size: 1.2em;
}

.text p{
  font-size: 0.85em;
}

i{
  font-size: 3.2em;
  color: var(--red);
}
</style>
