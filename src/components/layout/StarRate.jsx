import { BsStarHalf, BsStar, BsStarFill } from 'react-icons/bs';
import { Icon, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function StarReview({ rate }) {
  const [stars, setStars] = useState([]);

  const starsFunc = (rate) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rate) stars.push('fill');
      else if (rate % 1 !== 0) stars.push('half');
      else if (i > rate) stars.push('empty');
    }
    setStars(stars);
  };
  useEffect(() => {
    if (rate) return starsFunc(rate);
  }, [rate]);
  return (
    <Flex alignItems='center' gap='2' justifyContent='center'>
      {stars.map((star, i) => {
        return (
          <Icon
            key={i}
            color={star !== 'empty' ? 'yellow.400' : 'gray.300'}
            as={
              star === 'empty'
                ? BsStar
                : star === 'half'
                ? BsStarHalf
                : BsStarFill
            }
          />
        );
      })}
    </Flex>
  );
}
