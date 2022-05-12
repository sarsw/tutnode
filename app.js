const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', ()=>{
    console.log('data rx');
})

customEmitter.on('response', ()=>{
    console.log('data rx again');
})


customEmitter.emit('response') // got to emit after you've registered the listeners