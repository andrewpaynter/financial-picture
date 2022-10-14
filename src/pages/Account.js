import React, { useContext } from 'react'
import Title from '../components/atoms/Title'
import Button from '../components/atoms/Button'
import { AppContext } from '../contexts/AppContext'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const { globalState, dispatch } = useContext(AppContext)
  const navigate = useNavigate

  return (
    <div className='px-10 md:px-auto pt-20 pb-32 bg-slate-100 min-h-screen'>
      <div className='flex flex-col mx-0 md:mx-auto md:max-w-screen-md lg:max-w-screen-lg'>
        <Title className='text-left'>Your Account</Title>
        <div className='grid grid-cols-3 w-full min-h-[50%] drop-shadow-md mt-6 border rounded-md border-slate-400'>
          <div className='bg-slate-300 w-full h-full border-r border-slate-400 hidden md:block'>
            <ul className='flex flex-col mb-32'>
              <li className='py-6 pl-6 cursor-pointer hover:text-sky-600'>Basic Profile</li>
              <li className='border-t border-slate-400 py-6 pl-6 cursor-pointer hover:text-sky-600'>
                Connected Accounts
              </li>
              <li className='border-y border-slate-400 py-6 pl-6 cursor-pointer hover:text-sky-600'>
                Security
              </li>
            </ul>
          </div>
          <ul className='bg-slate-100 col-span-3 md:col-span-2 grid grid-cols-2 gap-6 justify-items-center text-center py-8 pr-6'>
            <li>Email:</li>
            <li>{globalState.userInfo.email}</li>
            <li>Name:</li>
            <li>{globalState.userInfo.firstName + ' ' + globalState.userInfo.lastName}</li>
            <li>Password:</li>
            <li>
              *************
              <span className='text-xs cursor-pointer hover:text-sky-600'>(change)</span>
            </li>
            <li>Address:</li>
            <li>1600 Pennsylvania Avenue, N.W</li>
            <li>City:</li>
            <li>Washington, DC</li>
          </ul>
        </div>
        <div className='flex flex-col md:flex-row mx-auto md:mx-0'>
          <Button
            className='mt-6 mr-6 w-64'
            text='Log Out'
            onClick={() => {
              dispatch({ type: 'LOG_OUT' })
              navigate('/')
            }}
          />
          <Button
            className='mt-6 w-64'
            text='Delete Profile'
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
