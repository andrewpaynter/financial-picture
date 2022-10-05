import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Button from '../components/atoms/Button'
import Title from '../components/atoms/Title'
import Subtitle from '../components/atoms/Subtitle'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const { globalState, dispatch } = useContext(AppContext)
  const logUserInfo = () => {
    console.log(globalState)
  }
  let navigate = useNavigate()

  return (
    <div className='pt-6 pb-64 bg-slate-100 text-center min-h-screen'>
      <Title className='mt-6'>Dashboard</Title>
      <Subtitle className='mt-6'>
        Hello, {globalState.userInfo.firstName}! Here's your account at a glance.
      </Subtitle>
      <Button className='mt-12 mr-6' onClick={logUserInfo} text='Log User Info' />
      <Button
        className='mt-12 mr-6'
        text='Transactions'
        onClick={() => navigate('/transactions')}
      />
      <Button
        text='Log Out'
        onClick={() => {
          dispatch({ type: 'LOG_OUT' })
          navigate('/')
        }}
      />
    </div>
  )
}

export default Dashboard
