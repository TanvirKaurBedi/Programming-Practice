// In selection sorting 
// we find minimun element from the array and place it on frst position and then again find min elment  from the rest of array and place it on 2nd position and so on

let array = [77, 22, 88, 33, 11, 66, 55]
let n = array.length

function SelectionSort() {
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[min]) {
                min = j
            }
        }
        if (min != i) {
            let temp = array[min];
            array[min] = array[i];
            array[i] = temp;
        }
    }
    return array
}
console.log(SelectionSort())