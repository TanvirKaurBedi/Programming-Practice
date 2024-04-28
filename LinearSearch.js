// LinearSearch (it starts from the beginning of the list and compares each element of the array with the target element)
// Time complexity id O(n)
// find the index of 0
let arr = [39, 784, 0, 72, 7, 46]
let target = 0;

function LinearSearch() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log("the value is at", i, "index")
        }
    }
}
LinearSearch()