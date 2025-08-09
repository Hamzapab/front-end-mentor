import { useState } from "react";
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

  return (
    <header className="md:px-20  px-6 py-3 pt-8 bg-white">
      <div className="container mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="logo ">
          <img
            className="w-20 md:w-auto"
            src="src/assets/images/logo.svg"
            alt="logo"
          />
        </div>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden ps-8 md:flex max-w-none  flex-1 items-center  justify-between ">
          <NavigationMenuList className="flex gap-6 text-[#9e9aa7]">
            <NavigationMenuItem>
              <a href="/" className="hover:text-[#3b3054] font-medium">
                Features
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/about" className="hover:text-[#3b3054] font-medium">
                Pricing
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/contact" className="hover:text-[#3b3054] font-medium">
                Resources
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <a href="/contact" className="block text-[#9e9aa7] font-bold hover:text-[#3b3054]">
                Login
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Button 
                  variant="default"
                  className="rounded-3xl w-full bg-[#2acfcf] cursor-pointer"> 
                  Sign Up
                </Button>
            </NavigationMenuItem>
          </NavigationMenuList>

        </NavigationMenu>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#3b3054] text-white absolute  
        left-1/2 transform -translate-x-1/2 mt-2  
        shadow-md rounded-lg px-6 py-6 w-4/5 text-center 
        space-y-6 overflow-hidden"
          >
            <a href="/" className="block font-bold">
              Features
            </a>
            <a href="/about" className="block font-bold">
              Pricing
            </a>
            <a href="/contact" className="block font-bold">
              Resources
            </a>
            <hr className="border-gray-400"></hr>
             <a href="/contact" className="block font-bold">
              Login
            </a>
            <Button 
               variant="default"
              className="rounded-3xl w-full bg-[#2acfcf]"> 
              Sign Up
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
