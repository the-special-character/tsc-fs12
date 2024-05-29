// const firstName = "Kush";
// const lastName = "Vaishnav";
// const role = "Full Stack Developer";
// const exp = "1 year";
// const data = `hello, My name is ${firstName} ${lastName} and i am ${role} and i have total ${exp} of experience`;
// console.log(data);

// const firstName = "Kush";
// const lastName = "Vaishnav";
// const pass = "car";
// console.log("My name is" + firstName + + " " + lastName);
// console.log(firstName + " " + lastName + "'s " + pass + " is super cool");

// // <!DOCTYPE html>
// // <html lang="en">
// // <head>
// //     <meta charset="UTF-8">
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
// //     <title>Document</title>
// // </head>
// // <body>

// // </body>
// // </html>

// const str1 = "<!DOCTYPE html>";
// const str2 = "<html lang='en'>";
// const str3 = "<head>"
// const str4 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0<meta charset='UTF-8'>"
// const str5 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
// const str6 = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0<title>Document</title>"
// const str7 = "</head>"
// const str8 = "<body>"
// const str9 = "</body>"
// const str10 = "</html>"
// console.log(str1);
// console.log(str2);
// console.log(str3);
// console.log(str4);
// console.log(str5);
// console.log(str6);
// console.log(str7);
// console.log(str8);
// console.log(str9);
// console.log(str10);

// const htmlDocument = `
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
// </body>
// </html>
// `;

// console.log(htmlDocument);

// const obj = {
//     name: "George",
//     age: 32,
//     country: "USA",
// };
// const obj2 = obj.assign({}, obj2);
// obj2.name="John";
// console.log(obj);
// console.log(obj2);

//immutable = take new object
// {...newobj} spred data for copy object
// const product = {
//   id: 1,
//   title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//   price: 109.95,
//   description:
//     "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//   category: "men's clothing",
//   image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//   rating: { rate: 3.9, count: 120 },
// };
//dot operator
// console.log(product.price);
//with alis
// const key = "image";
// const {title,image:productImageUrl} = product;
// console.log(productImageUrl)

// const product2 = { ...product }
// product2.title = "New Title"
// console.log(product2)

// const {rating:{rate,count}} = product;
// console.log(`${rate}(${count})`);

//array

// const student = [
//   { name: "darshan", age: 21 },
//   { name: "kush", age: 21 },
//   { name: "nirav", age: 21 },
//   { name: "nikunj", age: 21 },
//   { name: "meet", age: 21 },
// ];
// const findIndex = student.findIndex((item) => item.name === "meet");
// console.log(findIndex);

// const updatedlist = [
//   ...student.slice(0, findIndex), // items before the matched item
//   { ...student[findIndex], gender: "Male" },
//   ...student.slice(findIndex + 1),
// ];
// console.log(updatedlist);

// const obj = { a: 1 };
// const obj2 = { b: 1 };
//imutabaly merge obj's
// console.log({...obj, ...obj2});

//mutabaly merge obj's
// console.log(Object.assign({},obj,obj2));

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// arr.splice(0, 3, 12); // remove first three elements from array
// console.log(arr);

// arr.push(8, 9);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(1);
// console.log(arr);

// for loop
// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// //while loop
// let j = 0;
// while (j < arr.length) {
//   console.log(arr[j]);
//   j++;
// }

// //do while loop
// let k = 0;
// do {
//   console.log(arr[k]);
//   k++;
// } while (k < arr.length);

// //for each loop
// arr.forEach((element) => {
//   console.log(element);
// });

// const array = [1, 2, 3, 4, 5, 7, 6];
// let isPresent = false;
// for (let index = 0; index < array.length; index++) {
//   if (array[index] === 6) {
//     isPresent = true;
//     break;
//   }
// }
// console.log(isPresent);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const index = 5;
// const data = 11;

// const add = [...arr.slice(0, index),11, ...arr.slice(index)]
// const updater = [...arr.slice(0, index),11, ...arr.slice(index + 1)]
// const delete = [...arr.slice(0, index), ...arr.slice(index + 1)]
// console.log(final);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr);
// arr.splice(0, 3, 12); // remove first three elements from array
// console.log(arr);

// const arr = [1, 2, 3, 4, 5];
// console.log("Original Array: ", arr);
// const index = 6;
// const add = [...arr.slice(0, index), 11, ...arr.slice(index)];
// console.log(add);

// const arr = [1, 2, 3, 4, 5];
// const fi = arr.indexOf(4);
// console.log(fi);
// const updater = [...arr.slice(0, fi), 11, ...arr.slice(fi + 1)];
// console.log(updater);

