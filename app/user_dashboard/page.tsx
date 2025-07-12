'use client'
import {
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenu,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {  FacebookIcon, TwitterIcon, InstagramIcon, BadgeCheck } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import React, { useState } from "react";

const user = {
  name: 'Jane Doe',
  avatar: '/LandingPage/hero.png',
  bio: 'Sustainable fashion enthusiast. Swapping to save the planet! 🌱',
  stats: [
    { label: 'Points Balance', value: 320 },
    { label: 'Items Listed', value: 8 },
    { label: 'Swaps Completed', value: 15 },
    { label: 'Purchases', value: 5 },
    { label: 'Followers', value: 120 },
    { label: 'Following', value: 42 },
  ],
};

const listings = [
  { id: 1, name: 'Blue Denim Jacket', img: '/LandingPage/carosial-1.png', status: 'Active' },
  { id: 2, name: 'Red Dress', img: '/LandingPage/Red_Dress.jpg', status: 'Pending' },
  { id: 3, name: 'White Sneakers', img: '/window.svg', status: 'Active' },
  { id: 4, name: 'Wool Scarf', img: '/vercel.svg', status: 'Sold' },
];

const purchases = [
  { id: 1, name: 'Green Hoodie', img: '/file.svg', status: 'Delivered' },
  { id: 2, name: 'Black Boots', img: '/globe.svg', status: 'In Transit' },
  { id: 3, name: 'Kids Dress', img: '/next.svg', status: 'Delivered' },
  { id: 4, name: 'Cap', img: '/window.svg', status: 'In Transit' },
];

function StatCard({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-sm px-4 py-3 min-w-[120px]">
      <span className="text-xl font-bold text-primary">{value}</span>
      <span className="text-xs text-muted-foreground mt-1 text-center">{label}</span>
    </div>
  );
}

function ItemCard({ item }: { item: { name: string; img: string; status: string } }) {
  const statusColors: Record<string, string> = {
    Active: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Sold: 'bg-gray-100 text-gray-600',
    Delivered: 'bg-blue-100 text-blue-700',
    'In Transit': 'bg-orange-100 text-orange-700',
  };

  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-4 min-w-[140px] max-w-[160px] mx-2 transition-transform transform hover:scale-105">
      <div className="w-24 h-24 relative mb-2 rounded-md overflow-hidden shadow-sm">
        <Image src={item.img} alt={item.name} fill className="object-cover" />
      </div>
      <span className="font-medium text-sm text-center mb-1 line-clamp-2">{item.name}</span>
      <span
        className={`text-xs px-2 py-0.5 rounded font-medium mt-auto ${statusColors[item.status] || 'bg-accent text-accent-foreground'}`}
      >
        {item.status}
      </span>
    </div>
  );
}

export default function UserDashboard() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
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
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
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

      <div className="container mx-auto px-4 min-h-screen bg-muted/50 py-6 flex flex-col gap-8">
        {/* Header (copied from app/page.tsx) */}


        {/* Profile & Stats */}
        <section className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6 md:gap-10 items-center">
          {/* Profile Picture */}
          <div className="flex-shrink-0 flex flex-col items-center w-full md:w-auto">
            <div className="w-28 h-28 relative rounded-full overflow-hidden border-4 border-primary shadow-md mb-2">
              <Image src={user.avatar} alt={user.name} fill className="object-cover" />
            </div>
            <span className="font-semibold text-lg mt-1">{user.name}</span>
          </div>

          {/* Stats Grid & Bio */}
          <div className="flex-1 flex flex-col gap-4 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
              {user.stats.map((stat) => (
                <StatCard key={stat.label} label={stat.label} value={stat.value} />
              ))}
            </div>
            <div className="bg-muted rounded-xl p-4 mt-2 min-h-[60px] flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{user.bio}</span>
              <button className="text-xs px-3 py-1 bg-primary text-white rounded-full hover:bg-primary/90 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </section>

        {/* My Listings */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4 border-l-4 border-primary pl-3">My Listings</h2>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            {listings.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}

            {/* Add New Item Card */}
            <Link href="/add_newitem" className="no-underline flex flex-col items-center justify-center bg-muted hover:bg-primary/10 transition rounded-xl border-2 border-dashed border-primary text-primary cursor-pointer p-4 min-w-[140px] max-w-[160px] mx-2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-primary mb-2 text-2xl">
                +
              </div>
              <span className="text-sm font-medium text-center">Add New Item</span>
            </Link>
          </div>
        </section>

        {/* My Purchases */}
        <section className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-xl font-semibold text-muted-foreground mb-4 border-l-4 border-primary pl-3">My Purchases</h2>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            {purchases.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </div>
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
