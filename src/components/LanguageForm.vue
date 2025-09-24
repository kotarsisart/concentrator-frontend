<template>
  <form @submit.prevent="submit">
    <input v-model="name" placeholder="Language name" required />
    <input v-model="code" placeholder="Code" required />
    <button type="submit">Add</button>

    <p v-if="languages.error" class="text-red-500 mt-2">
      {{ languages.error }}
    </p>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageStore } from '../stores/languages'

const name = ref('')
const code = ref('')
const languages = useLanguageStore()

const submit = async () => {
  if (!name.value || !code.value) return
  await languages.createLanguage(name.value, code.value)

  if (!languages.error) {
    name.value = ''
    code.value = ''
  }
}
</script>
