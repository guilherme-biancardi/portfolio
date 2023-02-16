<template>
  <nav>
    <ul class="menu-list">
      <li
        v-for="(item, index) in state.menuItems"
        :key="index"
        class="menu-item"
      >
        <RouterLink :to="item.route">
          <IconComponent
            :size="item.size || 32"
            :path="item.icon"
          ></IconComponent>
        </RouterLink>
        <span class="menu-tooltip">{{ item.label }}</span>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import IconComponent from "./utils/IconComponent.vue";
import { mdiAccount, mdiFileCertificate, mdiTools } from "@mdi/js";
import { reactive, computed, onMounted } from "vue";
import { useAppStore } from "../stores/appStore";

const { getLanguageFile } = useAppStore();
const lang = computed(() => getLanguageFile.menu);

const state = reactive({
  menuItems: [
    {
      route: "/about-me",
      icon: mdiAccount,
      label: "",
    },
    {
      route: "/skills",
      icon: mdiFileCertificate,
      label: "",
    },
    {
      route: "/projects",
      icon: mdiTools,
      label: "",
      size: 28,
    },
  ],
});

onMounted(() => {
  state.menuItems.forEach((item, index) => (item.label = lang.value.at(index)));
});
</script>

<style scoped>
nav {
  padding: 16px 12px;
  padding-top: 72px;
}

.menu-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 24px;
}

.menu-item {
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  position: relative;
}

.menu-item a {
  transition: all 0.2s ease;
}

.menu-item:hover a {
  color: var(--syntax-guide);
}

.menu-item:hover .menu-tooltip {
  display: block;
}

.menu-tooltip {
  display: none;
  position: absolute;
  width: max-content;
  left: calc(var(--menu-width) - 16px);
  background-color: var(--syntax-gutter);
  text-align: center;
  color: var(--syntax-guide);
  padding: 6px 24px;
  font-size: 1em;
  border-radius: 4px;
  border: 1px solid #1a1a1a;
  text-transform: capitalize;
  z-index: 1;
  margin-bottom: 4px;
}
</style>
