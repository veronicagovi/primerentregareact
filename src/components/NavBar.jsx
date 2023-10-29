import React from '/primerentregareact/assets/react'
import CartWidget from '/primerentregareact/src/components/CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>        
        <Flex > 
          <Box p='4' >
          <img className='logo' src={'/primerentregareact/src/imagenes/Logo.png '} alt="Logo de la marca"  />
          </Box>
          
          <Spacer />
          <Menu>
          <MenuButton >
             CATEGORIAS
          </MenuButton>
          <MenuList>
             <MenuItem>MAQUILLAJES</MenuItem>
             <MenuItem>DERMIS</MenuItem>
             <MenuItem>NAILS</MenuItem>
             
           </MenuList>
         </Menu>

          <Spacer/>
          <Box p='4'>
            <CartWidget/>
          </Box>
        </Flex>
        
        
    </div>
  )
}

export default NavBar