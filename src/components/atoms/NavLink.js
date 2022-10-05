import React from 'react'

const NavLink = ({ onClick, className = '', size = 'md', weight = 'normal', children }) => {
  const defaults =
    'mr-4 transition ease-in-out delay-50 hover:text-orange-500 active:text-orange-700 hover:cursor-pointer'

  const weights = {
    bold: 'font-bold',
    normal: 'font-normal',
    light: 'font-light'
  }

  const sizes = {
    xl: 'text-xl pt-3',
    lg: 'text-lg pt-2',
    md: 'text-base pt-2',
    sm: 'text-sm pt-1'
  }
  return (
    <div onClick={onClick} className={`${defaults} ${sizes[size]} ${weights[weight]} ${className}`}>
      {children}
    </div>
  )
}

export default NavLink
