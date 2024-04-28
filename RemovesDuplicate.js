let arr = ["apple", "bat", "orange", "rat", "bat", "pizza"]
let new_arr = []
function removeDuplicate() {
    for (let i = 0; i < arr.length; i++) {
        var isDuplicate = false
        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (isDuplicate === false) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
console.log(removeDuplicate())