import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardCard = ({ children, nav }) => {
  let navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(nav)}
      className='relative bg-slate-50 border p-6 text-left drop-shadow-xl 
      rounded-md transition ease-in-out delay-100 hover:scale-105 hover:cursor-pointer'
    >
      {children}
    </div>
  )
}

export default DashboardCard
