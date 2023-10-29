import React from '/primerentregareact/assets/react'
import NavBar from '/primerentregareact/NavBar'
import ItemListContainer from '/primerentregareact/ItemListContainer'
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