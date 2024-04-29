// Bubble Sort (we compare each adjacent element and swap accordingly)
let arr = [39, 784, 0, 72, 7, 46]

function BubbleSort() {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1]
                arr[j + 1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}
console.log(BubbleSort())