import React from 'react'
import { useRegisterMutation } from '../../services/auth'
import { Navigate } from 'react-router-dom'
import CustomForm from '../../components/Form'

function Register() {
  const [register, {isSuccess}] = useRegisterMutation()

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement

    register({
      email: target.email.value,
      password: target.password.value,
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      phone: target.phone.value,
    })
  }

  if(isSuccess) {
    return <Navigate to='/contacts' />
  }

  return (
    <CustomForm
      title='register'
      submitHandler={submitHandler}
      fields={['email', 'password', 'firstName', 'lastName', 'phone']}
      link='/'
    />
  )
}

export default Register
