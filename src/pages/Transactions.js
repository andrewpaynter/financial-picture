import React from 'react'
import Title from '../components/atoms/Title'
import TransactionChart from '../components/molecules/TransactionChart/TransactionChart'

const Transactions = () => {
  return (
    <div className='pb-32 pt-16 bg-slate-100 min-h-screen'>
      <div className='flex flex-col px-4 sm:px-8 md:px-16 mx-auto md:max-w-screen-md lg:max-w-screen-xl'>
        <Title>Transactions</Title>
        <TransactionChart />
      </div>
    </div>
  )
}

export default Transactions
