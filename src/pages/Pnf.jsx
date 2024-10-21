import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header'

const Pnf = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px',height:'80vh'}} className='flex justify-center items-center flex-col'>
      <h1 className='font-bold text-8xl'>404</h1>
      <img width={'350px'} height={'150px'} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
      <h1 className='font-bold text-4xl'>Looks like you're Lost</h1>
      <p>Page not found.Click the home to redirect to home page</p>
      <Link to={'/'} className='bg-blue-600 p-2 text-white-rounded mt-3 rounded-xl'>Home</Link>
    </div>
    </>
  )
}

export default Pnf