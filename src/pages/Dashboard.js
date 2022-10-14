import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import Title from '../components/atoms/Title'
import ParagraphText from '../components/atoms/ParagraphText'
import DashboardCard from '../components/molecules/Dashboard/DashboardCard'
import Subtitle from '../components/atoms/Subtitle'

import DashboardTransactionCard from '../components/molecules/Dashboard/DashboardTransactionsCard'
import {
  CollaborateImg,
  InvestmentsImg,
  PersonalizedImg,
  PlanImg,
  SecurityImg,
  UnderstandAndGrowImg
} from '../images'

const Dashboard = () => {
  const { globalState } = useContext(AppContext)

  return (
    <div className='pb-32 pt-16 bg-slate-100 min-h-screen'>
      <div
        className='flex flex-col px-2 text-center items-center mx-10
      md:mx-auto md:max-w-screen-md lg:max-w-screen-lg pb-32'
      >
        <Title>Dashboard</Title>
        <ParagraphText className='mt-6'>
          Welcome back, {globalState.userInfo.firstName}! Here's your account at a glance.
        </ParagraphText>

        <div className='w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-8 xl:gap-16 mt-16'>
          <DashboardTransactionCard />
          <DashboardCard nav={'/features'}>
            <div className='flex flex-col-reverse md:flex-col justify-center content-center m-4'>
              <div className=' bg-white p-8 rounded-xl border mt-4 md:mt-0'>
                <Subtitle className={`text-center lg:text-left`}>Personalized Advice</Subtitle>
                <ParagraphText className={`mt-2 text-center lg:text-left`}>
                  Answer a few key questions about yourself to get advice on how to build financial
                  resilience and make progress toward your goals.
                </ParagraphText>
                <ParagraphText className='text-right mt-2 font-bold hover:underline hover:text-blue-600'>
                  Get advice
                </ParagraphText>
              </div>
              <div className='flex'>
                <img alt='monarch demo' src={PersonalizedImg} className={`w-1/2 flex mx-auto`} />
                <img alt='monarch demo' src={PlanImg} className={`w-1/2 flex mx-auto`} />
              </div>
            </div>
          </DashboardCard>
          <DashboardCard nav={'/features'}>
            <div className='flex flex-col md:flex-col-reverse justify-center content-center m-4'>
              <div className=' bg-white p-8 rounded-xl border md:mt-4'>
                <Subtitle className={`text-center lg:text-left`}>Security Checkup</Subtitle>
                <ParagraphText className={`mt-2 text-center lg:text-left`}>
                  Set up two factor authentication, add a trusted account, and answer security
                  questions to secure your account now.
                </ParagraphText>
                <ParagraphText className='text-right mt-2 font-bold hover:underline hover:text-blue-600'>
                  Secure your account
                </ParagraphText>
              </div>
              <div className='flex'>
                <img alt='monarch demo' src={SecurityImg} className={`w-1/2 flex mx-auto`} />
                <img alt='monarch demo' src={CollaborateImg} className={`w-1/2 flex mx-auto`} />
              </div>
            </div>
          </DashboardCard>
          <DashboardCard nav={'/features'}>
            <div className='flex flex-col-reverse md:flex-col justify-center content-center m-4'>
              <div className=' bg-white p-8 rounded-xl border mt-4 md:mt-0'>
                <Subtitle className={`text-center lg:text-right`}>Investments</Subtitle>
                <ParagraphText className={`mt-2 text-center lg:text-right`}>
                  Set up your investment accounts to track your investments, set goals, and see your
                  net worth at a glance.
                </ParagraphText>
                <ParagraphText className='text-right md:text-left mt-2 font-bold hover:underline hover:text-blue-600'>
                  Connect accounts
                </ParagraphText>
              </div>
              <div className='flex'>
                <img alt='monarch demo' src={InvestmentsImg} className={`w-1/2 flex mx-auto`} />
                <img
                  alt='monarch demo'
                  src={UnderstandAndGrowImg}
                  className={`w-1/2 flex mx-auto`}
                />
              </div>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
