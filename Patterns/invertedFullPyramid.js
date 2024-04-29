let n = 5
function printInvertedFullPyramid() {
    for (let i = n; i >= 1; i--) {
        let spaces = ""
        let stars = "";
        for (let j = 5; j > i; j--) {
            spaces += " "
        }
        for (let k = 1; k <= i; k++) {
            stars += "* "
        }
        console.log(spaces + stars)
    }
}
printInvertedFullPyramid()