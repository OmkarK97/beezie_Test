import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Content from './Content'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Hero />
        <Content />
    </div>
  )
}

export default Layout