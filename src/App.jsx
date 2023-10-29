import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Progress } from '@chakra-ui/react'


const App = () => {
  return (
  
    <div className='container'>

      <NavBar/>
      <ItemListContainer  greeting={"Proximamente" } />
      <Progress size='xs' isIndeterminate   colorScheme='pink'/>
      
    
    </div>
  

    
    
  )
}

export default App