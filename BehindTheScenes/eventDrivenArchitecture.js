let events = require('events');

// Creating an event emitter
let eventEmitter = new events.EventEmitter();

// event listener
eventEmitter.on('connection', ()=>{
    console.log('Connection is successful')
})


// firing the event
eventEmitter.emit('connection');