// const data = [
//   {
//     id: 1,
//     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     price: 109.95,
//     description:
//       "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 120,
//     },
//   },
//   {
//     id: 2,
//     title: "Mens Casual Premium Slim Fit T-Shirts ",
//     price: 22.3,
//     description:
//       "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
//     category: "men's clothing",
//     image:
//       "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
//     rating: {
//       rate: 4.1,
//       count: 259,
//     },
//   },
//   {
//     id: 3,
//     title: "Mens Cotton Jacket",
//     price: 55.99,
//     description:
//       "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 500,
//     },
//   },
//   {
//     id: 4,
//     title: "Mens Casual Slim Fit",
//     price: 15.99,
//     description:
//       "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
//     category: "men's clothing",
//     image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.1,
//       count: 430,
//     },
//   },
//   {
//     id: 5,
//     title:
//       "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     price: 695,
//     description:
//       "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 4.6,
//       count: 400,
//     },
//   },
//   {
//     id: 6,
//     title: "Solid Gold Petite Micropave ",
//     price: 168,
//     description:
//       "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3.9,
//       count: 70,
//     },
//   },
//   {
//     id: 7,
//     title: "White Gold Plated Princess",
//     price: 9.99,
//     description:
//       "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 3,
//       count: 400,
//     },
//   },
//   {
//     id: 8,
//     title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
//     price: 10.99,
//     description:
//       "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
//     category: "jewelery",
//     image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
//     rating: {
//       rate: 1.9,
//       count: 100,
//     },
//   },
//   {
//     id: 9,
//     title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     price: 64,
//     description:
//       "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     rating: {
//       rate: 3.3,
//       count: 203,
//     },
//   },
//   {
//     id: 10,
//     title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
//     price: 109,
//     description:
//       "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 470,
//     },
//   },
//   {
//     id: 11,
//     title:
//       "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
//     price: 109,
//     description:
//       "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 319,
//     },
//   },
//   {
//     id: 12,
//     title:
//       "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
//     price: 114,
//     description:
//       "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
//     rating: {
//       rate: 4.8,
//       count: 400,
//     },
//   },
//   {
//     id: 13,
//     title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
//     price: 599,
//     description:
//       "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 250,
//     },
//   },
//   {
//     id: 14,
//     title:
//       "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
//     price: 999.99,
//     description:
//       "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
//     category: "electronics",
//     image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
//     rating: {
//       rate: 2.2,
//       count: 140,
//     },
//   },
//   {
//     id: 15,
//     title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
//     price: 56.99,
//     description:
//       "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
//     rating: {
//       rate: 2.6,
//       count: 235,
//     },
//   },
//   {
//     id: 16,
//     title:
//       "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
//     price: 29.95,
//     description:
//       "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
//     rating: {
//       rate: 2.9,
//       count: 340,
//     },
//   },
//   {
//     id: 17,
//     title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
//     price: 39.99,
//     description:
//       "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
//     rating: {
//       rate: 3.8,
//       count: 679,
//     },
//   },
//   {
//     id: 18,
//     title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
//     price: 9.85,
//     description:
//       "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
//     rating: {
//       rate: 4.7,
//       count: 130,
//     },
//   },
//   {
//     id: 19,
//     title: "Opna Women's Short Sleeve Moisture",
//     price: 7.95,
//     description:
//       "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
//     rating: {
//       rate: 4.5,
//       count: 146,
//     },
//   },
//   {
//     id: 20,
//     title: "DANVOUY Womens T Shirt Casual Cotton Short",
//     price: 12.99,
//     description:
//       "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
//     category: "women's clothing",
//     image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
//     rating: {
//       rate: 3.6,
//       count: 145,
//     },
//   },
// ];

// const index = data.findIndex((element) => {
//   return element.id === 5;
// });
// console.log(index);

// const obj = data.find((element) => {
//   return element.id === 20;
// });
// console.log(obj);

// const rat = data.find((element) =>{
//     if (element.rating) {
//         return element.rating.rate <  2;
//     }
// });
// console.log(rat);

// const data1 = data.filter((element) => {
//   return element.price < 10 && element.rating.rate >= 4;
// });
// console.log(data1);

// console.log(data1.some(data1 => data1.id === 19));
// console.log(data1.every(data1 => data1.id === 19));

// find data with id
// const index = data.find((element) => {
//   return element.id === 5;
// });
// console.log(index);

// imutable data change
// const index = data.findIndex((element) => {
//   return element.id === 3;
// });
// console.log(index);

// console.log(data[index]);

// const newdata = [...data.slice(0, index),{ ...data[index], price: 59.99 },...data.slice(index + 1),];

// console.log(newdata[index]);

