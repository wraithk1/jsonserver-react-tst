import React from 'react'
import './App.css'
import Header from './components/Layout/header'
import { Container } from 'reactstrap'
import Page from './components/Layout/page'
import { BrowserRouter } from 'react-router-dom'

const containerStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  minHeight: '80vh',
  flexDirection: 'column',
  alignItems: 'center',
}

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <Header />
        <Container style={containerStyle}>
          <Page />
        </Container>
      </div>
    </BrowserRouter>
  )
}

export default App
