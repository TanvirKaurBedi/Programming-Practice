// what is promise.all?
// promise.all is a method in javascript that takes an array or iterables of promises as input and returns a single promise .This returned promise resolves when all of the promises have resolved  or rejects if any of the input promises have been rejected 
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success")
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 Success")
    },3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3 ")
    },5000)
})
Promise.all([p1, p2, p3])
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err) })