import { MenuItem, GalleryItem } from '../types';

export const RESTAURANT_INFO = {
  name: "Chiba Sushi",
  fullName: "Chiba Sushi Japanese Restaurant Seafood & Steak",
  tagline: "Victoria's Best Sushi — Craft, Freshness & Warmth Since 2007",
  award: "Selected as 'The Best Sushi Restaurant in Victoria, BC' by Quality Business Awards 2023",
  address: "2630 Quadra Street, Victoria, BC V8T 4E4, Canada",
  neighborhood: "Quadra Village (near Hillside)",
  phone: "250-383-9886",
  phoneFormatted: "+1 (250) 383-9886",
  onlineOrderUrl: "https://www.qooway.com/olo/en?ChibaSushi&menuid=3",
  doorDashUrl: "https://www.doordash.com/business/442465/",
  facebookUrl: "https://www.facebook.com/pages/Chiba-Sushi/761209057241389",
  instagramUrl: "https://www.instagram.com/chiba_sushi/",
  mapsUrl: "https://maps.google.com/?q=2630+Quadra+Street,+Victoria,+BC+V8T+4E4",
  hours: [
    { days: "Wednesday – Friday", service: "Lunch", time: "11:30 AM – 2:00 PM" },
    { days: "Monday – Friday", service: "Dinner", time: "4:30 PM – 9:00 PM" },
    { days: "Saturday – Sunday", service: "Dinner", time: "4:00 PM – 9:30 PM" }
  ]
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: "./images/slides/slide_01.jpg",
    title: "Victoria's Best Sushi Experience",
    subtitle: "Locally sourced B.C. wild salmon, pristine albacore, and artisanal sushi rolls crafted with heart in Quadra Village.",
    badge: "Quality Business Award Winner 2023"
  },
  {
    id: 2,
    image: "./images/slides/slide_02.jpg",
    title: "Signature Aburi Oshi & Rolls",
    subtitle: "Delicately flame-seared pressed sushi infused with house-blended sauces and premium toppings.",
    badge: "Chef's Signature Craft"
  },
  {
    id: 3,
    image: "./images/slides/slide_03.jpg",
    title: "Fresh Pacific Sashimi",
    subtitle: "Generous, pristine cuts of wild sockeye, hamachi, toro, and Hokkaido scallop prepared fresh daily.",
    badge: "Ocean Fresh Daily"
  },
  {
    id: 4,
    image: "./images/slides/slide_04.jpg",
    title: "Warm Izakaya & Sizzling Teppan",
    subtitle: "From crisp gyoza and takoyaki to sizzling teriyaki platters and comforting udon noodles.",
    badge: "Authentic Kitchen"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    src: "./images/gallery/01_IMG_8341.jpg",
    title: "Artisanal Special Sushi Platter",
    subtitle: "A showcase of flame-torched signature rolls, fresh nigiri and tobiko garnish",
    category: "Special Rolls"
  },
  {
    id: "g2",
    src: "./images/gallery/02_IMG_8320.jpg",
    title: "Seared Aburi Oshi Wild Salmon",
    subtitle: "BC wild sockeye salmon pressed sushi with house glaze and jalapeño accents",
    category: "Aburi Oshi"
  },
  {
    id: "g3",
    src: "./images/gallery/03_IMG_8343.jpg",
    title: "Deluxe Sashimi Selection",
    subtitle: "Thick-cut fresh Pacific tuna, sockeye salmon, and sweet botan ebi",
    category: "Sashimi & Nigiri"
  },
  {
    id: "g4",
    src: "./images/gallery/04_IMG_8348.jpg",
    title: "Chiba Signature Rolls",
    subtitle: "Drizzled with our secret savory unagi reduction and crisp tempura flakes",
    category: "Special Rolls"
  },
  {
    id: "g5",
    src: "./images/gallery/05_IMG_8318.jpg",
    title: "The Jackie Roll",
    subtitle: "Torch-flamed prawns, tender asparagus tempura, and succulent beef tataki top",
    category: "Special Rolls"
  },
  {
    id: "g6",
    src: "./images/gallery/06_IMG_8355.jpg",
    title: "Crisp Panko Karaage & Starters",
    subtitle: "Freshly prepared izakaya bites with dipping sauces and citrus",
    category: "Hot Kitchen"
  },
  {
    id: "g7",
    src: "./images/gallery/07_IMG_8346.jpg",
    title: "Modern Dining Room Ambiance",
    subtitle: "Warm, welcoming atmosphere at our 2630 Quadra Street dining room",
    category: "Restaurant & Bar"
  },
  {
    id: "g8",
    src: "./images/gallery/08_IMG_8316.jpg",
    title: "Fresh Nigiri Showcase",
    subtitle: "Hand-pressed nigiri honoring authentic Edo-style balance",
    category: "Sashimi & Nigiri"
  },
  {
    id: "g9",
    src: "./images/gallery/09_IMG_8350.jpg",
    title: "Crispy Sushi Pizza & Specialty Maki",
    subtitle: "Crispy pan-seared rice crust topped with spicy sashimi and avocado",
    category: "Special Rolls"
  },
  {
    id: "g10",
    src: "./images/gallery/10_IMG_8323.jpg",
    title: "Sizzling Teppanyaki Platter",
    subtitle: "Charred sweet teriyaki steak and chicken served with stir-fried garden vegetables",
    category: "Hot Kitchen"
  },
  {
    id: "g11",
    src: "./images/gallery/11_IMG_9047.jpg",
    title: "Chef's Omakase Assortment",
    subtitle: "Seasonal varieties direct from Pacific suppliers and Tsukiji fish markets",
    category: "Sashimi & Nigiri"
  },
  {
    id: "g12",
    src: "./images/gallery/12_IMG_2107.jpg",
    title: "Quadra Village Restaurant Interior",
    subtitle: "Cozy booths and attentive service since our move in June 2021",
    category: "Restaurant & Bar"
  },
  {
    id: "g13",
    src: "./images/gallery/13_IMG_8329.jpg",
    title: "House Tempura & Udon",
    subtitle: "Golden battered tiger prawns and light seasonal vegetable tempura",
    category: "Hot Kitchen"
  },
  {
    id: "g14",
    src: "./images/gallery/14_FullSizeRender.jpg",
    title: "Grand Banquet Sushi Boat",
    subtitle: "A celebratory presentation of rolls, sashimi cuts, and aburi favorites",
    category: "Special Rolls"
  },
  {
    id: "g15",
    src: "./images/gallery/14_IMG_1712.jpg",
    title: "Bar Seating & Craft Drinks",
    subtitle: "Pair your meal with premium chilled sake and Japanese draft beer",
    category: "Restaurant & Bar"
  }
];

