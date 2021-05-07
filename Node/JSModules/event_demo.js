const EventEmitter = require('events');

//Create Class
class MyEmitter extends EventEmitter{}

//Initialize Object
const myEmitter = new MyEmitter();

//Event Listener
myEmitter.on('event', () => { console.log("Event Fired!"); });

//Initialize Event

myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');