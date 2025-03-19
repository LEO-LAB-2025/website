'use client'
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Research", path: "/research" },
  { name: "Workshops", path: "/workshop" },
  { name: "Courses", path: "/courses" },
  { name: "Careers", path: "/careers" },
  { 
    name: "Products", 
    path: "#",
    hasDropdown: true,
    dropdownItems: [
      { name: "Leo Magazine", path: "/products/magazine" }
    ]
  }
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (itemName: string) => {
    if (itemName === "Products") {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="fixed top-0 w-full bg-leo border-b border-black z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative flex items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Link href="/" className="font-extrabold bg-white inline-block">
              <Image
                src="/leo.png"
                alt="LEO Lab Logo"
                width={130}
                height={20}
                className="p-2 scale-75 md:scale-100 w-auto md:h-[80px] h-[65px]"
                quality={100}
                priority
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <NavigationMenu className="hidden md:block flex-1">
            <NavigationMenuList className="flex items-center justify-end space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.name} className="max-w-fit">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="px-3 py-2 text-sm lg:text-base text-white hover:text-black transition-colors font-medium cursor-pointer flex items-center whitespace-nowrap">
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </div>
                      <div className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 ${activeDropdown === item.name ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                        <div className="py-1">
                          {item.dropdownItems?.map((dropdownItem, index) => (
                            <Link 
                              key={index} 
                              href={dropdownItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link href={item.path} passHref legacyBehavior>
                      <NavigationMenuLink className="px-3 py-2 text-sm lg:text-base text-white hover:text-black transition-colors font-medium whitespace-nowrap">
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 md:hidden transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className={`fixed inset-y-0 right-0 w-64 bg-basewhite shadow-lg transform transition-transform ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="block text-gray-700 py-2 text-lg font-medium">
                        {item.name}
                      </div>
                      <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                        {item.dropdownItems?.map((dropdownItem, index) => (
                          <Link
                            key={index}
                            href={dropdownItem.path}
                            className="block text-gray-600 hover:text-leo transition-colors py-1 text-base"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.path}
                      className="block text-gray-700 hover:text-leo transition-colors py-2 text-lg font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
