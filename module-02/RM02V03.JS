// Sort

const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];


// const sortedNumbers = numbers.sort((a, b) => a - b);
// console.log(numbers);
// console.log(sortedNumbers);


// fruits.sort();
// fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits);


// Nested array flat

// const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11, [12, 13, 14, 15, [16, 17, 18, 19, 20]]]]]]];

// const flatArr = arr.flat(Infinity);

// console.log(flatArr);


const tagsFromPosts = [
    ["javascript", "react", "css"],
    ["node", "express"],
    ["css", "html", "react"],
];

// const filterTags = new Set(tagsFromPosts.flat());
// const filterTags = [...new Set(tagsFromPosts.flat())];
const filterTags = [...new Set(tagsFromPosts.flat())].sort((a, b) => a.localeCompare(b));
// const filterTags = [...new Set(tagsFromPosts.flat())]
//     .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

console.log(filterTags);
