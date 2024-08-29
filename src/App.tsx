import React from 'react'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <header>Header</header>
      <div className='main'>
        <Outlet />
      </div>
      <footer>Footer</footer>
    </>
  )
}

export default App
