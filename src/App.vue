<template>
    <main v-if="appStore.getLoaded">
      <DevInformation></DevInformation>
      <MenuComponent></MenuComponent>
      <section>
        <RouterView v-slot="{ Component }" name="app">
          <Transition name="content" mode="out-in">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </section>
    </main>
</template>

<script setup>
import { onBeforeMount } from "vue";
import DevInformation from "./components/DevInformation.vue";
import MenuComponent from "./components/MenuComponent.vue";
import { useLanguage } from "./js/language";
import { useAppStore } from "./stores/appStore";

const appStore = useAppStore();

onBeforeMount(async () => {
  const language = await useLanguage(appStore.getLanguage);

  appStore.setLanguageFile(language.default);
});
</script>

<style>
@font-face {
  font-family: "cascadia";
  src: url("./assets/fonts/CascadiaCode.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "cascadia", sans-serif;
}

:root {
  --syntax-background: #282c34;
  --syntax-gutter: #1d2025;
  --default-text: #abb2bf;
  --syntax-guide: #cccccc;
  --purple: #c678dd;
  --yellow: #e5c07b;
  --green: #98c379;
  --cyan: #56b6c2;
  --rose: #e06c75;
  --orange: #d19a66;
  --menu-width: 65px;
}

body {
  background-color: var(--syntax-background);
  color: var(--default-text);
}

main {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: var(--menu-width) calc(100% - var(--menu-width));
}

section {
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-right: 40px;
  padding-top: 66px;
}

a {
  text-decoration: none;
}

a,
button,
input {
  color: var(--default-text);
  background-color: transparent;
}

button {
  border: none;
  outline: none;
  cursor: pointer;
}

ul {
  list-style: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.content-enter-active,
.content-leave-active {
  transition: all 0.2s ease;
}
.content-enter-from,
.content-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
