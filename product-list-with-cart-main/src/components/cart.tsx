import { useState } from "react";
import type { CartT } from "../App";

interface SummaryCar {
  totalSelected: number;
  cart: CartT;
  removeItem: (item: string) => void;
  totalPrice: number;
  confirmOrder: () => void;
}

export function Cart({
  totalSelected,
  cart,
  removeItem,
  totalPrice,
  confirmOrder,
}: SummaryCar) {
  // Simulate loading
  const [loading, setLoading] = useState(false);

  function confirm(): void {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      confirmOrder();
    }, 2000);
  }
  const listTheproducts = () =>
    Object.entries(cart).map(([key, value]) => (
      <div
        key={key}
        className="flex items-center justify-between mb-4 border-b pb-3 border-[#c9aea6]"
      >
        <div>
          <h3 className="font-semibold text-[#260f08]">{key}</h3>
          <div className="pt-2">
            <span className="text-[#c73a0f] pr-3 font-semibold text-sm">
              {value.quantity}x
            </span>
            <span className="text-[#c9aea6] pr-2 text-sm">
              @ ${value.price}
            </span>
            <span className="text-[#ad8985] font-semibold text-sm">
              ${value.price * value.quantity}
            </span>
          </div>
        </div>
        <button
          onClick={() => removeItem(key)}
          className="w-5 h-5 rounded-full border border-[#ad8985] flex items-center justify-center cursor-pointer"
          aria-label={`Remove ${key} from cart`}
        >
          <img src="/assets/images/icon-remove-item.svg" alt="remove item" />
        </button>
      </div>
    ));
  return (
    <div className="bg-white rounded-xl p-6 self-start min-w-[360px]">
      {loading && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          role="status"
          aria-live="polite"
          aria-label="Processing your order"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
        </div>
      )}
      <h2 className="text-2xl font-bold text-[#c73a0f]">
        Your Cart ({totalSelected})
      </h2>
      {totalSelected < 1 ? (
        <div className="flex flex-col items-center mt-8 gap-4">
          <img
            className="animate-scalePulse"
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty cart"
            aria-hidden="true"
          />
          <p className="text-[#ad8985] font-bold text-xs">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="mt-8">
          {listTheproducts()}
          <div className="flex justify-between items-center">
            <p className="text-lg  text-gray-500">Order Total</p>
            <p className="text-xl font-bold">${totalPrice}</p>
          </div>
          <div className="text-[#87635a] bg-[#f4edeb] flex justify-center gap-1 items-center p-2 text-sm rounded-lg mt-6">
            <img
              className="w-5"
              src="/assets/images/icon-carbon-neutral.svg"
              alt="carbon neutral"
            />
            This is a
            <span className="font-semibold text-[#260f08]">carbon-neutral</span>{" "}
            delivery
          </div>
          <button
            onClick={confirm}
            className="bg-[#c73a0f] cursor-pointer rounded-3xl py-3 w-full text-white font-semibold mt-5"
              aria-disabled={loading}
              disabled={loading}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
}
