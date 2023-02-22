import { Settings } from "luxon";
import { defineStore } from "pinia";
import { computed, reactive, watch } from "vue";
import { useLanguage } from "../js/language";

export const useAppStore = defineStore(
  "app",
  () => {
    const state = reactive({
      language: "pt-BR",
      languageFile: {},
      loaded: false,
    });

    const getLanguage = computed(() => state.language);
    const getLanguageFile = computed(() => state.languageFile);
    const getLoaded = computed(() => state.loaded);

    const setLanguageFile = (file) => (state.languageFile = file);
    const setLanguage = (language) => (state.language = language);
    const setLoaded = (value) => (state.loaded = value);

    watch(getLanguageFile, () => {
      state.loaded = true;
      Settings.defaultLocale = state.language;
    });

    return {
      state,
      getLanguage,
      getLanguageFile,
      getLoaded,
      setLanguageFile,
      setLanguage,
      setLoaded,
    };
  },
  {
    persist: [
      {
        storage: localStorage,
        paths: ["state.language"],
      },
    ],
  }
);
