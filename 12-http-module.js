const http = require('http')

const srv = http.createServer((req,res) => {
    //console.log(req);
    if (req.url=== '/') {
        res.end('Welcome Page')
    } else if (req.url === '/about') {
        res.end('So, you want to know more....')
    } else {
        res.end("That's your lot!")
    }
})

srv.listen(5000)