import React from 'react'

const Title = ({ className = '', children }) => {
  return <div className={`text-5xl font-logo ${className}`}>{children}</div>
}

export default Title
