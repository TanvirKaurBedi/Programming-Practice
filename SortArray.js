const array = [5, 8, 60, 40, 2, 0];
var temp;
var sortedArray = [];
function sort() {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
    sortedArray.push(array[i]);
  }
  console.log(`sorted array is ${sortedArray}`);
}
sort();
