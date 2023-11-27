import { genMessage } from '@/locale/helper';
import type { Recordable } from '@/locale/model';
const modules = import.meta.glob('./vi/**/*.json', { eager: true });
export const locale_vi = genMessage(modules as Recordable<Recordable>, 'modules').vi;
