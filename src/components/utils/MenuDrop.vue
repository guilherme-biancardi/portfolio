<template>
  <div class="menu-drop">
    <ul class="menu-drop-list">
      <li v-for="(item, index) in items" :key="index" class="menu-item-drop">
        <h2>{{ item }}</h2>
        <ChangeLanguage></ChangeLanguage>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useAppStore } from "../../stores/appStore";
import ChangeLanguage from "../menuDrop/ChangeLanguage.vue";

const { getLanguageFile } = useAppStore();
const items = computed(() => getLanguageFile.menuDrop.items);

</script>

<style scoped>
.menu-drop {
  position: absolute;
  right: 0;
  left: var(--menu-width);
  width: max-content;
  bottom: 20px;
  padding: 20px;
  background-color: var(--syntax-gutter);
  border-radius: 12px;
  min-width: 300px;
  z-index: 1;
}

.menu-list-drop, .menu-item-drop{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.menu-item-drop{
  align-items: start;
  row-gap: 12px;
  border-bottom: 2px solid var(--syntax-background);
  padding-bottom: 16px;
}

.menu-item-drop h2{
  font-size: 1em;
  font-weight: 500;
  color: var(--syntax-guide);
  text-transform: capitalize;
}
</style>
