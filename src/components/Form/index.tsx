import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

type Field = 'firstName' | 'lastName' | 'phone' | 'email' | 'password'
type Link = '/' | '/register'

interface Props {
  fields: Field[]
  title: string
  defaultValues?: Partial<{ [key in Field]: string }>
  submitHandler: React.FormEventHandler
  link?: Link
}

function CustomForm({ fields, title, defaultValues, link, submitHandler }: Props) {
  return (
    <Form className='w-50 border border-2 rounded-2 py-3 px-5' onSubmit={submitHandler}>
      <h3 className='text-uppercase'>{title}</h3>
      <div className='mt-5' />
      {fields.map((field, idx) => (
        <FormGroup floating key={idx}>
          <Input
            id={field}
            name={field}
            placeholder={field.toUpperCase()}
            type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
            defaultValue={defaultValues && defaultValues[field]}
          />
          <Label for='firstName'>{field.toUpperCase()}</Label>
        </FormGroup>
      ))}
      <div className='d-flex justify-content-between'>
        <Button className='bg-primary py-2 px-5 text-uppercase border-0' type='submit'>
          Submit
        </Button>
        {link && (
          <Link to={link} className='btn bg-success py-2 px-5 text-white border-0'>
            {link === '/' ? 'Log in' : 'Register'}
          </Link>
        )}
      </div>
    </Form>
  )
}

export default CustomForm
