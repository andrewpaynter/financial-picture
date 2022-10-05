import React from 'react'
import TagContainer from './TagContainer'
import TransactionCategorySelector from './TransactionCategorySelector'

const TransactionRow = ({ transaction, transactionIndex, setTransactionData }) => {
  const date = new Date(transaction.date)
  return (
    <tr className='p-4 border-b border-slate-200 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center'>
      <td>
        {`${date.getMonth()}/${date.getDate()}`}
        <span className='hidden md:inline'>{`/${date.getFullYear()}`}</span>
      </td>
      <td>{transaction.title}</td>
      <td className='hidden lg:block'>{transaction.location.city}</td>
      <td className='hidden md:block'>
        <TransactionCategorySelector
          transaction={transaction}
          setTransactionData={setTransactionData}
        />
      </td>
      <td>${transaction.amount}</td>
      <td className='hidden lg:block'>
        <TagContainer
          transactionIndex={transactionIndex}
          tags={transaction.tags}
          setTransactionData={setTransactionData}
        />
      </td>
    </tr>
  )
}

export default TransactionRow
