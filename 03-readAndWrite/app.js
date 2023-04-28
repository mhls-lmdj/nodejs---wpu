// Core Modules
const fs = require('fs');

// write string to file (Synchronus)
fs.writeFileSync('testSynchronus.txt', 'How to write file synchronus, with parameter, file name and what to write.')

// read string to file (Synchronus)
const synchronusData =  fs.readFileSync('testSynchronus.txt');
const synchronusDataString =  fs.readFileSync('testSynchronus.txt', 'utf-8');

console.log(synchronusData);
console.log(synchronusData.toString());
console.log(synchronusDataString);



// write string to file (aSynchronus)
fs.writeFileSync('testAsynchronus.txt', 'How to write file asynchronus, with parameter, file name and what to write.', (e) => {
    console.log(e);
})

// read string to file (Synchronus)
fs.readFile('testAsynchronus.txt', (e, data) => {
    if (e) throw e;
    console.log(data);
})
fs.readFile('testAsynchronus.txt', 'utf-8', (e, data) => {
    if (e) throw e;
    console.log(data);
})