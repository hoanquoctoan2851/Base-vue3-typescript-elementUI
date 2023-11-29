<template>
  <el-switch v-model="isDark" :active-action-icon="Moon" :inactive-action-icon="Sunny" />
</template>
<script lang="ts">
import { Sunny, Moon } from '@element-plus/icons-vue';
import { useDark } from '@vueuse/core';
import { THEME_CONFIG } from '@/enums/cacheEnum';

export default {
  name: 'SwitchTheme',
  setup() {
    const isDark = useDark({
      selector: 'html',
      attribute: 'class',
      valueDark: THEME_CONFIG.DARK,
      valueLight: THEME_CONFIG.LIGHT,
    });

    return {
      isDark,
      Moon,
      Sunny,
    };
  },
};
</script>
