interface AddTocart {
  addItem: () => void;
}

export function AddToCart({ addItem }: AddTocart) {
  return (
    <button
      onClick={addItem}
      className="w-[150px] h-[43px] text-sm bg-white group font-semibold border-2 border-[#cdbab2] px-4 py-2 
             rounded-3xl flex items-center justify-center gap-2 mx-auto translate-y-[-50%] relative cursor-pointer hover:border-[#c73a0f] transition-colors duration-300"
      aria-label="Add item to cart"
    >
      <img
        className="transition-transform  duration-300 group-hover:rotate-12 group-hover:scale-90"
        src="/assets/images/icon-add-to-cart.svg"
        alt="add to cart"
        aria-hidden="true"
      />
      Add to Cart
    </button>
  );
}
