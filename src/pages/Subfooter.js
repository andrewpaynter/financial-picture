import React, { useContext } from 'react'
import Title from '../components/atoms/Title'
import ParagraphText from '../components/atoms/ParagraphText'
import Button from '../components/atoms/Button'
import SignUpModalContent from '../components/molecules/Modal/SignUpModalContent'
import { ModalContext } from '../contexts/ModalContext'

const Subfooter = () => {
  const { setModal, openModal } = useContext(ModalContext)

  const openSignUpModal = () => {
    setModal(<SignUpModalContent />)
    openModal()
  }

  return (
    <div className='bg-slate-800 py-32 px-8'>
      <div className='sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto flex flex-col'>
        <Title className='text-center text-white'>The modern way to manage your money</Title>
        <ParagraphText className='text-center text-slate-400 mt-8'>
          Monarch is an all-in-one platform that brings together everything you need to optimize
          your finances. Join thousands of families using Monarch to achieve financial resilience.
        </ParagraphText>
        <div className='mx-auto mt-8'>
          <Button text='Sign up now' onClick={openSignUpModal} />
          <Button className='ml-4' text='Browse features' theme='secondary' />
        </div>
      </div>
    </div>
  )
}

export default Subfooter
