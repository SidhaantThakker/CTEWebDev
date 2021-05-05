console.log("Start!");

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("Data Found! Returning now.")
        callback({userID: email+"12345"}) 
        //Run a function that with a predef parameter, fn will be defined by the coder 'later' in the code
    },2000)
}

loginUser("sid@electronmail.com","seven", user => {
    console.log("User UID - ")
    console.log(user)
});

console.log("Finish!");