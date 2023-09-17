import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAddContactMutation } from '../../services'
import { useTypedSelector } from '../../store'
import CustomForm from '../../components/Form'

function Add() {
  const { user } = useTypedSelector((state) => state.auth)
  const [add, { isSuccess }] = useAddContactMutation()

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement

    add({
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      phone: target.phone.value,
      userId: user?.id as number,
    })
  }

  if (isSuccess) {
    return <Navigate to='/contacts' />
  }

  return (
    <CustomForm
      title='create contact'
      submitHandler={submitHandler}
      fields={['firstName', 'lastName', 'phone', 'email']}
    />
  )
}

export default Add
