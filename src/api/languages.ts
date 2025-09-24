import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
})

export const getLanguages = async () => {
  const res = await api.get('/languages')
  return res.data
}

export const addLanguage = async (name: string, code: string) => {
  const res = await api.post('/languages', { name, code })
  return res.data
}
