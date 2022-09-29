<template>
  <MenuComponent></MenuComponent>
  <main>
    <DevInformation></DevInformation>
    <router-view v-slot="{ Component }" class="content">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  </main>
</template>

<script setup>
import MenuComponent from "./components/MenuComponent.vue";
import DevInformation from "./components/DevInformation.vue";
</script>

<style>
@font-face {
  font-family: "netflix sans";
  src: url("./assets/font/NetflixSans_W_Rg.woff2")
    url("./assets/font/NetflixSans_W_Md.woff2");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "netflix sans", Helvetica, sans-serif;
}

:root {
  --dark-gray: #313638;
  --medium-gray: #444444;
  --green-gray: #7e846b;
  --blue-gray: #dadff7;
  --red: #ef6461;
  --yellow: #f7d002;
  --white: #f9f9f9;
}

body {
  color: var(--white);
}

a{
  text-decoration: none;
}

ul {
  list-style: none;
}

main {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-gray);
  padding: 16px 24px;
}

.content{
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
  padding-right: 168px;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease-in;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px)
}

.fade-leave-to {
  transform: translateY(10px)
}
</style>
