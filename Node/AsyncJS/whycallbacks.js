/* To simulate the time taken by the 
server to get our information back again,
We will use the setTimeout function */

console.log("Start!");

function loginUser(email, password){
    setTimeout(() => {
        console.log("Data Found! Returning now.")
        return { userEmail: email }
    },2000)
}

const user = loginUser("sid@electronmail.com","seven");

//Output given is undefined as it hasn't been received yet
console.log(user);

console.log("Finish!");

//To fix this, we use callback