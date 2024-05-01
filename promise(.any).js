// Promise.any()is a js method that waits for the first resolved promise and it will ignore other rejected promises if any and if all the poromises are rejected then it will throw AggregateError and it will give an array of objects of error 


const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("p1 success")
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P2 Success")
    }, 2000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3 fail")
    }, 500)
})
Promise.any([p1, p2, p3])
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err.errors) })
