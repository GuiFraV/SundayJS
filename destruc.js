// Simple Array Destructuring:

// Given an array [1, 2, 3], use destructuring to create three variables a, b, c each holding the corresponding item from the array.
// Array Destructuring with Skipping Elements:

// const arr = [1,2,3]
// const [ a, b, c ] = arr;

// console.log(a)
// console.log(b)
// console.log(c)


// Given an array [1, 2, 3, 4, 5], use destructuring to create variables a and c that take the first and third values of the array.
// Destructuring and Spreading an Array:

// const arr = [1,2,3,4,5]

// const [a, ,c] = arr;


// console.log(a)
// console.log(c)


// Given an array [1, 2, 3, 4, 5], use destructuring to create a variable first for the first element and another variable rest for the remaining array.
// Destructuring with Default Values:

// const arr = [1,2,3,4,5]
// const [first, ...rest] = arr;

// console.log(first)
// console.log(rest)


// Given an array [1, 2], use destructuring to create variables a, b, and c, where c should have a default value of 3.
// Swapping Variables using Destructuring:

// Given two variables a = 1 and b = 2, swap their values using array destructuring.
// Object Destructuring:

// Given an object { name: 'John', age: 30 }, use destructuring to create variables name and age holding the corresponding properties.
// Nested Object Destructuring:

// Given an object { user: { name: 'John', age: 30 } }, use destructuring to create a variable name that extracts the name from the nested user object.
// Destructuring Function Parameters:

// Write a function that takes an object as an argument and uses destructuring within the parameter list to extract name and age properties.
// Destructuring with Aliases:

// Given an object { firstName: 'John', lastName: 'Doe' }, use destructuring to create variables name and surname which are aliases for firstName and lastName.
// Destructuring with Rest in Object:

// Given an object { a: 1, b: 2, c: 3, d: 4 }, use destructuring to create a variable a for the property a and another variable rest to hold the remaining properties as a new object.