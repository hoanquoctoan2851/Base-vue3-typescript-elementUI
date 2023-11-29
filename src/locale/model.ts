export type Recordable<T = any> = Record<string, T>;

export type LocaleType = 'en' | 'vi';

export interface LocaleItemType {
  value: LocaleType;
  label: string;
  flag?: string;
}
