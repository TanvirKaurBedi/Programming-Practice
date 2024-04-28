const cart = ["shoes", "pants", "kurta"]

// consumer promise 

const promise = createOrder(cart);
promise.then(function (orderId) {
    console.log(orderId)
}).catch(function (err) {
    console.log(err)
})

// producer promise

function createOrder(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validateCart(cart)) {
            const err = new Error("Cart  is not valid")
            reject(err)
        }
        const orderId = 12345
        if (validateCart) {
            resolve(orderId)
        }
    })
    return pr
}
function validateCart(){
    return  false
}