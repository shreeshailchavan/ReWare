"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StarIcon } from "@radix-ui/react-icons";
import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon, BadgeCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const demoItems = [
  { name: "Vintage Denim Jacket", price: "$39.99", available: true, img: "/window.svg" },
  { name: "Classic Blue Jeans", price: "$24.99", available: true, img: "/file.svg" },
  { name: "Corduroy Jacket", price: "$34.99", available: false, img: "/globe.svg" },
  { name: "Retro Windbreaker", price: "$29.99", available: true, img: "/vercel.svg" },
  { name: "Plaid Shirt", price: "$19.99", available: true, img: "/next.svg" },
  { name: "Canvas Tote Bag", price: "$14.99", available: true, img: "/window.svg" },
  { name: "Wool Scarf", price: "$12.99", available: false, img: "/file.svg" },
  { name: "Leather Boots", price: "$49.99", available: true, img: "/globe.svg" },
  { name: "Striped Tee", price: "$9.99", available: true, img: "/vercel.svg" },
  { name: "Summer Dress", price: "$29.99", available: true, img: "/next.svg" },
  { name: "Oversized Hoodie", price: "$34.99", available: true, img: "/window.svg" },
  { name: "Sneakers", price: "$44.99", available: false, img: "/file.svg" },
];

export default function ItemSearchList() {
  const [search, setSearch] = useState("");
  const filtered = demoItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Header (copied from app/page.tsx) */}
      <header className="w-full py-4 px-4 sm:px-8 flex flex-col md:flex-row md:items-center md:justify-between shadow-sm bg-background/80 sticky top-0 z-10">
        <div className="w-full flex items-center justify-between md:justify-start gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center text-xl font-bold shadow-sm">RW</span>
            <span className="ml-2 text-lg font-semibold tracking-tight">ReWear</span>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-2">
                <DropdownMenuItem asChild>
                  <a href="#" className="block w-full py-2 px-3 rounded hover:bg-muted focus:bg-muted focus:outline-none">Home</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#browse" className="block w-full py-2 px-3 rounded hover:bg-muted focus:bg-muted focus:outline-none">Browse</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Button variant="ghost" className="w-full justify-start text-primary hover:bg-primary/10" style={{ color: '#4B9C8E' }}>Login</Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button className="w-full justify-start bg-accent text-accent-foreground hover:bg-accent/90 mt-1" style={{ backgroundColor: '#F4A261', color: '#1F2937' }}>Sign Up</Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        {/* Search Bar (mobile below logo, desktop centered) */}
        <div className="w-full md:flex-1 flex md:justify-center md:mx-4 max-w-md mt-3 md:mt-0 order-2 md:order-none">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search for clothing, brands, or categories..."
              className="bg-white border border-input rounded-md px-4 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/30 text-base text-foreground placeholder:text-muted-foreground w-full pl-10"
              aria-label="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
        {/* Desktop Nav & Auth Buttons */}
        <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className="focus:outline-none">Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#browse">Browse</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="ghost" className="ml-4 text-primary hover:bg-primary/10" style={{ color: '#4B9C8E' }}>Login</Button>
          <Button className="ml-2 bg-accent text-accent-foreground hover:bg-accent/90" style={{ backgroundColor: '#F4A261', color: '#1F2937' }}>Sign Up</Button>
        </nav>
      </header>

      {/* Item List */}
      <main className="max-w-3xl mx-auto w-full px-4 sm:px-8 py-10 flex flex-col gap-6">
        {filtered.length === 0 && (
          <div className="text-center text-muted-foreground py-12">No items found.</div>
        )}
        {filtered.map((item, i) => (
          <motion.div
            key={item.name + i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Card className="flex flex-row items-center justify-between gap-6 p-4 md:p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
              {/* Details left */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold">{item.name}</span>
                  {item.available ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs font-medium border border-green-200">
                      <BadgeCheck className="w-4 h-4" /> Available
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs font-medium border border-red-200">
                      Unavailable
                    </span>
                  )}
                </div>
                <div className="text-primary font-semibold">{item.price}</div>
                <Button size="sm" className="mt-2 w-max">View Details</Button>
              </div>
              {/* Image right */}
              <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                <Image src={item.img} alt={item.name} width={100} height={100} className="object-contain w-full h-full rounded" />
              </div>
            </Card>
          </motion.div>
        ))}
      </main>

      {/* Footer (copied from app/page.tsx) */}
      <footer className="footer w-full py-10 px-4 sm:px-8 mt-auto border-t border-border">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2 md:max-w-xs">
            <div className="flex items-center gap-2 mb-1">
              <span className="rounded-full bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-lg font-bold shadow-sm">RW</span>
              <span className="text-lg font-semibold tracking-tight text-foreground">ReWear</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">A community-driven platform for swapping, purchasing, and recycling clothing. Make fashion sustainable and accessible for everyone.</p>
            <div className="flex gap-3 mt-2">
              <a href="#" aria-label="Facebook" className="hover:text-primary transition-colors"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><TwitterIcon className="w-5 h-5" /></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary transition-colors"><InstagramIcon className="w-5 h-5" /></a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground mb-1">Navigation</span>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#browse" className="text-sm text-muted-foreground hover:text-primary transition-colors">Browse</a>
              <a href="#categories" className="text-sm text-muted-foreground hover:text-primary transition-colors">Categories</a>
              <a href="#products" className="text-sm text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-foreground mb-1">About</span>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-muted-foreground mt-8">
          &copy; {new Date().getFullYear()} ReWear – Community Clothing Exchange. All rights reserved.
        </div>
      </footer>
    </div>
  );
} 