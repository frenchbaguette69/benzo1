import { create } from "zustand";

type Product = {
    id: number;
    name: string;
    price: number;
    imageSrc: string;
}

type ShopState = {
    products: Product[];
    addProduct: (product: Product) => void;
    removeProduct: (productId: number) => void;
}

export const useShopStore = create<ShopState>((set) => ({
    products: [],
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (productId) => set((state) => ({ products: state.products.filter((p) => p.id !== productId) }))
}));