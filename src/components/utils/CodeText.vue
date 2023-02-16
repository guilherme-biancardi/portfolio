<template>
  <component :style="{ color: $style[color] }" :is="tag">
    <slot></slot>
  </component>
</template>

<script setup>
defineProps({
  color: String,
  tag: {
    type: String,
    default: "span",
  },
});
</script>

<style module>
:export {
  purple: var(--purple);
  yellow: var(--yellow);
  green: var(--green);
  cyan: var(--cyan);
  rose: var(--rose);
  orange: var(--orange);
}
</style>