import React from 'react'

const MobileMenuItem = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='font-sans font-bold px-8 py-6 border-b text-xl flex justify-between items-center hover:cursor-pointer'
    >
      {children}
      <i class='fa-solid fa-chevron-right text-slate-500'></i>
    </div>
  )
}

export default MobileMenuItem
