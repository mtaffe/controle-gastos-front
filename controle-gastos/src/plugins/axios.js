/* eslint-disable quote-props */
import axios from 'axios'
import { getUserToken } from '@/store/modules/session'
import Vue from 'vue'

const instance = axios.create({
  baseURL: 'https://localhost:8000/api/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

instance.interceptors.request.use(
  config => {
    const token = getUserToken()
    if (token) {
      config.headers.common.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error),
)

Vue.prototype.$http = instance

export default instance