import {
  ProductVariant,
  TastePillar,
  IngredientItem,
  ResellerBenefit,
  StoryMoment,
  NavItem,
} from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Rasa & Bahan', href: '#keunggulan' },
  { label: 'Varian Kemasan', href: '#katalog' },
  { label: 'Cerita Kami', href: '#cerita' },
  { label: 'Info Reseller', href: '#reseller' },
];

export const PRODUCT_VARIANTS: ProductVariant[] = [
  {
    id: 'jumbo-115g',
    sku: 'SKU-04',
    name: 'Kemasan Jumbo',
    shortName: 'Jumbo 115g',
    packCount: '1 bungkus besar utuh',
    netWeightGrams: 115,
    priceIDR: 10000,
    capType: 'cap_besar',
    capLabel: 'Cap Besar (Vertikal)',
    image: '/images/products/placeholder_jumbo_115g.png',
    imageAlt: 'Kacang Pedes Singo Khas Malang - Kemasan Jumbo 115 gram',
    isPlaceholder: true,
    isFeatured: false,
    badge: 'Praktis Sekali Buka',
    segmentTag: 'Ngemil Sendiri & Toples Rumah',
    description:
      'Satu bungkus besar 115 gram. Tinggal buka buat teman nonton atau langsung dituang ke toples camilan di rumah.',
    waMessageTemplate:
      'Halo Admin Kacang Pedes Singo, saya mau pesan *Kemasan Jumbo (115gr)* harga Rp 10.000 sebanyak [... bungkus]. Mohon info total & ongkir ke [Kecamatan/Kota].',
  },
  {
    id: 'pack-sedang-10',
    sku: 'SKU-03',
    name: 'Pack Sedang (Isi 10 Bungkus)',
    shortName: 'Pack Sedang Isi 10',
    packCount: '10 bungkus sedang / pack',
    netWeightGrams: 240,
    priceIDR: 20000,
    capType: 'cap_kecil',
    capLabel: 'Cap Kecil (Horizontal)',
    image: '/images/products/placeholder_pack_sedang_10.png',
    imageAlt:
      'Kacang Pedes Singo Khas Malang - Pack Sedang Isi 10 Bungkus (240 gram)',
    isPlaceholder: true,
    isFeatured: true,
    badge: 'Paling Laris',
    segmentTag: 'Keluarga, Oleh-oleh & Reseller',
    description:
      'Isi 10 bungkus ukuran sedang (total 240 gram). Pilihan paling pas buat suguhan tamu, kumpul keluarga, atau oleh-oleh.',
    waMessageTemplate:
      'Halo Admin Kacang Pedes Singo, saya mau pesan *Pack Sedang (Isi 10 - 240gr)* harga Rp 20.000 sebanyak [... pack]. Mohon info total & ongkir ke [Kecamatan/Kota].',
  },
  {
    id: 'pack-sedang-5',
    sku: 'SKU-02',
    name: 'Pack Sedang (Isi 5 Bungkus)',
    shortName: 'Pack Sedang Isi 5',
    packCount: '5 bungkus sedang / pack',
    netWeightGrams: 120,
    priceIDR: 10000,
    capType: 'cap_kecil',
    capLabel: 'Cap Kecil (Horizontal)',
    image: '/images/products/placeholder_pack_sedang_5.png',
    imageAlt:
      'Kacang Pedes Singo Khas Malang - Pack Sedang Isi 5 Bungkus (120 gram)',
    isPlaceholder: true,
    isFeatured: false,
    badge: 'Pas Buat Stok Harian',
    segmentTag: 'Ngemil Harian & Reseller',
    description:
      'Isi 5 bungkus ukuran sedang dengan porsi lebih puas per bungkusnya. Enak buat stok camilan di rumah atau meja kerja.',
    waMessageTemplate:
      'Halo Admin Kacang Pedes Singo, saya mau pesan *Pack Sedang (Isi 5 - 120gr)* harga Rp 10.000 sebanyak [... pack]. Mohon info total & ongkir ke [Kecamatan/Kota].',
  },
  {
    id: 'pack-kecil-10',
    sku: 'SKU-01',
    name: 'Pack Kecil (Isi 10 Bungkus)',
    shortName: 'Pack Kecil Isi 10',
    packCount: '10 bungkus kecil / pack',
    netWeightGrams: 120,
    priceIDR: 10000,
    capType: 'cap_kecil',
    capLabel: 'Cap Kecil (Horizontal)',
    image: '/images/products/placeholder_pack_kecil_10.png',
    imageAlt:
      'Kacang Pedes Singo Khas Malang - Pack Kecil Isi 10 Bungkus (120 gram)',
    isPlaceholder: true,
    isFeatured: false,
    badge: 'Cocok buat Eceran Warung',
    segmentTag: 'Reseller & Camilan Saku',
    description:
      'Satu pack isi 10 bungkus kecil. Praktis buat bekal, dibagi-bagi ke teman, atau dijual eceran per bungkus di warung.',
    waMessageTemplate:
      'Halo Admin Kacang Pedes Singo, saya mau pesan *Pack Kecil (Isi 10 - 120gr)* harga Rp 10.000 sebanyak [... pack]. Mohon info total & ongkir ke [Kecamatan/Kota].',
  },
];

