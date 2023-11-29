<script lang="ts">
import { computed } from 'vue';
import { RouterView } from 'vue-router';
import { localeStores } from './stores/modules/localeStores';
//@ts-ignore
import vi from 'element-plus/dist/locale/vi.js';
//@ts-ignore
import en from 'element-plus/dist/locale/en.js';
export default {
  name: 'App',
  components: { RouterView },
  setup() {
    const locale = computed(() => {
      return localeStores().getLocale;
    });

    const listLocale = {
      en: en,
      vi: vi,
    };

    return {
      locale,
      listLocale,
      vi,
      en,
    };
  },
};
</script>
<template>
  <el-config-provider :locale="listLocale[locale?.value]">
    <RouterView />
  </el-config-provider>
</template>
