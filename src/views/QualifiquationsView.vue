<template>
  <section>
    <article v-for="(article, index) in state.contentArray" :key="index">
      <h1>{{ article.title }}</h1>
      <div class="grid-content">
        <QualificationSection
          v-for="(item, index) in article.json"
          :key="index"
          :icon="item?.icon"
          :description="item.description"
          :title="item?.title"
        ></QualificationSection>
      </div>
    </article>
  </section>
</template>

<script setup>
import languages from "../components/qualifications/languages.json";
import vueAmbient from "../components/qualifications/vueAmbient.json";
import others from '../components/qualifications/others.json'
import QualificationSection from "@/components/qualifications/QualificationSection.vue";
import { reactive } from "vue";

const state = reactive({
  contentArray: [
    {
      title: "tecnologias",
      json: languages,
    },
    {
      title: "ambiente vue",
      json: vueAmbient,
    },
    {
      title: "outros",
      json: others
    }
  ],
});
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

article {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 12px;
}

article > h1 {
  text-transform: uppercase;
  color: var(--yellow);
}

.grid-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
}
</style>
