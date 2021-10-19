const codeNavigatorLang = {
  ru: "ru-ru",
  en: "en-us",
};

const langList = [
  { label: "English", value: "en-us" },
  { label: "Русский", value: "ru-ru" },
];

const userLang = codeNavigatorLang[window.navigator.language] || "ru-ru";
const index = langList.findIndex((item) => item.value === userLang);
langList.unshift(langList.splice(index, 1)[0]);

export const preparedLocales = langList;
export const locale = userLang;
