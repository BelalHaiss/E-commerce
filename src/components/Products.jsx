import { Flex, Text, Badge, Button, Image, Heading } from '@chakra-ui/react';
import StarReview from './layout/StarRate';
import usePaginate from '../Hooks/usePaginate';
import { BsCartPlus } from 'react-icons/bs';
import Pagination from './layout/Pagination';
import InfoModal from './overlays/InfoModal';
import { useStore } from '../store';
import { useState } from 'react';
import Toast from './utils/Toast';
export default function Products() {
  const overwriteCart = useStore((state) => state.overwriteCart);
  const cart = useStore((state) => state.cart);
  const handleCart = (product) => {
    const isInCart = cart.find((item) => item.price === product.price);
    if (isInCart) {
      Toast(null, 'Product already in cart', 'warning');
      return null;
    }
    overwriteCart('add', product);
    Toast(null, 'Product added to cart', 'success');
  };
  const [pageNumber, setPageNumber] = useState(1);
  const [isOpen, setOpen] = useState(false);
  const { currentData: products, totalPages } = usePaginate(pageNumber);
  const [hoverd, setHoverd] = useState(-1);
  return (
    <Flex flexDir={'column'} gap='2'>
      <Heading textAlign={'center'} my='2' minW={'100%'}>
        Our Products
      </Heading>
      <Flex
        alignItems='center'
        flex='1'
        bg='gray.50'
        gap='3'
        flexWrap={'wrap'}
        justifyContent={'space-evenly'}
        p='1'
        flexDir={{ base: 'column', sm: 'row' }}
      >
        {products.map((product, i) => {
          return (
            <Flex
              key={i}
              flexDir={'column'}
              gap='2'
              borderRadius={'xl'}
              style={{ border: '1px solid white' }}
              bg={'#fffefe'}
              _hover={{
                bg: 'blue.400',
                color: 'white',

                boxShadow: '1.5px 1.5px 5px .7px rgba(0 , 0 , 0 , .1.1)',
                transform: 'scale(1.07)',
                transition: 'all .3s ease-in'
              }}
              transition={'all .2s ease-in-out'}
              justifyContent={'space-between'}
              cursor={'pointer'}
              boxShadow={'lg'}
              alignItems='center'
              onMouseEnter={() => setHoverd(i)}
              onMouseLeave={() => setHoverd(-1)}
              w='200px'
              h='280px'
              p='2'
            >
              <Image w='100px' h='100px' src={product.featuredPhoto} />
              {hoverd === i ? (
                <Flex my='auto'>
                  <Button
                    size='sm'
                    onClick={() => (hoverd === i ? setOpen(product) : null)}
                    colorScheme={'yellow'}
                  >
                    Click here for more info
                  </Button>
                </Flex>
              ) : (
                <>
                  <Text textAlign={'center'}>{product.name}</Text>
                  {product.featuredProduct && (
                    <Badge variant='solid' colorScheme='red'>
                      featured Product
                    </Badge>
                  )}
                  <Text fontWeight={'black'}>{product.price}</Text>
                  <StarReview rate={product.rate} />
                </>
              )}
              <Button
                w='100%'
                mt='auto'
                colorScheme={'blue'}
                leftIcon={<BsCartPlus />}
                onClick={() => handleCart(product)}
              >
                Add To Cart
              </Button>
            </Flex>
          );
        })}
      </Flex>
      <Pagination
        totalPages={totalPages}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
      <InfoModal isOpen={isOpen} handleCart={handleCart} setOpen={setOpen} />
    </Flex>
  );
}
