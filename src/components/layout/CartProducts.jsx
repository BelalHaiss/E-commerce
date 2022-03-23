import {
  Flex,
  Alert,
  AlertIcon,
  Image,
  Badge,
  Text,
  Button,
  IconButton,
  Tooltip
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdRemoveShoppingCart } from 'react-icons/md';
export default function CartProducts({ cart, popover, overwriteCart }) {
  const navigate = useNavigate();
  const cartTotal = () => cart.reduce((acc, curr) => +acc + +curr.price, 0);
  return (
    <>
      {!cart.length ? (
        <Alert status='warning'>
          <AlertIcon />
          There is no item in your cart
        </Alert>
      ) : null}

      {cart.length ? (
        <Flex
          mx='auto'
          maxW='max-content'
          flexDir={'column'}
          alignItems='center'
          gap='2'
          p='2'
        >
          {cart.map((item, index) => (
            <Flex gap='2' flexDir={{ base: 'column', sm: 'row' }} key={index}>
              <Image
                src={item.featuredPhoto}
                alt='itemphoto'
                h={popover ? '50px' : '120px'}
                w={popover ? '50px' : '120px'}
              />

              {/* description part */}
              <Flex flexDir={'column'}>
                <Text> {item.name.slice(0, 20)} </Text>
                {!popover && <Text fontWeight={'bold'}> {item.price}</Text>}
                {item.featuredProduct && (
                  <Badge variant='solid' colorScheme='red'>
                    featured Product
                  </Badge>
                )}
              </Flex>
              {!popover && (
                <Tooltip label='Remove From Cart'>
                  <IconButton
                    colorScheme={'red'}
                    onClick={() => overwriteCart('delete', item)}
                    icon={<MdRemoveShoppingCart />}
                  />
                </Tooltip>
              )}
            </Flex>
          ))}
          <hr style={{ width: '100%', border: '1px dashed gray' }} />

          <Flex
            width={'100%'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Text fontWeight={'bold'} fontSize={'lg'}>
              Total
            </Text>
            <Text fontWeight={'bold'}> {cartTotal()} </Text>
          </Flex>

          <Button
            onClick={() => (popover ? navigate('/cart') : null)}
            colorScheme={'purple'}
            w='90%'
          >
            Checkout
          </Button>
        </Flex>
      ) : null}
    </>
  );
}
