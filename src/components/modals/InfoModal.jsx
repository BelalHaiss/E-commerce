import {
  Text,
  Button,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  Flex,
  ModalBody
} from '@chakra-ui/react';
import Carousel from '../layout/Carousel';
import StarReview from '../utils/StarRate';
import { BsCartPlus } from 'react-icons/bs';
import { useEffect } from 'react';

export default function InfoModal({ isOpen, setOpen }) {
  const product = isOpen;

  useEffect(() => {
    return () => setOpen(false);
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
      <ModalOverlay />
      <ModalContent w={'max-content'} maxW={'min-content'}>
        <ModalBody
          p='2'
          justifyContent={'space-between'}
          alignItems='center'
          display='flex'
          flexDir={{ base: 'column', sm: 'row' }}
          w={'max-content'}
        >
          {/* product Image */}
          <Carousel photos={product.photos} />

          {/* product Info */}
          <Flex
            gap='2'
            p='1'
            alignItems={'center'}
            justifyContent={'center'}
            maxW={{ base: '200px', md: '400px' }}
            flexDir='column'
          >
            <Text fontWeight={'bold'} fontSize='lg' textAlign={'center'}>
              {product.name}
            </Text>
            <Text textAlign={'center'}>{product.description}</Text>
            {product.featuredProduct && (
              <Badge variant='solid' colorScheme='red'>
                featured Product
              </Badge>
            )}
            <Text fontWeight={'black'}>{product.price}</Text>

            <StarReview rate={product.rate} />
            <Button
              w='100%'
              mt='auto'
              colorScheme={'blue'}
              leftIcon={<BsCartPlus />}
            >
              Add To Cart
            </Button>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
