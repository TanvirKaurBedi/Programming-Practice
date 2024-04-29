let n = 5
function printHollowSquare() {
    for (let i = 1; i <= n; i++) {
        let row = ""
        for (let j = 1; j <= n; j++) {
            if (i == 1 || j == 1 || i == 5 || j == 5) {
                row += "* "
            }
            else {
                row += "  "
            }
        }
        console.log(row)
    }
}
printHollowSquare()