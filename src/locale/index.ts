import { createI18n } from 'vue-i18n';
import { locale_en } from './modules/en';
import { locale_vi } from './modules/vi';
import { localeStoresWithOut } from '@/stores/modules/localeStores';
import type { LocaleItemType, LocaleType } from '@/locale/model';
import { type App } from 'vue';

export const LIST_SELECT_LOCALE: LocaleItemType[] = [
  {
    value: 'vi',
    label: 'common.lang.country.vietnames',
  },
  {
    value: 'en',
    label: 'common.lang.country.english',
  },
];

export async function setupI18n(app: App) {
  const locales = localeStoresWithOut();
  const i18n = createI18n<[typeof locale_en], LocaleType>({
    locale: locales.getLocale?.value,
    legacy: false,
    allowComposition: true,
    fallbackLocale: 'vi',
    messages: {
      en: locale_en,
      vi: locale_vi,
    },
  });

  app.use(i18n);
}
