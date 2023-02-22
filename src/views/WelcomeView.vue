<template>
  <article class="welcome-content">
    <div class="welcome-text">
      <h1>{{ welcome.title }}</h1>
      <h2>{{ welcome.subtitle }}</h2>
      <ul class="welcome-list">
        <li v-for="(link, index) in state.links" :key="index">
          <RouterLink :to="link.route">
            <IconComponent
              :path="link.icon"
              :size="link.size || 28"
            ></IconComponent>
            <p>{{ link.label }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
    <img src="../assets/undraw_waiting__for_you_ldha.svg" alt="" />
  </article>
</template>

<script setup>
import { mdiAccount, mdiFileCertificate, mdiTools } from "@mdi/js";
import { reactive, onMounted, computed } from "vue";
import IconComponent from "../components/utils/IconComponent.vue";
import { useAppStore } from "../stores/appStore";

const { getLanguageFile } = useAppStore();
const lang = computed(() => getLanguageFile);
const welcome = computed(() => lang.value.views.welcome);

const state = reactive({
  links: [
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
      size: 24,
    },
  ],
});

onMounted(() => {
  state.links.forEach(
    (item, index) => (item.label = lang.value.menu.at(index))
  );
});
</script>

<style scoped>
.welcome-content {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  grid-template-columns: 45% 55%;
  grid-template-rows: 100%;
  padding: 0 44px;
}

.welcome-text,
.welcome-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.welcome-text h1 {
  font-size: 2em;
  color: #eee;
}

.welcome-text h2 {
  font-weight: 500;
  font-size: 1.2em;
  color: #bbb;
}

.welcome-list {
  row-gap: 20px;
  margin-top: 24px;
}

.welcome-list li a {
  max-width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  padding: 12px 20px;
  background-color: var(--syntax-gutter);
  font-size: 1.1em;
  border-radius: 5px;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  text-transform: capitalize;
}

.welcome-list li:hover a {
  border-radius: 0;
  border-color: var(--cyan);
}

img {
  max-width: 100%;
  max-height: 440px;
  filter: drop-shadow(1px 5px 4px rgba(0, 0, 0, 0.08));
}
</style>
