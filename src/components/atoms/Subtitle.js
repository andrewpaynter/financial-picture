import React from 'react'

const Subtitle = ({ className = '', children }) => (
  <div className={`text-4xl font-logo ${className}`}>{children}</div>
)

export default Subtitle
