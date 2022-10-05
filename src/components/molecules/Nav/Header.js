import React, { useContext } from 'react'
import Button from '../../atoms/Button'
import NavLink from '../../atoms/NavLink'
import { ModalContext } from '../../../contexts/ModalContext'
import { AppContext } from '../../../contexts/AppContext'
import { MobileMenuContext } from '../../../contexts/MobileMenuContext'
import SignUpModalContent from '../Modal/SignUpModalContent'
import LogInModalContent from '../Modal/LogInModalContent'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const { setModal, openModal } = useContext(ModalContext)
  const { globalState } = useContext(AppContext)
  const { openMenu } = useContext(MobileMenuContext)
  let navigate = useNavigate()

  const openSignUpModal = () => {
    setModal(<SignUpModalContent />)
    openModal()
  }

  const openLogInModal = () => {
    setModal(<LogInModalContent />)
    openModal()
  }

  return (
    <header className=' px-6 py-3 border-b sticky top-0 bg-slate-50 opacity-95 z-10'>
      <div className='mx-auto sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex justify-between items-center'>
        <div
          className='flex justify-between items-center hover:cursor-pointer'
          onClick={() => (globalState.loginToken ? navigate('/dashboard') : navigate('/'))}
        >
          <i className='fa-solid fa-user-astronaut text-3xl text-rose-400 mr-2'></i>
          <h2 className='font-logo text-3xl text-blue-900'>Monarch</h2>
        </div>
        {globalState.loginToken ? (
          <ul className='hidden md:flex'>
            <NavLink onClick={() => navigate('/dashboard')}>Dashboard</NavLink>
            <NavLink onClick={() => navigate('/transactions')}>Transactions</NavLink>
          </ul>
        ) : null}
        <div className='flex justify-between items-center'>
          {!globalState.loginToken && (
            <Button size='sm' text='Log in' theme='secondary' onClick={openLogInModal} />
          )}
          {!globalState.loginToken && (
            <Button
              size='sm'
              text='Sign up'
              className='hidden lg:block ml-2'
              onClick={openSignUpModal}
            />
          )}
          {globalState.loginToken && (
            <Button size='sm' text='Your account' onClick={() => navigate('/account')} />
          )}
          <div
            className='flex ml-3 h-1/2 flex-col hover:cursor-pointer md:hidden'
            onClick={openMenu}
          >
            <div className='w-5 h-0.5 bg-blue-900'></div>
            <div className='w-5 h-0.5 bg-blue-900 my-1'></div>
            <div className='w-5 h-0.5 bg-blue-900'></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
