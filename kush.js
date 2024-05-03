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
