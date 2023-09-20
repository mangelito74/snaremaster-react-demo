const DUMMY_PRODUCTS = [
  {
    id: "p1",
    name: "Gretsch Snare Drum Full Range",
    description:
      "Black Nickel over Steel, 1,2 mm steel shell, 45° bearing edge, 2.3 mm triple flanged hoops, 20-spiral snare wire, Remo heads",
    image:
      "https://cdn.starwebserver.se/shops/trumslagaren/files/cache/77884_dup5qhu71_medium.jpg?_=1606285566",
    price: 280,
  },
  {
    id: "p2",
    name: "DMP1255-MVM",
    description:
      "Tama Soundworks Maple Snare - DMP1255-MVM, Matte Vintage Maple finish.",
    image:
      "https://cdn.starwebserver.se/shops/trumslagaren/files/cache/710738124513_1_medium.jpg?_=1623424830",
    price: 244,
  },
  {
    id: "p3",
    name: "Ludwig Carl Palmer Snare Drum",
    description:
      "The Carl Palmer Snare 14″x3.7″ – A truly-personlized instrument. Carl’s “Venus” is crafted for volume and intricate clarity. Its beaded-brass 3.7″x14″",
    image:
      "https://cdn.starwebserver.se/shops/trumslagaren/files/cache/lw0414cp_medium.jpg?_=1615129146",
    price: 589,
  },
  {
    id: "p4",
    name: "Mapex Black Panther Heartbreaker",
    description:
      "All-mahogany snare drum shell with reinforcement rings for warm, focused projection with an edgy, distinctly rock 'n' roll sound.",
    image:
      "https://cdn.starwebserver.se/shops/trumslagaren/files/cache/618011_medium.jpg?_=1540899451",
    price: 639,
  },
  {
    id: "p5",
    name: "Ludwig Carl Palmer Snare Drum",
    description:
      "The Carl Palmer Snare 14″x3.7″ – A truly-personlized instrument. Carl’s “Venus” is crafted for volume and intricate clarity. Its beaded-brass 3.7″x14″",
    image:
      "https://cdn.starwebserver.se/shops/trumslagaren/files/cache/lw0414cp_medium.jpg?_=1615129146",
    price: 589,
  },
  {
    id: "p6",
    name: "Gretsch Snare Drum Full Range",
    description:
      "Black Nickel over Steel, 1,2 mm steel shell, 45° bearing edge, 2.3 mm triple flanged hoops, 20-spiral snare wire, Remo heads",
    image:
      "https://cdn.starwebserver.se/shops/trumslagaren/files/cache/77884_dup5qhu71_medium.jpg?_=1606285566",
    price: 280,
  },
];

export const products = DUMMY_PRODUCTS;

export const getProduct = (productId) => {
  let product = null;
  const array = products.filter((p) => p.id === productId);
  if(array.length === 1) {
    product = array[0];
  }

  return product;
};
