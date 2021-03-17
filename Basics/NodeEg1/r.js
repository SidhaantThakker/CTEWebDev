let funcBox = require("./q.js");

let out1 = funcBox.t(3,4);
let out2 = funcBox.n;
let out3 = funcBox.s;
console.log(out1);
console.log(out2);
console.log(out3);

let { t, o } = require("./q.js");

let out4 = t(4,6);

console.log(o);

console.log(out4);
