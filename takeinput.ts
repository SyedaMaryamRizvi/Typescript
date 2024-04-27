import * as readline from 'readline';

let rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl1.question('Input Any Number you like:', (numm1: string) => {
    let no1 = parseInt(numm1);
    for (let i = 1; i < 11; i++) {
        console.log(`${no1} X ${i} = ${no1 * i}`);
    }
    rl1.close();
});
