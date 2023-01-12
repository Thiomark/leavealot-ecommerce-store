const products = [
    {
        "name": "Plain Wall Mounted Shaver Storage Rack",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-ab9a3b8e-79e5-427f-83ad-840042687025.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 373.99,
        "countInStock": 10,
        "rating": 2.5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 12
    },
    {
        "name": "Multifunction Toothpaste & Toothbrush Holder",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-b13c093e-2418-4c9d-8464-ff554d855ba3.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 134.99,
        "countInStock": 10,
        "rating": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 5
    },
    {
        "name": "Punch-free Random Color Soap Dish",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-be63935b-b2eb-4c64-8f95-28d9ffec190a.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 191.99,
        "countInStock": 10,
        "rating": 3.5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 4
    },
    {
        "name": "Multifunction Lotion Spray Bottle",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-f1d975f6-89b3-4e42-a404-cfe52c2648ad.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 260.99,
        "countInStock": 10,
        "rating": 3,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 10
    },
    {
        "name": "3pcs 500ml Lotion Dispenser",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-b58d04ec-7956-4b04-b5d8-79670062f281.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 57.99,
        "countInStock": 10,
        "rating": 2,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 4
    },
    {
        "name": "Solid Lotion Dispenser & Cleaning Brush",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-02c5ee85-082e-4a38-9e96-a18b8aad6120.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 442,
        "countInStock": 10,
        "rating": 2,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 4
    },
    {
        "name": "Toothbrush Rack & Soap Dish",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-300574d9-1467-496c-8a3d-e455305c25f8.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 211.99,
        "countInStock": 10,
        "rating": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 6
    },
    {
        "name": "Simple Clear Soap Dispenser",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-a0fe3f1e-f19c-4f40-b332-84c4d222f74a.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 91.99,
        "countInStock": 10,
        "rating": 4,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 2
    },
    {
        "name": "Soap Dish Holder & Gargle Cup Set",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-978a7c5c-710c-4403-ac3b-e522f159573f.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 259.99,
        "countInStock": 10,
        "rating": 4,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 2
    },
    {
        "name": "Two Tone Lotion Dispenser",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-a9dd260a-bb5a-4d2c-bba3-8ef311195594.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 252.99,
        "countInStock": 10,
        "rating": 1,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 10
    },
    {
        "name": "Stainless Steel Shaver Holder",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-82890194-a0bc-49ee-94d0-977883a7cb8b.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 319.99,
        "countInStock": 10,
        "rating": 4,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 10
    },
    {
        "name": "300ml Lotion Dispenser",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-e3684439-d3d0-42f4-973f-0476e4f72eef.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 269.99,
        "countInStock": 10,
        "rating": 3,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 5
    },
    {
        "name": "Soap Dispenser Box",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-7d77c4d8-b531-4dc5-8f5d-526bd5042792.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 446,
        "countInStock": 10,
        "rating": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 10
    },
    {
        "name": "4pcs Lotion Dispenser & Soap Dish",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-a733b018-6d73-4ff3-98b7-3367f6cf0e4e.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 339.99,
        "countInStock": 10,
        "rating": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 7
    },
    {
        "name": "Stainless Steel Razor Holder",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-382e0da6-fdcc-46c1-8392-fa13f58b2e5d.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 423.99,
        "countInStock": 10,
        "rating": 3.5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 9
    },
    {
        "name": "Plastic Spray Bottle",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-fed55f48-3e8d-45bc-a696-07b37dbb7036.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 356.99,
        "countInStock": 10,
        "rating": 4,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 5
    },
    {
        "name": "2pcs Plastic Lotion Dispenser",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-d3059859-5301-4257-91f8-ffe02556d46f.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 181,
        "countInStock": 10,
        "rating": 4,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 9
    },
    {
        "name": "Letter Graphic Wall Mounted Lotion Dispenser",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-e620fb6b-9dae-47bb-b47f-9bf8e5316c98.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 143,
        "countInStock": 10,
        "rating": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 6
    },
    {
        "name": "Random Color Toothpaste Squeezer",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-fc96e32f-ac49-4098-901a-c01c9716d5b4.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 175.99,
        "countInStock": 10,
        "rating": 5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 5
    },
    {
        "name": "300ml Lotion Dispenser",
        "image": "https://res.cloudinary.com/thiomark/image/upload/v1673556016/gadgets/image-15cb6704-f9fa-432b-b3dc-607892994aee.webp",
        "brand": "Electronic",
        "category": "Electronics",
        "price": 261.99,
        "countInStock": 10,
        "rating": 3.5,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ullamcorper metus sed odio scelerisque, in ultricies est pulvinar. Morbi mattis elit nisi, et posuere diam rhoncus dignissim. Vivamus ut eros purus. Vivamus a ipsum est. Aenean vehicula lectus sed dui malesuada pharetra. Curabitur fermentum sapien nulla, vel imperdiet massa iaculis vel. Nulla facilisi.",
        "numReviews": 11
    }
]

export default products
