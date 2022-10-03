import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function Aboutpage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for product or services</p>
        <p>version: 1.0.0</p>

        <p>
          <Link exact to={{
            pathname: '/',
          }}>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default Aboutpage