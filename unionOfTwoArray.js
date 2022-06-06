//output should be [1,5,8,3,9,7];
const array1 = [1, 5, 8, 3];
const array2 = [8, 3, 9, 7];
const newArray = [...array1, ...array2];
// console.log(newArray);
const union = new Set(newArray);
const unionArray = [...union];
console.log(unionArray);
