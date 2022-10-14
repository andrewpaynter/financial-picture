import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext'
import Button from '../components/atoms/Button'
import Title from '../components/atoms/Title'
import ParagraphText from '../components/atoms/ParagraphText'
import DashboardCard from '../components/molecules/Dashboard/DashboardCard'
import Subtitle from '../components/atoms/Subtitle'
import TransactionChart from '../components/molecules/TransactionChart/TransactionChart'
import DashboardTransactionCard from '../components/molecules/Dashboard/DashboardTransactionsCard'

const Dashboard = () => {
  const { globalState, dispatch } = useContext(AppContext)

  return (
    <div
      className='flex flex-col px-2 text-center items-center mx-10 pt-16
      md:mx-auto md:max-w-screen-md lg:max-w-screen-lg pb-32'
    >
      <Title>Dashboard</Title>
      <ParagraphText className='mt-6'>
        Welcome back, {globalState.userInfo.firstName}! Here's your account at a glance.
      </ParagraphText>

      <div className='w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-6 mt-16'>
        <DashboardTransactionCard />
        <DashboardCard></DashboardCard>
        <DashboardCard></DashboardCard>
        <DashboardCard></DashboardCard>
      </div>
    </div>
  )
}

export default Dashboard
