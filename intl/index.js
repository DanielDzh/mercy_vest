import en from "./en.json";
import ua from "./ua.json";

export const messages = { ua, en };

export const DEFAULT_LOCALE = "ua";

export function intlMessages(locale) {
  return messages[locale] || messages[DEFAULT_LOCALE] || "<no value>";
}
