const importLanguage = (language) =>
  import("../lang/pt-BR/language.json");

export const useLanguage = async (language) => importLanguage(language);
