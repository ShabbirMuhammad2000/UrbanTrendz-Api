// Data Structure
const clothingCategories = [
  {
    id: 1, name: 'Men'
  },
  {
    id: 2, name: 'Women'
  },
  {
    id: 3, name: 'Kids'
  },
]

const subCategories = [
  {id: 1, name: 'T-Shirts', categoryId: 1},
  {id: 2, name: 'Shorts', categoryId: 2},
  {id: 3, name: 'Jeans', categoryId: 3},
  {id: 4, name: 'SweatPants', categoryId: 4},
  {id: 5, name: 'Sweaters', categoryId: 5},
  {id: 6, name: 'Hats', categoryId: 6},
  {id: 7, name: 'Shoes', categoryId: 7},
]

const mensTShirts = [
  { id: 1, name: 'Men\'s Classic White T-Shirt', price: 19.99, subcategoryId: 1},
  { id: 2, name: 'Men\'s Graphic Print Tee', price: 24.99, subcategoryId: 1 },
  { id: 3, name: 'Men\'s V-Neck Cotton Shirt', price: 18.99, subcategoryId: 1 },
  { id: 4, name: 'Men\'s Striped Polo', price: 29.99, subcategoryId: 1 },
  { id: 5, name: 'Men\'s Long Sleeve Henley', price: 26.99, subcategoryId: 1 },
  { id: 6, name: 'Men\'s Slim-Fit Henley', price: 27.99, subcategoryId: 1 },
  { id: 7, name: 'Men\'s Crew Neck Tee', price: 21.99, subcategoryId: 1 },
  { id: 8, name: 'Men\'s Tie-Dye T-Shirt', price: 22.99, subcategoryId: 1 },
];

const mensShorts = [
  { id: 11, name: 'Men\'s Denim Shorts', price: 29.99, subcategoryId: 2 },
  { id: 12, name: 'Men\'s Cargo Shorts', price: 27.99, subcategoryId: 2 },
  { id: 13, name: 'Men\'s Chino Shorts', price: 24.99, subcategoryId: 2 },
  { id: 14, name: 'Men\'s Athletic Shorts', price: 19.99, subcategoryId: 2 },
  { id: 15, name: 'Men\'s Board Shorts', price: 34.99, subcategoryId: 2 },
  { id: 16, name: 'Men\'s Linen Shorts', price: 26.99, subcategoryId: 2 },
  { id: 17, name: 'Men\'s Hybrid Shorts', price: 32.99, subcategoryId: 2 },
];


const mensJeans = [
  { id: 21, name: 'Men\'s Slim-Fit Jeans', price: 49.99, subcategoryId: 3 },
  { id: 22, name: 'Men\'s Straight-Leg Jeans', price: 44.99, subcategoryId: 3 },
  { id: 23, name: 'Men\'s Skinny Jeans', price: 54.99, subcategoryId: 3 },
  { id: 24, name: 'Men\'s Relaxed-Fit Jeans', price: 47.99, subcategoryId: 3 },
  { id: 25, name: 'Men\'s Bootcut Jeans', price: 46.99, subcategoryId: 3 },
  { id: 26, name: 'Men\'s Ripped Jeans', price: 56.99, subcategoryId: 3 },
  { id: 27, name: 'Men\'s Vintage Wash Jeans', price: 52.99, subcategoryId: 3 },
]

const mensSweatpants = [
  { id: 31, name: 'Men\'s Comfort Sweatpants', price: 39.99, subcategoryId: 4 },
  { id: 32, name: 'Men\'s Fleece Joggers', price: 37.99, subcategoryId: 4 },
  { id: 33, name: 'Men\'s Slim-Fit Sweatpants', price: 42.99, subcategoryId: 4 },
  { id: 34, name: 'Men\'s Athletic Sweatpants', price: 34.99, subcategoryId: 4 },
  { id: 35, name: 'Men\'s Lounge Pants', price: 29.99, subcategoryId: 4 },
  { id: 36, name: 'Men\'s French Terry Sweatpants', price: 38.99, subcategoryId: 4 },
  { id: 37, name: 'Men\'s Cargo Sweatpants', price: 41.99, subcategoryId: 4 },
];


