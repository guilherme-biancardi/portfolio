<template>
  <code>
    <slot></slot>
  </code>
</template>

<script setup></script>

<style scoped>
code{
    width: 100%;
    padding-right: 140px;
}

code * {
  color: var(--syntax-guide);
}

:deep(pre) {
  line-height: 26px;
  white-space: pre-wrap;
}

:deep(a){
    text-decoration: underline;
}

:deep(a):hover{
  color: var(--cyan) !important;
}
</style>
