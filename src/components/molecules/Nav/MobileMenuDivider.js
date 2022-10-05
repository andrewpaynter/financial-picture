import React from 'react'

const MobileMenuDivider = (props) => {
  return (
    <div className='font-sans font-bold px-8 py-4 bg-slate-100 text-slate-500 text-sm'>
      {props.children}
    </div>
  )
}

export default MobileMenuDivider
