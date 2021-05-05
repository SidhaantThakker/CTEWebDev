const sevenTwelve = new Promise((resolve) => {
    setTimeout(() => {
        console.log("SERVER: Getting SevenTwelve Data");
        resolve({products: [1,2,3,4,5]});
    }, 2000);
});

const linkedOff = new Promise((resolve) => {
    setTimeout(()=>{
        console.log("Getting LinkedOff Data");
        resolve({contact: "User123"});
    }, 3000);
});

//Will only execute when both have returned

Promise.all([sevenTwelve,linkedOff])
.then(result => console.log(result))
