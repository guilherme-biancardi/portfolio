<template>
  <SvgIcon type="mdi" :path="path" :size="size"></SvgIcon>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";

defineProps({
  path: String,
  size: Number,
});
</script>

<style scoped></style>
