import React from 'react'
import Navbar from './NavBar'

function Home() {
  return (
    <>
    <Navbar/>
    <div className='h-screen w-full bg-red-500'>
        <div >
            <h1 className='text-white'>This is home page</h1>
        </div>
    </div>
   </>
  )
}

export default Home