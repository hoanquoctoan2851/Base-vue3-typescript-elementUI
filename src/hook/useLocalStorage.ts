import { ref } from 'vue';
import type { Ref } from 'vue';
function useLocalStorage<T>(
  key: string,
  defaultValue: T
): { value: Ref<T>; setValue: (newValue: T) => void } {
  const storedValue = localStorage.getItem(key);
  const initialValue: T = storedValue ? JSON.parse(storedValue) : defaultValue;

  const value: any = ref(initialValue);
  const setValue = (newValue: T) => {
    value.value = newValue;
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return { value, setValue };
}
export default {
  setup() {
    const { value, setValue } = useLocalStorage<string>('myKey', 'defaultValue');

    return {
      value,
      setValue,
    };
  },
};
