const languagesFile = {
  "pt-BR": () => import("../lang/pt-BR/language.json"),
  "en-US": () => import("../lang/en-US/language.json"),
};

const importLanguage = (language) => languagesFile[language]();

export const useLanguage = (language) => importLanguage(language);

export const acceptedLanguages = [
  "pt-BR",
  "en-US",
]
