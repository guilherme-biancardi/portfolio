<template>
  <CodeComponent>
    <pre>
<CodeText color="purple">const</CodeText> <CodeText color="yellow">{{ lang.informations.title }}</CodeText> <CodeText color="cyan">=</CodeText> {
    <CodeText color="rose">{{ lang.informations.age }}</CodeText>: <CodeText color="orange">{{ age }}</CodeText>,
    <CodeText color="rose">{{ lang.informations.localization }}</CodeText>: <CodeText color="green">"{{ state.locality }}"</CodeText>,
    <CodeText color="rose">{{ lang.informations.email }}</CodeText>: <CodeText color="green">"{{ state.email }}"</CodeText>,
    <CodeText color="rose">{{ lang.informations.phone }}</CodeText>: <CodeText color="green">"{{ state.phone }}"</CodeText>,
    <CodeText color="rose">{{ lang.informations.links }}</CodeText>: <CodeText color="cyan">{</CodeText>
      <CodeText color="rose">linkedin</CodeText>: "<CodeText color="green" tag="a" :href="state.links.linkedin" target="_blank">"{{ state.links.linkedin }}"</CodeText>,
      <CodeText color="rose">github</CodeText>: <CodeText color="green" tag="a" :href="state.links.github" target="_blank">"{{ state.links.github }}"</CodeText>,
    <CodeText color="cyan">}</CodeText>
}

<CodeText color="purple">const</CodeText> <CodeText color="yellow">{{ lang.myStory.title }}</CodeText> <CodeText color="cyan">=</CodeText> <CodeText color="green">"{{ lang.myStory.text }}"</CodeText>
</pre>
  </CodeComponent>
</template>

<script setup>
import { reactive, computed } from "vue";
import CodeComponent from "../../components/utils/CodeComponent.vue";
import CodeText from "../../components/utils/CodeText.vue";
import { useDateTime } from "../../js/datetime";
import { useAppStore } from "../../stores/appStore";

const { getDate, getNow } = useDateTime();

const { getLanguageFile } = useAppStore();

const lang = computed(() => {
  const { informations, myStory } = getLanguageFile.views.aboutMe;

  return { informations, myStory };
});

const age = computed(() => {
  const yearOfBirth = getDate("2003-02-28");
  const diff = getNow().diff(yearOfBirth, "years").years;

  return parseInt(diff);
});

const state = reactive({
  locality: "São Paulo - SP",
  phone: "(11) 96629-3323",
  email: "guilhermerbiancardi@outlook.com",
  links: {
    linkedin: "https://www.linkedin.com/in/guilherme-biancardi-353709187/",
    github: "https://github.com/guilherme-biancardi",
  },
});
</script>

<style scoped></style>