export const TASTE_PILLARS: TastePillar[] = [
  {
    id: 'spicy-hot',
    iconId: 'spicy',
    title: 'Pedasnya Berasa Banget',
    subtitle: 'Cabai Merah Asli',
    description:
      'Pakai cabai merah asli yang pedasnya langsung terasa di lidah, bikin melek dan pengen nambah terus.',
  },
  {
    id: 'sweet-sour-savory',
    iconId: 'sweet',
    title: 'Bumbu Manis-Asam yang Medok',
    subtitle: 'Gula & Asam Jawa Pas',
    description:
      'Takaran gula dan asam jawanya pas, menyatu jadi bumbu karamel yang lengket, gurih, dan segar.',
  },
  {
    id: 'crunchy-no-preservatives',
    iconId: 'crunchy',
    title: 'Kacangnya Garing & Tanpa Pengawet',
    subtitle: 'Renyah Sampai ke Dalam',
    description:
      'Digoreng sampai renyah ke dalam, nggak bau tengik, dan awet garingnya meski tanpa bahan pengawet.',
  },
];

export const NATURAL_INGREDIENTS: IngredientItem[] = [
  {
    name: 'Kacang Tanah',
    role: 'Kacang pilihan digoreng garing',
    iconId: 'peanut',
  },
  {
    name: 'Cabai',
    role: 'Pedas cabai merah asli',
    iconId: 'chili',
  },
  {
    name: 'Gula',
    role: 'Manis karamel yang pas',
    iconId: 'sugar',
  },
  {
    name: 'Asam Jawa',
    role: 'Segar asam yang khas',
    iconId: 'tamarind',
  },
  {
    name: 'Garam',
    role: 'Gurih pengikat rasa',
    iconId: 'salt',
  },
];

export const STORY_MOMENTS: StoryMoment[] = [
  {
    title: 'Teman Santai & Kerja',
    description:
      'Renyah dan pedasnya pas disandingkan bareng teh hangat atau kopi.',
  },
  {
    title: 'Oleh-Oleh Keluarga',
    description:
      'Kemasan pack isi 5 dan isi 10 yang rapi, praktis dibawa pulang dari Malang.',
  },
  {
    title: 'Bumbu Karamel Asli',
    description:
      'Diracik dari cabai segar, asam jawa, dan gula asli tanpa pemanis buatan.',
  },
];

export const RESELLER_BENEFITS: ResellerBenefit[] = [
  {
    iconId: 'price',
    title: 'Harga Jual Terjangkau',
    description:
      'Harga eceran Rp 10.000 sampai Rp 20.000 bikin pembeli nggak mikir panjang buat beli.',
  },
  {
    iconId: 'box',
    title: 'Kemasan Siap Pajang',
    description:
      'Tersedia kemasan pack isi 5 dan isi 10 yang rapi, tinggal taruh di meja atau etalase.',
  },
  {
    iconId: 'wholesale',
    title: 'Harga Khusus Grosir',
    description:
      'Ada harga khusus buat reseller dengan minimal pembelian yang ringan buat pemula.',
  },
  {
    iconId: 'legal',
    title: 'Izin Kemasan Lengkap',
    description:
      'Sudah ada nomor P-IRT dan logo Halal resmi di kemasan, jadi aman dititipkan di toko mana pun.',
  },
];
