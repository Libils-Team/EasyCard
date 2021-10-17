import { createI18n } from "vue-i18n";
import messages from "@/i18n";
import { locale } from "@/modules/language";

const i18n = createI18n({
  locale: localStorage.getItem("locale") || locale,
  messages,
});

export default { i18n };
