import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useEditContactMutation, useGetContactQuery } from '../../services'
import CustomForm from '../../components/Form'

function Edit() {
  const { id } = useParams()
  const { data } = useGetContactQuery(parseInt(id as string))

  const [edit, { isSuccess }] = useEditContactMutation()

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement

    edit({
      id: (data as Contact).id,
      userId: (data as Contact).userId,
      firstName: target.firstName.value,
      lastName: target.lastName.value,
      email: target.email.value,
      phone: target.phone.value,
    })
  }

  if (isSuccess) {
    return <Navigate to='/contacts' />
  }

  return (
    <CustomForm
      title='edit contact'
      submitHandler={submitHandler}
      fields={['firstName', 'lastName', 'phone', 'email']}
      defaultValues={data}
    />
  )
}

export default Edit
