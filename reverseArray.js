const array = [1, 2, 3, 4, 5];
const newArray = [];
function reverseArray() {
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  console.log(newArray);
}
reverseArray();
