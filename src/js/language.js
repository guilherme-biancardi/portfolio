const acceptedLanguages = {
  "pt-BR": () => import("../lang/pt-BR/language.json"),
  "en-US": () => import("../lang/en-US/language.json"),
};

const importLanguage = (language) => acceptedLanguages[language]();

export const useLanguage = async (language) => importLanguage(language);
