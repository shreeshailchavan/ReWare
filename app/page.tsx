"use client";
import Image from "next/image";
import "./globals.css";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { StarIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const categories = [
  { name: "Tops", img: "/LandingPage/top.webp" },
  { name: "Bottoms", icon: "👖" },
  { name: "Shoes", icon: "👟" },
  { name: "Accessories", icon: "👜" },
  { name: "Outerwear", icon: "🧥" },
  { name: "Kids", icon: "🧒" },
];

const featuredItems = [
  { name: "Denim Jacket", img: "/LandingPage/carosial-1.png" },
  { name: "Red Dress", img: "/LandingPage/Red_Dress.jpg" }

];

const products = [
  { name: "Blue Tee", img: "/next.svg", points: 10 },
  { name: "Chinos", img: "/window.svg", points: 15 },
  { name: "Boots", img: "/file.svg", points: 20 },
  { name: "Cap", img: "/globe.svg", points: 5 },
  { name: "Sweater", img: "/vercel.svg", points: 12 },
  { name: "Kids Dress", img: "/next.svg", points: 8 },
];

const testimonials = [
  {
    name: "Alex P.",
    feedback:
      "Swapping on ReWear is so easy! I love giving my clothes a new home and earning points.",
    rating: 5,
  },
  {
    name: "Jamie L.",
    feedback:
      "A fantastic way to refresh my wardrobe sustainably. Highly recommend!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* Header */}
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

      {/* Hero Section */}
      <section className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4 sm:px-8 py-10 md:py-20 bg-gradient-to-b from-background to-muted/40">
        {/* Left: Image */}
        <motion.div
          className="w-full md:w-1/2 flex items-center justify-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="w-64 h-64 bg-muted rounded-xl flex items-center justify-center shadow-inner">
            {/* Placeholder for hero image */}
            <img
              src="./LandingPage/hero.png"
              alt="hero"
              className="w-full h-full object-contain object-fill scale-x-[-1] rounded-xl"
            />

          </div>
        </motion.div>
        {/* Right: Headline and CTA */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-6"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-center md:text-left">
            Give Clothes a Second Life
          </h1>
          <p className="text-lg text-muted-foreground max-w-md text-center md:text-left">
            Join the ReWear community to swap unused clothes or redeem them for points. Refresh your wardrobe sustainably and effortlessly.
          </p>
          <div className="flex gap-4 mt-2">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button size="lg" className="shadow-md px-6 py-3 text-base">Start Swapping</Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button variant="outline" size="lg" className="shadow-md px-6 py-3 text-base">Browse Items</Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Carousel of Featured Items */}
      <section className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-8" id="featured">
        <h2 className="text-2xl font-semibold mb-6">Featured Clothing</h2>
        <Carousel opts={{ align: "start" }}>
          <CarouselContent className="-ml-4">
            {featuredItems.map((item, i) => (
              <CarouselItem key={i} className="pl-4">
                <motion.div
                  className="bg-card rounded-xl shadow-md p-4 flex flex-col items-center justify-center min-w-[120px] min-h-[320px]"
                  whileHover={{ scale: 1.04 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="w-[100%] h-[100%]relative mb-4">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="rounded-xl "
                    />
                  </div>
                  <span className="font-medium text-lg text-center">{item.name}</span>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Categories Section */}
      <section className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-8" id="categories">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.06, boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer"
            >
              <Card className="items-center justify-center py-6 px-2 text-center hover:bg-accent transition-colors shadow-sm">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-medium text-base">{cat.name}</div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Listings */}
      <section className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-8" id="products">
        <h2 className="text-2xl font-semibold mb-6">Product Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((prod, i) => (
            <motion.div
              key={prod.name}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 24px rgba(0,0,0,0.10)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="flex flex-col items-center p-5 gap-3 shadow-sm hover:shadow-md transition-shadow h-72 min-h-[18rem] max-h-[20rem] bg-white border border-border">
                <div className="w-full flex-1 flex items-center justify-center">
                  <Image src={prod.img} alt={prod.name} width={90} height={90} className="rounded-lg object-contain mb-2 max-h-24" />
                </div>
                <div className="font-semibold text-lg text-center">{prod.name}</div>
                <div className="flex gap-2 items-center mt-1">
                  <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">{prod.points} pts</span>
                  <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded text-xs font-medium">Swap</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials / Impact Metrics */}
      <section className="w-full max-w-5xl mx-auto py-10 px-4 sm:px-8" id="testimonials">
        <h2 className="text-2xl font-semibold mb-6">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="p-6 shadow-md flex flex-col gap-3">
                <CardHeader className="flex flex-row items-center gap-3">
                  <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold">
                    {t.name[0]}
                  </span>
                  <CardTitle className="text-lg font-semibold">{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-base text-muted-foreground">{t.feedback}</CardContent>
                <div className="flex gap-1 mt-2">
                  {[...Array(t.rating)].map((_, idx) => (
                    <StarIcon key={idx} className="text-yellow-400 w-5 h-5" />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
