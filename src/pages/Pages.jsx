import React from 'react'
import Home from './Home'
import Business from './Business'
import Sport from './Sport'
import Health from './Health'
import Technology from './Technology'
import Searched from './Searched'
import { Route, Routes} from 'react-router-dom'
import Article from './Article'

function Pages() {
  return (
      <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/business' element={ <Business/> } />
          <Route path='/sport' element={ <Sport/> } />
          <Route path='/health' element={ <Health/> } />
          <Route path='/technology' element={ <Technology/> } />
          <Route path='/searched/:search' element={ <Searched/> } />
          <Route path='/article/:name' element={ <Article/> } />
      </Routes>
  )
}

export default Pages