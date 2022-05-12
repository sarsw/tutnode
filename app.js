const {readFile, writeFile} = require('fs').promises
// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)



console.log('start');


const start = async() => {
    try {
        // const first = await readFilePromise('./content/first.txt', 'utf-8')
        // const second = await readFilePromise('./content/second.txt', 'utf-8')
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        // await writeFilePromise('./content/result-mind-bomb.txt', `this is awesom:${first} ${second}`)
        await writeFile('./content/result-mind-bomb.txt', `this is awesom:${first} ${second}`, {flag: 'a'})
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}
start()

// getText('./content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((err) => console.log(err))

// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
