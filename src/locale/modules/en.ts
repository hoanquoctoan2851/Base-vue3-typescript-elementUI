import { genMessage } from '@/locale/helper';
import type { Recordable } from '@/locale/model';
const modules = import.meta.glob('./en/**/*.json', { eager: true });
export const locale_en = genMessage(modules as Recordable<Recordable>, 'modules').en;
