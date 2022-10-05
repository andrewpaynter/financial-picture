import React, { createContext, useReducer, useEffect } from 'react'
import api from '../api/api'
export const AppContext = createContext()

export const AppProvider = (props) => {
  const reducer = (state, action) => {
    const setUserInfo = () => {
      return { ...state, userInfo: action.userInfo }
    }
    const addTransactionTag = () => {
      return { ...state, transactionTags: [...state.transactionTags, action.tag] }
    }
    const removeTransactionTag = () => {
      let newTags = [...state.transactionTags]
      if (newTags.includes(action.tag)) {
        newTags.splice(newTags.indexOf(action.tag), 1)
      }
      return { ...state, transactionTags: newTags }
    }
    const getTransactions = async () => {
      const request = new Request(api.transactions, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      })
      try {
        let transactionData = await fetch(request)
        transactionData = await transactionData.json()
        dispatch({ type: 'GET_TRANSACTIONS_SUCCESS', transactionData })
      } catch (e) {
        console.log('Could not get transactions: ', e)
      }
    }
    const getTransactionSuccess = () => {
      return { ...state, isLoading: false, transactionData: action.transactionData }
    }
    const logIn = async () => {
      const credentials = {
        email: action.email,
        password: action.password
      }
      const request = new Request(api.auth, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(credentials)
      })
      try {
        const response = await fetch(request)
        const body = await response.json()
        if (!response.ok) {
          dispatch({ type: 'LOG_IN_FAILURE', body })
        } else {
          dispatch({ type: 'LOG_IN_SUCCESS', response, body })
        }
      } catch (e) {
        dispatch({ type: 'LOG_IN_FAILURE', e })
      }
    }
    const logInSuccess = () => {
      return {
        ...state,
        isLoading: false,
        auth: {
          failMessage: null
        },
        userInfo: {
          firstName: action.body.name.split(' ')[0],
          lastName: action.body.name.split(' ')[action.body.name.split(' ').length - 1],
          email: action.body.email
        },
        transactionTags: action.body.userData.allTags,
        transactionCategories: action.body.userData.allCategories,
        loginToken: true
      }
    }
    const logInFailure = () => {
      console.log(action.body.message)
      return {
        ...state,
        isLoading: false,
        auth: {
          failMessage: action.body.message
        }
      }
    }
    const signUp = async () => {
      const credentials = {
        name: `${action.firstName.trim()} ${action.lastName.trim()}`,
        email: action.email,
        password: action.password
      }
      const request = new Request(api.users, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(credentials)
      })
      try {
        const response = await fetch(request)
        const body = await response.json()
        if (response.ok) dispatch({ type: 'SIGN_UP_SUCCESS', response, body })
        else dispatch({ type: 'SIGN_UP_FAILURE', body })
      } catch (e) {
        dispatch({ type: 'SIGN_UP_FAILURE', body: e })
      }
    }
    const signUpSuccess = () => {
      return {
        ...state,
        isLoading: false,
        auth: {
          failMessage: null
        },
        userInfo: {
          firstName: action.body.name.split(' ')[0],
          lastName: action.body.name.split(' ')[action.body.name.split(' ').length - 1],
          email: action.body.email
        },
        loginToken: true
      }
    }
    const signUpFailure = () => {
      return {
        ...state,
        isLoading: false,
        auth: {
          failMessage: `${action.body.message}`
        }
      }
    }
    const logOut = async () => {
      const request = new Request(api.auth, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      })
      try {
        const response = await fetch(request)
        if (!response.ok) dispatch({ type: 'LOG_OUT_FAILURE', message: response.message })
        const body = await response.json()
        dispatch({ type: 'LOG_OUT_SUCCESS', response, body })
      } catch (e) {
        dispatch({ type: 'LOG_OUT_FAILURE', e })
      }
    }
    const logOutSuccess = () => {
      return {
        auth: { failMessage: null },
        userInfo: { firstName: '', lastName: '', email: '' },
        loginToken: false,
        transactionData: [],
        transactionCategories: [],
        transactionTags: [],
        isLoading: false
      }
    }
    const logOutFailure = () => {
      return {
        ...state,
        isLoading: false,
        auth: {
          failMessage: action.message
        }
      }
    }
    const checkAuth = async () => {
      const request = new Request(api.auth, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      })
      try {
        const response = await fetch(request)
        const body = await response.json()
        if (!response.ok) {
          dispatch({ type: 'CHECK_AUTH_FAILURE', body })
        } else {
          dispatch({ type: 'CHECK_AUTH_SUCCESS', body })
        }
      } catch (e) {
        dispatch({ type: 'CHECK_AUTH_FAILURE', e })
      }
    }
    const checkAuthSuccess = () => {
      return {
        ...state,
        isLoading: false,
        auth: {
          failMessage: null
        },
        userInfo: {
          firstName: action.body.name.split(' ')[0],
          lastName: action.body.name.split(' ')[action.body.name.split(' ').length - 1],
          email: action.body.email
        },
        firstRender: false,
        transactionTags: action.body.userData.allTags,
        transactionCategories: action.body.userData.allCategories,
        loginToken: true
      }
    }
    const checkAuthFailure = () => {
      return {
        ...state,
        auth: { failMessage: null },
        userInfo: { firstName: '', lastName: '', email: '' },
        firstRender: false,
        loginToken: false,
        transactionData: [],
        transactionCategories: [],
        transactionTags: [],
        isLoading: false
      }
    }

    switch (action.type) {
      case 'SET_USER_INFO':
        return setUserInfo()
      case 'ADD_TRANSACTION_TAG':
        return addTransactionTag()
      case 'REMOVE_TRANSACTION_TAG':
        return removeTransactionTag()
      case 'GET_TRANSACTIONS':
        getTransactions()
        return { ...state, isLoading: true }
      case 'GET_TRANSACTIONS_SUCCESS':
        return getTransactionSuccess()
      case 'LOG_IN':
        logIn()
        return { ...state, isLoading: true }
      case 'LOG_IN_SUCCESS':
        return logInSuccess()
      case 'LOG_IN_FAILURE':
        return logInFailure()
      case 'SIGN_UP':
        signUp()
        return { ...state, isLoading: true }
      case 'SIGN_UP_SUCCESS':
        return signUpSuccess()
      case 'SIGN_UP_FAILURE':
        return signUpFailure()
      case 'LOG_OUT':
        logOut()
        return { ...state, isLoading: true }
      case 'LOG_OUT_SUCCESS':
        return logOutSuccess()
      case 'LOG_OUT_FAILURE':
        return logOutFailure()
      case 'CHECK_AUTH':
        checkAuth()
        return { ...state, isLoading: true }
      case 'CHECK_AUTH_SUCCESS':
        return checkAuthSuccess()
      case 'CHECK_AUTH_FAILURE':
        return checkAuthFailure()

      default:
        return state
    }
  }

  const [globalState, dispatch] = useReducer(reducer, {
    auth: {
      failMessage: null
    },
    firstRender: true,
    userInfo: { firstName: '', lastName: '', email: '' },
    loginToken: false,
    transactionData: [],
    transactionCategories: [],
    transactionTags: [],
    isLoading: false
  })

  useEffect(() => {
    dispatch({ type: 'CHECK_AUTH' })
  }, [globalState.firstRender])

  return (
    <AppContext.Provider value={{ globalState, dispatch }}>{props.children}</AppContext.Provider>
  )
}
