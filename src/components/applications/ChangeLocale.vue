<template>
  <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button type="primary">
        {{ $t(`${lang?.label}`) }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in LIST_SELECT_LOCALE" :key="item.value" @click="handleChangeLocale(item)">{{
            $t(`${item.label}`)
          }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue';
import { LIST_SELECT_LOCALE } from '@/locale';
import { localeStores } from '@/stores/modules/localeStores';
import type { LocaleItemType } from '@/locale/model';

const locales = localeStores();

const lang = computed(() => {
  return locales.locale;
});

const handleChangeLocale = (locale: LocaleItemType) => {
  locales.setLocale(locale);
};
</script>
