import React from 'react'

import {Navbar} from './components'
import Routes from './routes'
import ConnectedAllProducts from './components/AllProducts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
