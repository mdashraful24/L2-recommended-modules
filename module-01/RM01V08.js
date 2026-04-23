// const startTime = performance.now();

// console.time("task");

const firstArray = [];
const secondArray = [];

for (let i = 0; i < 600000; i++) {
    // console.log(i);

    if(i < 300000){
        firstArray.push(i);
    }

    secondArray.push(i);
}

// const endTime = performance.now();

// console.log(`This code took ${endTime - startTime} ms`);

// console.timeEnd("task");

// console.log("first array length:", firstArray.length);
// console.log("second array length:", secondArray.length);

// console.time("map1");
// const firstUserList = firstArray.map((number) => ({userId: number}));
// console.timeEnd("map1");

// console.time("map2");
// const secondUserList = secondArray.map((number) => ({userId: number}));
// console.timeEnd("map2");

const firstUserList = firstArray.map((number) => ({userId: number}));
const secondUserList = secondArray.map((number) => ({userId: number}));

console.time("find");
// const user = secondUserList.find((user) => user.userId === 500000);
const user = secondUserList[50];
console.timeEnd("find");
