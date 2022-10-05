import React, { useContext } from 'react'
import Title from '../../atoms/Title'
import ParagraphText from '../../atoms/ParagraphText'
import Button from '../../atoms/Button'
import { ModalContext } from '../../../contexts/ModalContext'
import SignUpModalContent from '../Modal/SignUpModalContent'
import { useNavigate } from 'react-router-dom'

const Section = ({
  title = 'Section Title',
  image,
  isReversed = false,
  svg = <i className='fa-solid fa-layer-group'></i>,
  children
}) => {
  const { setModal, openModal } = useContext(ModalContext)
  let navigate = useNavigate()

  const openSignUpModal = () => {
    setModal(<SignUpModalContent />)
    openModal()
  }

  return (
    <div className='flex flex-col lg:flex-row justify-center content-center mt-16'>
      <img
        src={image}
        className={`sm:max-w-[620px] md:max-w-[750px] lg:max-w-screen-sm sm:mx-auto ${
          isReversed ? 'lg:order-last' : ''
        }`}
      />
      <div>
        <div
          className={`flex bg-rose-100 text-red-500 text-2xl w-16 h-16 mr-auto ml-auto rounded-full mt-12 justify-center items-center ${
            isReversed ? 'lg:mr-0' : 'lg:ml-0'
          }`}
        >
          {svg}
        </div>
        <Title className={`mt-8 ${isReversed ? 'lg:text-right' : 'lg:text-left'}`}>{title}</Title>
        <ParagraphText className={`mt-6 ${isReversed ? 'lg:text-right' : 'lg:text-left'}`}>
          {children}
        </ParagraphText>
        <div className='flex space-x-5 justify-center lg:justify-start mt-6'>
          <Button text='Sign up now' onClick={openSignUpModal} />
          <Button theme='secondary' text='Learn more' onClick={() => navigate('/features')} />
        </div>
      </div>
    </div>
  )
}

export default Section
