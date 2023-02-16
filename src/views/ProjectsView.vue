<template>
  <ContentView
    :file-tabs="state.fileTabs"
    router-view-name="about"
  ></ContentView>
</template>

<script setup>
import { reactive, computed, onMounted } from "vue";
import ContentView from "../components/utils/ContentView.vue";
import { useAppStore } from "../stores/appStore";

const { getLanguageFile } = useAppStore();
const lang = computed(() => getLanguageFile.fileTabs?.aboutMe);

const state = reactive({
  fileTabs: [
    {
      type: "js",
      name: "",
      route: "/about-me",
    },
    {
      type: "js",
      name: "",
      route: "/about-me/formations",
    },
  ],
});

onMounted(() =>
  state.fileTabs.forEach((tab, index) => (tab.name = lang.value.at(index)))
);
</script>

<style scoped></style>