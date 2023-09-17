import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/Auth/login'
import Contacts from '../../pages/Contacts'
import Register from '../../pages/Auth/register'
import RequireAuth from '../PrivateRoute'
import Add from '../../pages/Contacts/add'
import Edit from '../../pages/Contacts/edit'

function Page() {
  return (
    <Routes>
      <>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/contacts'
          element={
            <RequireAuth>
              <Contacts />
            </RequireAuth>
          }
        />
        <Route
          path='/contacts/add'
          element={
            <RequireAuth>
              <Add />
            </RequireAuth>
          }
        />
        <Route
          path='/contacts/edit/:id'
          element={
            <RequireAuth>
              <Edit />
            </RequireAuth>
          }
        />
        <Route path='*' element={<div>404 - Not Found</div>} />
      </>
    </Routes>
  )
}

export default Page
