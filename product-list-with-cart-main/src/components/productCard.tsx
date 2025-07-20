import { ItemCounter } from "./itemCounter";
import { AddToCart } from "./addToCart";
import type { UpdateCartFn } from "../App";

interface ProductCardProps {
  imageUrl: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
  productCategory: string;
  productName: string;
  productPrice: number;
  quantity: number;
  updateCart: UpdateCartFn;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productCategory,
  productName,
  productPrice,
  quantity,
  updateCart,
}) => {
  function addItem() {
    updateCart(productName, {
      quantity: (quantity + 1),
      price: productPrice,
      image: imageUrl.thumbnail,
    });
  }

  function decreaseItems() {
     updateCart(productName, {
      quantity: (quantity - 1),
      price: productPrice,
      image: imageUrl.thumbnail,
    });
  }
  return (
    <div
      className="product-card mb-5"
      role="region"
      aria-label={`Product: ${productName}`}
    >
      <div
        className={`h-56 overflow-hidden rounded-xl ${
          quantity > 0 ? "border-2 border-[#c73a0f]" : ""
        }`}
      >
        <picture>
          <source media="(min-width: 1024px)" srcSet={imageUrl.desktop} />
          <source media="(min-width: 768px)" srcSet={imageUrl.tablet} />
          <source media="(max-width: 767px)" srcSet={imageUrl.mobile} />
          <img
            className="w-full h-full object-cover"
            src={imageUrl.thumbnail}
            alt={productName}
          />
        </picture>
      </div>
      {quantity < 1 ? (
        <AddToCart addItem={addItem} />
      ) : (
        <ItemCounter
          items={quantity}
          decreaseItems={decreaseItems}
          addItem={addItem}
        />
      )}
      <div className="product-info">
        <p className="prd-title text-[#ad8985] font-semibold text-xs">
          {productCategory}
        </p>
        <p className="prd-descr font-semibold py-0.5">{productName}</p>
        <p className="prd-price font-semibold text-[#c73a0f]">
          ${productPrice}
        </p>
      </div>
    </div>
  );
};
