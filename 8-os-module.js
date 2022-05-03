const os = require('os')
//console.log(os);

// user info
const user = os.userInfo()

// get sys uptime
console.log(`uptime ${os.uptime()}s`);

console.log(user);

const currentOS = {
    name: os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);