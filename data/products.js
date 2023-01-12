const products = [
  {
      "name": "1pc Plain Wall Mounted Shaver Storage Rack",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-ab9a3b8e-79e5-427f-83ad-840042687025.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 373.71,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1set Punch-free Multifunction Toothpaste & Toothbrush Holder",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-b13c093e-2418-4c9d-8464-ff554d855ba3.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 134.28,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Punch-free Random Color Soap Dish",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-be63935b-b2eb-4c64-8f95-28d9ffec190a.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 191.14,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Multifunction Lotion Spray Bottle",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-f1d975f6-89b3-4e42-a404-cfe52c2648ad.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 260.15,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "3pcs 500ml Lotion Dispenser",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-b58d04ec-7956-4b04-b5d8-79670062f281.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 57.62,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Solid Lotion Dispenser & 1pc Cleaning Brush & 1pc Storage Box",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-02c5ee85-082e-4a38-9e96-a18b8aad6120.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 442.02,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "4pcs Lotion Dispenser & Toothbrush Rack & Soap Dish & Tumbler",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-300574d9-1467-496c-8a3d-e455305c25f8.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 211.33,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Simple Clear Soap Dispenser",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-a0fe3f1e-f19c-4f40-b332-84c4d222f74a.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 91.55,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "4pcs Lotion Dispenser & Soap Dish Holder & Gargle Cup Set",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-978a7c5c-710c-4403-ac3b-e522f159573f.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 259.29,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Two Tone Lotion Dispenser",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-a9dd260a-bb5a-4d2c-bba3-8ef311195594.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 252.77,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Stainless Steel Shaver Holder",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-82890194-a0bc-49ee-94d0-977883a7cb8b.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 319.81,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc 300ml Lotion Dispenser",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-e3684439-d3d0-42f4-973f-0476e4f72eef.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 269.52,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Soap Dispenser Box",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-7d77c4d8-b531-4dc5-8f5d-526bd5042792.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 446.52,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "4pcs Lotion Dispenser & Soap Dish & Gargle Cup Set",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-a733b018-6d73-4ff3-98b7-3367f6cf0e4e.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 339.56,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Stainless Steel Razor Holder",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-382e0da6-fdcc-46c1-8392-fa13f58b2e5d.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 423.08,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Plastic Spray Bottle",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-fed55f48-3e8d-45bc-a696-07b37dbb7036.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 356.02,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "2pcs Plastic Lotion Dispenser",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-d3059859-5301-4257-91f8-ffe02556d46f.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 181.82,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "Letter Graphic Wall Mounted Lotion Dispenser",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-e620fb6b-9dae-47bb-b47f-9bf8e5316c98.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 143.65,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Random Color Toothpaste Squeezer",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-fc96e32f-ac49-4098-901a-c01c9716d5b4.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 175.64,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc 300ml Lotion Dispenser",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-15cb6704-f9fa-432b-b3dc-607892994aee.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 261.16,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Two Tone Soap Dish",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-92be22ae-d5d8-45c6-a2f6-7c99b93aedaa.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 394.67,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  },
  {
      "name": "1pc Random Color Toothbrush Box",
      "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556015/gadgets/image-a2256f27-5682-40d9-a6ab-f6da666fff98.webp",
      "brand": "Electronic",
      "category": "Electronics",
      "price": 211.77,
      "countInStock": 10,
      "rating": 0,
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
      "numReviews": 0
  }
]

export default products
