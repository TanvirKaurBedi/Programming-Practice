let str = "booby"
// result should be = bob
let new_word = ""

function removeRepetativeLetter() {
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1]) {
            new_word += str[i]
        }
    }
    return new_word
}
console.log(removeRepetativeLetter())