import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonGroup, Input, InputGroup, InputGroupText, Table } from 'reactstrap'
import { useDeleteContactMutation, useGetContactsQuery } from '../../services'

function Contacts() {
  const [search, setSearch] = useState('')
  const { data } = useGetContactsQuery(search)
  const [remove] = useDeleteContactMutation()

  return (
    <>
      <div className='mb-5 w-100'>
        <InputGroup>
          <InputGroupText>@</InputGroupText>
          <Input
            placeholder='search'
            onChange={(e: React.ChangeEvent) => {
              setSearch((e.target as HTMLInputElement).value)
            }}
          />
        </InputGroup>
      </div>
      {data == undefined || data.length <= 0 ? (
        <div className='w-full d-flex justify-content-center'>Your contacts list is empty</div>
      ) : (
        <>
          <Table striped className='mt-3'>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((contact) => (
                <tr key={contact.id}>
                  <th scope='row'>{contact.id}</th>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>
                    <ButtonGroup>
                      <Link to={`edit/${contact.id}`}>
                        <Button color='primary'>Edit</Button>
                      </Link>
                      <Button
                        color='danger'
                        onClick={() => {
                          remove(contact.id)
                        }}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
      <Link to='add' className='btn bg-primary py-2 px-5 text-white text-uppercase border-0'>
        Add contact
      </Link>
    </>
  )
}

export default Contacts
