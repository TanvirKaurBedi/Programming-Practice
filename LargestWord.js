let str = "My Name is Tanvir Kaur Bedi"
let max = 0;
let largestIndex = ""
let arr = str.split(" ")
var i ;
function findLargestWord() {
    for ( i = 0; i < arr.length; i++) {
        if (arr[i].length > max) {
            max = arr[i].length
            largestIndex = i
        }
    }
    return arr[largestIndex]
}
console.log(findLargestWord())