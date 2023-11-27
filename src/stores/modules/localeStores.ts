import { store } from '@/stores';
import { defineStore } from 'pinia';
import type { LocaleItemType } from '@/locale/model';
import { LIST_SELECT_LOCALE } from '@/locale';

interface LocaleState {
  locale: LocaleItemType | null;
}
export const localeStores = defineStore({
  id: 'localeStores',
  state: (): LocaleState => ({
    locale: LIST_SELECT_LOCALE[0]
  }),
  actions: {
    setLocale(locale: LocaleItemType) {
      this.locale = locale;
    }
  }
});

export function localeStoresWithOut() {
  return localeStores(store);
}
