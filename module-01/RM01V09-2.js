// data set

function generateSinData(size) {
    const itemPool = ["apple", "banana", "orange", "grape", "mango", "peach", "pear", "plum", "kiwi", "strawberry", "watermelon", "blueberry", "raspberry", "blackberry", "pineapple", "coconut", "avocado", "papaya", "fig", "date"];

    const generatedData = [];

    for (let i = 0; i < size; i++) {
        const randomIndex = Math.floor(Math.random() * itemPool.length);
        generatedData.push(itemPool[randomIndex]);
    }

    return generatedData;
}

const hugeDataSet = generateSinData(500000);

console.log("Data size", hugeDataSet.length);


// Brute force method to remove duplicates

const arrStartTime = performance.now();

const removeDupArr = (arr) => {
    const newArr = [];

    arr.forEach((element)=> {
        if (!newArr.includes(element)) {
            newArr.push(element);
        }
    });

    return newArr;
};
console.log(removeDupArr(hugeDataSet));

const arrEndTime = performance.now();

console.log(`Array implementation took ${arrEndTime - arrStartTime} milliseconds`);


// Set implementation to remove duplicates

const setStartTime = performance.now();

const removeDupSet = (arr) => {
    const newSet = new Set(arr);
    return Array.from(newSet);
};

console.log(removeDupSet(hugeDataSet));

const setEndTime = performance.now();

console.log(`Set implementation took ${setEndTime - setStartTime} milliseconds`);
