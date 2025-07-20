import type { CartT } from "../App";

interface OrderMsg {
  cart: CartT;
  removeAllItems: () => void;
  totalPrice: number;
  isOpen: boolean;
}

export function OrderMsg({
  cart,
  removeAllItems,
  totalPrice,
  isOpen,
}: OrderMsg) {

   function resetOp(){
      removeAllItems();
      window.location.reload();
   }
  const listTheproducts = () =>
    Object.entries(cart).map(([key, value]) => (
      <div
        key={key}
        className="flex items-center justify-between mb-4 border-b pb-3 border-[#c9aea6]"
      >
        <div>
          <div className="flex gap-4 items-center">
            <img className="w-14 h-14 rounded-lg" src={value.image} alt={key} />
            <div>
              <h3 className="font-semibold text-[#260f08] text-sm">{key}</h3>
              <div className="pt-2">
                <span className="text-[#c73a0f] pr-3 font-semibold text-sm">
                  {value.quantity}x
                </span>
                <span className="text-[#c9aea6] pr-2 text-sm">
                  @ ${value.price}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-[#260f08] font-semibold text-md">
          ${value.price * value.quantity}
        </div>
      </div>
    ));
  return (
    <div
      className={`fixed  w-screen bottom-0  left-0  md:top-1/2 md:bottom-auto md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 md:w-[400px]
          bg-white p-5 rounded-t-xl md:rounded-xl max-h-0 transition-[opacity,height] duration-200 overflow-y-auto
           ${
        isOpen ? "h-[87%] md:h-[550px] opacity-100 z-50"  : "h-0 opacity-0 z-[-100]"
      }`}
      style={{ maxHeight: "100vh" }} 
    >
      <img
        src="/assets/images/icon-order-confirmed.svg"
        alt="Order Confirmed"
      />
      <h2 className="text-5xl text-[#260f08] font-semibold mt-6">
        Order Confirmed
      </h2>
      <p className="text-[#ad8985] font-semibold mt-4">
        We hope you enjoy your food!
      </p>
      <div className="mt-5 bg-[#f4edeb] p-4 py-5 rounded-lg">
         {listTheproducts()}
        <div className="flex justify-between items-center">
          <p className="text-sm  text-gray-500 font-semibold">Order Total</p>
          <p className="text-3xl font-bold text-[#260f08]">${totalPrice}</p>
        </div>
        <button
          onClick={resetOp}
          className="bg-[#c73a0f] cursor-pointer rounded-3xl py-3 w-full text-white mt-5"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
