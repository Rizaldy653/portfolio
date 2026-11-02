"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "./ui/button";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  return (
    <nav className="fixed top-0 z-50 w-full border-2 border-black bg-[#FFF7FC] font-poppins">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-2 md:px-6">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <span className="text-base font-bold sm:text-lg">Rizaldy Kusuma</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="absolute left-1/2 hidden -translate-x-1/2 md:flex">
          <NavigationMenuList>
            {menuItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink href={item.href}>
                  <span className="text-sm font-semibold">{item.label}</span>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop Contact */}
        <Button variant="neutral" size="xs" className="hidden md:inline-flex">
          <Link href={contactHref}>Contact Me</Link>
        </Button>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="neutral" size="xs">
            <Link href={contactHref}>Contact</Link>
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
              <div className="mt-16 flex flex-col gap-2">
                {menuItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`px-4 py-3 font-semibold transition-colors hover:bg-[#FFE66D] ${
                        pathname === item.href ? "bg-[#FFE66D]" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}

                <SheetClose asChild>
                  <Link
                    href={contactHref}
                    className="mt-2 border-2 border-black bg-[#FFE66D] px-4 py-3 text-center font-bold shadow-[3px_3px_0px_#000] transition-transform hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none"
                  >
                    Contact Me
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
