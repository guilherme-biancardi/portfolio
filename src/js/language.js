const importLanguage = (language) =>
  import("../lang/" + language + "/language.json");

export const useLanguage = async (language) => importLanguage(language);
