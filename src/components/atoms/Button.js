import React from 'react'

const Button = ({
  className = '',
  text = 'Button Text',
  theme = 'primary',
  size = 'md',
  onClick
}) => {
  const defaults =
    'rounded-full transition ease-in-out delay-50 font-bold hover:scale-105 hover:drop-shadow-md'

  const themes = {
    primary: `${defaults} bg-rose-400 text-white hover:bg-rose-500`,
    secondary: `${defaults} bg-slate-50 text-black drop-shadow hover:bg-white`
  }

  const sizes = {
    lg: 'text-xl px-9 py-3',
    md: 'text-base px-8 py-3',
    sm: 'text-sm px-6 py-2'
  }

  return (
    <button
      onClick={onClick}
      className={`${defaults} ${themes[theme]} ${sizes[size]} ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
