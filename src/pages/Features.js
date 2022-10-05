import React from 'react'
import ParagraphText from '../components/atoms/ParagraphText'
import Title from '../components/atoms/Title'

const Features = () => {
  return (
    <div className='flex flex-col content-center text-center px-12'>
      <Title className='mt-8'>Features</Title>
      <ParagraphText className='mt-6'>
        This page is for testing purposes. You probably navigated to this page by clicking on a
        link. Eventually, all links will point to their relevant pages.
      </ParagraphText>
    </div>
  )
}

export default Features
