import React, { useState } from 'react';
import { 
  Coffee, 
  IceCream, 
  CupSoda, 
  Wine, 
  Check, 
  Search, 
  Phone,
  Flame,
  Info,
  X,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuCategories, menuItems } from '../data/menuData';

export default function MenuServices({ onOpenReservation }) {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [selectedDiet, setSelectedDiet] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Coffee': return Coffee;
      case 'IceCream': return IceCream;
      case 'CupSoda': return CupSoda;
      case 'Wine': return Wine;
      default: return Coffee;
    }
  };

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesDiet = selectedDiet === 'all' || item.diet.some(d => d.toLowerCase().includes(selectedDiet.toLowerCase()));
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDiet && matchesSearch;
  });

  return (
    <section id="menu" className="py-20 lg:py-28 bg-cream-warm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-cafe-200/70 text-cafe-900 text-xs font-semibold tracking-wider uppercase border border-cafe-300">
            <span>Handcrafted Menu & Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cafe-950 tracking-tight">
            Curated Sips & Artisan Bites
          </h2>
          <p className="text-base sm:text-lg text-cafe-600 leading-relaxed">
            Everything is crafted in small batches in our Clearwater kitchen. Freshly extracted single-origin espresso, churned Italian gelato, and freshly stewed brown sugar boba.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {menuCategories.map((cat) => {
            const Icon = getCategoryIcon(cat.icon);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-cafe-900 text-white shadow-warm-md scale-105 border border-cafe-800'
                    : 'bg-white text-cafe-800 border border-cafe-200 hover:bg-cafe-100 hover:border-cafe-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amberGold' : 'text-cafe-600'}`} />
                <span>{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-cafe-800 text-amberGold' : 'bg-cafe-100 text-cafe-600'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Dietary Filters Bar */}
        <div className="bg-white p-4 rounded-2xl border border-cafe-200/80 shadow-warm-sm mb-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-cafe-400" />
            <input
              type="text"
              placeholder="Search coffee, boba, gelato..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-cafe-50 border border-cafe-200 focus:outline-none focus:border-amberGold transition-colors text-cafe-900"
            />
          </div>

          {/* Quick Dietary Filters */}
          <div className="flex items-center gap-2 flex-wrap w-full md:w-auto justify-start md:justify-end text-xs">
            <span className="text-cafe-500 font-medium mr-1">Filter:</span>
            {[
              { id: 'all', label: 'All' },
              { id: 'vegan', label: 'Vegan' },
              { id: 'gluten-free', label: 'Gluten-Free' },
            ].map((diet) => (
              <button
                key={diet.id}
                onClick={() => setSelectedDiet(diet.id)}
                className={`px-3 py-1.5 rounded-lg border font-medium transition-colors cursor-pointer ${
                  selectedDiet === diet.id
                    ? 'bg-amberGold text-white border-amberGold'
                    : 'bg-white text-cafe-700 border-cafe-200 hover:bg-cafe-50'
                }`}
              >
                {diet.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Cards Grid - Horizontal Snap Carousel on Mobile, 2/3-Col Grid on Desktop */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-4 pt-1 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="w-[270px] sm:w-auto shrink-0 snap-start bg-white rounded-3xl overflow-hidden border border-cafe-200 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group justify-between"
            >
              <div>
                {/* Image Container - Clean without overlay text */}
                <div className="relative h-44 sm:h-56 overflow-hidden bg-cafe-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-6 space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-base sm:text-xl font-bold text-cafe-900 group-hover:text-amberGold transition-colors leading-snug">
                      {item.name}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-cafe-100 text-cafe-800 text-[10px] font-bold border border-cafe-200 shrink-0">
                      {item.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-cafe-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Dietary tags & calories */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1 text-[10px] sm:text-[11px] text-cafe-500">
                    {item.diet.map((d, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-cafe-50 border border-cafe-200 text-cafe-700">
                        {d}
                      </span>
                    ))}
                    <span className="ml-auto text-cafe-400 font-medium text-[11px]">
                      {item.calories}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 sm:p-6 pt-0">
                {/* Card Bottom CTA */}
                <div className="pt-3 border-t border-cafe-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="text-xs font-semibold text-cafe-800 hover:text-amberGold flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Flavor Notes</span>
                  </button>

                  <a
                    href="tel:+17272401811"
                    className="px-3 py-1.5 rounded-xl bg-cafe-100 hover:bg-cafe-900 hover:text-white text-cafe-900 font-semibold text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 text-amberGold" />
                    <span>Order</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full 18-Item Menu Button on Mobile & Desktop */}
        <div className="mt-8 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cafe-950 text-white hover:bg-amberGold hover:text-cafe-950 font-bold text-xs sm:text-sm transition-all duration-300 border border-amberGold/30 shadow-md group"
          >
            <span>Explore All 18 Creations on Full Menu</span>
            <ArrowRight className="w-4 h-4 text-amberGold group-hover:text-cafe-950 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Empty State if filter yields no results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-cafe-200 max-w-lg mx-auto p-8">
            <Coffee className="w-12 h-12 text-cafe-400 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-cafe-900 mb-2">No menu items found</h3>
            <p className="text-sm text-cafe-600 mb-4">
              Try adjusting your search query or dietary filters to explore our offerings.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedDiet('all');
                setActiveCategory('coffee');
              }}
              className="px-4 py-2 bg-cafe-900 text-white rounded-xl text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Call to Action Banner below Menu */}
        <div className="mt-16 bg-gradient-to-r from-cafe-900 to-cafe-950 rounded-3xl p-8 sm:p-12 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 border border-amberGold/30 shadow-warm-lg">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider text-amberGold font-bold">Catering & Large Groups</span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              Planning an office morning or private gathering in Clearwater?
            </h3>
            <p className="text-sm text-cafe-300 max-w-xl">
              We offer portable cold brew growlers, custom boba tea party bars, and gelato cart setups for local Clearwater events.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenReservation}
              className="px-6 py-3.5 rounded-xl bg-amberGold hover:bg-amberGold-hover text-cafe-950 font-bold text-sm shadow-warm-md transition-all cursor-pointer"
            >
              Book Catering / Table
            </button>
          </div>
        </div>

      </div>

      {/* Flavor Notes Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-cafe-200">
            <div className="relative h-48 bg-cafe-900 shrink-0">
              <img src={selectedItem.image} alt={selectedItem.name} loading="lazy" decoding="async" className="w-full h-full object-cover" />
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-bold text-cafe-950">{selectedItem.name}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-cafe-100 text-cafe-800 font-bold border border-cafe-200 uppercase tracking-wider">
                  Handcrafted
                </span>
              </div>
              <p className="text-sm text-cafe-700 leading-relaxed">{selectedItem.description}</p>
              
              <div className="p-4 rounded-xl bg-cafe-50 border border-cafe-200 space-y-2 text-xs">
                <div className="flex justify-between text-cafe-700">
                  <span className="font-semibold">Dietary Profile:</span>
                  <span>{selectedItem.diet.join(', ')}</span>
                </div>
                <div className="flex justify-between text-cafe-700">
                  <span className="font-semibold">Clearwater Kitchen Craft:</span>
                  <span>Fresh Handcrafted to Order</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href="tel:+17272401811"
                  className="flex-1 py-3 rounded-xl bg-cafe-900 text-white text-center text-sm font-semibold hover:bg-cafe-800 transition-colors"
                >
                  Call to Order Ahead
                </a>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-5 py-3 rounded-xl border border-cafe-300 text-cafe-800 text-sm font-semibold hover:bg-cafe-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
