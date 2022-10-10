import React from 'react'
import { AppstoreImg, GooglePlayImg } from '../../../images'
import ParagraphText from '../../atoms/ParagraphText'
import NavLink from '../../atoms/NavLink'

const Footer = () => {
  return (
    <footer className='mb-32 flex flex-col lg:flex-row lg:max-w-screen-lg lg:mx-auto mt-auto'>
      <div className='flex flex-col items-center lg:items-start lg:ml-20'>
        <div className='flex mt-16 hover:cursor-pointer'>
          <i className='fa-solid fa-user-astronaut text-4xl text-rose-400 mr-4'></i>
          <h2 className='font-logo text-5xl text-blue-900'>Monarch</h2>
        </div>

        <div className='flex mt-8'>
          <img alt='app store' src={AppstoreImg} className='mr-4 hover:cursor-pointer' />
          <img alt='google play store' src={GooglePlayImg} className='hover:cursor-pointer' />
        </div>

        <div className='flex mt-8'>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-twitter'></i>
          </div>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-reddit'></i>
          </div>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center mr-2 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-facebook'></i>
          </div>
          <div
            className={`flex bg-rose-100 text-red-500 text-xl w-12 h-12 rounded-full justify-center items-center 
            transition ease-in-out delay-100 hover:cursor-pointer hover:bg-red-500 hover:text-rose-100`}
          >
            <i class='fa-brands fa-linkedin'></i>
          </div>
        </div>
      </div>
      <div className='mt-4 lg:mt-8 flex flex-col lg:flex-row text-center lg:text-left'>
        <div className='lg:ml-16 mt-6'>
          <ParagraphText className='font-bold'>Learn More</ParagraphText>
          <NavLink size='lg'>What We Do</NavLink>
          <NavLink size='lg'>Who We Are</NavLink>
          <NavLink size='lg'>How to Join</NavLink>
          <NavLink size='lg'>Terms of Service</NavLink>
        </div>
        <div className='lg:ml-16 mt-6'>
          <ParagraphText className='font-bold'>Our Product</ParagraphText>
          <NavLink size='lg'>What's New</NavLink>
          <NavLink size='lg'>Download</NavLink>
          <NavLink size='lg'>Pricing</NavLink>
          <NavLink size='lg'>FAQ</NavLink>
          <NavLink size='lg'>Plans</NavLink>
        </div>
        <div className='lg:ml-16 mt-6'>
          <ParagraphText className='font-bold'>Our Team</ParagraphText>
          <NavLink size='lg'>About</NavLink>
          <NavLink size='lg'>Contact Us</NavLink>
          <ParagraphText className='font-bold mt-4'>Press</ParagraphText>
          <NavLink size='lg'>Press Releases</NavLink>
          <NavLink size='lg'>Contact</NavLink>
        </div>
      </div>
    </footer>
  )
}

export default Footer
