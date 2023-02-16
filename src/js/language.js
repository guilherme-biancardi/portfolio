const acceptedLanguages = {
  "pt-BR": "../lang/pt-BR/language.json",
  "en-US": "../lang/en-US/language.json"
}

const importLanguage = (language) =>
  import(acceptedLanguages[language]);

export const useLanguage = async (language) => importLanguage(language);
