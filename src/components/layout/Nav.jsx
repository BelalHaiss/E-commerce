import { Flex, Image, Button, Badge } from '@chakra-ui/react';
import { BsCart4 } from 'react-icons/bs';
export default function Nav({ products }) {
  return (
    <Flex
      p='2'
      justifyContent={'space-between'}
      flex='1'
      bg='blue.600'
      alignItems='center'
    >
      <Image src='/logo.png' w='60px' />
      <Flex position={'relative'}>
        <Badge
          position={'absolute'}
          left='8'
          top='1'
          variant='solid'
          zIndex={'3000'}
          colorScheme='blue'
        >
          20
        </Badge>

        <Button
          py='8'
          size='lg'
          colorScheme={'yellow'}
          leftIcon={<BsCart4 fontSize={'35px'} />}
        >
          Cart
        </Button>
      </Flex>
    </Flex>
  );
}