export const MENU_CATEGORIES = [
  "All",
  "Specialty Rolls",
  "Aburi Oshi & Nigiri",
  "Sashimi",
  "Lunch Specials",
  "Appetizers & Izakaya",
  "Teppan & Bento",
  "Udon & Soup",
  "Dessert & Drinks"
];

export const MENU_ITEMS: MenuItem[] = [
  // Specialty Rolls
  {
    id: "r1",
    name: "The Jackie Roll",
    japaneseName: "ジャッキーロール",
    category: "Specialty Rolls",
    price: 15.95,
    description: "Torch-flamed prawns, tender asparagus tempura, topped with seared beef tataki, scallions and garlic ponzu reduction.",
    badge: "Chef Choice",
    image: "./images/gallery/05_IMG_8318.jpg",
    pieces: "8 pcs"
  },
  {
    id: "r2",
    name: "Chiba Signature Roll",
    japaneseName: "千葉ロール",
    category: "Specialty Rolls",
    price: 14.50,
    description: "Choice of spicy tuna or tiger shrimp tempura, layered with ripe sliced avocado, tobiko, and house unagi glaze.",
    badge: "Award Winner",
    image: "./images/gallery/04_IMG_8348.jpg",
    pieces: "8 pcs"
  },
  {
    id: "r3",
    name: "Victoria Roll",
    japaneseName: "ビクトリアロール",
    category: "Specialty Rolls",
    price: 13.95,
    description: "Real fresh crab meat, sweet shrimp, velvety cream cheese, crisp cucumber, coated with bright smelt roe.",
    badge: "Local BC Wild",
    image: "./images/gallery/01_IMG_8341.jpg",
    pieces: "8 pcs"
  },
  {
    id: "r4",
    name: "Pacific Salmon Roll",
    japaneseName: "パシフィックサーモン",
    category: "Specialty Rolls",
    price: 14.95,
    description: "Spicy crab meat, masago, and avocado roll topped with lightly torched wild BC salmon and citrus mayo.",
    badge: "Popular",
    image: "./images/gallery/02_IMG_8320.jpg",
    pieces: "8 pcs"
  },
  {
    id: "r5",
    name: "Mango Tango Roll",
    japaneseName: "マンゴーロール",
    category: "Specialty Rolls",
    price: 13.50,
    description: "Light crispy eel tempura, creamy avocado, topped with freshly sliced mango and sweet mango coulis.",
    badge: "Popular",
    pieces: "8 pcs"
  },
  {
    id: "r6",
    name: "Flame Dragon Roll",
    japaneseName: "フレイムドラゴン",
    category: "Specialty Rolls",
    price: 16.50,
    description: "Shrimp tempura, avocado, and cucumber inside, draped with whole BBQ freshwater unagi, tobiko, and green onion.",
    badge: "Chef Choice",
    pieces: "8 pcs"
  },
  {
    id: "r7",
    name: "Super Dynamite Roll",
    japaneseName: "スーパーダイナマイト",
    category: "Specialty Rolls",
    price: 12.95,
    description: "Double crispy jumbo prawn tempura, avocado, cucumber, masago, and sweet eel drizzle with spicy mayo.",
    badge: "Popular",
    pieces: "6 pcs"
  },
  {
    id: "r8",
    name: "Crispy Sushi Pizza",
    japaneseName: "寿司ピザ",
    category: "Specialty Rolls",
    price: 12.50,
    description: "Pan-crisped sushi rice cake topped with spicy chopped salmon or tuna, creamy avocado, tobiko, and savory sauces.",
    badge: "Popular",
    image: "./images/gallery/09_IMG_8350.jpg",
    pieces: "6 wedges"
  },
  {
    id: "r9",
    name: "Canuck Roll",
    japaneseName: "カヌックロール",
    category: "Specialty Rolls",
    price: 15.50,
    description: "California base crowned with chef's rainbow assortment of salmon, albacore tuna, ebi, and avocado.",
    pieces: "8 pcs"
  },
  {
    id: "r10",
    name: "Real Crab California Roll",
    japaneseName: "本蟹カリフォルニア",
    category: "Specialty Rolls",
    price: 10.95,
    description: "Fresh Dungeness crab meat mixed with Japanese mayo, fresh avocado, and crisp seedless cucumber.",
    badge: "Local BC Wild",
    pieces: "8 pcs"
  },

  // Aburi Oshi & Nigiri
  {
    id: "o1",
    name: "B.C. Wild Sockeye Salmon Oshi",
    japaneseName: "炙り鮭押し寿司",
    category: "Aburi Oshi & Nigiri",
    price: 16.95,
    description: "Pressed box sushi topped with wild sockeye salmon, house-made creamy Japanese sauce, and flame-seared to perfection with serrano slice.",
    badge: "Award Winner",
    image: "./images/gallery/02_IMG_8320.jpg",
    pieces: "6 pcs"
  },
  {
    id: "o2",
    name: "Aburi Albacore Tuna Oshi",
    japaneseName: "炙り鮪押し寿司",
    category: "Aburi Oshi & Nigiri",
    price: 15.95,
    description: "Pressed sushi featuring tender Pacific albacore tuna, grated ginger glaze, and flame-torched aroma.",
    badge: "Chef Choice",
    pieces: "6 pcs"
  },
  {
    id: "o3",
    name: "Assorted Aburi Nigiri Set",
    japaneseName: "炙り握り盛り合わせ",
    category: "Aburi Oshi & Nigiri",
    price: 21.95,
    description: "8 pieces of flame-seared nigiri: wild salmon, bluefin tuna, hotate scallop, unagi, hamachi, and botan ebi with artisan glazes.",
    badge: "Chef Choice",
    image: "./images/gallery/08_IMG_8316.jpg",
    pieces: "8 pcs"
  },
  {
    id: "o4",
    name: "Bluefin Otoro Nigiri",
    japaneseName: "本マグロ大トロ",
    category: "Aburi Oshi & Nigiri",
    price: 9.50,
    description: "Melts on your tongue with rich marbled natural fats, freshly grated wasabi.",
    badge: "Chef Choice",
    pieces: "2 pcs"
  },
  {
    id: "o5",
    name: "Hotate Scallop Nigiri",
    japaneseName: "生ホタテ握り",
    category: "Aburi Oshi & Nigiri",
    price: 7.50,
    description: "Sweet Pacific sea scallop, brushed with nikiri shoyu and lime zest.",
    pieces: "2 pcs"
  },
  {
    id: "o6",
    name: "BBQ Unagi Nigiri",
    japaneseName: "うなぎ握り",
    category: "Aburi Oshi & Nigiri",
    price: 6.95,
    description: "Warm caramelized freshwater eel with sweet kabayaki sauce and toasted sesame.",
    pieces: "2 pcs"
  },

  // Sashimi
  {
    id: "s1",
    name: "Chiba Deluxe Chef's Sashimi",
    japaneseName: "特上刺身盛り合わせ",
    category: "Sashimi",
    price: 32.95,
    description: "7 varieties of the day's finest ocean catch (18 pcs): wild sockeye, bluefin, hamachi, octopus, hokkigai, scallop & sweet prawn.",
    badge: "Award Winner",
    image: "./images/gallery/03_IMG_8343.jpg",
    pieces: "18 pcs"
  },
  {
    id: "s2",
    name: "Wild B.C. Sockeye Salmon Sashimi",
    japaneseName: "紅鮭刺身",
    category: "Sashimi",
    price: 17.50,
    description: "Ruby red, buttery and rich wild salmon harvested from British Columbia waters.",
    badge: "Local BC Wild",
    image: "./images/slides/slide_03.jpg",
    pieces: "8 pcs"
  },
  {
    id: "s3",
    name: "Spicy Wild Salmon Sashimi",
    japaneseName: "スパイシーサーモン",
    category: "Sashimi",
    price: 18.50,
    description: "8 pieces of prime wild salmon tossed in our signature chili sesame vinaigrette and cucumber strings.",
    badge: "Spicy",
    pieces: "8 pcs"
  },
  {
    id: "s4",
    name: "Yellowtail (Hamachi) Sashimi",
    japaneseName: "ハマチ刺身",
    category: "Sashimi",
    price: 18.95,
    description: "Delicate Japanese amberjack with clean sweetness and luscious texture.",
    pieces: "7 pcs"
  },
  {
    id: "s5",
    name: "Tuna & Salmon Sashimi Duo",
    japaneseName: "マグロ・サーモン",
    category: "Sashimi",
    price: 16.95,
    description: "Four generous slices of wild sockeye salmon and four slices of Pacific albacore tuna.",
    pieces: "8 pcs"
  },
  {
    id: "s6",
    name: "Tako (Octopus) Sashimi",
    japaneseName: "タコ刺身",
    category: "Sashimi",
    price: 14.95,
    description: "Steamed tender Pacific octopus sliced thin with sweet ponzu and daikon.",
    pieces: "7 pcs"
  },

  // Lunch Specials
  {
    id: "l1",
    name: "Chiba Bento Box Combo",
    japaneseName: "千葉弁当",
    category: "Lunch Specials",
    price: 16.95,
    description: "Includes Miso Soup, crispy Assorted Tempura, choice of Teriyaki (Chicken/Beef/Sesame), green salad, plus 3 pcs California roll and 3 pcs Nigiri.",
    badge: "Popular",
    pieces: "Complete Meal"
  },
  {
    id: "l2",
    name: "Maui Teriyaki Bowl",
    japaneseName: "マウイ丼",
    category: "Lunch Specials",
    price: 11.95,
    description: "Sautéed chicken, tender beef, or juicy tiger shrimp with sweet bell peppers, sweet onion, and house teriyaki glaze over steamed rice.",
    badge: "Chef Choice"
  },
  {
    id: "l3",
    name: "Mixed Tempura Udon Lunch",
    japaneseName: "天ぷらうどん",
    category: "Lunch Specials",
    price: 11.95,
    description: "Steaming hot dashi broth with thick sanuki udon noodles, accompanied by 2 crispy prawn tempura and vegetable tempura.",
    image: "./images/gallery/13_IMG_8329.jpg"
  },
  {
    id: "l4",
    name: "Classic Donburi Selection",
    japaneseName: "選べる丼物",
    category: "Lunch Specials",
    price: 10.95,
    description: "Choice of Chicken Karaage Don, Crispy Pork Katsu Don, or Beef Sukiyaki Don over rice with simmered egg and sweet onions. Includes miso soup."
  },
  {
    id: "l5",
    name: "Lunch Duo Roll Combo",
    japaneseName: "ランチロールセット",
    category: "Lunch Specials",
    price: 12.95,
    description: "Choice of any two classic rolls (California, Spicy Tuna, Yam Tempura, Salmon Avocado) served with green salad and miso soup."
  },

  // Appetizers & Izakaya
  {
    id: "a1",
    name: "Agedashi Tofu",
    japaneseName: "揚げ出し豆腐",
    category: "Appetizers & Izakaya",
    price: 5.50,
    description: "Golden crisp organic tofu cubes bathed in warm dashi broth, topped with bonito shavings, grated daikon, and scallions.",
    badge: "Vegetarian"
  },
  {
    id: "a2",
    name: "Chiba Monkeys",
    japaneseName: "千葉モンキーズ",
    category: "Appetizers & Izakaya",
    price: 8.00,
    description: "Panko breaded and flash-fried spicy tuna, imitation crab, and avocado balls drizzled with unagi glaze and spicy aioli.",
    badge: "Popular"
  },
  {
    id: "a3",
    name: "Handmade Pan-Fried Gyoza",
    japaneseName: "焼き餃子",
    category: "Appetizers & Izakaya",
    price: 5.00,
    description: "4 pieces of house-crafted Japanese dumplings stuffed with seasoned pork, garlic chives, and cabbage with dipping sauce.",
    badge: "Popular",
    pieces: "4 pcs"
  },
  {
    id: "a4",
    name: "Osaka Takoyaki",
    japaneseName: "たこ焼き",
    category: "Appetizers & Izakaya",
    price: 6.50,
    description: "6 crispy golden octopus-filled batter balls topped with Japanese mayo, bulldog sauce, aonori seaweed, and dancing bonito flakes.",
    pieces: "6 pcs"
  },
  {
    id: "a5",
    name: "Broiled Black Cod Miso",
    japaneseName: "銀だら西京焼き",
    category: "Appetizers & Izakaya",
    price: 9.50,
    description: "Silky black cod marinated in sweet Saikyo white miso for 48 hours and gently broiled until caramelized.",
    badge: "Chef Choice"
  },
  {
    id: "a6",
    name: "Beef Tataki with Ponzu",
    japaneseName: "牛タタキ",
    category: "Appetizers & Izakaya",
    price: 9.50,
    description: "Thinly sliced rare AAA blue sirloin served with shaved sweet onions, momiji oroshi, and house citrus ponzu.",
    badge: "Popular"
  },
  {
    id: "a7",
    name: "Oyster Motoyaki",
    japaneseName: "牡蠣の素焼き",
    category: "Appetizers & Izakaya",
    price: 6.50,
    description: "Oven-baked juicy oysters blanketed in our rich seasoned Japanese mayo reduction with spinach and mushrooms."
  },
  {
    id: "a8",
    name: "Crispy Soft Shell Crab",
    japaneseName: "ソフトシェルクラブ",
    category: "Appetizers & Izakaya",
    price: 9.00,
    description: "Whole soft shell crab lightly floured, flash-fried golden and crisp, served with zesty dipping ponzu."
  },
  {
    id: "a9",
    name: "Steamed Edamame",
    japaneseName: "枝豆",
    category: "Appetizers & Izakaya",
    price: 4.50,
    description: "Steamed young green soy beans dusted with coarse Pacific sea salt.",
    badge: "Vegetarian"
  },
  {
    id: "a10",
    name: "Pumpkin Croquette",
    japaneseName: "かぼちゃコロッケ",
    category: "Appetizers & Izakaya",
    price: 2.50,
    description: "Deep-fried mashed pumpkin kabocha patty with a super crispy panko shell.",
    badge: "Vegetarian"
  },

  // Teppan & Bento
  {
    id: "t1",
    name: "Sizzling Beef Rib Teppan",
    japaneseName: "牛カルビ鉄板",
    category: "Teppan & Bento",
    price: 15.95,
    description: "Marinated bone-in sweet soy short ribs served over a hot iron skillet with charred onions and sesame.",
    badge: "Popular",
    image: "./images/gallery/10_IMG_8323.jpg"
  },
  {
    id: "t2",
    name: "Chicken & Beef Teriyaki Combo",
    japaneseName: "チキン＆ビーフ照り焼き",
    category: "Teppan & Bento",
    price: 14.95,
    description: "Char-grilled chicken breast and tender beef sirloin glazed in homemade teriyaki sauce with steamed rice."
  },
  {
    id: "t3",
    name: "Assorted Seafood & Vegetable Tempura",
    japaneseName: "天ぷら盛り合わせ",
    category: "Teppan & Bento",
    price: 13.95,
    description: "4 succulent tiger prawns, sweet yam, kabocha pumpkin, zucchini, and eggplant fried in light featherweight batter.",
    image: "./images/gallery/13_IMG_8329.jpg"
  },
  {
    id: "t4",
    name: "Chicken Katsu Dinner",
    japaneseName: "チキンカツ定食",
    category: "Teppan & Bento",
    price: 13.50,
    description: "Crunchy Japanese panko-breaded tender chicken cutlet with shredded cabbage, tonkatsu sauce, and miso soup."
  },

  // Udon & Soup
  {
    id: "u1",
    name: "Yaki Udon Stir-Fry",
    japaneseName: "焼きうどん",
    category: "Udon & Soup",
    price: 11.95,
    description: "Wok-tossed Japanese thick udon noodles with sliced chicken or beef, crisp cabbage, carrots, and savory dashi shoyu."
  },
  {
    id: "u2",
    name: "Traditional Miso Soup",
    japaneseName: "味噌汁",
    category: "Udon & Soup",
    price: 2.50,
    description: "Authentic fermented white miso broth with silken organic tofu, wakame seaweed, and chopped spring scallions.",
    badge: "Vegetarian"
  },
  {
    id: "u3",
    name: "Beef Udon Noodle Soup",
    japaneseName: "肉うどん",
    category: "Udon & Soup",
    price: 10.95,
    description: "Simmered sweet soy beef slices, thick chewy wheat noodles in fragrant piping hot bonito broth."
  },

  // Dessert & Drinks
  {
    id: "d1",
    name: "Matcha Mascarpone Cheesecake",
    japaneseName: "抹茶チーズケーキ",
    category: "Dessert & Drinks",
    price: 6.95,
    description: "Velvety Uji green tea mascarpone cream over a buttery graham crust, garnished with red bean sweet paste.",
    badge: "Popular"
  },
  {
    id: "d2",
    name: "Japanese Mochi Ice Cream Trio",
    japaneseName: "餅アイス",
    category: "Dessert & Drinks",
    price: 5.50,
    description: "Three soft sweet rice dough spheres filled with premium ice cream: Matcha, Mango, and Toasted Black Sesame."
  },
  {
    id: "d3",
    name: "Asahi Super Dry Draft Beer (500ml)",
    japaneseName: "アサヒ生ビール",
    category: "Dessert & Drinks",
    price: 7.95,
    description: "Crisp, clean, dry refreshing Japanese draft beer served ice-cold in a chilled glass."
  },
  {
    id: "d4",
    name: "Hakutsuru Junmai Ginjo Sake (300ml)",
    japaneseName: "白鶴 純米吟醸",
    category: "Dessert & Drinks",
    price: 15.50,
    description: "Smooth, floral and clean premium Japanese sake. Served chilled or warmed upon request."
  },
  {
    id: "d5",
    name: "Roasted Genmaicha Green Tea",
    japaneseName: "玄米茶",
    category: "Dessert & Drinks",
    price: 2.00,
    description: "Aromatic Japanese green tea blended with toasted brown rice grains. Unlimited refills."
  }
];

export const TESTIMONIALS = [
  {
    author: "Jessica L.",
    review: "Hands down our absolute favorite sushi in Victoria! The Jackie Roll and Wild Sockeye Oshi are sublime. The fish is always ridiculously fresh and generous portions.",
    rating: 5,
    source: "Google Local Guide"
  },
  {
    author: "David M.",
    review: "Chiba Sushi has been a staple for us since 2007. The new Quadra Village spot is cozy, welcoming, and the Quality Business Award for Best Sushi was so thoroughly deserved!",
    rating: 5,
    source: "TripAdvisor Reviewer"
  },
  {
    author: "Kaori T.",
    review: "Authentic flavors, friendly warm smiles, and reasonable pricing compared to downtown spots. The agedashi tofu and flame dragon roll are unbeatable.",
    rating: 5,
    source: "Verified Diner"
  }
];
