/* eslint-disable default-case */
import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
const initialState = {
  cart: []
};

export const useStore = create(
  devtools(
    persist((set, get) => ({
      ...initialState,
      overwriteCart: (senario, item) => {
        if (senario === 'delete')
          return set((state) => ({
            cart: state.cart.filter((cart) => cart.price !== item.price)
          }));
        return set((state) => ({
          cart: [...state.cart, { ...item, qty: 1 }]
        }));
      },
      updateCart: (price, qty) =>
        set((state) => ({
          cart: state.map((item) =>
            item.price === price ? { ...item, qty } : item
          )
        }))
    }))
  )
);
