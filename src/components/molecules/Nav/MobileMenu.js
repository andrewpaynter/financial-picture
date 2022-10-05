import React, { useContext, useEffect} from 'react'
import { MobileMenuContext } from '../../../contexts/MobileMenuContext'
import MobileMenuDivider from './MobileMenuDivider'
import MobileMenuItem from './MobileMenuItem'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../../../contexts/AppContext'

const MobileMenu = () => {
  const { menuIsOpen, closeMenu } = useContext(MobileMenuContext)
  const {globalState, dispatch} = useContext(AppContext)

  useEffect(() => {
    document.documentElement.style.overflow = menuIsOpen ? 'hidden' : 'visible'
  }, [menuIsOpen])

  let navigate = useNavigate()

  const nav = (path) => {
    navigate(path)
    closeMenu()
  }

  const logOut = () => {
    dispatch({type: 'LOG_OUT'})
    closeMenu()
  }
  
  if (!menuIsOpen) return null
  return (
    <div className='z-20 bg-white w-full h-full fixed top-0 left-0 overflow-y-auto'>
      <div className=' px-8 py-4 border-b top-0 bg-white z-10 flex justify-between items-center drop-shadow-lg'>
        <div className='flex items-center content-center'>
          <i className='fa-solid fa-user-astronaut text-3xl text-rose-400 mr-2'></i>
          <h2 className='font-logo text-3xl text-blue-900'>Monarch</h2>
        </div>
        <div className='hover:cursor-pointer' onClick={closeMenu}>
          <i class='fa-solid fa-x text-xl '></i>
        </div>
      </div>

      {(globalState.loginToken) ? <div>
        <MobileMenuDivider>Your Monarch</MobileMenuDivider>
        <MobileMenuItem onClick={() => nav('/dashboard')}>Dashboard</MobileMenuItem>
        <MobileMenuItem onClick={() => nav('/account')}>Account</MobileMenuItem>
        <MobileMenuItem onClick={() => nav('/transactions')}>Transactions</MobileMenuItem>
        <MobileMenuItem onClick={logOut}>Log Out</MobileMenuItem>
        <MobileMenuDivider>Resources</MobileMenuDivider>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
        <MobileMenuItem>Thing 1</MobileMenuItem>
      </div> : 
      <div>
      <MobileMenuDivider>Learn</MobileMenuDivider>
      <MobileMenuItem>What We Do</MobileMenuItem>
      <MobileMenuItem>Who We Are</MobileMenuItem>
      <MobileMenuItem>Contact Us</MobileMenuItem>
      <MobileMenuDivider>Resources</MobileMenuDivider>
      <MobileMenuItem>Thing 1</MobileMenuItem>
      <MobileMenuItem>Thing 1</MobileMenuItem>
      <MobileMenuItem>Thing 1</MobileMenuItem>
      <MobileMenuItem>Thing 1</MobileMenuItem>
    </div>
      }
    </div>
  )
}

export default MobileMenu
