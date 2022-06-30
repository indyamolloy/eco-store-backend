const products = [
  {
    title: "Mens Grey Worn Hat",
    price: 24.49,
    description:
      "Casual grey hat, logo embroidery on front. 100% Cotton Twill.curved visor, adjustable strap at back and silver-tone finish.",
    category: "mens's clothing",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    rating: 3.8,
  },
  {
    title: "Womens Coloured Beanie Hat",
    price: 18.99,
    description:
      "Multi-coloured beanies in warm cotton fabric with a stretchy rib knit that ensures comfort and a fit suitable for everyone. Comes in pink, green, yellow and brown ",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 3.9,
  },
  {
    title: "Mens Grey Beanie Hat",
    price: 22.8,
    description:
      " Featuring a super soft stretchy material, perfect to add to your winter outfit. Available in beige and grey. ",
    category: "mens's clothing",
    image:
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    rating: 2.9,
  },
  {
    title: "Gold Layered Necklace",
    price: 35.9,
    description:
      "Pack of 2 necklace for layering. Two chains come in different lengths all of which are adjustable for a great fit. The necklaces can also be worn on their own for a more simple look.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1635767798638-3e25273a8236?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    rating: 4.4,
  },
  {
    title: "Gold Engraved Necklace",
    price: 25.89,
    description:
      "Personalization at its finest. Handcrafted in 14k solid gold, this is a piece you can hold on forever. Add your personal touch by engraving an initial, for yourself or your fave person. It also looks great alone or stacked with other charms.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1591042028929-c18138f0588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 3.4,
  },
  {
    title: "Blue Heart Earrings",
    price: 15.99,
    description:
      "A beautiful lightweight pair of Blue Heart Earrings are made using 100% recycled plastic (sourced from prescription bottles, product packaging, and plastic lids). Each heart is one of a kind and features a unique blend of blue.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1630019925419-5fc53b4a52cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80",
    rating: 3.9,
  },
  {
    title: "Delicate Gold Hoop Earrings",
    price: 15.99,
    description:
      "Delicate small hammered textured circle earrings made from recycled 9ct solid gold. These eco gold earrings catch the light beautifully.  Width 9mm.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 4.2,
  },
  {
    title: "Gold Engraved Band Rings",
    price: 15.99,
    description:
      "Pack of 2 gold bands. Made with sustainable eco-friendly metals. Custom eco-friendly and ethical men's and women's wedding rings, Plated in Gold, Rose Gold, Gun Metal, and Silver.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80",
    rating: 4.1,
  },
  {
    title: "Unisex Gold Rimmed Sunglasses",
    price: 45.25,
    description:
      "These rounded glasses are perfect for everything from lounging by the pool to  strolls through the city. Made from 95% recycled metal and have polarized lenses.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    rating: 4.9,
  },
  {
    title: "Unisex Gold Rimmed Sunglasses",
    price: 45.25,
    description:
      "Made of bio-acetate, a compound 100% biodegradable and recyclable. These sunglasses have a thick black frame. 100% sustainable packaging - Recycled case, cleaning cloth, and box.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=380&q=80",
    rating: 3.9,
  },
  {
    title: "Eco Recycled PET trainers",
    price: 89.99,
    description:
      "Multi-coloured trainers. All fabrics composed of ecological fibres such as PET and waste materials. Recycled soles. The shoes are designed and produced in Barcelona. 100% vegan.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    rating: 4.6,
  },
  {
    title: "Orange and Brown Trainers",
    price: 79.99,
    description:
      "This material is a vegan alternative to leather. A 100% organic cotton canvas, coated with P.U., corn starch and ricinus oil. 54% bio-based.  The shoes are designed and produced in Barcelona. 100% vegan.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80",
    rating: 3.6,
  },
  {
    title: "Burgundy Strappy Wood Platform Sandals",
    price: 49.99,
    description:
      "A 90s inspired oversized sustainable vegan leather sandal featuring a maxi double layered sole. Criss-crossed front hold and a buckled back strap for added comfort.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    rating: 4.8,
  },
  {
    title: "Womens Orange Jacket",
    price: 59.29,
    description:
      "Hand-cut and crafted with care. Its lightweight, airy fabric is lined with the perfect amount of insulation for the chillier months making this a great year-round go-to.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    rating: 4.4,
  },
  {
    title: "Linen Striped Shirt",
    price: 32.82,
    description:
      "This ethical linen shirt is handmade in London from comfortable, breathable white linen. It features side vents to ensure additional comfort especially during warmer weather.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
    rating: 4.2,
  },
  {
    title: "Knitted V-neck Shawl",
    price: 12.5,
    description:
      "High quality for durable and long-lasting use. As a perfect gift for yourself or your friends. Lightweight, portable and fashionable. Stylish and practical, easy to match different outfits. Warm knitted design, keeps you comfortable and cosy in winter and autumn",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=405&q=80",
    rating: 3.2,
  },
  {
    title: "Cotton Rib Pants",
    price: 28.99,
    description:
      "Long solid cream colour trousers in 100% organic cotton with ribbed weave. Elastic waist with adjustable drawstring. Tulle edging on the hem.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1605131545304-096aeaeee5d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    rating: 4.2,
  },
  {
    title: "Eco Cotton Turtleneck Sweater",
    price: 32.5,
    description:
      "Soft, knit sweater with wool content. Turtleneck, dropped shoulders, and long sleeves. Ribbing at neck, cuffs, and hem. Oversized fit. ",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    rating: 5.0,
  },
  {
    title: "100% Vegan Leather Trainers",
    price: 89.99,
    description:
      "This product is made with vegan alternatives to animal-derived ingredients or materials. It is also made with Primegreen, a series of high-performance recycled materials. 50% of upper is recycled content. No virgin polyester.",
    category: "women's clothing",
    image:
      "https://images.unsplash.com/photo-1622760807800-66cf1466fc08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
    rating: 4.7,
  },
  {
    title: "Vegan Cactus Leather Bag",
    price: 108.59,
    description:
      "The manufacturing process is non-harmful to the environment and responsible, avoiding herbicides, pesticides and irrigation. Each tote saves 7.5 liters of water.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80",
    rating: 3.7,
  },
  {
    title: "Eco Tote Bag",
    price: 18.99,
    description:
      "Say goodbye to plastic, and bag your goodies in this organic cotton tote bag. There’s more than enough room for groceries, books, and anything in between.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    rating: 5.0,
  },
  {
    title: "Eco Tote Bag",
    price: 18.99,
    description:
      "Say goodbye to plastic, and bag your goodies in this organic cotton tote bag. There’s more than enough room for groceries, books, and anything in between.",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80",
    rating: 5.0,
  },
  {
    title: "Laptop Backpack ",
    price: 38.99,
    description:
      "Lightweight. Removable notebook case. Integrated rain cover. Manufactured in durable 600D recycled PET, this lightweight backpack is equipped with ergonomic back cushioning made from breathable material and padded shoulder straps with an adjustable chest strap. ",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    rating: 4.1,
  },
  {
    title: "Phone Case",
    price: 18.0,
    description:
      "Made with sustainable or recycled materials. Durable to keep it out of the landfills for longer. Is biodegradable (note: always dispose of your biodegradable case in a proper composting environment. Don’t send it to the landfills).",
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1623393945964-8f5d573f9358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 4.6,
  },
  {
    title: "Mens Crewneck Sweater",
    price: 38.99,
    description:
      "9 oz., 50/50 cotton/polyester. Made with up to 5% recycled polyester from plastic bottles. Durable coverstitching throughout. Heavy ribbed knit waistband and cuffs. Set-in sleeves. logo on left sleeve.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
    rating: 3.9,
  },
  {
    title: "Green Pocket T-Shirt",
    price: 25.99,
    description:
      "The carbon-neutral pocket t-shirt comes in a soft touch cotton with a crew neckline and makes a great eco-friendly addition to your wardrobe.100% pure cotton.",
    category: "men's clothing",
    image:
      "https://images.unsplash.com/photo-1633966887768-64f9a867bdba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=503&q=80",
    rating: 4.9,
  },
  {
    title: "Mug",
    price: 15.99,
    description:
      "Made of 100% compostable PLA. 350 ml capacity, in a solid finishing and BPA free. Product made of PLA material, from renewable raw materials, with important properties such as versatility and resistance, highlighting among them the compostability.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1605714117967-9fe201ddfe9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    rating: 4.9,
  },
  {
    title: "Wood Frame Mirror",
    price: 55.15,
    description:
      "DECORATIVE ROUND ACCENT MIRROR - A statement piece ready to open up a room and create an illusion of space, this rustic brown wooden wall mirror will add timeless appeal and style to your home.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1619213348491-b7b7602727f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    rating: 5.0,
  },
  {
    title: "Soy Candles",
    price: 10.99,
    description:
      "The full quality of the 100% vegetable soybean wax in a big format. Perfect size for those who are looking for a natural, long lasting product, with a delightful fragrance. Its size makes it perfect for large rooms.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1616172912573-ed615bc0a14b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 3.0,
  },
  {
    title: "Plate Set",
    price: 45.79,
    description:
      "Made from a high proportion of renewable resources such as organic bamboo fibers, corn starch, wood fibers, resin, and BPA-free.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1563136838-1e0f8d93e475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    rating: 4.4,
  },
  {
    title: "House Succulent",
    price: 25.0,
    description:
      "Tall succulent in white pot. High light is best, indirect sunlight is okay as well Water: Every 2-3 weeks, let soil dry completely between watering.",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    rating: 4.2,
  },
  {
    title: "Reed Diffuser",
    price: 15.99,
    description:
      "Made of natural ingredients and a reusable cardboard packaging; ideal for storing your things, using it as a decorative element or however you like. In addition, the embellishment is made of wenge wood and the sticks are made of natural rattan, the most sophisticated. ",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1616817727790-4cc1975d00cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    rating: 4.7,
  },
  {
    title: "Zero Waste Wooden Cutlery Set",
    price: 12.99,
    description:
      "High quality reclaimed reusable wooden cutlery sets are 100% organic & are handmade by skilled artisans in Vietnam. Each set is made from a single piece of upcycled ebony wood without the need for any harmful fertilisers, pesticide or glues. ",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80",
    rating: 5.0,
  },
  {
    title: "Bamboo Toothbrush and Holder",
    price: 7.99,
    description:
      "This Bamboo Toothbrush is a sustainable and eco-friendly alternative to regular plastic toothbrushes. Provides thorough cleaning action with medium-hard nylon-6 bristles. ",
    category: "home",
    image:
      "https://images.unsplash.com/photo-1634068966402-86a27b9d57c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    rating: 4.4,
  },
];

export default products;