const mensSweaters = [
  { id: 41, name: 'Men\'s Cozy Sweater', price: 39.99, subcategoryId: 5 },
  { id: 42, name: 'Men\'s Knit Pullover', price: 44.99, subcategoryId: 5 },
  { id: 43, name: 'Men\'s V-Neck Sweater', price: 35.99, subcategoryId: 5 },
  { id: 44, name: 'Men\'s Cable-Knit Sweater', price: 49.99, subcategoryId: 5 },
  { id: 45, name: 'Men\'s Turtleneck Sweater', price: 46.99, subcategoryId: 5 },
]

const mensHats = [
  { id: 51, name: 'Men\'s Baseball Cap', price: 14.99, subcategoryId: 6 },
  { id: 52, name: 'Men\'s Beanie Hat', price: 12.99, subcategoryId: 6 },
  { id: 53, name: 'Men\'s Trucker Hat', price: 16.99, subcategoryId: 6 },
  { id: 54, name: 'Men\'s Snapback Cap', price: 18.99, subcategoryId: 6 },
  { id: 55, name: 'Men\'s Bucket Hat', price: 17.99, subcategoryId: 6 },
  { id: 56, name: 'Men\'s Fedora Hat', price: 22.99, subcategoryId: 6 },
];


const mensShoes = [
  { id: 61, name: 'Men\'s Casual Sneakers', price: 59.99, subcategoryId: 7 },
  { id: 62, name: 'Men\'s Running Shoes', price: 74.99, subcategoryId: 7 },
  { id: 63, name: 'Men\'s Dress Shoes', price: 64.99, subcategoryId: 7 },
  { id: 64, name: 'Men\'s Loafers', price: 49.99, subcategoryId: 7 },
  { id: 65, name: 'Men\'s High-Top Sneakers', price: 57.99, subcategoryId: 7 },
  { id: 66, name: 'Men\'s Skate Shoes', price: 62.99, subcategoryId: 7 },
  { id: 67, name: 'Men\'s Hiking Boots', price: 69.99, subcategoryId: 7 },
];


const womensTShirts = [
  { id: 101, name: 'Women\'s Classic White T-Shirt', price: 22.99, subcategoryId: 1 },
  { id: 102, name: 'Women\'s Graphic Print Tee', price: 26.99, subcategoryId: 1 },
  { id: 103, name: 'Women\'s V-Neck Cotton Shirt', price: 20.99, subcategoryId: 1 },
  { id: 104, name: 'Women\'s Slim-Fit Tee', price: 24.99, subcategoryId: 1 },
  { id: 105, name: 'Women\'s Crop Top', price: 19.99, subcategoryId: 1 },
  { id: 106, name: 'Women\'s Tie-Dye T-Shirt', price: 23.99, subcategoryId: 1 },
  { id: 107, name: 'Women\'s Floral Print Tee', price: 28.99, subcategoryId: 1 },
];

const womensShorts = [
  { id: 111, name: 'Women\'s High-Waisted Shorts', price: 34.99, subcategoryId: 2 },
  { id: 112, name: 'Women\'s Denim Shorts', price: 29.99, subcategoryId: 2 },
  { id: 113, name: 'Women\'s Athletic Shorts', price: 21.99, subcategoryId: 2 },
  { id: 114, name: 'Women\'s Linen Shorts', price: 26.99, subcategoryId: 2 },
  { id: 115, name: 'Women\'s Bermuda Shorts', price: 31.99, subcategoryId: 2 },
  { id: 116, name: 'Women\'s Paperbag Shorts', price: 27.99, subcategoryId: 2 },
  { id: 117, name: 'Women\'s Paperbag Waist Shorts', price: 32.99, subcategoryId: 2 },
];

