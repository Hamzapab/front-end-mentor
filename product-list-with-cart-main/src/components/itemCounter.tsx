import { motion } from "framer-motion";

interface Counter {
  items: number;
  decreaseItems: () => void;
  addItem: () => void;
}

export function ItemCounter({ items, decreaseItems, addItem }: Counter) {
  return (
    <div
      className="w-[150px] h-[43px] bg-[#c73a0f] min-w-25 group font-semibold border-2 border-[#cdbab2] px-3 py-2 
             rounded-3xl flex items-center justify-between gap-2 mx-auto translate-y-[-50%] relative"
      role="group"
      aria-label="Change quantity"
    >
      <button
        onClick={decreaseItems}
        className="cursor-pointer"
        aria-label="Decrease quantity"
        disabled={items <= 0}
      >
        <div className="border border-white w-5 h-5 rounded-full flex items-center justify-center transition-transform  duration-300 active:scale-105">
          <img
            className="w-2"
            src="/assets/images/icon-decrement-quantity.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </button>
      <div
        className="text-white"
        aria-live="polite"
        aria-atomic="true"
        role="status"
      >
        <motion.p
          key={items} 
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {items}
        </motion.p>
      </div>
      <button
        onClick={addItem}
        className="cursor-pointer"
        aria-label="Increase quantity"
      >
        <div className="border border-white w-5 h-5 rounded-full flex items-center justify-center transition-transform  duration-300 active:scale-105">
          <img
            className="w-2"
            src="/assets/images/icon-increment-quantity.svg"
            alt=""
            aria-hidden="true"
          />
        </div>
      </button>
    </div>
  );
}
