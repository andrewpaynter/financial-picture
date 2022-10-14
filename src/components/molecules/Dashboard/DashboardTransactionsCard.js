import React, { useState, useEffect, useContext } from 'react'
import DashboardCard from './DashboardCard'
import Subtitle from '../../atoms/Subtitle'
import ParagraphText from '../../atoms/ParagraphText'
import { AppContext } from '../../../contexts/AppContext'

const DashboardTransactionCard = () => {
  const { globalState, dispatch } = useContext(AppContext)
  const [transactionData, setTransactionData] = useState([])
  useEffect(() => {
    dispatch({ type: 'GET_TRANSACTIONS', token: globalState.loginToken })
  }, [])
  useEffect(() => {
    if (globalState.transactionData && globalState.transactionData.constructor === Array)
      setTransactionData(() => {
        return globalState.transactionData
          .sort((a, b) => {
            if (a.date < b.date) return -1
            if (a.date > b.date) return 1
            return 0
          })
          .slice(0, 5)
          .map((transaction) => {
            return (
              <tr
                key={transaction._id}
                className='p-4 border-b border-slate-200 grid grid-cols-2 items-center justify-around text-left'
              >
                <td className='flex'>{transaction.title}</td>
                <td className='text-right'>${transaction.amount}</td>
              </tr>
            )
          })
      })
  }, [globalState.transactionData])

  return (
    <DashboardCard nav={'/transactions'}>
      <div className='flex flex-col m-4 mb-8 h-full'>
        <div className='flex justify-between lg:items-end flex-col lg:flex-row-reverse '>
          <Subtitle>Transactions</Subtitle>
          <ParagraphText className='lg:text-right'>Most Recent:</ParagraphText>
        </div>
        <table className='table-auto border mx-auto border-slate-400 bg-white mt-12 text-center'>
          <tbody className='flex flex-col'>{transactionData}</tbody>
        </table>
        <ParagraphText className='bg-white mt-4 p-4 rounded-xl border font-bold hover:cursor-pointer hover:underline hover:text-blue-600'>
          View all transactions
        </ParagraphText>
      </div>
    </DashboardCard>
  )
}

export default DashboardTransactionCard