// mutable data change
// const index = data.findIndex((element) => {
//   return element.id === 3;
// });
// console.log(data[index]);
// data[index].price = 59.99;
// console.log(data[index]);

// const arr = [1, 2, 3, 4];
// arr.forEach(element => {
//   console.log(element*2);
// });

// const arr = [1, 2, 3, 4];
// const newarr = [];
// for (let i = 0; i < arr.length; i++) {
//   newarr.push(arr[i] * 2);
// }
// console.log(newarr);

// without map
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newarr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     arr[i] = arr[i] * 2;
//   }
// }
// console.log(arr);

// with map
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newarr = arr.map((element) => {
//   if (element % 2 === 0) {
//     return element * 2;
//   }
//   else {
//     return element;
//     }
// });
// console.log(newarr);

//thursday 9-5

// const arr = [1, 2, 3, 4, 5];

//simple  method of sum

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//reduse method for sum

// const sum = arr.reduce(
//   (prevValue, currentValue) => prevValue + currentValue,
//   0
// );

// console.log(sum);

const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];
const cart = {
  id: 1,
  userId: 1,
  date: "2020-03-02T00:00:00.000Z",
  products: [
    {
      productId: 1,
      quantity: 4,
    },
    {
      productId: 2,
      quantity: 1,
    },
    {
      productId: 3,
      quantity: 6,
    },
  ],
  __v: 0,
};

// const total = cart.products.reduce((p, c) => {
//   const product = data.find((x) => x.id === c.productId);
//   console.log(product.price);
//   console.log(c);
//   return p + product.price * c.quantity;
// }, 0);

// console.log(total);

// const total = cart.products.reduce((p, c) => {
// //   console.log(c.productId);
//   const product = products.find((product) => {
//     // console.log(product.id);
//     return product.id == c.productId;
//   });
// //   console.log(product.price);
// //   console.log(c.quantity);
//   return p + product.price * c.quantity;
// }, 0);
// console.log(total);
const people = [
  { name: "Person 1", age: 5, gender: "male" },
  { name: "Person 2", age: 32, gender: "female" },
  { name: "Person 3", age: 78, gender: "male" },
  { name: "Person 4", age: 21, gender: "female" },
  { name: "Person 5", age: 56, gender: "male" },
  { name: "Person 6", age: 89, gender: "female" },
  { name: "Person 7", age: 17, gender: "male" },
  { name: "Person 8", age: 39, gender: "female" },
  { name: "Person 9", age: 64, gender: "male" },
  { name: "Person 10", age: 43, gender: "female" },
  { name: "Person 11", age: 28, gender: "male" },
  { name: "Person 12", age: 50, gender: "female" },
  { name: "Person 13", age: 36, gender: "male" },
  { name: "Person 14", age: 72, gender: "female" },
  { name: "Person 15", age: 19, gender: "male" },
  { name: "Person 16", age: 68, gender: "female" },
  { name: "Person 17", age: 25, gender: "male" },
  { name: "Person 18", age: 82, gender: "female" },
  { name: "Person 19", age: 37, gender: "male" },
  { name: "Person 20", age: 53, gender: "female" },
];

// const groupingUsersByAgeRange = people.reduce((p, c) => {
//   const ageRange = Math.floor(c.age / 10) * 10;
//   if (p[ageRange] === undefined) {
//     p[ageRange] = [];
//   }
//   p[ageRange].push(c);
//   return p;
// }, {});

// console.log(groupingUsersByAgeRange);

//with reduce method
// const groupbyAge_gender = people.reduce((p, c) => {
//   if (c.gender === "male" && c.age >= 35 && c.age <= 50) {
//     p.push(c);
//   }
//   return p;
// }, []);

// console.log(groupbyAge_gender);

// // with filter method
// const filteredUsers = people.filter[(
// (user) => user.gender === "male" && user.age >= 35 && user.age <= 50
// )];

// console.log(filteredUsers);

const carts = [
  {
    id: 1,
    userId: 1,
    date: "2020-03-02T00:00:00.000Z",
    products: [
      {
        productId: 1,
        quantity: 4,
      },
      {
        productId: 2,
        quantity: 1,
      },
      {
        productId: 3,
        quantity: 6,
      },
    ],
    __v: 0,
  },
  {
    id: 2,
    userId: 1,
    date: "2020-01-02T00:00:00.000Z",
    products: [
      {
        productId: 2,
        quantity: 4,
      },
      {
        productId: 1,
        quantity: 10,
      },
      {
        productId: 5,
        quantity: 2,
      },
    ],
    __v: 0,
  },
  {
    id: 3,
    userId: 2,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      {
        productId: 1,
        quantity: 2,
      },
      {
        productId: 9,
        quantity: 1,
      },
    ],
    __v: 0,
  },
  {
    id: 4,
    userId: 3,
    date: "2020-01-01T00:00:00.000Z",
    products: [
      {
        productId: 1,
        quantity: 4,
      },
    ],
    __v: 0,
  },
  {
    id: 5,
    userId: 3,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      {
        productId: 7,
        quantity: 1,
      },
      {
        productId: 8,
        quantity: 1,
      },
    ],
    __v: 0,
  },
  {
    id: 6,
    userId: 4,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      {
        productId: 10,
        quantity: 2,
      },
      {
        productId: 12,
        quantity: 3,
      },
    ],
    __v: 0,
  },
  {
    id: 7,
    userId: 8,
    date: "2020-03-01T00:00:00.000Z",
    products: [
      {
        productId: 18,
        quantity: 1,
      },
    ],
    __v: 0,
  },
];

