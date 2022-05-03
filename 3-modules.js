// CommonJS library is used by Node, every file is a module by default
// Modules - encapsulate code
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative');

console.log(data);

sayHi('Noodles')
sayHi(names.peter)
sayHi(names.wendy)

require('./7-mind-bend')    // process the module in line and execute anything at the top level (importing does an invoke)