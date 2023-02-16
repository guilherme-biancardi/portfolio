<template>
  <button class="file-tab-content" :class="{ selected: selected }">
    <IconComponent
      :path="type.icon"
      :style="{ color: $style[fileType] }"
      :size="22"
    ></IconComponent>
    <p>{{ fileName }}{{ type.fileExtension }}</p>
  </button>
</template>

<script setup>
import { mdiLanguageHtml5, mdiLanguageJavascript } from "@mdi/js";
import { computed, reactive } from "vue";
import IconComponent from "./IconComponent.vue";

const props = defineProps({
  fileName: String,
  fileType: {
    type: String,
    default: "js",
  },
  selected: Boolean,
});

const state = reactive({
  fileTypes: {
    js: {
      icon: mdiLanguageJavascript,
      fileExtension: ".js",
    },
    html: {
      icon: mdiLanguageHtml5,
      fileExtension: ".html",
    },
  },
});

const type = computed(() => state.fileTypes[props.fileType]);
</script>

<style module>
:export {
  js: #f7df1e;
  html: #f06529;
}
</style>

<style scoped>
.file-tab-content {
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 12px;
  padding: 8px 20px;
  border-bottom: 1px solid transparent;
  cursor: pointer;
  background-color: transparent;
  font-size: 1em;
  transition: all .1s ease;
  min-width: 140px;
}

.file-tab-content:hover{
    backdrop-filter: brightness(130%);
}

.selected {
  color: var(--syntax-guide);
  border-color: var(--syntax-guide);
}
</style>
