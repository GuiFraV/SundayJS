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

// const arr = [1, 2]
// const [a,b, c = 3] = arr


// Given two variables a = 1 and b = 2, swap their values using array destructuring.
// Object Destructuring:

// let a = 1
// let b = 2

// [a, b] = [b, a]



// Given an object { name: 'John', age: 30 }, use destructuring to create variables name and age holding the corresponding properties.
// Nested Object Destructuring:

// const obj = { name: 'John', age: 30 }
// const {name, age} = obj;


// Given an object { user: { name: 'John', age: 30 } }, use destructuring to create a variable name that extracts the name from the nested user object.
// Destructuring Function Parameters:

// const obj = { user: { name: 'John', age: 30 } }
// const {user:{name, age}} = obj
// age

// Write a function that takes an object as an argument and uses destructuring within the parameter list to extract name and age properties.
// Destructuring with Aliases:

// function someId({name, age}){
//     return `${name}, ${age}`
// }

// Given an object { firstName: 'John', lastName: 'Doe' }, use destructuring to create variables name and surname which are aliases for firstName and lastName.
// Destructuring with Rest in Object:

// const obj = { firstName: 'John', lastName: 'Doe' };
// const {firstName:name, lastName:surname} = obj;

// Given an object { a: 1, b: 2, c: 3, d: 4 }, use destructuring to create a variable a for the property a and another variable rest to hold the remaining properties as a new object.

const obj = { a: 1, b: 2, c: 3, d: 4 }
const {a, ...rest} = obj


