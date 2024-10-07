const fs = require('fs');
const message = "FS operation failed";

const read = async () => {
    if(fs.existsSync('./files/fileToRead.txt')){
        fs.readFile('./files/fileToRead.txt', 'utf8', (err, data) => {
            if (err) {
                return console.error(err);
            }
            console.log(data);
        });
    }else{
        throw new Error(message);
    }
    // Write your code here 

};

read();
