import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.chatpdf.com/v1',
  headers: {
    Accept: 'application/json',
    "x-api-key": "sec_afPaUToR32Zrgdst6tHROZPUsCzNjuUf"
  },
})
