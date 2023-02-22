<template>
  <form @submit.prevent="changeLanguage">
    <select v-model="state.value">
      <option value="null" disabled>{{ lang.label }}:</option>
      <option
        v-for="(language, index) in state.languages"
        :key="index"
        :value="language?.value"
        :disabled="getLanguage === language?.value"
      >
        {{ language?.label }}
      </option>
    </select>
    <ButtonComponent
      :text="lang.button"
      :icon="mdiTranslate"
      :disabled="state.value === null"
    ></ButtonComponent>
  </form>
</template>

<script setup>
import { reactive, onMounted, computed } from "vue";
import { useAppStore } from "../../stores/appStore";
import { acceptedLanguages } from "../../js/language";
import ButtonComponent from "../utils/ButtonComponent.vue";
import { mdiTranslate } from "@mdi/js";

const { getLanguageFile, setLanguage, getLanguage } = useAppStore();
const lang = computed(() => getLanguageFile.menuDrop.changeLanguage);

const state = reactive({
  languages: [],
  value: null,
});

const changeLanguage = () => {
  setLanguage(state.value);
  window.location.reload()
};

onMounted(() => {
  acceptedLanguages.forEach((language, index) => {
    const label = lang.value.languages.at(index);

    state.languages.push({ label: label, value: language });
  });
});
</script>

<style scoped>
form {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
}

select {
  all: unset;
  background-color: var(--syntax-background);
  padding: 10px 12px;
  padding-right: 64px;
  border-radius: 5px;
  font-size: 0.9em;
  text-transform: capitalize;
  background-image: url(../../assets/chevron-down.svg);
  background-repeat: no-repeat;
  background-position: calc(100% - 4px);
  background-size: 26px;
}
</style>
