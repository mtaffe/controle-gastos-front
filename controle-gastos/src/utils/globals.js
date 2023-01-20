const EN_LOCALE_ONLY = process.env.EN_LOCALE_ONLY === 'true'
const IN_BROWSER = typeof window !== 'undefined'
const IS_DEBUG = process.env.DEBUG === 'true'
const IS_PROD = process.env.NODE_ENV === 'production'
const USER_TOKEN = localStorage.getItem('user-token')
const API = process.env.VUE_APP_API_BASE_URL

module.exports = {
  EN_LOCALE_ONLY,
  IN_BROWSER,
  IS_DEBUG,
  IS_PROD,
  USER_TOKEN,
  API,
}