function add(a,b){
    return a+b;
}

const toExport = {
    t: add,
    n: 90,
    s: "hello",
    o: ":D"
}
module.exports = toExport;