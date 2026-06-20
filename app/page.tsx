"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Menu, Search, User, ShoppingBag } from 'lucide-react';

export default function Home() {
  const [hoveredPanel, setHoveredPanel] = useState<'left' | 'center' | 'right' | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All Products');

  const products = [
    { id: 1, name: "Linda Earrings", price: "690 PLN", category: "Earrings", isNew: true, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Viva Black Earrings", price: "320 PLN", category: "Earrings", isNew: false, image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Aura Gold Ring", price: "450 PLN", category: "Rings", isNew: true, image: "https://images.unsplash.com/photo-1605100804763-247f67b2548e?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Christy Silver Rings", price: "610 PLN", category: "Rings", isNew: false, image: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "Classic Gold Chain", price: "890 PLN", category: "Neck Chains", isNew: false, image: "https://images.unsplash.com/photo-1599643478514-4a11011604a1?q=80&w=600&auto=format&fit=crop" },
    { id: 6, name: "Vera Pendant", price: "540 PLN", category: "Pendants", isNew: true, image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop" },
    { id: 7, name: "Lumina Bracelet", price: "720 PLN", category: "Chains", isNew: false, image: "https://images.unsplash.com/photo-1620288627228-db3b28b74a1e?q=80&w=600&auto=format&fit=crop" },
    { id: 8, name: "Bold Cuff", price: "950 PLN", category: "Bracelets", isNew: true, image: "https://images.unsplash.com/photo-1610384100728-66236b2f7dd0?q=80&w=600&auto=format&fit=crop" }
  ];

  const filteredProducts = activeCategory === 'All Products' ? products : products.filter(p => p.category === activeCategory);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full overflow-x-hidden bg-lux-base min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-lux-base/90 backdrop-blur-md py-4 shadow-lg shadow-black/40' : 'bg-transparent py-5 lg:py-8'}`}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer z-50">
            <div className="text-xl md:text-2xl font-heading text-lux-gold uppercase tracking-[0.2em] font-medium flex items-center">
              Luxmint <span className="opacity-80 ml-2 font-light">Gold</span>
              <div className="w-1.5 h-1.5 bg-lux-champagne rounded-full ml-3 shadow-[0_0_8px_rgba(232,212,139,0.8)]" />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.15em] uppercase font-sans text-lux-offwhite/80">
            <a href="#home" className="hover:text-lux-gold transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-lux-gold transition-colors duration-300">About</a>
            <a href="#offerings" className="hover:text-lux-gold transition-colors duration-300">Our Offerings</a>
            <a href="#contact" className="hover:text-lux-gold transition-colors duration-300">Contact</a>
          </div>

          {/* Right Area */}
          <div className="hidden md:flex items-center gap-6 text-lux-offwhite">
            <Search className="w-4 h-4 hover:text-lux-gold cursor-pointer transition-colors duration-300" />
            <User className="w-4 h-4 hover:text-lux-gold cursor-pointer transition-colors duration-300" />
            <ShoppingBag className="w-4 h-4 hover:text-lux-gold cursor-pointer transition-colors duration-300" />
            <button className="bg-lux-gold text-lux-base px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium hover:bg-lux-champagne transition-all duration-300 ml-4 hidden lg:block hover:shadow-[0_0_15px_rgba(201,168,76,0.3)]">
              Shop Now
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden text-lux-offwhite cursor-pointer z-50">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* TRI-PANEL MODEL HERO SECTION */}
      <section id="home" className="relative h-screen w-full flex flex-col md:flex-row pt-20 md:pt-0 bg-[#000] overflow-hidden">
        
        {[
          { id: 'left', src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop', alt: 'Model with jewelry' },
          { id: 'center', src: 'https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1000&auto=format&fit=crop', alt: 'Elegant portrait' },
          { id: 'right', src: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=1000&auto=format&fit=crop', alt: 'Model in silk' }
        ].map((panel) => (
          <motion.div
            key={panel.id}
            className="relative h-1/3 md:h-full border-b md:border-b-0 md:border-r border-white/10 last:border-0 group cursor-default"
            initial={{ flex: 1 }}
            animate={{ flex: hoveredPanel === panel.id ? 1.4 : hoveredPanel ? 0.8 : 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={() => setHoveredPanel(panel.id as 'left' | 'center' | 'right')}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <Image
              src={panel.src}
              alt={panel.alt}
              fill
              className="object-cover opacity-60 md:opacity-50 group-hover:opacity-80 transition-all duration-[1.5s] group-hover:scale-105"
              priority
              referrerPolicy="no-referrer"
            />
            {/* Overlay to dim panels intentionally */}
            <div className="absolute inset-0 bg-lux-base/50 group-hover:bg-lux-base/20 transition-colors duration-700 pointer-events-none" />
          </motion.div>
        ))}

        {/* Global Dark Gradient for bottom text readability */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

        {/* Center Main Content Overlay */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-center lg:justify-end items-center z-30 px-6 pb-12 md:pb-24 mt-16 md:mt-0">
           
           <h1 className="font-heading text-[42px] md:text-7xl lg:text-[7.5rem] text-[#fffdf8] tracking-tight leading-[1.05] md:leading-[1.05] mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] text-center">
              Where Luxury<br /><span className="text-lux-champagne">Meets Legacy</span>
           </h1>
           
           <div className="relative flex items-center justify-center w-full max-w-4xl my-4 md:my-6 hidden md:flex">
              <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-lux-champagne/40 to-transparent"></div>
              {/* Optional reference ornament */}
              <div className="w-1.5 h-1.5 bg-lux-champagne rounded-full shadow-[0_0_8px_rgba(232,212,139,0.8)] z-10"></div>
           </div>

           <p className="mt-4 font-sans text-[10px] md:text-[13px] lg:text-[14px] text-lux-offwhite uppercase tracking-[0.15em] md:tracking-[0.25em] max-w-2xl mx-auto leading-loose md:leading-loose text-center drop-shadow-md">
              Authentic gold jewellery, precious accessories and investment-grade gold — curated for those who demand excellence.
           </p>
           
           <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 pointer-events-auto">
              <button className="w-full sm:w-auto bg-lux-gold text-lux-base px-8 md:px-12 py-3.5 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium hover:bg-lux-champagne transition-all duration-300 shadow-[0_0_20px_rgba(201,168,76,0.15)] hover:shadow-[0_0_30px_rgba(232,212,139,0.3)]">
                 Explore Collection
              </button>
              <button className="w-full sm:w-auto bg-black/20 border border-lux-offwhite/50 text-lux-offwhite px-8 md:px-12 py-3.5 md:py-4 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium hover:bg-lux-offwhite hover:text-lux-base transition-all duration-300 backdrop-blur-md">
                 Learn More
              </button>
           </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="relative w-full bg-white text-lux-base py-24 pb-32 lg:py-40 lg:pb-48 overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fcfcfc] -z-10"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Image Container - Spans 5 columns */}
            <div className="lg:col-span-5 relative group mt-12 md:mt-0">
              <motion.div 
                className="aspect-[4/5] relative w-full overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1200&auto=format&fit=crop"
                  alt="Luxmint Gold Craftsmanship"
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[2s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Floating accent image for creativity */}
              <motion.div 
                className="absolute -bottom-16 -right-8 md:-right-16 w-2/3 md:w-3/4 aspect-[3/4] overflow-hidden border-8 border-white shadow-2xl z-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image 
                  src="https://images.unsplash.com/photo-1610384100728-66236b2f7dd0?q=80&w=800&auto=format&fit=crop"
                  alt="Luxmint Gold Detail"
                  fill
                  className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              {/* Decorative block */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-lux-offwhite -z-10"></div>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-1"></div>

            {/* Text Content - Spans 6 columns */}
            <div className="lg:col-span-6 flex flex-col items-start lg:pl-10 relative z-10 pt-24 md:pt-0">
               <motion.span 
                 className="text-xs md:text-sm font-sans tracking-[0.2em] text-lux-gold uppercase mb-6 flex items-center gap-4"
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <span className="w-12 h-[1px] bg-lux-gold"></span>
                 Who We Are
               </motion.span>
               
               <motion.h2 
                 className="text-4xl md:text-5xl lg:text-[4rem] font-heading tracking-tight leading-[1.05] mb-8 text-[#111]"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
               >
                  A Legacy Built on <br />
                  <span className="text-lux-gold">Gold, Trust & Class</span>
               </motion.h2>

               <motion.p 
                 className="text-[#444] font-sans text-sm md:text-[15px] leading-[1.8] mb-6 max-w-xl"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
               >
                 Luxmint Gold was founded on a singular belief — that every person deserves refined access to authentic gold. Whether you're looking for exquisite jewellery to mark a milestone, a precious gift that carries real value, or a tangible investment opportunity in gold, we bring it all to you with professionalism, transparency, and class.
               </motion.p>
               <motion.p 
                 className="text-[#111] font-sans text-sm md:text-[15px] leading-[1.8] mb-12 max-w-xl font-medium"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
               >
                 We are not just a jewellery brand. We are custodians of a timeless asset.
               </motion.p>

               {/* Trust Badges */}
               <motion.div 
                 className="w-full flex flex-row gap-6 sm:gap-12 pt-10 border-t border-black/10 flex-wrap"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
               >
                  <div className="flex flex-col gap-3">
                     <span className="text-lux-gold text-xl">✦</span>
                     <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#111]">100% Authentic<br/>Gold</span>
                  </div>
                  <div className="flex flex-col gap-3">
                     <span className="text-lux-gold text-xl">✦</span>
                     <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#111]">Certified &<br/>Verified</span>
                  </div>
                  <div className="flex flex-col gap-3">
                     <span className="text-lux-gold text-xl">✦</span>
                     <span className="text-[10px] md:text-xs uppercase tracking-[0.15em] font-sans font-medium text-[#111]">Luxury<br/>Packaging</span>
                  </div>
               </motion.div>
            </div>

          </div>
        </div>
      </section>
      
      {/* FEATURES / OFFERINGS SECTION */}
      <section id="offerings" className="relative w-full bg-[#fcfcfc] text-lux-base py-24 lg:py-32 border-t border-black/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <motion.div 
            className="flex flex-col items-center text-center mb-20 md:mb-28"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="text-xs font-sans tracking-[0.2em] text-lux-gold uppercase mb-4 flex items-center justify-center gap-4">
              <span className="w-8 h-[1px] bg-lux-gold"></span>
              What We Offer
              <span className="w-8 h-[1px] bg-lux-gold"></span>
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading tracking-tight mb-6 text-[#111] leading-tight">Everything gold, crafted for your <br/><span className="text-lux-champagne font-medium">lifestyle and your legacy</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 w-full">
            
            {/* Card 1 */}
            <motion.div 
              className="flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative aspect-[4/5] bg-[#f2f2f2] group-hover:bg-[#ebebeb] transition-colors duration-500 overflow-hidden mb-8">
                <Image 
                  src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop"
                  alt="Fine Jewellery"
                  fill
                  className="object-cover opacity-90 mix-blend-multiply scale-100 group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-2 flex flex-col items-center text-center">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-3 text-[#111] group-hover:text-lux-gold transition-colors duration-300">Fine Jewellery</h3>
                <p className="text-[#555] font-sans text-[13px] leading-[1.8] max-w-sm">From statement necklaces to delicate rings, our jewellery collection blends timeless craftsmanship with modern elegance. Each piece is made from certified gold and designed to last generations.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              className="flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="relative aspect-[4/5] bg-[#f2f2f2] group-hover:bg-[#ebebeb] transition-colors duration-500 overflow-hidden mb-8">
                <Image 
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop"
                  alt="Gold Accessories"
                  fill
                  className="object-cover opacity-90 mix-blend-multiply scale-100 group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-2 flex flex-col items-center text-center">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-3 text-[#111] group-hover:text-lux-gold transition-colors duration-300">Gold Accessories</h3>
                <p className="text-[#555] font-sans text-[13px] leading-[1.8] max-w-sm">Elevate your everyday with our curated range of gold accessories — bracelets, chains, bangles and more. Luxury you can wear, value you can feel.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              className="flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative aspect-[4/5] bg-[#f2f2f2] group-hover:bg-[#ebebeb] transition-colors duration-500 overflow-hidden mb-8">
                <Image 
                  src="https://images.unsplash.com/photo-1620288627228-db3b28b74a1e?q=80&w=800&auto=format&fit=crop"
                  alt="Investment Gold"
                  fill
                  className="object-cover opacity-90 mix-blend-multiply scale-100 group-hover:scale-[1.03] transition-transform duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-2 flex flex-col items-center text-center">
                <h3 className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium mb-3 text-[#111] group-hover:text-lux-gold transition-colors duration-300">Investment Gold</h3>
                <p className="text-[#555] font-sans text-[13px] leading-[1.8] max-w-sm">Grow your wealth with tangible assets. We offer verified gold bars, coins and collectibles for individuals looking to invest in the most trusted store of value on earth.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="categories" className="relative w-full bg-white text-lux-base pt-16 pb-24 lg:pt-20 lg:pb-32 border-t border-black/5">
        <div className="w-full flex flex-col">
          {/* Top Filter Bar */}
          <div className="w-full border-b border-black/10 px-6 lg:px-12 sticky top-[80px] z-30 bg-white/95 backdrop-blur-md">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4">
              <div className="flex gap-8 overflow-x-auto no-scrollbar py-2">
                {['All Products', 'Rings', 'Chains', 'Neck Chains', 'Pendants', 'Earrings', 'Bracelets'].map((cat) => (
                  <button 
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`whitespace-nowrap text-[11px] uppercase tracking-[0.1em] font-sans transition-colors duration-300 font-medium ${activeCategory === cat ? 'text-[#111]' : 'text-[#777] hover:text-[#111]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] font-sans font-medium text-[#111] cursor-pointer pl-8 border-l border-black/10">
                Filter <div className="w-3 h-[1px] bg-black"></div>
              </div>
            </div>
            {/* Active Indication Bar (Simulated position for 'All' for visual effect, but static logic) */}
            <div className="max-w-[1400px] mx-auto relative h-[2px] w-full bg-black/5">
               <div className="absolute bottom-0 left-0 h-[2px] bg-lux-gold w-16 md:w-24"></div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 w-full mt-16 lg:mt-24">
             <motion.div 
               className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16"
               layout
             >
               {filteredProducts.map((product) => (
                 <motion.div 
                   key={product.id}
                   className="flex flex-col group cursor-pointer"
                   layout
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.4 }}
                 >
                    <div className="relative aspect-square bg-[#f8f8f8] mb-6 overflow-hidden flex items-center justify-center p-8 group-hover:bg-[#f2f2f2] transition-colors duration-300">
                       {product.isNew && <span className="absolute top-4 left-4 text-[9px] uppercase tracking-[0.1em] font-sans text-[#777] z-10">New</span>}
                       <div className="absolute top-4 right-4 text-[#aaa] group-hover:text-lux-gold transition-colors duration-300 text-lg z-10">
                          <ShoppingBag className="w-4 h-4" />
                       </div>
                       <Image 
                         src={product.image}
                         alt={product.name}
                         fill
                         className="object-cover mix-blend-multiply scale-100 group-hover:scale-105 transition-transform duration-[1.5s]"
                         referrerPolicy="no-referrer"
                       />
                       <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-sm hover:border-lux-gold hover:text-lux-gold z-10">
                          <Search className="w-4 h-4" />
                       </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                       <h4 className="text-[11px] uppercase tracking-[0.1em] font-sans font-medium text-[#111]">{product.name}</h4>
                       <p className="text-[13px] font-sans text-[#555]">{product.price}</p>
                       {/* Color variations (simulated) */}
                       <div className="flex gap-2 mt-2">
                          <div className="w-3 h-3 rounded-full bg-[#111]"></div>
                          <div className="w-3 h-3 rounded-full bg-[#d4af37]"></div>
                          <div className="text-[10px] text-[#777]">+1</div>
                       </div>
                    </div>
                 </motion.div>
               ))}
             </motion.div>

             {filteredProducts.length === 0 && (
               <div className="w-full py-24 flex items-center justify-center text-[#777] font-sans text-sm tracking-wide">
                  No products found in this category.
               </div>
             )}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="relative w-full bg-lux-base text-lux-offwhite py-24 pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <motion.div 
            className="flex flex-col items-center text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-heading tracking-tight mb-2 text-[#fffdf8]">The Luxmint Standard</h2>
            <div className="w-16 h-[1px] bg-lux-gold mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 w-full max-w-6xl">
            
            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full border border-lux-gold/30 flex items-center justify-center mb-6 text-2xl">🏅</div>
              <h3 className="font-heading text-xl mb-3">100% Authentic</h3>
              <p className="font-sans text-xs text-lux-offwhite/60 leading-relaxed max-w-[200px]">Every product certified and verified.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="w-16 h-16 rounded-full border border-lux-gold/30 flex items-center justify-center mb-6 text-2xl">🚚</div>
              <h3 className="font-heading text-xl mb-3">Secure Delivery</h3>
              <p className="font-sans text-xs text-lux-offwhite/60 leading-relaxed max-w-[200px]">Insured and discreet shipping nationwide.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-full border border-lux-gold/30 flex items-center justify-center mb-6 text-2xl">💬</div>
              <h3 className="font-heading text-xl mb-3">Expert Guidance</h3>
              <p className="font-sans text-xs text-lux-offwhite/60 leading-relaxed max-w-[200px]">Our team helps you buy with confidence.</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full border border-lux-gold/30 flex items-center justify-center mb-6 text-2xl">🔒</div>
              <h3 className="font-heading text-xl mb-3">Trusted & Transparent</h3>
              <p className="font-sans text-xs text-lux-offwhite/60 leading-relaxed max-w-[200px]">No hidden fees. No compromise.</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CONTACT / CTA SECTION */}
      <section id="contact" className="relative w-full bg-white text-lux-base py-24 pb-32 lg:py-32 overflow-hidden border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-sans tracking-[0.2em] text-lux-gold uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-lux-gold"></span>
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading tracking-tight mb-8 text-[#111]">Ready to Own <br/><span className="italic font-serif text-lux-gold">Real Gold?</span></h2>
            <p className="text-[#555] font-sans text-[15px] leading-[1.8] mb-12 max-w-md">Whether you're buying your first piece or expanding your collection, our team is ready to guide you.</p>
            
            <div className="flex flex-col gap-6">
               <div className="flex items-center gap-4 group cursor-pointer w-max">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-lux-gold transition-colors duration-300">📧</div>
                  <span className="font-sans text-sm tracking-wide text-[#333] group-hover:text-lux-gold transition-colors">hello@luxmintgold.com</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer w-max">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-lux-gold transition-colors duration-300">📞</div>
                  <span className="font-sans text-sm tracking-wide text-[#333] group-hover:text-lux-gold transition-colors">+234 800 000 0000</span>
               </div>
               <div className="flex items-center gap-4 group cursor-pointer w-max">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:border-lux-gold transition-colors duration-300">📍</div>
                  <span className="font-sans text-sm tracking-wide text-[#333] group-hover:text-lux-gold transition-colors">Lagos, Nigeria</span>
               </div>
            </div>

            {/* Social Icons Placeholder */}
            <div className="flex gap-4 mt-12">
               <div className="w-10 h-10 bg-[#f2f2f2] hover:bg-lux-gold hover:text-white transition-colors duration-300 rounded cursor-pointer flex items-center justify-center font-sans text-xs">IG</div>
               <div className="w-10 h-10 bg-[#f2f2f2] hover:bg-lux-gold hover:text-white transition-colors duration-300 rounded cursor-pointer flex items-center justify-center font-sans text-xs">WA</div>
               <div className="w-10 h-10 bg-[#f2f2f2] hover:bg-lux-gold hover:text-white transition-colors duration-300 rounded cursor-pointer flex items-center justify-center font-sans text-xs">X</div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full bg-[#fcfcfc] p-8 md:p-12 shadow-sm border border-black/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.1em] font-sans font-medium text-[#333]">Full Name</label>
                <input type="text" className="w-full border-b border-black/20 bg-transparent py-3 text-sm focus:outline-none focus:border-lux-gold transition-colors" placeholder="John Doe" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.1em] font-sans font-medium text-[#333]">Email Address</label>
                <input type="email" className="w-full border-b border-black/20 bg-transparent py-3 text-sm focus:outline-none focus:border-lux-gold transition-colors" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.1em] font-sans font-medium text-[#333]">Phone Number</label>
                <input type="text" className="w-full border-b border-black/20 bg-transparent py-3 text-sm focus:outline-none focus:border-lux-gold transition-colors" placeholder="+234..." />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-[0.1em] font-sans font-medium text-[#333]">Message</label>
                <textarea rows={4} className="w-full border-b border-black/20 bg-transparent py-3 text-sm focus:outline-none focus:border-lux-gold transition-colors resize-none" placeholder="How can we assist you?"></textarea>
              </div>
              <button type="submit" className="mt-4 bg-lux-gold text-lux-base px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-lux-champagne transition-all duration-300 w-full shadow-[0_0_20px_rgba(201,168,76,0.15)] hover:shadow-[0_0_30px_rgba(232,212,139,0.3)]">
                 Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#050505] text-lux-offwhite pt-24 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center">
          
          <div className="text-2xl md:text-3xl font-heading text-lux-gold uppercase tracking-[0.2em] font-medium flex items-center mb-6">
            Luxmint <span className="opacity-80 ml-2 font-light">Gold</span>
          </div>
          
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-lux-offwhite/60 mb-16">Refined Access to Real Gold.</p>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-sans text-lux-offwhite/50 mb-16 flex-wrap justify-center">
            <a href="#home" className="hover:text-lux-gold transition-colors">Home</a>
            <span className="opacity-30">|</span>
            <a href="#about" className="hover:text-lux-gold transition-colors">About</a>
            <span className="opacity-30">|</span>
            <a href="#offerings" className="hover:text-lux-gold transition-colors">Offerings</a>
            <span className="opacity-30">|</span>
            <a href="#contact" className="hover:text-lux-gold transition-colors">Contact</a>
          </div>

          <div className="w-full h-[1px] bg-white/5 mb-8"></div>
          
          <p className="font-sans text-[10px] text-lux-offwhite/40 tracking-wider text-center">
            &copy; 2026 Luxmint Gold. All Rights Reserved.
          </p>
        </div>
      </footer>

    </main>
  );
}
