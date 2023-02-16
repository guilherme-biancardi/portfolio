<template>
  <CodeComponent>
    <pre>
<CodeText color="purple">const</CodeText> <CodeText color="cyan">{{lang.labels.title}}</CodeText> <CodeText color="cyan">=</CodeText> <CodeText color="yellow">()</CodeText> <CodeText color="purple">=></CodeText> <CodeText color="yellow">(</CodeText>{
    <CodeText color="rose">{{lang.labels.technicalCourse}}</CodeText>: <CodeText color="cyan">{</CodeText>
          <CodeText color="rose">{{lang.labels.name}}</CodeText>: <CodeText color="green">"{{ state.etec.name }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.course}}</CodeText>: <CodeText color="green">"{{ lang.etec.course }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.status}}</CodeText>: <CodeText color="green">"{{ lang.etec.status }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.startAt}}</CodeText>: <CodeText color="green">"{{ state.etec.startAt }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.endAt}}</CodeText>: <CodeText color="green">"{{ state.etec.endAt }}"</CodeText>,
    <CodeText color="cyan">}</CodeText>,
    <CodeText color="rose">{{lang.labels.universityEducation}}</CodeText>: <CodeText color="cyan">{</CodeText>
          <CodeText color="rose">{{lang.labels.name}}</CodeText>: <CodeText color="green">"{{ state.university.name }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.course}}</CodeText>: <CodeText color="green">"{{ lang.university.course }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.status}}</CodeText>: <CodeText color="green">"{{ lang.university.status }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.startAt}}</CodeText>: <CodeText color="green">"{{ state.university.startAt }}"</CodeText>,
          <CodeText color="rose">{{lang.labels.endAt}}</CodeText>: <CodeText color="green">"{{ state.university.endAt }}"</CodeText>
    <CodeText color="cyan">}</CodeText>
}<CodeText color="yellow">)</CodeText>
      </pre>
  </CodeComponent>
</template>

<script setup>
import { reactive, computed } from "vue";
import CodeComponent from "../../components/utils/CodeComponent.vue";
import CodeText from "../../components/utils/CodeText.vue";
import { useDateTime } from "../../js/datetime";
import { useAppStore } from "../../stores/appStore";

const { getDate } = useDateTime();

const { getLanguageFile } = useAppStore();

const lang = computed(() => {
  const { etec, university, labels } = getLanguageFile.views.formations;

  return { etec, labels, university };
});

const etecDates = {
  start: getDate("2019-02-06"),
  end: getDate("2021-12-12"),
};

const universityDates = {
  start: getDate("2022-03-02"),
  end: getDate("2025-12-12"),
};

const state = reactive({
  etec: {
    name: "Etec São Mateus",
    startAt: etecDates.start.toFormat("LLLL - yyyy"),
    endAt: etecDates.end.toFormat("LLLL - yyyy"),
  },
  university: {
    name: "UNIP Tatuapé",
    startAt: universityDates.start.toFormat("LLLL - yyyy"),
    endAt: universityDates.end.toFormat("LLLL - yyyy"),
  },
});
</script>

<style scoped></style>
