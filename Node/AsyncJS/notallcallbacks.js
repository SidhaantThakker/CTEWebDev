//Not all callback functions are async

console.log("Start!");

const books = [1,2,3,4,5];

books.forEach((item) => {
    console.log("Book "+ item);
})

console.log("Finish!")