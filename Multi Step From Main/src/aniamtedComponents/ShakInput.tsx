import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import { clsx } from "clsx";
import React from "react";

type ShakeInputProps = HTMLMotionProps<"input"> & {
  hasError: boolean;
};

export const ShakeInput = React.forwardRef<HTMLInputElement, ShakeInputProps>(
  ({ hasError, className, ...props }, ref) => {
    const shakeAnimation = {
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.4 },
    };

    return (
      <motion.input
        ref={ref}
        animate={hasError ? shakeAnimation : { x: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={clsx(
          "w-full border p-1.5 pl-4 mb-4 rounded-sm transition-colors duration-200",
          hasError ? "border-red-600 outline outline-red-600" : "border-gray-400",
          className
        )}
        {...props}
      />
    );
  }
);

ShakeInput.displayName = "ShakeInput";
