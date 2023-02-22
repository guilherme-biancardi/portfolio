<template>
  <CodeComponent>
    <pre><template v-for="(item, index) in state.contents" :key="index">&lt;<CodeText color="rose">{{item.tag}}</CodeText>&gt;
    &lt;<CodeText color="rose">h1</CodeText>&gt;{{ lang.title }}: {{ item.experience }} {{lang.experienceYears}}&lt;<CodeText color="rose">/h1</CodeText>&gt;
    &lt;<CodeText color="rose">p</CodeText>&gt;{{ lang.subtitle }}: {{lang.concepts[item.tag]}}&lt;<CodeText color="rose">/p</CodeText>&gt;
&lt;<CodeText color="rose">/{{item.tag}}</CodeText>&gt;

</template></pre>
  </CodeComponent>
</template>

<script setup>
import { reactive, computed } from "vue";
import CodeComponent from "../../components/utils/CodeComponent.vue";
import CodeText from "../../components/utils/CodeText.vue";
import { useAppStore } from "../../stores/appStore";
import { useDateTime } from "../../js/datetime.js";

const { datetime, getNow } = useDateTime();

const { getLanguageFile } = useAppStore();
const lang = computed(() => getLanguageFile.views.webDevelopment);

const getDiffYearsExperience = (year) => {
  const startYear = datetime.fromFormat(String(year), "yyyy");
  const currentYear = getNow();

  return parseInt(currentYear.diff(startYear, "years").years);
};

const state = reactive({
  contents: [
    {
      tag: "html",
      experience: getDiffYearsExperience(2019),
    },
    {
      tag: "css",
      experience: getDiffYearsExperience(2019),
    },
    {
      tag: "javascript",
      experience: getDiffYearsExperience(2019),
    },
  ],
});
</script>

<style scoped></style>
