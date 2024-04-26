let array = [8, 90, 76, 0, 56,7900]
let first_largest = array[0]
let second_largest;
function FindSecondLargestNumber() {
    for (let i = 1; i < array.length; i++) {
        if (array[i] > first_largest) {
            second_largest = first_largest
            first_largest = array[i]
        }
    }
    return second_largest
}
console.log(FindSecondLargestNumber())