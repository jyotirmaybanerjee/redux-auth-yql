import * as constants from '../constants'

export function login (form, redirect) {
  return dispatch => {
    // fake auth
    setTimeout(() => {
      const token = Math.random().toString(36).substring(7)
      dispatch({
        type: constants.LOGGED_IN,
        payload: { token }
      })
      // Can be used to navigate to a new route
      if (redirect) redirect()
    }, 300)
  }
}

export function hideError () {
  return { type: constants.HIDE_ERROR }
}
