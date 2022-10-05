import React, { useEffect, useState, useContext } from 'react'
import Button from '../../atoms/Button'
import Subtitle from '../../atoms/Subtitle'
import { useNavigate } from 'react-router-dom'
import { ModalContext } from '../../../contexts/ModalContext'
import { AppContext } from '../../../contexts/AppContext'

const SignUpModalContent = () => {
  let navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const { globalState, dispatch } = useContext(AppContext)
  const { closeModal } = useContext(ModalContext)
  const [valid, setValid] = useState({
    email: true,
    firstName: true,
    lastName: true,
    password: true,
    confirmPassword: true
  })

  useEffect(() => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email))
      setValid((prevValid) => ({ ...prevValid, email: true }))
    if (formData.firstName.match(/^[A-Za-z]+$/))
      setValid((prevValid) => ({ ...prevValid, firstName: true }))
    if (formData.lastName.match(/^[A-Za-z]+$/))
      setValid((prevValid) => ({ ...prevValid, lastName: true }))
    if (formData.password.length > 6) setValid((prevValid) => ({ ...prevValid, password: true }))
    if (formData.confirmPassword == formData.password && formData.confirmPassword.length > 6)
      setValid((prevValid) => ({ ...prevValid, confirmPassword: true }))
  }, [formData])

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleKeyDown(event) {
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
      event.preventDefault()
      submit()
    }
  }

  const validateInputs = () => {
    let submitReady = true

    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email) ||
      formData.email.length == 0
    ) {
      setValid((prevValid) => ({ ...prevValid, email: false }))
      submitReady = false
    }
    if (!formData.firstName.match(/^[A-Za-z]+$/) || formData.firstName.length == 0) {
      setValid((prevValid) => ({ ...prevValid, firstName: false }))
      submitReady = false
    }
    if (!formData.lastName.match(/^[A-Za-z]+$/)) {
      setValid((prevValid) => ({ ...prevValid, lastName: false }))
      submitReady = false
    }
    if (formData.password.length < 7) {
      setValid((prevValid) => ({ ...prevValid, password: false }))
      submitReady = false
    }
    if (formData.confirmPassword !== formData.password || formData.confirmPassword.length == 0) {
      setValid((prevValid) => ({ ...prevValid, confirmPassword: false }))
      submitReady = false
    }
    return submitReady
  }

  const submit = () => {
    if (validateInputs()) {
      dispatch({
        type: 'SIGN_UP',
        email: formData.email,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password
      })
    }
  }

  useEffect(() => {
    if (globalState.loginToken) {
      closeModal()
      navigate('/dashboard')
    }
  }, [globalState.loginToken])

  if (globalState.loginToken) return null

  return (
    <div className='w-72 min-h-[32rem] pt-4'>
      <Subtitle>Sign Up</Subtitle>
      <div className='flex flex-col mt-6'>
        <form onKeyDown={handleKeyDown} className='flex flex-col '>
          <input
            className={`px-1 py-2 rounded-md border-2 outline-0 ${
              valid.firstName ? 'border-white' : 'border-rose-600'
            }`}
            type='text'
            placeholder='First Name'
            onChange={handleChange}
            name='firstName'
            value={formData.firstName}
          />
          <input
            className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${
              valid.lastName ? 'border-white' : 'border-rose-600'
            }`}
            type='text'
            placeholder='Last Name'
            onChange={handleChange}
            name='lastName'
            value={formData.lastName}
          />
          <input
            className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${
              valid.email ? 'border-white' : 'border-rose-600'
            }`}
            type='email'
            placeholder='Email Address'
            onChange={handleChange}
            name='email'
            value={formData.email}
          />
          <input
            className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${
              valid.password ? 'border-white' : 'border-2 border-rose-600'
            }`}
            type='password'
            placeholder='Password (at least 7 characters)'
            onChange={handleChange}
            name='password'
            value={formData.password}
          />
          <input
            className={`mt-4 px-1 py-2 rounded-md border-2 outline-0 ${
              valid.confirmPassword ? 'border-white' : 'border-2 border-rose-600'
            }`}
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange}
            name='confirmPassword'
            value={formData.confirmPassword}
          />
        </form>
        <Button text='Sign Up' size='sm' onClick={submit} className='mt-8' />
        <div className='text-rose-600 mt-4'>{globalState.auth.failMessage}</div>
      </div>
    </div>
  )
}

export default SignUpModalContent
