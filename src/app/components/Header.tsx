"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-blue-800">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-mono font-bold text-lg">{"<FA/>"}</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            <MobileNav items={navItems} setIsOpen={setIsOpen} />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

interface MobileNavProps {
  items: { href: string; label: string }[];
  setIsOpen: (open: boolean) => void;
}

function MobileNav({ items, setIsOpen }: MobileNavProps) {
  return (
    <div className="flex flex-col space-y-4 mt-4 text-blue-800">
      <nav className="flex flex-col space-y-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-foreground/60 transition-colors hover:text-foreground"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
