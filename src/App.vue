<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { defineAsyncComponent } from 'vue';
// const ChangeLocale = () => import('@/components/applications/ChangeLocale.vue')
const ChangeLocale = defineAsyncComponent(
  () => import('@/components/applications/ChangeLocale.vue')
);
</script>
<template>
  <header>
    <div class="wrapper">
      <nav>
        <p class="text-5xl">{{ $t('test.name') }}</p>
        <ChangeLocale></ChangeLocale>
        <RouterLink to="/about">about</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
