const fs = require('fs');
const crypto = require('crypto');
let file = './files/fileToCalculateHashFor.txt';

const calculateHash = async () => {

    let x = fs.readFileSync(file);
    console.log(x);
    let y = crypto.createHash('sha256');
    y.update(x);
    const hex = y.digest('hex');
    console.log(y,hex);
    // Write your code here 
};

calculateHash();
