export const menuCategories = [
  { id: 'coffee', name: 'Specialty Coffee', icon: 'Coffee', count: 6 },
  { id: 'gelato', name: 'Artisan Gelato', icon: 'IceCream', count: 6 },
  { id: 'boba', name: 'Handcrafted Boba', icon: 'CupSoda', count: 6 },
  { id: 'bar', name: 'Bar & Cafe Bites', icon: 'Wine', count: 6 },
];

export const menuItems = [
  // COFFEE
  {
    id: 'c1',
    category: 'coffee',
    name: 'Spanish Honey Latte',
    description: 'Double espresso with raw Florida honey and velvety steamed oat milk.',
    badge: 'Guest Favorite',
    diet: ['Gluten-Free', 'Oat Milk'],
    image: '/images/coffee-latte.jpg',
    calories: '210 cal'
  },
  {
    id: 'c2',
    category: 'coffee',
    name: 'Lavender Vanilla Cold Brew',
    description: '18-hour cold brew topped with house-infused French lavender sweet cream.',
    badge: 'Signature',
    diet: ['Vegetarian'],
    image: '/images/coffee-coldbrew.jpg',
    calories: '160 cal'
  },
  {
    id: 'c3',
    category: 'coffee',
    name: 'Artisan Cortado',
    description: 'Equal parts freshly pulled double espresso and textured microfoam milk.',
    badge: 'Barista Choice',
    diet: ['Oat / Almond'],
    image: '/images/coffee-cortado.jpg',
    calories: '90 cal'
  },
  {
    id: 'c4',
    category: 'coffee',
    name: 'Salted Caramel Macchiato',
    description: 'Vanilla bean milk, bold espresso, scratch caramel, and sea salt.',
    badge: 'Popular',
    diet: ['Vegetarian'],
    image: '/images/macchiato.jpg',
    calories: '240 cal'
  },
  {
    id: 'c5',
    category: 'coffee',
    name: 'Rose Pistachio Flat White',
    description: 'Rose water, roasted Sicilian pistachio, ristretto, and microfoam.',
    badge: 'Seasonal',
    diet: ['Vegan Available'],
    image: '/images/flatwhite.jpg',
    calories: '190 cal'
  },
  {
    id: 'c6',
    category: 'coffee',
    name: 'Classic Affogato al Caffe',
    description: 'Madagascar vanilla bean gelato drenched in piping hot double espresso.',
    badge: 'Italian Classic',
    diet: ['Gluten-Free'],
    image: '/images/affogato.jpg',
    calories: '220 cal'
  },

  // ARTISAN GELATO
  {
    id: 'g1',
    category: 'gelato',
    name: 'Sicilian Bronte Pistachio',
    description: 'Authentic DOP Sicilian pistachios churned with fresh organic whole milk.',
    badge: '#1 Best Seller',
    diet: ['Gluten-Free', 'Vegetarian'],
    image: '/images/gelato-pistachio.jpg',
    calories: '190 cal / scoop'
  },
  {
    id: 'g2',
    category: 'gelato',
    name: 'Wild Strawberry Sorbetto',
    description: 'Florida strawberries slow-simmered with organic hibiscus petals. Dairy-free.',
    badge: 'Vegan Favorite',
    diet: ['100% Vegan', 'Dairy-Free'],
    image: '/images/gelato-strawberry.jpg',
    calories: '130 cal / scoop'
  },
  {
    id: 'g3',
    category: 'gelato',
    name: 'Dark Belgian Stracciatella',
    description: 'Sweet cream gelato folded with crunchy 72% dark Belgian chocolate.',
    badge: 'Classic',
    diet: ['Gluten-Free'],
    image: '/images/gelato-chocolate.jpg',
    calories: '210 cal / scoop'
  },
  {
    id: 'g4',
    category: 'gelato',
    name: 'Amalfi Lemon Meyer Sorbetto',
    description: 'Sun-kissed Italian lemons, fragrant zest, and pure cane sugar.',
    badge: 'Refreshing',
    diet: ['100% Vegan', 'Dairy-Free'],
    image: '/images/gelato-lemon.jpg',
    calories: '120 cal / scoop'
  },
  {
    id: 'g5',
    category: 'gelato',
    name: 'Espresso Caramel Swirl',
    description: 'House espresso gelato ribboned with sea-salted dulce de leche.',
    badge: 'Cafe Special',
    diet: ['Gluten-Free'],
    image: '/images/gelato-caramel.jpg',
    calories: '225 cal / scoop'
  },
  {
    id: 'g6',
    category: 'gelato',
    name: 'Bourbon Vanilla Bean',
    description: 'Real Madagascar bourbon vanilla bean caviar in slow-churned whole milk.',
    badge: 'Pure Flavor',
    diet: ['Gluten-Free'],
    image: '/images/gelato-vanilla.jpg',
    calories: '180 cal / scoop'
  },

  // HANDCRAFTED BOBA TEA
  {
    id: 'b1',
    category: 'boba',
    name: 'Brown Sugar Tiger Milk Tea',
    description: 'Warm slow-stewed Muscovado boba pearls with cold milk and cheese foam.',
    badge: '#1 Boba Hit',
    diet: ['Chewy Tapioca', 'Oat Milk'],
    image: '/images/boba-tiger.jpg',
    calories: '320 cal'
  },
  {
    id: 'b2',
    category: 'boba',
    name: 'Ceremonial Matcha Cloud',
    description: 'First-harvest Kyoto Uji matcha whisked fresh over honey boba and cream.',
    badge: 'Pure Matcha',
    diet: ['Antioxidant Rich'],
    image: '/images/boba-matcha.jpg',
    calories: '260 cal'
  },
  {
    id: 'b3',
    category: 'boba',
    name: 'Mango Jasmine Refresher',
    description: 'Jasmine green tea shaken with tropical mango puree and crystal boba.',
    badge: 'Coastal Vibe',
    diet: ['Dairy-Free', 'Vegan'],
    image: '/images/boba-mango.jpg',
    calories: '180 cal'
  },
  {
    id: 'b4',
    category: 'boba',
    name: 'Velvet Taro Brulee Milk Tea',
    description: 'Real mashed purple taro root, milk tea, boba, and torched sugar crust.',
    badge: 'Must Try',
    diet: ['Vegetarian'],
    image: '/images/boba-taro.jpg',
    calories: '340 cal'
  },
  {
    id: 'b5',
    category: 'boba',
    name: 'Strawberry Lychee Fizz',
    description: 'Sparkling infusion of Florida strawberries, lychee popping boba, and tea.',
    badge: 'Refreshing',
    diet: ['Dairy-Free', 'Vegan'],
    image: '/images/boba-berry.jpg',
    calories: '170 cal'
  },
  {
    id: 'b6',
    category: 'boba',
    name: 'Roasted Oolong Milk Tea',
    description: 'Deep roasted Tie Guan Yin tea with evaporated milk and boba pearls.',
    badge: 'Traditional',
    diet: ['Vegetarian'],
    image: '/images/boba-oolong.jpg',
    calories: '250 cal'
  },

  // BAR & CAFE BITES
  {
    id: 'bar1',
    category: 'bar',
    name: 'Clearwater Espresso Martini',
    description: 'Double espresso shaken with craft vodka, coffee liqueur, and vanilla bean.',
    badge: 'Evening Favorite',
    diet: ['Craft Cocktail (21+)'],
    image: '/images/bar-espresso-martini.jpg',
    calories: '190 cal'
  },
  {
    id: 'bar2',
    category: 'bar',
    name: 'Sparkling Coastal Spritz',
    description: 'Blood orange, sparkling elderflower tonic, rosemary, and grapefruit.',
    badge: 'Sunset Drink',
    diet: ['Zero-Proof Option'],
    image: '/images/spritz.jpg',
    calories: '110 cal'
  },
  {
    id: 'bar3',
    category: 'bar',
    name: 'Avocado Sourdough Tartine',
    description: 'Toasted sourdough with mashed avocado, cherry tomatoes, and pickled onions.',
    badge: 'Brunch Hit',
    diet: ['Vegetarian'],
    image: '/images/bar-avocado-toast.jpg',
    calories: '380 cal'
  },
  {
    id: 'bar4',
    category: 'bar',
    name: 'Butter Croissants & Brioche',
    description: 'French butter pastry baked fresh daily, served with espresso strawberry jam.',
    badge: 'Baked Fresh',
    diet: ['Vegetarian'],
    image: '/images/croissant.jpg',
    calories: '280 cal'
  },
  {
    id: 'bar5',
    category: 'bar',
    name: 'Tropical Acai Beach Bowl',
    description: 'Organic acai with Florida berries, banana, coconut flakes, and raw honey.',
    badge: 'Healthy & Fresh',
    diet: ['Gluten-Free', 'Vegan'],
    image: '/images/acai-bowl.jpg',
    calories: '340 cal'
  },
  {
    id: 'bar6',
    category: 'bar',
    name: 'Artisan Cheese & Charcuterie',
    description: 'Prosciutto di Parma, aged cheddar, brie, kalamata olives, and crackers.',
    badge: 'Social Sharing',
    diet: ['Pairs with Wine'],
    image: '/images/charcuterie.jpg',
    calories: '520 cal'
  },
];
