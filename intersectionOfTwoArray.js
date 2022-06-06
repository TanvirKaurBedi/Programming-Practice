//intersection means comnmon elements of the given arrays.
const array1 = [1, 5, 8, 3];
const array2 = [8, 3, 9, 7];
const newArray = [];
function intersection() {
  for (i = 0; i < 4; i++) {
    for (j = 0; j < 4; j++) {
      if (array2[j] == array1[i]) {
        newArray.push(array2[j]);
      }
    }
  }
  console.log(newArray);
}

intersection();
