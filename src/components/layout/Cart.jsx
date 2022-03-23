import { useStore } from '../../store';
import CartProducts from './CartProducts';
export default function Cart() {
  const cart = useStore((state) => state.cart);
  const overwriteCart = useStore((state) => state.overwriteCart);

  return <CartProducts cart={cart} overwriteCart={overwriteCart} />;
}
