<template>
  <code>
    <div class="lines">
      <p v-for="(line, index) in state.lines.length" :key="index">{{ line }}</p>
    </div>
    <slot></slot>
  </code>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const state = reactive({
  lines: []
})

onMounted(() => {
  const pre = document.querySelector('pre')

  state.lines = pre.innerHTML.split(/\n/)
})
</script>

<style scoped>
code {
  display: flex;
  column-gap: 36px;
  width: 100%;
  padding-right: 140px;
}

code * {
  color: var(--syntax-guide);
}

.lines{
  padding: 4px;
  display: flex;
  flex-direction: column;
  row-gap: 7px;
  opacity: 0.4;
  font-weight: 100;
}

:deep(pre) {
  line-height: 26px;
  white-space: pre-wrap;
}

:deep(a) {
  text-decoration: underline;
}

:deep(a):hover {
  color: var(--cyan) !important;
}
</style>