const womensJeans = [
  { id: 121, name: 'Women\'s Skinny Jeans', price: 54.99, subcategoryId: 3 },
  { id: 122, name: 'Women\'s Bootcut Jeans', price: 49.99, subcategoryId: 3 },
  { id: 123, name: 'Women\'s High-Rise Jeans', price: 58.99, subcategoryId: 3 },
  { id: 124, name: 'Women\'s Boyfriend Jeans', price: 52.99, subcategoryId: 3 },
  { id: 125, name: 'Women\'s Flare Jeans', price: 57.99, subcategoryId: 3 },
  { id: 126, name: 'Women\'s Distressed Skinny Jeans', price: 58.99, subcategoryId: 3 },
  { id: 127, name: 'Women\'s Flared Jeans', price: 54.99, subcategoryId: 3 },
];

const womensSweatpants = [
  { id: 131, name: 'Women\'s Lounge Sweatpants', price: 29.99, subcategoryId: 4 },
  { id: 132, name: 'Women\'s Jogger Sweatpants', price: 32.99, subcategoryId: 4 },
  { id: 133, name: 'Women\'s Fleece Sweatpants', price: 27.99, subcategoryId: 4 },
  { id: 134, name: 'Women\'s Tie-Dye Sweatpants', price: 31.99, subcategoryId: 4 },
  { id: 135, name: 'Women\'s Cozy Lounge Sweatpants', price: 34.99, subcategoryId: 4 },
  { id: 136, name: 'Women\'s Tie-Dye Jogger Pants', price: 36.99, subcategoryId: 4 },
];

const womensSweaters = [
  { id: 141, name: 'Women\'s Knit Sweater', price: 44.99, subcategoryId: 5 },
  { id: 142, name: 'Women\'s Oversized Sweater', price: 49.99, subcategoryId: 5 },
  { id: 143, name: 'Women\'s Cardigan Sweater', price: 38.99, subcategoryId: 5 },
  { id: 144, name: 'Women\'s Turtleneck Sweater', price: 47.99, subcategoryId: 5 },
  { id: 145, name: 'Women\'s Cable-Knit Cardigan', price: 48.99, subcategoryId: 5 },
];

const womensHats = [
  { id: 151, name: 'Women\'s Sun Hat', price: 17.99, subcategoryId: 6 },
  { id: 152, name: 'Women\'s Beanie Hat', price: 14.99, subcategoryId: 6 },
  { id: 153, name: 'Women\'s Fedora Hat', price: 22.99, subcategoryId: 6 },
  { id: 154, name: 'Women\'s Bucket Hat', price: 19.99, subcategoryId: 6 },
  { id: 155, name: 'Women\'s Sun Visor Hat', price: 15.99, subcategoryId: 6 },
];

const womensShoes = [
  { id: 161, name: 'Women\'s Fashion Sneakers', price: 54.99, subcategoryId: 7 },
  { id: 162, name: 'Women\'s High Heels', price: 64.99, subcategoryId: 7 },
  { id: 163, name: 'Women\'s Slip-On Flats', price: 42.99, subcategoryId: 7 },
  { id: 164, name: 'Women\'s Espadrilles', price: 48.99, subcategoryId: 7},
  { id: 165, name: 'Women\'s Ankle Boots', price: 49.99, subcategoryId: 7 },
]

const kidsTShirts = [
  { id: 201, name: 'Kids\' Cartoon Print T-Shirt', price: 14.99, subcategoryId: 1 },
  { id: 202, name: 'Kids\' Graphic Tee', price: 12.99, subcategoryId: 1 },
  { id: 203, name: 'Kids\' Solid Color T-Shirt', price: 11.99, subcategoryId: 1 },
  { id: 204, name: 'Kids\' Long Sleeve Tee', price: 16.99, subcategoryId: 1 },
  { id: 205, name: 'Kids\' Tie-Dye T-Shirt', price: 15.99, subcategoryId: 1 },
  { id: 206, name: 'Kids\' Tie-Dye Graphic Tee', price: 14.99, subcategoryId: 1 },
  { id: 207, name: 'Kids\' Color Block T-Shirt', price: 12.99, subcategoryId: 1 },
];

