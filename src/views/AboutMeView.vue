<template>
  <section>
    <CodeComponent></CodeComponent>
    <SocialMediaComponent></SocialMediaComponent>
  </section>
</template>

<script setup>
import CodeComponent from "@/components/about-me/CodeComponent.vue";
import SocialMediaComponent from "@/components/about-me/SocialMediaComponent.vue";
</script>

<style scoped>
section {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 2fr 1fr;
  align-content: center;
}
</style>
