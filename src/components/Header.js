import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react'
import { Link } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

const Header = () => {
  return (
    <header>
      <h1>The Quiz Website</h1>
      <Navbar />
    </header>
  )
}

export default Header
