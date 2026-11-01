"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-2 border-black bg-[#FFF7FC] font-poppins">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 md:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-base font-bold sm:text-lg">Rizaldy Kusuma</span>
        </Link>

        {/* Desktop navigation */}
        <NavigationMenu className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => {
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink href={item.href}>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop contact button */}
        <div className="hidden md:block">
          <Button variant="neutral" size="xs">
            <Link href="#contact">
              <span className="text-sm">Contact Me</span>
            </Link>
          </Button>
        </div>

        {/* Mobile menu */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="neutral" size="xs">
            <Link href="#contact">Contact</Link>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="neutral"
                size="icon"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] border-l-2 border-black bg-[#FFF7FC] font-poppins sm:w-[320px]"
            >
              {/* <SheetHeader className="border-b-2 border-black pb-4">
                <SheetTitle className="text-left font-bold">
                  Navigation.
                </SheetTitle>
                <SheetDescription className="text-left">
                  Explore my portfolio.
                </SheetDescription>
              </SheetHeader> */}

              <div className="mt-16 flex flex-col gap-3">
                {menuItems.map((item) => {
                  return (
                    <SheetClose key={item.href}>
                      <Link
                        href={item.href}
                        className={`px-4 py-3 font-semibold transition-all`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  );
                })}

                {/* <SheetClose>
                  <Link
                    href="#contact"
                    className="mt-2 border-2 border-black bg-[#FFE66D] px-4 py-3 text-center font-bold shadow-[4px_4px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                  >
                    Contact Me
                  </Link>
                </SheetClose> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
