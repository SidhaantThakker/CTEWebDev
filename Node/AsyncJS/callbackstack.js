//Callback stacks get wordy and complicated
//Getting a users email, using it to get his books and 
//using that to get a book's details

console.log("Start!");

function loginUser(email, password, callback){
    setTimeout(() => {
        console.log("UID Found for email" + email);
        callback({userID : email + "12345"});
    },1000)
}

function getBooks(uid,callback){
    setTimeout(()=>{
        console.log("Got Books for uid - " + uid);
        callback([uid[3]+"book1",uid[3]+"book2"]);
    },1000);
}

function bookDetails(books,callback){
    setTimeout(()=>{
        console.log("Got Details for booklist - "+books)
        callback("The First Book Title Is - "+books[0]);
    },1000);
}

//Callback Stack looks weird and is unreadable even 
//thought I literally just wrote it

loginUser("sid@electronmail.com","seven",(uid)=>{
    console.log("Trying to get books list for uid - "+uid.userID);
    getBooks(uid.userID, (books) => {
        console.log(books)
        bookDetails(books, (message)=>{
            console.log(message);
        })
    })
});



console.log("Finish!");