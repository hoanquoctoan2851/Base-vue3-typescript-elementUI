import { set } from 'lodash-es';
type Recordable<T = any> = Record<string, T>;

export function genMessage(modules: Record<string, Record<string, any>>, prefix = 'modules') {
  const obj: Recordable = {};
  Object.keys(modules).forEach((key) => {
    const langFileModule = modules[key].default;
    let fileName = key.replace(`./${prefix}/`, '').replace(/^\.\//, '');
    const lastIndex = fileName.lastIndexOf('.');
    fileName = fileName.substring(0, lastIndex);
    const keyList = fileName.split('/');
    const moduleName = keyList.shift();
    const objKey = keyList.join('.');

    if (moduleName) {
      if (objKey) {
        set(obj, moduleName, obj[moduleName] || {});
        set(obj[moduleName], objKey, langFileModule);
      } else {
        set(obj, moduleName, langFileModule || {});
      }
    }
  });
  return obj;
}
