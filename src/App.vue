<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
</script>
<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <p class="text-5xl">{{ $t('test.name') }}</p>
        <RouterLink to="/about">about</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>
