const url = require('url');
const myUrl = new URL('http://mywebsite.com:45543/hello.html?id=100&status=active');

//Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain, gets port too)
console.log(myUrl.host);

//Hostname (doesn't get port)
console.log(myUrl.hostname);

//Pathname
console.log(myUrl.pathname);

//Query Paramaters
console.log(myUrl.search);

//Params Object
console.log(myUrl.searchParams);

//Add Paramters
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

//Loop through params 
myUrl.searchParams.forEach((value,name)=> {console.log(`${name} : ${value}`)});