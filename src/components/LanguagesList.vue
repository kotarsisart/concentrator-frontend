<template>
  <div>
    <h2>Languages</h2>
    <ul>
      <li v-for="lang in languages.items" :key="lang.id">
        {{ lang.name }} ({{ lang.code }})
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useLanguageStore } from '../stores/languages';
import { onMounted } from 'vue';

const languages = useLanguageStore()
onMounted(() => {
  languages.fetchLanguages()
})
</script>
