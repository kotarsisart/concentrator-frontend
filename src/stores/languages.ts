import { defineStore } from 'pinia'
import { getLanguages, addLanguage } from '../api/languages'

export const useLanguageStore = defineStore('languages', {
  state: () => ({
    items: [] as { id: number; name: string; code: string }[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchLanguages() {
      this.loading = true
      this.error = null
      try {
        this.items = await getLanguages()
      } catch (e: any) {
        this.error = e.message
      } finally {
        this.loading = false
      }
    },

    async createLanguage(name: string, code: string) {
      this.error = null
      try {
        await addLanguage(name, code)
        await this.fetchLanguages()
      } catch (e: any) {
        if (e.response) {
          this.error = e.response.data.message || 'Server error'
        } else {
          this.error = e.message
        }
      }
    },
  },
})
