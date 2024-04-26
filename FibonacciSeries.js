// wap to print finocacci series  upto 10 numbers
let f1 = 0;
let f2 = 1;

let fibSeries = f1 + ", " + f2 + ", ";

function PrintFibonacciSeries() {
    for (let i = 0; i < 8; i++) {
        let f3 = f1 + f2;
        fibSeries += f3 + ", ";
        f1 = f2;
        f2 = f3;
    }
    console.log(fibSeries);
}

PrintFibonacciSeries()
