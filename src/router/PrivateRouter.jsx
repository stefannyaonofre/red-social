import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({isAuthenticate}) => {
  return (
    <div>
        {
            isAuthenticate? <Outlet /> : <Navigate to={'/login'}/>
        }
    </div>
  )
}

export default PrivateRouter