import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, Flame, Coffee, Heart, CheckCircle, 
  ChevronRight, ShoppingBag, Plus, Minus, X, Trash2, Calendar
} from 'lucide-react';
import { SmoothScrollProvider } from '../lib/smooth-scroll';

export default function FoodCenters() {
  const [activeDay, setActiveDay] = useState('Monday');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const menuData = {
    Monday: [
      { id: 1, name: "Masala Dosa", price: 60, cat: "South Indian", rating: 4.8, img: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=2070&auto=format&fit=crop" },
      { id: 2, name: "Hyderabadi Veg Biryani", price: 120, cat: "North Indian", rating: 4.9, img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2010&auto=format&fit=crop" }
    ],
    Tuesday: [
      { id: 3, name: "Paneer Butter Masala & Naan", price: 140, cat: "North Indian", rating: 4.7, img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2070&auto=format&fit=crop" },
      { id: 4, name: "Schezwan Hakka Noodles", price: 90, cat: "Chinese", rating: 4.6, img: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1984&auto=format&fit=crop" }
    ],
    Wednesday: [
      { id: 5, name: "Chole Bhature", price: 80, cat: "North Indian", rating: 4.9, img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=2024&auto=format&fit=crop" },
      { id: 6, name: "Veg Cheese Grilled Sandwich", price: 70, cat: "Snacks", rating: 4.5, img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop" }
    ],
    Thursday: [
      { id: 7, name: "Idli Sambar (4 pcs)", price: 40, cat: "South Indian", rating: 4.7, img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=2070&auto=format&fit=crop" },
      { id: 8, name: "Veg Fried Rice with Manchurian", price: 110, cat: "Chinese", rating: 4.8, img: "https://images.unsplash.com/photo-1644786444855-46aa1d2551cf?q=80&w=2070&auto=format&fit=crop" }
    ],
    Friday: [
      { id: 9, name: "Special Veg Thali", price: 150, cat: "North Indian", rating: 4.9, img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop" },
      { id: 10, name: "Aloo Paratha with Curd (2 pcs)", price: 60, cat: "North Indian", rating: 4.8, img: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=2070&auto=format&fit=crop" }
    ]
  };

  const favorites = [
    { name: "TAT Double Patty Burger", desc: "A custom double layer cheese patty prepared daily at the Canteen main grill.", price: 90, img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2070&auto=format&fit=crop" },
    { name: "Cold Coffee with Ice Cream", desc: "Creamy vanilla extract coffee blend, the ultimate semester savior.", price: 50, img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=2070&auto=format&fit=crop" },
    { name: "Healthy Sprout & Corn Bowl", desc: "Low oil, fiber rich sprout mix designed for health-conscious student athletes.", price: 60, img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" }
  ];

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const changeQty = (id, delta) => {
    setCart((prev) => {
      return prev.map((i) => {
        if (i.id === id) {
          const newQty = i.qty + delta;
          return newQty > 0 ? { ...i, qty: newQty } : null;
        }
        return i;
      }).filter(Boolean);
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const cartTotal = cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  return (
    <SmoothScrollProvider>
      <div className="bg-[#FFF7ED] min-h-screen text-stone-900 font-sans overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[520px] flex flex-col justify-end">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80&w=1600"
              alt="Food Centers"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(28,14,5,0.93) 0%, rgba(28,14,5,0.80) 55%, rgba(28,14,5,0.40) 100%)' }} />
          </div>
          <div className="relative z-10 max-w-[1400px] mx-auto px-6 xl:px-12 w-full">
            <nav className="flex items-center gap-2 text-xs font-medium mb-10 flex-wrap uppercase" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <a href="https://trident.ac.in" className="hover:text-white transition-colors">Home</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <a href="/" className="hover:text-white transition-colors">Campus Life</a>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>›</span>
              <span style={{ color: '#E5AA3E', fontWeight: 700 }}>Cafeteria</span>
            </nav>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white/70 text-[13px] font-bold uppercase tracking-[0.25em] mb-3"
            >
              Campus Dining & Food Centers
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', fontSize: 'clamp(42px, 7vw, 76px)', fontWeight: 900, color: '#ffffff' }}
            >
              Campus Food<br />
              <span style={{ color: '#E5AA3E' }}>Street & Cafes.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="max-w-2xl leading-relaxed font-medium mb-10"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: '17px' }}
            >
              Serving nutritional, fresh, and delicious choices daily across multiple food kiosks, snack tables, and custom beverage desks inside TAT campus.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              {[{ val: '5+', lbl: 'Food Outlets' }, { val: '4', lbl: 'Meals Per Day' }, { val: '1500+', lbl: 'Students Served' }, { val: '100%', lbl: 'Hygienic Audit' }].map((s, i) => (
                <div key={i} className="px-5 py-3 rounded-lg text-center" style={{ backgroundColor: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <div className="text-[22px] font-black text-white">{s.val}</div>
                  <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── DAILY MENU (INTERACTIVE SWAP) ── */}
        <section id="menu" className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Fresh Day Specials</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Interactive Weekly Menu</h2>
          </div>

          {/* Day Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {Object.keys(menuData).map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeDay === day 
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/10' 
                    : 'bg-white border border-stone-200 hover:border-orange-500/40 text-stone-600'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Menu Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="wait">
              {menuData[activeDay]?.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-md flex items-center p-6 group hover:shadow-xl transition-all"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 relative mr-6">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-0.5 rounded">
                        {item.cat}
                      </span>
                      <span className="text-xs font-bold text-stone-400">★ {item.rating}</span>
                    </div>
                    <h3 className="font-serif text-lg font-bold mb-1 text-stone-900">{item.name}</h3>
                    <div className="text-base font-bold text-orange-600 mb-4">₹{item.price}</div>
                    
                    <button 
                      onClick={() => addToCart(item)}
                      className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-orange-600 hover:text-orange-700 transition-colors"
                    >
                      <Plus size={12} /> Add to plate
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>


        {/* ── STUDENT FAVORITES ── */}
        <section id="favorites" className="py-32 bg-stone-900/5 border-y border-stone-200/60">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Always Hot</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2">Student Favorites</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {favorites.map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-100 group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-xl font-bold mb-3">{item.name}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed mb-6">{item.desc}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-orange-600">₹{item.price}</span>
                      <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Main Canteen</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* ── HYGIENE STANDARDS ── */}
        <section className="py-32 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">Quality Assurance</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold mt-2 mb-6">Hygiene Standards</h2>
              <p className="opacity-70 text-sm leading-relaxed mb-8">
                All vendors inside Trident campus are audited bi-weekly on safety metrics. We mandate complete protective gear, water filtration loops, and organic disposal standards.
              </p>

              <div className="space-y-4">
                {[
                  "FSSAI approved raw ingredients and certified oil brands.",
                  "Zero single-use plastic cups or bags packaging guidelines.",
                  "Daily chemical sterilization of washing zones and cutlery.",
                  "Temperature logs maintained for refrigeration hubs."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle size={18} className="text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs opacity-80 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-orange-600/5 border border-orange-500/20 rounded-3xl p-10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-orange-600">Feedback Board</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Found a cleanliness concern or want to request a new dish addition? Direct suggestions reach the Campus Chef manager immediately.
              </p>
              <textarea placeholder="Write feedback here..." className="w-full h-24 p-4 rounded-xl border border-stone-200 text-xs focus:ring-1 focus:ring-orange-500 focus:outline-none" />
              <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold uppercase tracking-widest rounded-xl transition-colors">
                Submit Feedback
              </button>
            </div>
          </div>
        </section>


        {/* ── SLIDE-OUT CART PANEL ── */}
        <AnimatePresence>
          {isCartOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
            >
              {/* Overlay dismissal */}
              <div className="absolute inset-0 -z-10" onClick={() => setIsCartOpen(false)} />

              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col p-8"
              >
                <div className="flex justify-between items-center pb-6 border-b border-stone-100">
                  <h3 className="font-serif text-2xl font-bold flex items-center gap-2">
                    <Utensils className="text-orange-500" /> Plate Details
                  </h3>
                  <button onClick={() => setIsCartOpen(false)} className="text-stone-400 hover:text-stone-900 transition-colors">
                    <X size={20} />
                  </button>
                </div>

                {/* Cart Items List */}
                <div className="flex-1 overflow-y-auto py-6 space-y-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-20 text-stone-400">
                      <ShoppingBag size={48} className="mx-auto mb-4 opacity-30" />
                      <p className="text-sm">Your plate is currently empty.</p>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center gap-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-sm text-stone-900">{item.name}</h4>
                          <span className="text-xs text-orange-600 font-bold">₹{item.price} each</span>
                        </div>
                        
                        <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-lg px-2 py-1">
                          <button onClick={() => changeQty(item.id, -1)} className="text-stone-500 hover:text-stone-900">
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold">{item.qty}</span>
                          <button onClick={() => changeQty(item.id, 1)} className="text-stone-500 hover:text-stone-900">
                            <Plus size={12} />
                          </button>
                        </div>

                        <button onClick={() => removeFromCart(item.id)} className="text-stone-400 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                {/* Cart Footer */}
                <div className="pt-6 border-t border-stone-100 space-y-4">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Bill</span>
                    <span className="text-orange-600">₹{cartTotal}</span>
                  </div>
                  <button 
                    disabled={cart.length === 0}
                    className="w-full py-4 bg-orange-600 hover:bg-orange-700 disabled:bg-stone-300 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-colors"
                  >
                    Confirm Lunch Tokens
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </SmoothScrollProvider>
  );
}
