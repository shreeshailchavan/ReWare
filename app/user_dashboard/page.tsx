import Image from 'next/image';
import Link from 'next/link';
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
  return (
    <div className="container mx-auto px-4 min-h-screen bg-muted/50 py-6 flex flex-col gap-8">
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
  );
}
