// GLOBALS - NO Window like a browser!

// __dirname    - path to runtime folder
// __filename   - this file name
// require      - function to use modules
// module       - info about current module
// process      - info about env where the prog is executed
// ... lots more! os path fs http
console.log(process);
setInterval(()=> {
    console.log("Boo");
}, 1000)