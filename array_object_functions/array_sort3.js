// Given an array of array of products:
// Sort the array by price.

var products = [
    { name: 'Basketball', price: 12.00 },
    { name: 'Tennis Racquet', price: 66.00 },
    { name: 'Tennis Balls', price: 9.00 },
    { name: 'Tennis Balls', price: 9.00 }
];

products.sort((product1, product2) => product1[`price`] - product2[`price`]);

console.log(products);