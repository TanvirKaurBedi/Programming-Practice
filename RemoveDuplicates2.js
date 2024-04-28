let arr = ["apple", "bat", "orange", "rat", "bat", "pizza"]
let new_arr = []
function removeDuplicate() {
    for (let i = 0; i < arr.length; i++) {
        if (!new_arr.includes(arr[i])) {
            new_arr.push(arr[i])
        }
    }
    return new_arr
}
console.log(removeDuplicate())
