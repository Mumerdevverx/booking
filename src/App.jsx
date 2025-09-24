import React from 'react'

import './App.css'

import HomePage from './HomePage'
import Header from './Header'
import Properties from './Properties'
import Booking from './Booking'
import Payment  from './Payment'
import Footer from './Footer'

function App() {
 

  return (
   <>
   
   
   <Header />
   <div className='pt-16'>
   <HomePage />
   </div>
   <Properties />
  
  
   <Booking />
   <Payment />
   <Footer/>
   </>
  )
}

export default App
