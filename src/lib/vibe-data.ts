export type VibeProduct = {
  id: string;
  size: string;
  name: string;
  image: string;
  note: string;
  tag: string;
};

/** Real VELORA Vodka product line-up (5 sizes) — assets live in /public/assets. */
export const products: VibeProduct[] = [
  {
    id: "020",
    size: "0.20 L",
    name: "VELORA Extra Lux",
    image: "/assets/velora-bottle-020.jpg",
    note: "The pocket edition. Made for travel, gifting and first impressions.",
    tag: "Miniature",
  },
  {
    id: "050",
    size: "0.50 L",
    name: "VELORA Extra Lux",
    image: "/assets/velora-bottle-050.jpg",
    note: "The everyday format. Balanced, generous, effortlessly shareable.",
    tag: "Signature",
  },
  {
    id: "070",
    size: "0.70 L",
    name: "VELORA Extra Lux",
    image: "/assets/velora-bottle-070.jpg",
    note: "The classic bar bottle. Built for cocktails and long evenings.",
    tag: "Bar standard",
  },
  {
    id: "special",
    size: "0.75 L",
    name: "VELORA Special Edition",
    image: "/assets/velora-bottle-special.jpg",
    note: "A collector's format with a distinctive Extra Lux presentation.",
    tag: "Special Edition",
  },
  {
    id: "100",
    size: "1.00 L",
    name: "VELORA Extra Lux",
    image: "/assets/velora-bottle-100.jpg",
    note: "The full litre. The grand format VELORA bottle, at its most generous.",
    tag: "Full litre",
  },
];

export const testimonials = [
  {
    quote:
      "The nose is incredibly mild and light – you only get a mild hint of sweetness. On the tongue we get a mild, but at the same time full taste, where the wheat gives a soft fullness.",
    name: "Daniel Aeberli",
    role: "CEO, purevodka.dk",
  },
  {
    quote:
      "A smooth and delicious vodka. It glides down easily and leaves a warm sensation in the mouth. The slight graininess gives the vodka an interesting and complex taste that is not too overwhelming.",
    name: "Brian Engberg",
    role: "CEO, Vodkamuseet.dk",
  },
  {
    quote:
      "The texture is completely soft and smooth. In the aftertaste we get a little more fullness and warmth with delicious touches of black pepper and anise — a well-made vodka, neat or in cocktails.",
    name: "Daniel Aeberli",
    role: "CEO, purevodka.dk",
  },
];

export const tasteWords = ["SOFT", "SMOOTH", "PURE", "WARM", "SUBTLE"];

export const bottleLabels = [
  "5× FILTRATION",
  "3× DISTILLATION",
  "PREMIUM WHEAT SPIRIT",
  "SMOOTH FINISH",
];
