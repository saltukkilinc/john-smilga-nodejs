const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first-text.txt','utf8');
const second = readFileSync('./content/second-text.txt', 'utf8');

console.log(first, second);

writeFileSync('./content/written-file.txt', `This is the file was written by writeFileSync: ${first}, ${second}`, {flag: 'a'})