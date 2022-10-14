import React from 'react'
import { useNavigate } from 'react-router-dom'
import ParagraphText from '../components/atoms/ParagraphText'
import Title from '../components/atoms/Title'

const Features = () => {
  let navigate = useNavigate()
  return (
    <div className='flex flex-col content-center text-center px-12'>
      <Title className='mt-8'>Oops!</Title>
      <i className='fa-solid fa-gears fa-2xl mt-8'></i>
      <ParagraphText className='mt-12'>
        This page is under construction!{' '}
        <span
          onClick={() => navigate('/')}
          className='hover:cursor-pointer hover:underline hover:text-blue-700'
        >
          Click here
        </span>{' '}
        to return to the home page.
      </ParagraphText>
    </div>
  )
}

export default Features
