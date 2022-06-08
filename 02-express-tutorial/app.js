const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')   // read at startup
const homeStyles = readFileSync('./navbar-app/styles.css')   // read at startup
const homeImage = readFileSync('./navbar-app/logo.svg')   // read at startup
const homeLogic = readFileSync('./navbar-app/browser-app.js')   // read at startup

const server = http.createServer((req,res)=>{

    const url = req.url

    console.log(`server hit ${url}`)

    if (url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
          })
        res.write(homePage)
        res.end()
    }
    else if (url === '/styles.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
          })
        res.write(homeStyles)
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, {
            'Content-Type': 'image/svg+xml'
          })
        res.write(homeImage)
        res.end()
    }
    else if (url === '/browser-app.js') {
        res.writeHead(200, {
            'Content-Type': 'text/javascript'
          })
        res.write(homeLogic)
        res.end()
    }
    else
    {
        res.writeHead(404, {
            'Content-Type': 'text/html'
          })
        res.write('<h1>not found</h1>')
        res.end()
    }
})


server.listen(5000)
