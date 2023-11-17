// Welcome.js
import React from 'react'
import { useParams } from 'react-router-dom'
import Offerings from './Offerings'
import { AboutHeader, AboutContent } from './About' // Named imports

const Welcome = () => {
  const { name } = useParams()

  const getOfferings = () => {
    // You can customize the offerings based on the user's name or other conditions
    if (name === 'John') {
      return ['Discount on Premium Membership', 'Exclusive Content Access']
    } else {
      return ['Free Trial', 'Weekly Newsletter']
    }
  }

  const offerings = getOfferings()

  return (
    <div>
      <h2>Welcome, {name || 'Guest'}!</h2>
      <p>Thank you for visiting our website.</p>
      <Offerings offerings={offerings} />
      <hr />
      <AboutHeader />
      <AboutContent />
    </div>
  )
}

export default Welcome
