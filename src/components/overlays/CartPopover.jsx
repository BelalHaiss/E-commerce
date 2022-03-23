import {
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton
} from '@chakra-ui/react';
import { useEffect } from 'react';
import CartProducts from '../layout/CartProducts';

export default function CartPopover({ isOpen, setOpen, cart }) {
  useEffect(() => {
    return () => setOpen(false);
  }, []);
  return (
    <Popover isOpen={isOpen} onClose={() => setOpen(false)}>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader fontWeight={'bold'}>
          Your Shopping Cart
          <small>{cart.length && ` ( ${cart.length}  Items ) `}</small>
        </PopoverHeader>
        <PopoverBody>
          <CartProducts cart={cart} popover={true} />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
