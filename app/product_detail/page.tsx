"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StarIcon } from "@radix-ui/react-icons";
import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon, BadgeCheck, User2, Calendar, ArrowLeft, ArrowRight } from "lucide-react";
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

const product = {
  name: "Vintage Denim Jacket",
  price: "$39.99",
  description:
    "A classic vintage denim jacket in excellent condition. Perfect for layering in any season. Size M. Sustainable and stylish!",
  uploader: {
    name: "Alex P.",
    avatar: "/next.svg",
    date: "2024-06-01",
  },
  available: true,
  images: [
    "/window.svg",
    "/file.svg",
    "/globe.svg",
    "/vercel.svg",
    "/next.svg",
  ],
  mainImage: "/window.svg",
};

const similarItems = [
  { name: "Classic Blue Jeans", price: "$24.99", img: "/file.svg" },
  { name: "Corduroy Jacket", price: "$34.99", img: "/globe.svg" },
  { name: "Retro Windbreaker", price: "$29.99", img: "/vercel.svg" },
  { name: "Plaid Shirt", price: "$19.99", img: "/next.svg" },
  { name: "Canvas Tote Bag", price: "$14.99", img: "/window.svg" },
];

export default function ItemListing() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const similarRef = useRef<HTMLDivElement>(null);

  const scrollGallery = (dir: "left" | "right") => {
    if (!galleryRef.current) return;
    const scrollAmount = 120;
    galleryRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
  const scrollSimilar = (dir: "left" | "right") => {
    if (!similarRef.current) return;
    const scrollAmount = 220;
    similarRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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

      {/* Amazon-style Item Detail Layout */}
      <main className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto w-full px-4 sm:px-8 py-12">
        {/* Left: Main Product Image & Gallery */}
        <section className="md:w-2/5 w-full flex flex-col items-center">
          <div className="flex flex-col h-full w-full">
            <Card className="w-full max-w-sm aspect-[3/4] flex items-center justify-center bg-muted border border-border shadow-md overflow-hidden">
              <Image
                src={product.mainImage}
                alt={product.name}
                width={320}
                height={420}
                className="object-contain w-full h-full"
              />
            </Card>
            {/* Image Gallery Carousel */}
            <div className="w-full mt-6 relative ">
              <h3 className="text-sm font-medium mb-2 text-muted-foreground">Product Images</h3>
              <div className="relative flex items-center overflow-x-hidden w-full">
                <button
                  aria-label="Previous images"
                  className="absolute left-0 z-10 bg-white dark:bg-muted border border-border rounded-full shadow p-1 hover:bg-accent/20 transition disabled:opacity-40"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                  onClick={() => scrollGallery("left")}
                  tabIndex={0}
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div
                  ref={galleryRef}
                  className="flex gap-3 overflow-x-auto pb-2 no-scrollbar w-full px-8"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {product.images.map((img, i) => (
                    <motion.div
                      key={img}
                      whileHover={{ scale: 1.05 }}
                      className="min-w-[80px] h-28 rounded-lg border border-border bg-white dark:bg-muted flex items-center justify-center shadow-sm cursor-pointer transition-transform"
                    >
                      <Image src={img} alt={`Gallery ${i + 1}`} width={70} height={90} className="object-contain w-full h-full" />
                    </motion.div>
                  ))}
                </div>
                <button
                  aria-label="Next images"
                  className="absolute right-0 z-10 bg-white dark:bg-muted border border-border rounded-full shadow p-1 hover:bg-accent/20 transition disabled:opacity-40"
                  style={{ top: '50%', transform: 'translateY(-50%)' }}
                  onClick={() => scrollGallery("right")}
                  tabIndex={0}
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Right: Product Info Card */}
        <section className="md:w-3/5 w-full flex flex-col h-full">
          <Card className="w-full h-full flex flex-col justify-between p-6 border border-border shadow-md min-h-[420px]">
            <div className="flex-1 flex flex-col">
              <h2 className="text-2xl font-bold leading-tight mb-1">{product.name}</h2>
              <div className="text-xl font-semibold text-primary mb-2">{product.price}</div>
              <div className="flex items-center gap-2 mb-2">
                {product.available ? (  
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs font-medium border border-green-200">
                    <BadgeCheck className="w-4 h-4" /> Available
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs font-medium border border-red-200">
                    Unavailable
                  </span>
                )}
              </div>
              <p className="text-base text-foreground/90 leading-relaxed mb-4">{product.description}</p>
              <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <User2 className="w-4 h-4" /> {product.uploader.name}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> {product.uploader.date}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4 w-full">
              <Button
                size="lg"
                className="px-6 py-2 text-base font-semibold shadow-md w-full"
                disabled={!product.available}
              >
                Swap Request
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-2 text-base font-semibold border-accent text-accent hover:bg-accent/10 w-full"
                style={{ borderColor: '#F4A261', color: '#F4A261' }}
                disabled={!product.available}
              >
                Redeem via Points
              </Button>
            </div>
          </Card>
        </section>
      </main>

      {/* Similar Items Carousel */}
      <section className="max-w-6xl mx-auto w-full px-4 sm:px-8 pb-12">
        <h2 className="text-xl font-semibold mb-4">Similar Items</h2>
        <div className="relative flex items-center">
          <button
            aria-label="Previous similar items"
            className="absolute left-0 z-10 bg-white dark:bg-muted border border-border rounded-full shadow p-1 hover:bg-accent/20 transition disabled:opacity-40"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => scrollSimilar("left")}
            tabIndex={0}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div
            ref={similarRef}
            className="flex gap-4 overflow-x-auto no-scrollbar w-full px-8 py-2"
            style={{ scrollBehavior: 'smooth' }}
          >
            {similarItems.map((item, i) => (
              <motion.div
                key={item.name}
                whileHover={{ scale: 1.04 }}
                className="min-w-[180px] max-w-[200px] bg-white dark:bg-muted border border-border rounded-lg shadow-md flex flex-col items-center p-4 transition-transform cursor-pointer"
              >
                <Image src={item.img} alt={item.name} width={80} height={80} className="mb-3 rounded object-contain" />
                <div className="font-medium text-base text-center mb-1">{item.name}</div>
                <div className="text-primary font-semibold">{item.price}</div>
              </motion.div>
            ))}
          </div>
          <button
            aria-label="Next similar items"
            className="absolute right-0 z-10 bg-white dark:bg-muted border border-border rounded-full shadow p-1 hover:bg-accent/20 transition disabled:opacity-40"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => scrollSimilar("right")}
            tabIndex={0}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

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