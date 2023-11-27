import { store } from '@/stores';
import { defineStore } from 'pinia';
import type { LocaleType } from '@/locale/model';
interface LocaleState {
  locale: LocaleType;
}
export const localeStores = defineStore({
  id: 'localeStores',
  state: (): LocaleState => ({
    locale: 'vi-VN'
  }),
  actions: {
    setLocale(locale: LocaleType) {
      this.locale = locale;
    }
  }
});

export function localeStoresWithOut() {
  return localeStores(store);
}
