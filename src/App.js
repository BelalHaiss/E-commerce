import Nav from './components/layout/Nav';
import { Flex } from '@chakra-ui/react';
import Products from './components/Products';
function App() {
  return (
    <Flex flexDir={'column'} gap='2'>
      <Nav />
      <Products />
    </Flex>
  );
}

export default App;
