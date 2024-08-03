import React from 'react'
import Header from '../components/Header'
import Specials from '../components/Specials'
import CustomerSay from '../components/CustomerSay'
import About from '../components/About'

export default function Homepage() {
  return (
    <main>
      <Header />
      <Specials />
      <CustomerSay />
      <About />
    </main>
  )
}
