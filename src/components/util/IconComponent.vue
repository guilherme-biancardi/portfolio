<template>
    <i class="mdi" :class="name"></i>
</template>

<script setup>
defineProps({
    name: String
})
</script>

<style scoped>
@import url('../../../node_modules/@mdi/font/css/materialdesignicons.min.css');
</style>