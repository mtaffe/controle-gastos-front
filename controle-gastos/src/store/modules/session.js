'use strict'

const SESSION_TOKEN_KEY = 'user-token'
const SESSION_USER_KEY = 'user'
const SESSION_SNACKBAR = 'snackbar-info'
const NO_PERMISSION = 'no-info'

export function getUserToken () {
  return localStorage.getItem(SESSION_TOKEN_KEY)
}

export function setUserToken (token) {
  localStorage.setItem(SESSION_TOKEN_KEY, token)
}

export function clearUserToken () {
  localStorage.removeItem(SESSION_TOKEN_KEY)
  return localStorage.getItem(SESSION_TOKEN_KEY) === null
}

export function isUserLogged () {
  return localStorage.getItem(SESSION_TOKEN_KEY) !== null
}

export function getUser () {
  const userSession = localStorage.getItem(SESSION_USER_KEY)

  return userSession !== null ? JSON.parse(userSession) : {}
}

export function setUser (user) {
  localStorage.setItem(SESSION_USER_KEY, JSON.stringify(user))
}

export function clearUser () {
  localStorage.removeItem(SESSION_USER_KEY)
  return localStorage.getItem(SESSION_USER_KEY) === null
}

export function setSnackBarInfo (type, message) {
  localStorage.setItem(SESSION_SNACKBAR, JSON.stringify({
    show: true,
    type: type,
    message: message,
  }))
}

export function getSnackBarInfo () {
  let snackbarInfo = localStorage.getItem(SESSION_SNACKBAR)
  snackbarInfo = snackbarInfo !== null ? JSON.parse(snackbarInfo) : {
    show: false,
    type: '',
    message: '',
  }

  localStorage.removeItem(SESSION_SNACKBAR)
  return snackbarInfo
}

export function setNoPermission () {
  localStorage.setItem(NO_PERMISSION, JSON.stringify(true))
}

export function getNoPermission () {
  let noPermission = localStorage.getItem(NO_PERMISSION)
  noPermission = noPermission !== null ? JSON.parse(noPermission) : false

  localStorage.removeItem(NO_PERMISSION)
  return noPermission
}