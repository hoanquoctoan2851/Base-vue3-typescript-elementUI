export type Recordable<T = any> = Record<string, T>;

export type LocaleType = 'en-US' | 'vi-VN';

export interface LocaleItemType {
  value: LocaleType;
  label: string;
  flag?: string;
}
