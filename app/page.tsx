"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Coffee,
  MapPin,
  Clock,
  ChevronDown,
  Menu,
  X,
  Instagram,
  Facebook,
  Croissant,
  Leaf,
  Heart,
  Users,
  Award,
  Send,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("coffee");

  const menuCategories = {
    coffee: [
      { name: "House Blend", description: "Smooth, balanced with notes of chocolate and toasted nuts", price: "From $4" },
      { name: "Single Origin Pour Over", description: "Rotating selection of exceptional beans, brewed to order", price: "From $5" },
      { name: "Espresso", description: "Rich and bold, the foundation of our craft", price: "From $3" },
      { name: "Cappuccino", description: "Velvety microfoam meets our signature espresso", price: "From $5" },
      { name: "Flat White", description: "Double ristretto with silky steamed milk", price: "From $5" },
      { name: "Cold Brew", description: "Slow-steeped for 18 hours, naturally sweet", price: "From $5" },
    ],
    pastries: [
      { name: "Butter Croissant", description: "Flaky layers of French-style pastry, baked fresh daily", price: "From $4" },
      { name: "Almond Croissant", description: "Filled with house-made almond cream", price: "From $5" },
      { name: "Cardamom Bun", description: "Scandinavian-inspired, warmly spiced", price: "From $4" },
      { name: "Seasonal Scone", description: "Rotating flavors using local ingredients", price: "From $4" },
      { name: "Banana Bread", description: "Moist, warmly spiced, topped with walnuts", price: "From $4" },
      { name: "Pain au Chocolat", description: "Dark chocolate wrapped in buttery layers", price: "From $5" },
    ],
    specialty: [
      { name: "Lavender Latte", description: "Floral and calming with house-made lavender syrup", price: "From $6" },
      { name: "Oat Milk Mocha", description: "Rich chocolate meets creamy oat milk", price: "From $6" },
      { name: "Honey Vanilla Cortado", description: "Local honey and Madagascar vanilla", price: "From $5" },
      { name: "Matcha Latte", description: "Ceremonial grade matcha, whisked to perfection", price: "From $6" },
      { name: "Chai Latte", description: "House-spiced blend with warming ginger and cardamom", price: "From $5" },
      { name: "Golden Milk", description: "Turmeric, ginger, and oat milk wellness drink", price: "From $5" },
    ],
  };

  const stats = [
    { number: "2018", label: "Founded" },
    { number: "100%", label: "Specialty Grade" },
    { number: "Local", label: "Roasted Weekly" },
    { number: "Zero", label: "Artificial Ingredients" },
  ];

  return (
    <main className="min-h-screen bg-cream">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="font-serif text-2xl text-espresso">
              Brew & Co.
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                Our Story
              </a>
              <a href="#menu" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                Menu
              </a>
              <a href="#gallery" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                Gallery
              </a>
              <a href="#location" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                Visit Us
              </a>
              <Button className="bg-gold hover:bg-gold/90 text-cream">
                Order Online
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-espresso"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-2 border-t border-linen mt-4">
              <div className="flex flex-col gap-4">
                <a href="#about" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                  Our Story
                </a>
                <a href="#menu" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                  Menu
                </a>
                <a href="#gallery" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                  Gallery
                </a>
                <a href="#location" className="text-espresso/80 hover:text-espresso transition-colors text-sm tracking-wide">
                  Visit Us
                </a>
                <Button className="bg-gold hover:bg-gold/90 text-cream w-full">
                  Order Online
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Full Viewport */}
      <section className="relative h-screen overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Freshly brewed specialty coffee at Brew and Co."
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-cream/80 tracking-[0.3em] uppercase text-sm mb-4">
            Specialty Coffee Shop
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream mb-6">
            Brew & Co.
          </h1>
          <p className="text-cream/90 text-lg md:text-xl max-w-xl mb-8">
            Handcrafted coffee and fresh pastries in a warm,
            inviting space where every cup tells a story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-gold hover:bg-gold/90 text-cream px-8 py-6 text-base">
              View Our Menu
            </Button>
            <Button variant="outline" className="border-cream text-cream hover:bg-cream/10 px-8 py-6 text-base">
              Find Us
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="text-cream/70" size={32} />
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section id="about" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-linen rounded-2xl" />
              <Image
                src="/images/feature.png"
                alt="The craft behind every cup at Brew and Co."
                width={600}
                height={700}
                className="relative rounded-2xl object-cover w-full"
              />
            </div>
            <div className="lg:pl-8">
              <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
                Where Quality Meets Community
              </h2>
              <div className="space-y-4 text-taupe leading-relaxed">
                <p>
                  Brew & Co. was born from a simple belief: that great coffee has
                  the power to bring people together. We source specialty-grade
                  beans from sustainable farms and roast them locally in small
                  batches to capture their unique character.
                </p>
                <p>
                  Our space is designed for lingering — whether you're catching
                  up with an old friend, finding a quiet corner to work, or simply
                  savoring a moment of stillness. Every detail, from the warm wood
                  tones to the natural light, is crafted to feel like home.
                </p>
                <p>
                  We bake our pastries fresh each morning using traditional
                  techniques and quality ingredients. No shortcuts, no compromises —
                  just honest, delicious food made with care.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center">
                    <Leaf className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-espresso">Sustainable</p>
                    <p className="text-sm text-taupe">Sourcing</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center">
                    <Heart className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-espresso">Made with</p>
                    <p className="text-sm text-taupe">Love</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section - Categories */}
      <section id="menu" className="py-24 lg:py-32 bg-linen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">
              Our Menu
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-4">
              Crafted with Care
            </h2>
            <p className="text-taupe max-w-xl mx-auto">
              Every cup and every bite is made to order, using the finest
              ingredients we can find.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {[
              { key: "coffee", label: "Coffee", icon: Coffee },
              { key: "pastries", label: "Pastries", icon: Croissant },
              { key: "specialty", label: "Specialty", icon: Leaf },
            ].map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                  activeCategory === key
                    ? "bg-gold text-cream"
                    : "bg-cream text-espresso hover:bg-cream/70"
                }`}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuCategories[activeCategory as keyof typeof menuCategories].map((item, index) => (
              <Card key={index} className="bg-cream border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl text-espresso">{item.name}</h3>
                    <span className="text-gold font-medium text-sm">{item.price}</span>
                  </div>
                  <p className="text-taupe text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-taupe text-sm mb-4">
              We also offer seasonal specials and rotating single-origin selections.
            </p>
            <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-cream">
              Download Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section - CSS Grid Art */}
      <section id="gallery" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">
              Gallery
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              Moments at Brew & Co.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* CSS Art Cards representing coffee shop moments */}
            <div className="aspect-square bg-gradient-to-br from-espresso to-espresso/80 rounded-2xl flex items-center justify-center">
              <Coffee className="text-cream/30" size={64} />
            </div>
            <div className="aspect-square bg-gradient-to-br from-gold to-gold/80 rounded-2xl flex items-center justify-center md:col-span-2 md:row-span-2">
              <div className="text-center">
                <Croissant className="text-cream/30 mx-auto mb-4" size={80} />
                <p className="text-cream/70 font-serif text-xl">Baked Fresh Daily</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-linen to-cream rounded-2xl flex items-center justify-center">
              <Heart className="text-gold/50" size={48} />
            </div>
            <div className="aspect-square bg-gradient-to-br from-taupe to-taupe/80 rounded-2xl flex items-center justify-center">
              <Leaf className="text-cream/30" size={48} />
            </div>
            <div className="aspect-square bg-gradient-to-br from-espresso/90 to-espresso/70 rounded-2xl flex items-center justify-center">
              <Users className="text-cream/30" size={48} />
            </div>
            <div className="aspect-square bg-gradient-to-br from-linen via-cream to-linen rounded-2xl flex items-center justify-center col-span-2">
              <div className="text-center">
                <p className="text-taupe font-serif text-lg">&ldquo;A cup of warmth&rdquo;</p>
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-gold/80 to-gold/60 rounded-2xl flex items-center justify-center">
              <Award className="text-cream/30" size={48} />
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-taupe hover:text-espresso transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm">Follow us for more</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-16 bg-espresso">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-cream mb-2">
                  {stat.number}
                </p>
                <p className="text-cream/70 text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 lg:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-gold tracking-[0.2em] uppercase text-sm mb-4">
                Visit Us
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-espresso mb-6">
                Find Your New Favorite Spot
              </h2>
              <p className="text-taupe leading-relaxed mb-8">
                We'd love to welcome you to our space. Stop by for your morning
                ritual, an afternoon pick-me-up, or a quiet moment with a good
                book. We're always happy to see you.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-espresso mb-1">Location</p>
                    <p className="text-taupe">
                      Downtown neighborhood<br />
                      See our social media for directions
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center shrink-0">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-espresso mb-1">Hours</p>
                    <p className="text-taupe">
                      Open daily for coffee and community.<br />
                      Check our Instagram for current hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Instagram className="text-cream" size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Facebook className="text-cream" size={18} />
                </a>
              </div>
            </div>

            {/* Map Placeholder - CSS Art */}
            <div className="bg-linen rounded-2xl h-[400px] lg:h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-linen via-cream to-linen" />
              <div className="absolute inset-4 border-2 border-dashed border-taupe/30 rounded-xl" />
              <div className="relative text-center">
                <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-cream" size={24} />
                </div>
                <p className="font-serif text-espresso text-xl mb-2">Brew & Co.</p>
                <p className="text-taupe text-sm">Follow us on social media<br />for our exact location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-espresso via-espresso to-espresso/95 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gold blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl text-cream mb-6">
            Stay Connected
          </h2>
          <p className="text-cream/80 mb-8 max-w-xl mx-auto">
            Get updates on seasonal specials, events, and the occasional
            behind-the-scenes look at life at the shop.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-cream/10 border-cream/20 text-cream placeholder:text-cream/50 flex-1"
            />
            <Button className="bg-gold hover:bg-gold/90 text-cream">
              <Send size={18} className="mr-2" />
              Subscribe
            </Button>
          </form>
          <p className="text-cream/50 text-xs mt-4">
            We respect your inbox. No spam, just coffee.
          </p>
        </div>
      </section>

      {/* Footer - Full */}
      <footer className="py-16 bg-espresso border-t border-cream/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <h3 className="font-serif text-2xl text-cream mb-4">Brew & Co.</h3>
              <p className="text-cream/70 max-w-sm mb-6">
                A neighborhood coffee shop dedicated to quality,
                community, and the simple pleasure of a great cup.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Instagram className="text-cream" size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <Facebook className="text-cream" size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-cream font-medium mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    Our Story
                  </a>
                </li>
                <li>
                  <a href="#menu" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    Visit Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-cream font-medium mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="text-cream/70 text-sm">
                  Follow us on social media for location and hours
                </li>
                <li>
                  <a href="#" className="text-cream/70 hover:text-cream transition-colors text-sm">
                    Send us a message
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © {new Date().getFullYear()} Brew & Co. All rights reserved.
            </p>
            <p className="text-cream/50 text-sm">
              Made with love and good coffee.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
