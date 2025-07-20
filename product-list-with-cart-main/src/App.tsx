import { useState } from "react";
import { ProductList } from "./components/productList";
import { Cart } from "./components/cart";
import { OrderMsg } from "./components/confirmMessage";
import { Overlay } from "./components/overlay";

export interface CartItem {
  quantity: number;
  price: number;
  image: string;
}

export type CartT = Record<string, CartItem>;

export type UpdateCartFn = (productName: string, item: CartItem) => void;

function App() {
  // cart: { [productName]: quantity }
  const [cart, setCart] = useState<CartT>({});
  const [newOrder, setNewOrder] = useState<boolean>(false)

  const updateCart: UpdateCartFn = (productName, item) => {
    setCart((prev) => ({
      ...prev,
      [productName]: item,
    }));
  };

  function removeItem(item: string):void{
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[item];
      return updated;
    });
  }
  function removeAllItems():void{
    setCart({});
    setNewOrder(false)
  }
  function confirmOrder():void{
    setNewOrder(true)
  }

  const total = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );
   const totalPrice = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  return (
    <div className="container m-auto py-8 px-5 w-full md:px-10 md:flex md:gap-10">
      { <Overlay isOpen={newOrder} />}
      <div className="flex-1">
        <h1 className="text-4xl font-bold mb-8">Dessert</h1>
        <ProductList cart={cart} updateCart={updateCart} />
      </div>
      <Cart totalSelected={total} cart={cart}  removeItem={removeItem} totalPrice={totalPrice}  confirmOrder={confirmOrder}/>
      { <OrderMsg cart={cart} removeAllItems={removeAllItems} totalPrice={totalPrice} isOpen={newOrder}/>}
    </div>
  );
}

export default App;
