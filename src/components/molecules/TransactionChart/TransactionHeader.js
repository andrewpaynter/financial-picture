import React from 'react'
import TransactionHeaderItem from './TransactionHeaderItem'

const TransactionHeader = ({ activeSort, sortData }) => {
  const locationAdapter = (prop) => prop.city

  return (
    <thead>
      <tr className='py-2 px-4 bg-white border-b border-slate-300 
      grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center'>
        <TransactionHeaderItem 
          onChange={sortData} 
          activeSort={activeSort}>
          Date
        </TransactionHeaderItem>
        <TransactionHeaderItem onChange={sortData} activeSort={activeSort}>
          Title
        </TransactionHeaderItem>
        <TransactionHeaderItem
          onChange={() => sortData('location', locationAdapter)}
          activeSort={activeSort}
          className='hidden lg:inline'
        >
          Location
        </TransactionHeaderItem>
        <TransactionHeaderItem 
        onChange={sortData} 
        activeSort={activeSort}
        className='hidden md:inline'>
          Category
        </TransactionHeaderItem>
        <TransactionHeaderItem onChange={sortData} activeSort={activeSort}>
          Amount
        </TransactionHeaderItem>
        <th className='hidden lg:inline'>Tags</th>
      </tr>
    </thead>
  )
}

export default TransactionHeader
