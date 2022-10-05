import React from 'react'
import Title from '../components/atoms/Title'
import TransactionChart from '../components/molecules/TransactionChart/TransactionChart'

const Transactions = () => {
  return (
    <div className='pb-32 pt-16 bg-slate-100'>
      <div className='flex flex-col w-2/3 mx-auto'>
        <Title>Transactions</Title>
        <TransactionChart />
      </div>
    </div>
  )
}

export default Transactions
