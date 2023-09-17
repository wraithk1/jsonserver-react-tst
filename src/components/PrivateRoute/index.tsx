import React from 'react'
import { useTypedSelector } from '../../store'
import { Navigate } from 'react-router-dom'

function RequireAuth({children}: {children: React.JSX.Element}) {
  const {isAuth} = useTypedSelector((state) => state.auth)

  if(!isAuth) {
    return <Navigate to='/' />
  }

  return children
}

export default RequireAuth
