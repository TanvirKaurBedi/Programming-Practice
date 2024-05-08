// what is async await ?

// Async => The async keyword is used to declare that a function returns a promise . when you prepend 'async' to a function declaration , it automatically wraps the returned value in a resolved promise . 

// Await => The await keyword can only be used inside an async function. It pauses the execution of the async function until the promise is resolved.Essentially it waits for the promise to be resolved and then returns the value.

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("api is resolved")
    }, 1000)
})

async function handlePromise() {
    let result = await p1
    console.log("result", result)
    console.log("apppp")
}

handlePromise()


