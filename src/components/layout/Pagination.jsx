import { Flex, Button } from '@chakra-ui/react';

export default function Pagination({ setPageNumber, pageNumber, totalPages }) {
  return (
    <Flex maxW='500px' mt='3' mx='auto' gap='2' alignItems={'center'}>
      {new Array(totalPages).fill(0).map((_, i) => (
        <Button
          colorScheme={pageNumber === i + 1 ? 'blue' : 'gray'}
          onClick={() => setPageNumber(i + 1)}
          key={i}
        >
          {' '}
          {i + 1}{' '}
        </Button>
      ))}
    </Flex>
  );
}
