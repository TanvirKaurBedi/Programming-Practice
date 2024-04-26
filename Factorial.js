let number = 6
// factorial of 6 = 6*5*4*3*2*1 = 720
let factorial = 1;

function FindFactorial() {
    for (let i = number; i >= 1; i--) {
        factorial *= i
    }
    return factorial
}
console.log(FindFactorial())



