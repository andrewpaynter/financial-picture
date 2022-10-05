import React, { useContext } from 'react'
import Title from '../components/atoms/Title'
import Button from '../components/atoms/Button'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const { dispatch } = useContext(AppContext)
  const navigate = useNavigate

  return (
    <div className='flex flex-col items-center px-10 md:px-auto pt-20 min-h-screen pb-32 bg-slate-200'>
      <div className='bg-slate-400 md:max-w-screen-md lg:max-w-screen-lg min-h-[50%]'>
        <Title>Your Account</Title>
        <div className='grid grid-cols-2 min-h-[50%]'>
          <div className='h-32 w-32 bg-red-400'></div>
          <div className='h-32 w-32 bg-green-400'></div>
          <Button
            text='Log Out'
            onClick={() => {
              dispatch({ type: 'LOG_OUT' })
              navigate('/')
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Account
