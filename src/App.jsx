import React from 'react'

import './App.css'

import HomePage from './HomePage'
import Navbar from './Navbar'
import Properties from './Properties'
import Booking from './Booking'
import Payment  from './Payment'
import Footer from './Footer'

function App() {
 

  return (
   <>
   
   <div className=' p-10'>
   <Navbar />
   <HomePage />
   <Properties />
   </div>
  
   <Booking />
   <Payment />
   <Footer/>
   </>
  )
}

export default App
