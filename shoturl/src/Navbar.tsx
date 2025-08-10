import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (!open || !mobileMenuRef.current) return;
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'a, button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();
  }, [open]);

  return (
    <header className="md:px-20 px-6 py-3 pt-8 bg-white" role="banner">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <a href="/" aria-label="Homepage">
            <img
              className="w-20 md:w-auto"
              src="/assets/images/logo.svg"
              alt="Shortly logo"
            />
          </a>
        </div>
        {/* Desktop Navigation */}
        <NavigationMenu
          className="hidden ps-8 md:flex max-w-none flex-1 items-center justify-between"
          aria-label="Main navigation"
        >
          <NavigationMenuList className="flex gap-6 text-[#9e9aa7]">
            <NavigationMenuItem>
              <a href="/" className="hover:text-[#3b3054] font-medium" tabIndex={0}>
                Features
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/about" className="hover:text-[#3b3054] font-medium" tabIndex={0}>
                Pricing
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="hover:text-[#3b3054] font-medium" tabIndex={0}>
                Resources
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <a
                href="/contact"
                className="block text-[#9e9aa7] font-bold hover:text-[#3b3054]"
                tabIndex={0}
              >
                Login
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                variant="default"
                className="rounded-3xl w-full bg-[#2acfcf] cursor-pointer"
                aria-label="Sign up"
              >
                Sign Up
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            ref={menuButtonRef}
            variant="outline"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#3b3054] text-white absolute left-1/2 transform -translate-x-1/2 mt-2 shadow-md rounded-lg px-6 py-6 w-4/5 text-center space-y-6 overflow-hidden z-50"
          >
            <a href="/" className="block font-bold focus:outline focus:outline-2 focus:outline-white" tabIndex={0}>
              Features
            </a>
            <a href="/about" className="block font-bold focus:outline focus:outline-2 focus:outline-white" tabIndex={0}>
              Pricing
            </a>
            <a href="/contact" className="block font-bold focus:outline focus:outline-2 focus:outline-white" tabIndex={0}>
              Resources
            </a>
            <hr className="border-gray-400" />
            <a href="/contact" className="block font-bold focus:outline focus:outline-2 focus:outline-white" tabIndex={0}>
              Login
            </a>
            <Button
              variant="default"
              className="rounded-3xl w-full bg-[#2acfcf]"
              aria-label="Sign up"
            >
              Sign Up
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