const kidsShorts = [
  { id: 211, name: 'Kids\' Denim Shorts', price: 18.99, subcategoryId: 2 },
  { id: 212, name: 'Kids\' Athletic Shorts', price: 12.99, subcategoryId: 2 },
  { id: 213, name: 'Kids\' Printed Shorts', price: 14.99, subcategoryId: 2 },
  { id: 214, name: 'Kids\' Pull-On Shorts', price: 13.99, subcategoryId: 2 },
  { id: 215, name: 'Kids\' Linen Shorts', price: 17.99, subcategoryId: 2 },
  { id: 216, name: 'Kids\' Printed Pull-On Shorts', price: 16.99, subcategoryId: 2 },
  { id: 217, name: 'Kids\' Khaki Shorts', price: 14.99, subcategoryId: 2 },
];

const kidsJeans = [
  { id: 221, name: 'Kids\' Slim-Fit Jeans', price: 24.99, subcategoryId: 3 },
  { id: 222, name: 'Kids\' Straight-Leg Jeans', price: 23.99, subcategoryId: 3 },
  { id: 223, name: 'Kids\' Skinny Jeans', price: 26.99, subcategoryId: 3 },
  { id: 224, name: 'Kids\' Bootcut Jeans', price: 25.99, subcategoryId: 3 },
  { id: 225, name: 'Kids\' Slim Stretch Jeans', price: 27.99, subcategoryId: 3 },
];

const kidsSweatpants = [
  { id: 231, name: 'Kids\' Jogger Sweatpants', price: 17.99, subcategoryId: 4 },
  { id: 232, name: 'Kids\' Fleece Sweatpants', price: 15.99, subcategoryId: 4 },
  { id: 233, name: 'Kids\' Logo Sweatpants', price: 19.99, subcategoryId: 4 },
  { id: 234, name: 'Kids\' Colorful Jogger Sweatpants', price: 18.99, subcategoryId: 4 },
  { id: 235, name: 'Kids\' Striped Sweatpants', price: 16.99, subcategoryId: 4 },
];

const kidsSweaters = [
  { id: 241, name: 'Kids\' Cable-Knit Sweater', price: 21.99, subcategoryId: 5 },
  { id: 242, name: 'Kids\' Pullover Sweater', price: 19.99, subcategoryId: 5 },
  { id: 243, name: 'Kids\' Hooded Sweater', price: 23.99, subcategoryId: 5 },
  { id: 244, name: 'Kids\' Chunky Knit Pullover', price: 22.99, subcategoryId: 5 },
];

const kidsHats = [
  { id: 251, name: 'Kids\' Baseball Cap', price: 9.99, subcategoryId: 6 },
  { id: 252, name: 'Kids\' Bucket Hat', price: 11.99, subcategoryId: 6 },
  { id: 253, name: 'Kids\' Beanie Hat', price: 8.99, subcategoryId: 6 },
  { id: 254, name: 'Kids\' Sun Hat', price: 10.99, subcategoryId: 6 },
  { id: 255, name: 'Kids\' Animal Ear Beanie', price: 9.99, subcategoryId: 6 },
];

const kidsShoes = [
  { id: 261, name: 'Kids\' Velcro Sneakers', price: 29.99, subcategoryId: 7 },
  { id: 262, name: 'Kids\' High-Top Shoes', price: 27.99, subcategoryId: 7 },
  { id: 263, name: 'Kids\' Mary Jane Shoes', price: 24.99, subcategoryId: 7 },
  { id: 264, name: 'Kids\' Slip-On Sandals', price: 21.99, subcategoryId: 7 },
  { id: 265, name: 'Kids\' Light-Up Sneakers', price: 32.99, subcategoryId: 7 },
]


module.exports = {
  clothingCategories,
  subCategories,
  mensTShirts,
  mensShorts,
  mensJeans,
  mensSweatpants,
  mensSweaters,
  mensHats,
  mensShoes,
  womensTShirts,
  womensShorts,
  womensJeans,
  womensSweatpants,
  womensSweaters,
  womensHats,
  womensShoes,
  kidsTShirts,
  kidsShorts,
  kidsJeans,
  kidsSweatpants,
  kidsSweaters,
  kidsHats,
  kidsShoes
}

