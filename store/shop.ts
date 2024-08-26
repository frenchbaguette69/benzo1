import { create } from "zustand";

type Product = {
    id: number;
    name: string;
    price: number;
    imageSrc: string;
}

type ShopState = {
    products: Product[];
    addProduct: (productId: Product) => void;
    removeProduct: (productId: Product) => void;
}

export const useShopStore = create<ShopState>((set) => ({
    products: [],
    addProduct: (product) => set((state) => ({ products: [...state.products, product] })),
    removeProduct: (product) => set((state) => ({ products: state.products.filter((p) => p.id !== product.id) }))
}));