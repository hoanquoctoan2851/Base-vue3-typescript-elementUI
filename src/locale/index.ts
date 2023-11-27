import { createI18n } from 'vue-i18n';
import { locale_en } from './modules/en';
import { locale_vi } from './modules/vi';
import type { LocaleItemType, LocaleType } from '@/locale/model';
import type { App } from 'vue';

export const LIST_SELECT_LOCALE: LocaleItemType[] = [
  {
    value: 'vi-VN',
    label: 'common.lang.country.vietnames'
  },
  {
    value: 'en-US',
    label: 'common.lang.country.english'
  }
];

export async function setupI18n(app: App) {
  const i18n = createI18n<[typeof locale_en], LocaleType>({
    locale: 'vi-VN',
    legacy: false,
    allowComposition: true,
    fallbackLocale: 'vi-VN',
    messages: {
      'en-US': locale_en,
      'vi-VN': locale_vi
    }
  });
  app.use(i18n);
}
