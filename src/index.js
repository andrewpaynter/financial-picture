import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.css'

import { ModalProvider } from './contexts/ModalContext'
import { AppProvider } from './contexts/AppContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'


import RouteHandler from './RouteHandler'

const App = () => {
  return (
    <AppProvider>
      <ModalProvider>
        <MobileMenuProvider>
          <RouteHandler />
        </MobileMenuProvider>
      </ModalProvider>
    </AppProvider>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
