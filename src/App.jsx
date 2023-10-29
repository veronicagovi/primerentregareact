import React from '/primerentregareact/assets/react'
import NavBar from '/primerentregareact/src/components/NavBar'
import ItemListContainer from '/primerentregareact/src/components/ItemListContainer'
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