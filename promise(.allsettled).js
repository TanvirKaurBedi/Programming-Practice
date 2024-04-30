// what is promise.allsettled?
// promise.allsetlled is a method in javascript that takes an array or iterables of promises as input and returns a single promise . This returned promise resolves after all of the input promises have settled means either resolved or rejected.The returned Promise resolves with an array of objects representing the outcome of each input promise.
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success")
    }, 1000)
})
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P2 Success")
    }, 3000)
})
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("P3 ")
    }, 5000)
})
Promise.allSettled([p1, p2, p3])
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err) })