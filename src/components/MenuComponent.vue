<template>
  <div>
    <hr />
    <ul class="menu-list">
      <li
        v-for="(item, index) in state.menuItems"
        class="menu-item"
        :class="{ selected: setItemSelected(route.path) === index }"
        :key="index"
      >
        <p>{{ item.text }}</p>
        <router-link :to="item.route" class="circle"></router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const state = reactive({
  menuItems: [
    { route: "/about-me", text: "sobre mim" },
    { route: "/qualifications", text: "qualificações" },
    { route: "/projects", text: "projetos" },
  ],
});

const setItemSelected = (path) =>
  state.menuItems.map((item) => item.route).indexOf(path);
</script>

<style scoped>
hr {
  position: absolute;
  top: 0;
  right: 24px;
  width: 2px;
  height: 100vh;
  border: 1px solid var(--green-gray);
}

.menu-list,
.menu-item {
  display: flex;
}

.menu-list {
  position: fixed;
  right: 12.5px;
  top: 28px;
  flex-direction: column;
  row-gap: 36px;
}

.menu-item {
  align-items: center;
  justify-content: right;
  column-gap: 10px;
  transition: all 0.1s ease-in;
}

.menu-item p {
  text-transform: capitalize;
  color: var(--blue-gray);
  font-size: 0.9em;
}

.circle {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--blue-gray);
}

.selected {
  transform: scale(1.12) translateX(-4px);
}

.selected p {
  color: white;
}

.selected .circle {
  background-color: var(--red);
}
</style>
