const {readFile, writeFile} = require('fs')
// needs a callback to process after file processing is done

console.log('start');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }

    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result

        writeFile(
            './content/result-async.txt',
            `Result is: ${first}, ${second}`,
            {flag: 'a'}, 
            (err, result) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(`Done Write. Result: ${result}`);

                readFile('./content/result-async.txt', 'utf8', (err, result) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    console.log(`Read the file: ${result}`);
                })
            }
        )
        
    })
    console.log("Done read 1");
})
console.log('Done task, next>');
