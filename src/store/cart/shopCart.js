import { create } from 'zustand';

const useShopCart = create((set) => ({
  shopCart: [],
  setShopCart: (value) => set((state) => {
    if (state.shopCart.includes(value)) return state;
    return { shopCart: [...state.shopCart, value] };
  }),
  reset: () => set({ shopCart: [] })
}));

export { useShopCart };

