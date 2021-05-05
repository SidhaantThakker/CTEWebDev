//how to solve the callback stack problem?
//use promises

console.log("Start!");

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Got UID!");
        resolve({userID: "sid12345"});
    }, 2000)
})

const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log("Failed!");
        reject(new Error("User not logged in!"));
    }, 2000)
})

promise1.then(user => {
    console.log("Promise 1 - " + user)
})

promise2.then(user => {
    console.log("Promise 2 - " + user);
}).catch( err => {
    console.log(err.message);
})

console.log("Finish!");