import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Features from './pages/Features'
import Transactions from './pages/Transactions'
import Welcome from './pages/Welcome'
import Subfooter from './pages/Subfooter'
import Account from './pages/Account'

import Modal from './components/molecules/Modal/Modal'
import MobileMenu from './components/molecules/Nav/MobileMenu'

import AuthRoute from './AuthRoute'
import StandardPageLayout from './StandardPageLayout'

const RouteHandler = () => {

  return (
    <Router>
    <Modal />
    <MobileMenu />
        <Routes>
          <Route
            exact path='/'
            element={
                <StandardPageLayout>
                  <Welcome />
                  <Subfooter />
                </StandardPageLayout>}
          />
          <Route
            path='/dashboard'
            element={
            <AuthRoute>
              <StandardPageLayout>
                <Dashboard />
              </StandardPageLayout>
            </AuthRoute>}
          />
          <Route
            path='/transactions'
            element={
            <AuthRoute>
              <StandardPageLayout>
                <Transactions />
              </StandardPageLayout>
            </AuthRoute>}
          />
          <Route 
            path='/features' 
            element={
              <AuthRoute>
                <StandardPageLayout>
                  <Features />
                </StandardPageLayout>
              </AuthRoute>} 
          />
          <Route
            path='/account'
            element={
              <AuthRoute>
                <StandardPageLayout>
                  <Account />
                </StandardPageLayout>
              </AuthRoute>}
          />
        </Routes>
  </Router>
    
  )
}

export default RouteHandler