// const filtereddata = carts.filter((x) => x.userId === 1);
// console.log("Filtered data", filtereddata);

// let arr = [];

// for (let i of filtereddata) {
//   for (let j of i.products)
//     arr.push({ ProductID: j.productId, Quantity: j.quantity });
// }
// console.log(arr);

// const total = carts.reduce((p, c) => {
//   if (c.userId === 1) {
//     const innerTotal = c.products.reduce((p1, c1) => {
//       //   console.log(c1.productId);
//       const product = products.find((x) => x.id === c1.productId);
//       //   console.log(product.price);
//       //   console.log(c1.quantity);
//       //   console.log(p1);
//       return p1 + product.price * c1.quantity;
//     }, 0);
//     return p + innerTotal;
//   }
//   return p;
// }, 0);
// console.log(total);


// find if 3 is available or not with set
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 5];

// const set = new Set(arr);
// console.log(set);

// const array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// const uniqueArray = array.reduce((p, c) => {
//   if (!p.includes(c)) {
//     p.push(c);
//   }
//   return p;
// }, []);
// console.log(uniqueArray);




// api data from the server 
// const loadData = async () => {
//   try {
//       const tokenRes = await fetch("https://yogateria.thespecialcharacter.com/admin/auth/token", {
//           method: "POST",
          
//           body: JSON.stringify({
//               "email": "contact@thespecialcharacter.com",
//               "password": "Password1!",
//           }),
//           headers: {
//               "Content-Type": "application/json",
//               accept: "application/json",
//           },
//       }
//       );
//       const token = await tokenRes.json();

//       if(!tokenRes.ok) throw new Error(token)

//       const customersRes = await  fetch("https://yogateria.thespecialcharacter.com/admin/customers", {
//           headers : {
//               Authorization: `Bearer ${token.access_token}`
//           }
//       })

//       const customerJSON = await customersRes.json();

//       if(!customersRes.ok) throw new Error(customerJSON)

//       console.log(customerJSON);
//   }
//   catch (error) {
//       console.log(error); 
//   }
  
// };

// loadData();


// const p1 =() =>{
//   return new Promise((resolve, reject) => {
      

//       //server call
//      // reject("p1 rejected")
//      // resolve("p1 resolve")
        
//   })
// }

// // display loader

// p1()
//   .then((res)=>{
//           console.log(res);
//           //diplay data 

//    })

// .catch((err)=>{
//   console.log(err);
//   //display error
// })`

// .finally(()=>{
// console.log("finally");
// })






// fetch("https://yogateria.thespecialcharacter.com/admin/auth/token",
//   {
//     method: "POST",
//     body: JSON.stringify({
//       email: "contact@thespecialcharacter.com",
//       password: "Password1!",
//     }),
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       Accept: "application/json",
//     },
//   })
//  .then(res =>{
//     return res.json()
//  })
//  .then(data => {
//     console.log(data);

//     fetch("https://yogateria.thespecialcharacter.com/admin/customers")
//         .then(res =>{
//             if(res.ok) return res.json();
//             throw new error ("Api faild")
//         })
//         .then(data =>{
            
//         })
//         .catch(err =>{
//             console.log(err);
//         })
//  })

// const p1 =() =>{
//     return new Promise((resolve, reject) => {

//         //server call
//        // reject("p1 rejected")
//        // resolve("p1 resolve")

//     })
// }

// // display loader

// p1()
//     .then((res)=>{
//             console.log(res);
//             //diplay data

//      })

// .catch((err)=>{
//     console.log(err);
//     //display error
// })

// .finally(()=>{
// console.log("finally");
// })

// fetch("https://fakestoreapi.com/products")
// .then(res =>{
//     return res.json()
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(err =>{

// })

// .finally(()=>{

// })

