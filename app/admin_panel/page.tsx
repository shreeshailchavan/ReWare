"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BadgeCheck, AlertCircle, User2, Clock, Mail, Ban, ShieldCheck, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { SearchIcon, FacebookIcon, TwitterIcon, InstagramIcon } from "lucide-react";
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
import "../globals.css";


const tabs = ["Manage Listings", "Manage Users", "Manage Orders"];

const demoListings = [
  {
    id: 1,
    user: { name: "Alex P.", avatar: "/next.svg" },
    title: "Vintage Denim Jacket",
    category: "Outerwear",
    time: "2h ago",
    status: "pending",
    flagged: true,
  },
  {
    id: 2,
    user: { name: "Jamie L.", avatar: "/vercel.svg" },
    title: "Canvas Tote Bag",
    category: "Accessories",
    time: "5h ago",
    status: "pending",
    flagged: false,
  },
  {
    id: 3,
    user: { name: "Sam T.", avatar: "/file.svg" },
    title: "Plaid Shirt",
    category: "Tops",
    time: "1d ago",
    status: "flagged",
    flagged: true,
  },
];

const demoUsers = [
  {
    id: 1,
    name: "Alex P.",
    email: "alexp@email.com",
    avatar: "/next.svg",
    status: "active",
  },
  {
    id: 2,
    name: "Jamie L.",
    email: "jamiel@email.com",
    avatar: "/vercel.svg",
    status: "warned",
  },
  {
    id: 3,
    name: "Sam T.",
    email: "samt@email.com",
    avatar: "/file.svg",
    status: "suspended",
  },
];

const demoOrders = [
  { id: 1, user: "Alex P.", item: "Denim Jacket", status: "pending", time: "2h ago" },
  { id: 2, user: "Jamie L.", item: "Canvas Tote Bag", status: "completed", time: "1d ago" },
  { id: 3, user: "Sam T.", item: "Plaid Shirt", status: "cancelled", time: "3d ago" },
];

