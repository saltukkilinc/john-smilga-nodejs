const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, age) => {
  console.log(`My name is ${name} and I'm ${age} yearsold`);
})

customEmitter.on('response', () => {
  console.log('event is received');
})


customEmitter.emit('response', 'john doe', 30)