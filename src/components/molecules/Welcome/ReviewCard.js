import React from 'react'

const ReviewCard = ({ name = 'User Name', review = 'User Review', stars = 5 }) => {
  let starArray = new Array(stars).fill('★')
  return (
    <div className='relative bg-white border p-6 text-left drop-shadow-xl w-full rounded-md transition ease-in-out delay-100 hover:scale-105 hover:cursor-default'>
      <p>{review}</p>
      <div className='flex justify-between items-center mt-4'>
        <p className='font-bold'>{name}</p>
        <p className='text-amber-300 text-2xl'>{starArray}</p>
      </div>
    </div>
  )
}

export default ReviewCard
