import { AUTH_USER, AUTH_ERROR, USER_LOGOUT } from 'actions/types'

const endpoint = process.env.REACT_APP_ENDPOINT
const uuidv4 = require('uuid/v4')

export const signup = (formInfo, callback) => {
  return (dispatch) => {
    try {    
      const id = uuidv4()
      const { email, password } = formInfo

      const configuration = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
          email,
          password
        })
      }

      return fetch(endpoint + '/signup', configuration)
        .then(res => res.json())
        .then(response => {
          dispatch({ type: AUTH_USER, payload: response.token })
          localStorage.setItem('token', response.token)
          callback()
        })
        .catch(err => dispatch({ type: AUTH_ERROR, payload: 'Auth error. Try again' }))
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Auth error. Try again' })
    }
  }
}

export const login = (formInfo, callback) => {
  return (dispatch) => {
    try {
      const { email, password } = formInfo
      const configuration = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email, 
          password
        })
      }
      
      return fetch(endpoint + '/login', configuration)
        .then(res => res.json())
        .then(response => {
          dispatch({ type: AUTH_USER, payload: response.token })
          localStorage.setItem('token', response.token)
          callback()
        })
        .catch(err => dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials'}))
    } catch(e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' })
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('token')
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: AUTH_USER, payload: '' })
  }
}