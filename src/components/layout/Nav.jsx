import { Flex, Image, Button, Badge } from '@chakra-ui/react';
import { BsCart4 } from 'react-icons/bs';
import { useStore } from '../../store';
import { useState } from 'react';
import CartPopover from '../overlays/CartPopover';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Nav({ children }) {
  const navigate = useNavigate();
  const cart = useStore((state) => state.cart);
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  return (
    <Flex flexDir={'column'}>
      <Flex
        p='2'
        justifyContent={'space-between'}
        flex='1'
        bg='blue.600'
        alignItems='center'
      >
        <Image src='/logo.png' w='60px' />
        {location.pathname !== '/cart' ? (
          <Flex position={'relative'}>
            <Badge
              position={'absolute'}
              left='8'
              top='1'
              variant='solid'
              zIndex={'3000'}
              colorScheme='blue'
            >
              {cart.length}
            </Badge>
            <Button
              py='8'
              size='lg'
              onClick={() => setOpen(!isOpen)}
              colorScheme={'yellow'}
              leftIcon={<BsCart4 fontSize={'35px'} />}
            >
              Cart
            </Button>

            <Flex position={'absolute'} right='315px' top='60%'>
              <CartPopover setOpen={setOpen} cart={cart} isOpen={isOpen} />
            </Flex>
          </Flex>
        ) : (
          <Button onClick={() => navigate('/')}>Home</Button>
        )}
      </Flex>

      {children}
    </Flex>
  );
}
