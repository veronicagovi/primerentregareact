import React from 'react'
import { Badge } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'




const CartWidget = () => {
  return (
    <div className='carrito'>
       <Button colorScheme='blue'>Carrito</Button>
       
        

       <Badge colorScheme='red'>5</Badge>
       

    </div>
  )
}



export default CartWidget