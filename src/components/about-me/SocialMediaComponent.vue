<template>
  <div class="social-content">
    <h1>links</h1>
    <ul class="social-list">
      <li v-for="(social, index) in state.socialArray" :key="index">
        <a
          :href="links[index]?.link"
          target="_blank"
        >
          <IconComponent :name="social.icon"></IconComponent>
          <p>{{ social.text }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import IconComponent from "../util/IconComponent.vue";
import links from './links.json'

const state = reactive({
  socialArray: [
    {
      icon: "mdi-github",
      text: "guilherme-biancardi"
    },
    {
      icon: "mdi-linkedin",
      text: "guilherme biancardi",
    },
    {
      icon: "mdi-whatsapp",
      text: "enviar mensagem",
    },
  ],
});
</script>

<style scoped>
a {
  width: 100%;
  text-decoration: none;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 8px;
}

.social-content {
  align-self: flex-start;
}

h1 {
  color: var(--red);
  text-transform: uppercase;
}

.social-list {
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-top: 4px;
}

.social-list li {
  max-width: 220px;
  padding: 5px 10px;
  background-color: #484848;
  border-radius: 4px;
  text-transform: capitalize;
}

.social-list li i {
  font-size: 1.6em;
}
</style>
