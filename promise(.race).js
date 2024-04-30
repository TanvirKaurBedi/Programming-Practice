// promise.race is a js function that returns result of first settled promise whether the first promise is  resolved or rejected 

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
        reject("P3 fail")
    }, 500)
})
Promise.race([p1, p2, p3])
    .then((res) => { console.log(res) })
    .catch((err) => { console.error(err) })