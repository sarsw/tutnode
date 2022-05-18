const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, age)=>{
    console.log(`data rx: name ${name} age ${age}`);
})

customEmitter.on('response', ()=>{
    console.log('data rx again');
})


customEmitter.emit('response', 'Steve', 34) // got to emit after you've registered the listeners