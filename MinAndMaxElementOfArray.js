const array = [2, 70, 4, 56, 90, 1];

var temp;
function min() {
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(`smallest number in the array is ${array[0]}`);
}
function max() {
  var temp;
  for (i = 0; i < array.length; i++) {
    for (j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log(`largest number in the array is ${array[0]}`);
}
min();
max();
