import React from 'react'
import { Navbar, NavbarText } from 'reactstrap'
import { useTypedSelector } from '../../store'
import { Link } from 'react-router-dom'

function Header() {
  const { user, isAuth } = useTypedSelector((state) => state.auth)

  return (
    <Navbar light className='bg-primary py-3 px-5 mb-5'>
      <NavbarText className='text-white'>{user?.email ? user.email : `welcome, guest`}</NavbarText>
      {isAuth ? (
        <Link to='/contacts' className='btn bg-success text-white py-2 px-4'>
          Contacts
        </Link>
      ) : (
        <NavbarText className='text-white text-uppercase'>react app</NavbarText>
      )}
    </Navbar>
  )
}

export default Header
