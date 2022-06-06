// An element is called peak element if its value is greater than any of its adjacent element.
//give an array of size n ,find the syntax of anyone of its peak element...
// console.log("k");
const arr = [1, 1, 1, 3, 4, 5];
function findPeak() {
  for (i = 0; i <= arr.length; i++) {
    if (arr[i] > arr[i + 1] || arr[i] > arr[i - 1]) {
      console.log(`${arr[i]} is a peak element and its index is ${i}`);
      break;
    }
  }
}
findPeak();
