import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import Cart from "@/assets/cart.png"
import { useShopStore } from "@/store/shop"
import { groupBy } from "@/utils"

export function ShopSheet() {

  const { products } = useShopStore();

  const groupedProducts = groupBy(products, (product) => product.name);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-black text-white px-2 py-2 rounded-lg font-medium inline-flex align-items justify-end tracking-tight"> 
          <Image src={Cart} alt="Cart" height={20} width={20} />
          <span className="ml-2">Cart ({products.length})</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Your cart is empty. Add some products to get started.
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          {Object.entries(groupedProducts).map(([key, value]) => (
            <div key={key} className="flex gap-4 items-center">
              <Image src={value[0].imageSrc} alt={value[0].name} width={50} height={50} />
              <div>
                <h3>{value[0].name}</h3>
                <p>€ {value[0].price}</p>
              </div>
              <div>{value.length} x</div>
            </div>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Checkout</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
