import React from 'react'

const ParagraphText = ({ className = '', children }) => {
  return <p className={`text-lg leading-loose ${className}`}>{children}</p>
}

export default ParagraphText
