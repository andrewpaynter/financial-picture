import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../../contexts/AppContext'
import TransactionRow from './TransactionRow'
import TransactionHeader from './TransactionHeader'

const TransactionChart = () => {
  const [transactionData, setTransactionData] = useState([])
  const { globalState, dispatch } = useContext(AppContext)
  const [formData, setFormData] = useState({ query: '', queryValid: true })
  const [activeSort, setActiveSort] = useState({ sortBy: '', inverse: false })

  useEffect(() => {
    dispatch({ type: 'GET_TRANSACTIONS', token: globalState.loginToken })
  }, [])
  useEffect(() => {
    if (globalState.transactionData) setTransactionData(globalState.transactionData)
  }, [globalState.transactionData])

  function search(arr) {
    if (formData.query.length === 0) return arr
    return arr.filter((transaction) => {
      return (
        (formData.query.length <= 2 &&
          transaction.title.toLowerCase().startsWith(formData.query.toLowerCase())) ||
        (formData.query.length > 2 &&
          transaction.title.toLowerCase().includes(formData.query.toLowerCase()))
      )
    })
  }

  function handleFormChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  function sortData(sortBy, adapter) {
    const sortedData = [...transactionData]
    if (adapter) {
      sortedData.sort((a, b) => {
        if (adapter(a[sortBy]) < adapter(b[sortBy])) return -1
        if (adapter(a[sortBy]) > adapter(b[sortBy])) return 1
        return 0
      })
    } else {
      sortedData.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return -1
        if (a[sortBy] > b[sortBy]) return 1
        return 0
      })
    }
    if (sortBy === activeSort.sortBy && !activeSort.inverse) {
      sortedData.reverse()
      setActiveSort((prevActiveSort) => ({ ...prevActiveSort, inverse: true }))
    } else {
      setActiveSort((prevActiveSort) => ({ ...prevActiveSort, sortBy, inverse: false }))
    }
    setTransactionData(sortedData)
  }

  return (
    <div className='flex flex-col items-end'>
      <input
        className={`text-right lg:w-1/4 px-1 py-2 rounded-md border-2 outline-0
        ${formData.queryValid ? 'border-white' : 'border-rose-600'}`}
        type='search'
        placeholder='Search'
        onChange={handleFormChange}
        name='query'
        value={formData.query}
      />
      <table className='table-auto border border-slate-400 bg-slate-50 mt-4 text-center'>
        <TransactionHeader activeSort={activeSort} sortData={sortData} />
        <tbody className='flex flex-col'>
          {search(transactionData).map((transaction, transactionIndex) => {
            return (
              <TransactionRow
                key={transactionIndex}
                transaction={transaction}
                transactionIndex={transactionIndex}
                setTransactionData={setTransactionData}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TransactionChart
