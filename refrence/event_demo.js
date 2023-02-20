const EventEmitter = require('events')

// create class
class MyEmiiter extends EventEmitter {}

// init object by binding to class

const myEmiiter = new MyEmiiter();

// eVENT listener
myEmiiter.on('event',()=> console.log('event fired'))

// init event
myEmiiter.emit('event')
myEmiiter.emit('event')