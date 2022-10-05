import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Button from '../components/atoms/Button'
import Title from '../components/atoms/Title'
import { useNavigate } from 'react-router-dom'
import ParagraphText from '../components/atoms/ParagraphText'

const Dashboard = () => {
  const { globalState } = useContext(AppContext)
  let navigate = useNavigate()

  return (
    <div className='pt-6 pb-64 bg-slate-100 text-left min-h-screen'>
      <div className='flex flex-col w-1/2 mx-auto '>
        <Title className='mt-6'>Dashboard</Title>
        <ParagraphText className='mt-6'>
          Hello, {globalState.userInfo.firstName}! Here's your account at a glance.
        </ParagraphText>
        <Button
          className='mt-12 mr-6'
          text='Transactions'
          onClick={() => navigate('/transactions')}
        />
      </div>
    </div>
  )
}

export default Dashboard
