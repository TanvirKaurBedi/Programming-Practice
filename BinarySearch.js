// Binary Search
// Time complexity is 0(log n)
// find the index of 0
let arr = [39, 784, 0, 72, 7, 46]
arr.sort((a,b)=> a-b)
console.log(arr)
let target = 46;
let length = arr.length
let start = 0
let end = length - 1

while (start <= end) {
    middle = Math.floor((start + end) / 2)
    if (target === arr[middle]) {
        console.log("The target is at index:", middle);
        break;
    }
    else if (target < arr[middle]) {
        end = middle - 1
    }
    else if (target > arr[middle]) {
        start = middle + 1
    }
}
// console.log("the target is on", targetIndex)