// Welcome.js
import React from 'react'
import { useParams } from 'react-router-dom'

const offerings = getOfferings()
{
  return (
    <div>
      <h2>Welcome, {'Guest'}!</h2>
      <p>Thank you for visiting our website.</p>
      <h3>Special Offerings:</h3>
      <ul>
        {offerings.map((offering, index) => (
          <li key={index}>{offering}</li>
        ))}
      </ul>
    </div>
  )
}

export default Offerings
