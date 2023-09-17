import React from 'react'
import { useLoginMutation } from '../../services/auth'
import { Navigate } from 'react-router-dom'
import CustomForm from '../../components/Form'

function Login() {
  const [login, { isSuccess }] = useLoginMutation()

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement

    login({
      email: target.email.value,
      password: target.password.value,
    })
  }

  if (isSuccess) {
    return <Navigate to='/contacts' />
  }

  return <CustomForm title='login' link='/register' submitHandler={submitHandler} fields={['email', 'password']} />
}

export default Login
