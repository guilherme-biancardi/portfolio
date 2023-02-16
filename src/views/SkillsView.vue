<template>
  <ContentView
    :file-tabs="state.fileTabs"
    router-view-name="skills"
  ></ContentView>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import ContentView from "../components/utils/ContentView.vue";
import { useAppStore } from "../stores/appStore";

const { getLanguageFile } = useAppStore();
const lang = computed(() => getLanguageFile.fileTabs?.skills);

const state = reactive({
  fileTabs: [
    {
      type: "html",
      name: "",
      route: "/skills/web-development",
    },
    {
      type: "js",
      name: "",
      route: "/skills/vue-js",
    },
  ],
});

onMounted(() =>
  state.fileTabs.forEach((tab, index) => (tab.name = lang.value.at(index)))
);
</script>

<style scoped></style>