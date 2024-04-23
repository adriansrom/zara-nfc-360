import { create } from 'zustand';

const useProductInfo = create((set) => ({
  productInfo: null,
  setProductInfo: (value) => set({ productInfo: value }),
  reset: () => set({ productInfo: null })
}));

export { useProductInfo };