// Map item names to images (from item listing demo)
const itemImages: Record<string, string> = {
  "Vintage Denim Jacket": "/window.svg",
  "Denim Jacket": "/window.svg",
  "Classic Blue Jeans": "/file.svg",
  "Corduroy Jacket": "/globe.svg",
  "Retro Windbreaker": "/vercel.svg",
  "Plaid Shirt": "/next.svg",
  "Canvas Tote Bag": "/window.svg",
  "Wool Scarf": "/file.svg",
  "Leather Boots": "/globe.svg",
  "Striped Tee": "/vercel.svg",
  "Summer Dress": "/next.svg",
  "Oversized Hoodie": "/window.svg",
  "Sneakers": "/file.svg",
};

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState(0);
  const [rejectId, setRejectId] = useState<number|null>(null);
  const [showRejectModal, setShowRejectModal] = useState(false);

  // Handlers for modals
  const handleReject = (id: number) => {
    setRejectId(id);
    setShowRejectModal(true);
  };
  const confirmReject = () => {
    setShowRejectModal(false);
    // Here you would call your API to reject the listing
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        {/* Header */}
    <header className="w-full sticky top-0 z-10 bg-background/80 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 sm:px-6 py-3">
      {/* Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="rounded-full bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center text-xl font-bold shadow-sm">RW</span>
        <span className="text-lg font-semibold tracking-tight">ReWear</span>
      </div>

      {/* Search bar */}
      <div className="w-full order-3 md:order-none md:w-auto flex-1 md:flex-none">
        <div className="relative max-w-md mx-auto md:mx-0">
          <Input
            type="text"
            placeholder="Search for clothing, brands, or categories..."
            className="bg-white border border-input rounded-md px-4 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/30 text-base text-foreground placeholder:text-muted-foreground w-full pl-10"
            aria-label="Search"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5 pointer-events-none" />
        </div>
      </div>

      {/* Desktop Nav Links */}
      <nav className="hidden md:flex items-center gap-4">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="#" className="text-sm hover:text-primary transition-colors">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#browse" className="text-sm hover:text-primary transition-colors">Browse</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="ghost" className="text-primary hover:bg-primary/10" style={{ color: '#4B9C8E' }}>Login</Button>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90" style={{ backgroundColor: '#F4A261', color: '#1F2937' }}>Sign Up</Button>
      </nav>

      {/* Mobile Menu Button */}
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
  </header>
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center px-2 py-12 sm:px-6 mt-12">

    

      {/* Tabs */}
      <div className="w-full max-w-2xl flex gap-2 mb-8">
        {tabs.map((tab, i) => (
          <Button
            key={tab}
            variant={activeTab === i ? "default" : "outline"}
            className={`flex-1 rounded-full text-sm font-medium py-2 ${activeTab === i ? "bg-primary text-primary-foreground" : "bg-muted text-foreground hover:bg-accent/30"}`}
            onClick={() => setActiveTab(i)}
            aria-pressed={activeTab === i}
            style={{ cursor: "pointer" }}
          >
            {tab}
          </Button>
        ))}
      </div>

      {/* Manage Listings */}
      {activeTab === 0 && (
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {demoListings.map(listing => (
            <Card key={listing.id} className="flex flex-col sm:flex-row items-stretch gap-0 p-0 border border-border shadow-sm min-h-[120px]">
              {/* Avatar */}
              <div className="flex-shrink-0 flex items-center justify-center bg-muted p-4 sm:p-0 sm:pl-4">
                <Image src={listing.user.avatar} alt={listing.user.name} width={60} height={56} className="rounded-full object-cover w-40 h-14" />
              </div>
              {/* Info and Actions */}
              <div className="flex flex-col flex-1 justify-between p-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-base">{listing.user.name}</span>
                    {listing.flagged && (
                      <>
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                        <span className="sr-only">Flagged Listing</span>
                      </>
                    )}
                    {listing.status === "pending" && <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-xs font-medium border border-yellow-200">Pending</span>}
                    {listing.status === "flagged" && <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs font-medium border border-red-200">Flagged</span>}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{listing.title}</div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{listing.category}</span>
                    <span className="mx-1">·</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {listing.time}</span>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button size="sm" className="bg-green-100 text-green-800 hover:bg-green-200 border border-green-200 cursor-pointer" variant="outline">
                    <BadgeCheck className="w-4 h-4 mr-1" /> Approve Listing
                  </Button>
                  <Button size="sm" className="bg-red-100 text-red-800 hover:bg-red-200 border border-red-200 cursor-pointer" variant="outline" onClick={() => handleReject(listing.id)}>
                    <AlertCircle className="w-4 h-4 mr-1" /> Reject Listing
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Manage Users */}
      {activeTab === 1 && (
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {demoUsers.map(user => (
            <Card key={user.id} className="flex flex-col sm:flex-row items-stretch gap-0 p-0 border border-border shadow-sm min-h-[120px]">
              {/* Avatar */}
              <div className="flex-shrink-0 flex items-center justify-center bg-muted p-4 sm:p-0 sm:pl-4">
                <Image src={user.avatar} alt={user.name} width={56} height={56} className="rounded-full object-cover w-40 h-14" />
              </div>
              {/* Info and Actions */}
              <div className="flex flex-col flex-1 justify-between p-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-base">{user.name}</span>
                    {user.status === "warned" && <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-xs font-medium border border-yellow-200 cursor-pointer">Warned</span>}
                    {user.status === "suspended" && <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs font-medium border border-red-200 cursor-pointer">Suspended</span>}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><Mail className="w-4 h-4" /> {user.email}</div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  <Button size="sm" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border border-yellow-200 cursor-pointer" variant="outline">
                    <ShieldCheck className="w-4 h-4 mr-1" /> Warn User
                  </Button>
                  <Button size="sm" className="bg-red-100 text-red-800 hover:bg-red-200 border border-red-200 cursor-pointer" variant="outline">
                    <Ban className="w-4 h-4 mr-1" /> Suspend Account
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Manage Orders */}
      {activeTab === 2 && (
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {demoOrders.map(order => (
            <Card key={order.id} className="flex flex-col sm:flex-row items-stretch gap-0 p-0 border border-border shadow-sm min-h-[120px]">
              {/* Item Image */}
              <div className="flex-shrink-0 flex items-center justify-center bg-muted p-4 sm:p-0 sm:pl-4">
                <Image src={itemImages[order.item] || "/window.svg"} alt={order.item} width={60} height={56} className="rounded object-cover w-24 h-14" />
              </div>
              {/* Info and Status */}
              <div className="flex flex-col flex-1 justify-between p-4">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-base">{order.user}</span>
                    <span className="mx-1 text-xs text-muted-foreground">ordered</span>
                    <span className="font-medium text-sm">{order.item}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> {order.time}</div>
                </div>
                <div className="flex justify-end gap-2 mt-4">
                  {order.status === "pending" && <span className="px-2 py-0.5 rounded bg-yellow-100 text-yellow-800 text-xs font-medium border border-yellow-200">Pending</span>}
                  {order.status === "completed" && <span className="px-2 py-0.5 rounded bg-green-100 text-green-800 text-xs font-medium border border-green-200">Completed</span>}
                  {order.status === "cancelled" && <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-xs font-medium border border-red-200">Cancelled</span>}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Reject Listing Modal */}
      <Dialog open={showRejectModal} onOpenChange={setShowRejectModal}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Reject Listing</DialogTitle>
          </DialogHeader>
          <div className="py-2 text-sm">Are you sure you want to reject this listing? This action cannot be undone.</div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowRejectModal(false)}>Cancel</Button>
            <Button className="bg-red-600 text-white hover:bg-red-700" onClick={confirmReject}>Reject</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      </div>

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
