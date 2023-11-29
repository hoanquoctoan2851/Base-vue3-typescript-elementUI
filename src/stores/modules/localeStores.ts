import { store } from '@/stores';
import { defineStore } from 'pinia';
import type { LocaleItemType } from '@/locale/model';
import { LIST_SELECT_LOCALE } from '@/locale';
import { LOCALE_KEY } from '@/enums/cacheEnum';
interface LocaleState {
  locale: LocaleItemType;
}

const innitLocale: LocaleItemType =
  JSON.parse(window.localStorage.getItem(LOCALE_KEY) || '') || LIST_SELECT_LOCALE[0];

export const localeStores = defineStore({
  id: 'localeStores',
  state: (): LocaleState => ({
    locale: innitLocale,
  }),
  getters: {
    getLocale: (state) => state.locale,
  },
  actions: {
    setLocale(locale: LocaleItemType) {
      this.locale = locale;
      window.localStorage.setItem(LOCALE_KEY, JSON.stringify(locale));
      window.location.reload()
    },
  },
});

export function localeStoresWithOut() {
  return localeStores(store);
}
