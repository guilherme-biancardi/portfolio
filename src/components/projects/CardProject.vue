<template>
  <div class="card">
    <img :src="require(`../../assets/${image}`)" />
    <div class="card-flex">
      <div class="card-text">
        <h2>{{ name }}</h2>
        <p>{{ text }}</p>
        <a :href="repository" target="_blank">
          <IconComponent :name="'mdi-source-branch'"></IconComponent>
          <p>repositório</p>
        </a>
      </div>
      <div class="card-link">
        <p>Link do Projeto:</p>
        <a :href="link" target="_blank">{{ link }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import IconComponent from "../util/IconComponent.vue";

const router = useRouter()

defineProps({
  image: String,
  name: String,
  text: String,
  link: String,
  repository: String,
});

</script>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  display: flex;
  background-color: var(--medium-gray);
  padding: 12px 16px;
  border-radius: 12px;
  flex-direction: column;
  row-gap: 12px;
}

.card > img {
  width: 100%;
  height: 90%;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
}

.card-flex {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.card-text {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

.card-text h2 {
  font-size: 1.2em;
  text-transform: uppercase;
}

.card-text a{
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    column-gap: 8px;
    width: max-content;
    padding: 4px 20px;
    font-size: 1.05em;
    background-color: var(--red);
    color: var(--white);
    margin-top: 10px;
    border-radius: 6px;
    text-transform: capitalize;
    cursor: pointer;
}

.card-text a i{
    font-size: 1.2em;
}

.card-text > p{
    color: var(--blue-gray);
}

p {
  font-size: 0.9em;
}

.card-link a {
  font-size: 0.85em;
  color: var(--blue-gray);
  text-decoration: underline;
}
</style>
