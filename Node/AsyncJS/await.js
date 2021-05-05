//using await to use a sync type syntax

console.log("Start!");

function loginUser(email, password){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            console.log("SERVER: UID Found for email" + email);
            resolve({userID : email + "12345"});

        },1000);
    });  
}

function getBooks(uid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            console.log("SERVER: Got Books for uid - " + uid);
            resolve([uid[3]+"book1",uid[3]+"book2"]);

        },1000);
    }); 
}

function bookDetails(books){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("SERVER: Got Details for booklist - "+books)
            resolve("The First Book Title Is - "+books[0]);
        },1000);
    })
}

async function dispalyUser(){
    const user = await loginUser('sid@electronmail.com',12345);
    const videos = await getBooks(user.userID);
    const message = await bookDetails(videos);
    console.log(message);
}


dispalyUser();

console.log("Finish!");