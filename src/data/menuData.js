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
    description: 'Double espresso infused with organic Florida orange blossom honey, condensed milk, and velvety steamed oat milk.',
    badge: 'Guest Favorite',
    diet: ['Gluten-Free', 'Oat Milk Option'],
    image: '/images/coffee-latte.jpg',
    calories: '210 cal'
  },
  {
    id: 'c2',
    category: 'coffee',
    name: 'Lavender Vanilla Cold Foam Brew',
    description: 'Slow-steeped 18-hour single origin cold brew crowned with house-infused French lavender sweet cream.',
    badge: 'Signature',
    diet: ['Vegetarian'],
    image: '/images/coffee-coldbrew.jpg',
    calories: '160 cal'
  },
  {
    id: 'c3',
    category: 'coffee',
    name: 'Artisan Cortado',
    description: 'Equal parts freshly pulled double espresso and textured microfoam milk. Bold, smooth, and balanced.',
    badge: 'Barista Choice',
    diet: ['Dairy / Oat / Almond'],
    image: '/images/coffee-cortado.jpg',
    calories: '90 cal'
  },
  {
    id: 'c4',
    category: 'coffee',
    name: 'Salted Caramel Macchiato',
    description: 'Vanilla bean syrup, steamed whole milk, layered with bold espresso and topped with scratch-made caramel drizzle & sea salt.',
    badge: 'Popular',
    diet: ['Vegetarian'],
    image: '/images/macchiato.jpg',
    calories: '240 cal'
  },
  {
    id: 'c5',
    category: 'coffee',
    name: 'Rose Pistachio Flat White',
    description: 'Delicate floral rose water, roasted Sicilian pistachio puree, espresso ristretto, and silk-smooth microfoam.',
    badge: 'Seasonal',
    diet: ['Vegan Available'],
    image: '/images/flatwhite.jpg',
    calories: '190 cal'
  },
  {
    id: 'c6',
    category: 'coffee',
    name: 'Classic Affogato al Caffe',
    description: 'A generous scoop of our artisan Madagascar vanilla bean gelato drenched in a piping hot double shot of espresso.',
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
    description: 'Crafted with authentic DOP pistachios from Bronte, Sicily. Deeply nutty, ultra-creamy, and naturally vibrant.',
    badge: '#1 Best Seller',
    diet: ['Gluten-Free', 'Vegetarian'],
    image: '/images/gelato-pistachio.jpg',
    calories: '190 cal / scoop'
  },
  {
    id: 'g2',
    category: 'gelato',
    name: 'Wild Strawberry & Hibiscus Sorbetto',
    description: 'Ripe local Florida berries slow-simmered with organic hibiscus petals. Refreshing, dairy-free, and delightfully tart.',
    badge: 'Vegan Favorite',
    diet: ['100% Vegan', 'Dairy-Free', 'Gluten-Free'],
    image: '/images/gelato-strawberry.jpg',
    calories: '130 cal / scoop'
  },
  {
    id: 'g3',
    category: 'gelato',
    name: 'Dark Belgian Stracciatella',
    description: 'Sweet cream gelato folded with crunchy shavings of 72% dark Belgian chocolate that melt gently on your tongue.',
    badge: 'Classic',
    diet: ['Gluten-Free'],
    image: '/images/gelato-chocolate.jpg',
    calories: '210 cal / scoop'
  },
  {
    id: 'g4',
    category: 'gelato',
    name: 'Amalfi Lemon Meyer Sorbetto',
    description: 'Sun-kissed Italian lemons with fragrant zest and pure cane sugar. The ultimate palate cleanser on a warm Clearwater day.',
    badge: 'Refreshing',
    diet: ['100% Vegan', 'Dairy-Free'],
    image: '/images/gelato-lemon.jpg',
    calories: '120 cal / scoop'
  },
  {
    id: 'g5',
    category: 'gelato',
    name: 'Espresso Caramel Swirl',
    description: 'Infused with our house Social Sips espresso and ribboned with sea-salted dulce de leche.',
    badge: 'Cafe Special',
    diet: ['Gluten-Free'],
    image: '/images/gelato-caramel.jpg',
    calories: '225 cal / scoop'
  },
  {
    id: 'g6',
    category: 'gelato',
    name: 'Madagascar Bourbon Vanilla Bean',
    description: 'Speckled with fragrant real Madagascar bourbon vanilla bean caviar in velvety churned whole milk.',
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
    description: 'Slow-simmered warm brown sugar boba pearls swirling against cold organic whole milk, finished with sea-salt cheese foam.',
    badge: '#1 Boba Hit',
    diet: ['Chewy Tapioca', 'Soy/Oat available'],
    image: '/images/boba-tiger.jpg',
    calories: '320 cal'
  },
  {
    id: 'b2',
    category: 'boba',
    name: 'Ceremonial Matcha Cloud Boba',
    description: 'First-harvest Uji Japanese matcha whisked fresh to order, poured over honey boba and topped with whipped sweet cream.',
    badge: 'Pure Matcha',
    diet: ['Antioxidant Rich', 'Vegan Available'],
    image: '/images/boba-matcha.jpg',
    calories: '260 cal'
  },
  {
    id: 'b3',
    category: 'boba',
    name: 'Mango Passionfruit Jasmine Refresher',
    description: 'Fragrant high-mountain Jasmine green tea shaken with crushed tropical mango puree, passionfruit seeds, and crystal boba.',
    badge: 'Coastal Vibe',
    diet: ['Dairy-Free', 'Vegan'],
    image: '/images/boba-mango.jpg',
    calories: '180 cal'
  },
  {
    id: 'b4',
    category: 'boba',
    name: 'Velvet Taro Brulee Milk Tea',
    description: 'Real mashed purple taro root, creamy milk tea, chewy boba, and a torched caramelized sugar crust crown.',
    badge: 'Must Try',
    diet: ['Vegetarian'],
    image: '/images/boba-taro.jpg',
    calories: '340 cal'
  },
  {
    id: 'b5',
    category: 'boba',
    name: 'Strawberry Hibiscus Lychee Fizz',
    description: 'Fizzy sparkling infusion of fresh Florida strawberries, lychee popping boba, and floral rose-hibiscus brew.',
    badge: 'Refreshing',
    diet: ['Dairy-Free', 'Vegan'],
    image: '/images/boba-berry.jpg',
    calories: '170 cal'
  },
  {
    id: 'b6',
    category: 'boba',
    name: 'Hong Kong Roasted Oolong Boba',
    description: 'Deep roasted Tie Guan Yin oolong tea with silky evaporated milk and brown sugar pearls. Rich and aromatic.',
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
    description: 'Handcrafted with our fresh double shot espresso, craft vodka, coffee liqueur, and vanilla syrup, served with 3 roasted beans.',
    badge: 'Evening Favorite',
    diet: ['Craft Cocktail (21+)'],
    image: '/images/bar-espresso-martini.jpg',
    calories: '190 cal'
  },
  {
    id: 'bar2',
    category: 'bar',
    name: 'Sparkling Coastal Spritz (Mocktail / Cocktail)',
    description: 'Citrus botanicals, blood orange, sparkling elderflower tonic, rosemary sprig, and dehydrated grapefruit slice.',
    badge: 'Sunset Drink',
    diet: ['Zero-Proof Option'],
    image: '/images/spritz.jpg',
    calories: '110 cal'
  },
  {
    id: 'bar3',
    category: 'bar',
    name: 'Artisan Avocado Sourdough Tartine',
    description: 'Toasted organic artisan sourdough, creamy mashed hass avocado, heirloom cherry tomatoes, crumbled feta, pickled red onions, microgreens.',
    badge: 'Brunch Hit',
    diet: ['Vegetarian', 'Vegan Option'],
    image: '/images/bar-avocado-toast.jpg',
    calories: '380 cal'
  },
  {
    id: 'bar4',
    category: 'bar',
    name: 'Warm Flaky Butter Croissants & Brioche',
    description: 'Baked fresh every morning using European cultured butter. Served with our house-made strawberry espresso jam.',
    badge: 'Fresh Baked Daily',
    diet: ['Vegetarian'],
    image: '/images/croissant.jpg',
    calories: '280 cal'
  },
  {
    id: 'bar5',
    category: 'bar',
    name: 'Tropical Clearwater Acai Beach Bowl',
    description: 'Organic blended Amazonian acai topped with coconut flakes, fresh Florida bananas, strawberries, blueberries, chia seeds, and local raw honey.',
    badge: 'Healthy & Fresh',
    diet: ['Vegan Available', 'Gluten-Free'],
    image: '/images/acai-bowl.jpg',
    calories: '340 cal'
  },
  {
    id: 'bar6',
    category: 'bar',
    name: 'Charcuterie & Artisan Cheese Board',
    description: 'Prosciutto di Parma, aged white cheddar, creamy brie, kalamata olives, fig spread, roasted nuts, and crispy sea-salt crackers.',
    badge: 'Social Sharing',
    diet: ['Pairs with Wine'],
    image: '/images/charcuterie.jpg',
    calories: '520 cal'
  },
];
