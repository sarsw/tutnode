const express = require('express')
const path = require('path')
const app = express()

// setup static and middleware
app.use(express.static('./public'))

// app.get('/', (rq, rs)=>{
//     rs.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
// can put html to static asset folder & SSR (templates)
// })

app.all('*', (rq,rs)=>{
    rs.status(404).send('resource not found')
})


app.listen(5000, () =>{
    console.log("listening on 5000");
})

