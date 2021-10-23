import { createI18n } from "vue-i18n/index";
import messages from "@/i18n";

export default createI18n({
  locale: localStorage.getItem("locale") || window.navigator.language,
  messages,
});
