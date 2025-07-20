import { ProductCard } from "./productCard";
import data from "../data.json"
import type { CartT } from '../App'
import type { UpdateCartFn } from '../App'


interface ProductList{
   cart:CartT,
   updateCart: UpdateCartFn 
}

export function ProductList({cart,updateCart}:ProductList) {

  const products = data.map((product) => {
    return (
      <ProductCard
        key={product.name}
        imageUrl={product.image}
        productCategory={product.category}
        productName={product.name}
        productPrice={product.price}
        quantity={cart[product.name]?.quantity || 0}
        updateCart={updateCart}
      />
    );
  });

  return <div className="products  grid gap-[30px] grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">{products}</div>;
}
