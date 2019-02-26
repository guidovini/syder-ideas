import { AUTH_USER, AUTH_ERROR } from 'actions/types'

const endpoint = process.env.REACT_APP_ENDPOINT

export const signup = (formInfo, callback) => {
  return (dispatch) => {
    try {    
      const { id, email, password } = formInfo

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
        .then((response) => {
          console.log(response)
          dispatch({ type: AUTH_USER, payload: response.token })
          localStorage.setItem('token', response.token)
          callback()
        })
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Auth error' })
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
    } catch(e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' })
    }
  }
}

export const logout = () => {
  localStorage.removeItem('token')

  return {
    type: AUTH_USER,
    payload: ''
  }
}