import { Flex, Icon, Image } from '@chakra-ui/react';
import { useState } from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
export default function Carousel({ photos = [] }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const switchPhoto = (seanrio) => {
    if (seanrio === 'next') {
      if (currentPhoto === photos.length - 1) return setCurrentPhoto(0);
      return setCurrentPhoto(currentPhoto + 1);
    }
    // prev senario
    if (currentPhoto === 0) return setCurrentPhoto(photos.length - 1);
    return setCurrentPhoto(currentPhoto - 1);
  };
  return (
    <Flex position='relative' p='2' w='200px' h='100%'>
      <Icon
        name='chevron-left'
        as={BsCaretLeftFill}
        position={'absolute'}
        zIndex={2000}
        left='0'
        top='50%'
        transform={'translateY(-50%)'}
        cursor={'pointer'}
        size='40px'
        onClick={() => switchPhoto('prev')}
      />
      <Image
        src={photos[currentPhoto]}
        w='90%'
        mx='auto'
        h='200px'
        alt='product'
      />
      <Icon
        name='chevron-left'
        size='40px'
        position={'absolute'}
        zIndex={2000}
        right='0'
        as={BsCaretRightFill}
        top='50%'
        transform={'translateY(-50%)'}
        cursor={'pointer'}
        onClick={() => switchPhoto('next')}
      />
    </Flex>
  );
}
