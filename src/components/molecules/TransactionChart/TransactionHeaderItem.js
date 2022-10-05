import React from 'react'

const TransactionHeaderItem = ({ children, onChange, activeSort, className }) => {
  return (
    <th
      className={`hover:scale-105 hover:cursor-pointer transition ease-in-out delay-100 ${className}`}
      onClick={() => onChange(children.toLowerCase())}
    >
      {children}
      <span className={`${activeSort.sortBy !== children.toLowerCase() && 'hidden'}`}>
        {!activeSort.inverse ? '▼' : '▲'}
      </span>
    </th>
  )
}

export default TransactionHeaderItem
