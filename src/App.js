import React, { useState } from 'react'
import {userContext} from './context'
import Content2 from './context-content';
import Header2 from './context-header2';



function App() {
  let[user,setUser]=useState(null)
  return (
    <userContext.Provider value={[user,setUser]}>
      <Header2/>
      <Content2/>
    </userContext.Provider>
  )
 
}

export default App;