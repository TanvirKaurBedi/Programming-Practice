let n = 5
function fullPyramid() {
    for (let i = n; i >= 1; i--) {
        let spaces = '';
        let stars = '';
        for (let j = 1; j < i; j++) {
            spaces += ' ';
        }
        for (let k = n; k >= i; k--) {
            stars += '* ';
        }
        console.log(spaces + stars);
    }
}
fullPyramid()