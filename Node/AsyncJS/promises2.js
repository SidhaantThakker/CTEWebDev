//doing callbackstack wiht promises

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

//Callback Stack looks weird and is unreadable even 
//thought I literally just wrote it

/* loginUser("sid@electronmail.com","seven",(uid)=>{
    console.log("Trying to get books list for uid - "+uid.userID);
    getBooks(uid.userID, (books) => {
        console.log(books)
        bookDetails(books, (message)=>{
            console.log(message);
        })
    })
}); */

loginUser("sid@electronmail.com","seven")
.then(uid => getBooks(uid.userID))
.then(books => bookDetails(books))
.then(details => console.log(details));

console.log("Finish!");