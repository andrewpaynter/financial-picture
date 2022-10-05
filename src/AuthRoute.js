import React, {useContext} from "react"
import { AppContext } from './contexts/AppContext'
import {Navigate} from 'react-router-dom'

const AuthRoute = ({children}) => {

  const { globalState } = useContext(AppContext)

  if (globalState.loginToken) return children
  else return <Navigate replace to='/' />
}
 
export default AuthRoute;