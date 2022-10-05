import React, { useContext } from 'react'
import { AppContext } from '../../../contexts/AppContext'

const TransactionCategorySelector = ({ transaction, setTransactionData }) => {
  const { globalState } = useContext(AppContext)

  function handleCategoryChange(event) {
    setTransactionData((prevTransactionData) => {
      return prevTransactionData.map((transaction) => {
        if (transaction._id == event.target.id) {
          return {
            ...transaction,
            category: event.target.value
          }
        } else return transaction
      })
    })
  }

  return (
    <select
      id={transaction._id}
      value={transaction.category}
      onChange={handleCategoryChange}
      className='bg-slate-50 text-center'
    >
      {globalState.transactionCategories.map((category) => {
        return (
          <option key={category} value={category}>
            {category}
          </option>
        )
      })}
    </select>
  )
}

export default TransactionCategorySelector
