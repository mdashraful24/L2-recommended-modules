// Duplicating removal using Set

// const anik = {userName: "anik"};
// const ahona = {userName: "ahona"};
// const ratul = {userName: "ratul"};

const arr = ["apple", "banana", "orange", "apple", "banana"];

// const set = new Set(arr);

// set.add(anik);
// set.add(ahona);
// set.add(ratul);

// set.add("grape");

// const test = set.forEach((value)=> console.log(value));
// const test = Array.from(set);

// test.push("grape");

// console.log(test);

// console.log(set.has("banana"));
// console.log(set.delete("tomato"));

// console.log(set);

// Brute force method to remove duplicates
const removeDupArr = (arr) => {
    const newArr = [];

    arr.forEach((item) => {
        if (!newArr.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
};

console.log(removeDupArr(arr));


// Set implementation to remove duplicates
const removeDupSet = (arr) => {
    const set = new Set(arr);

    return Array.from(set);
};

console.log(removeDupSet(arr));
