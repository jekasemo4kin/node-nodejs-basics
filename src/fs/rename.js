const fs = require('fs');
let wrongFilename = 'wrongFilename.txt';
let properFilename = 'properFilename.md';
const message = "FS operation failed";



const rename = async () => {
    // Write your code here 
    if (fs.existsSync('./files/'+wrongFilename) && !fs.existsSync('./files/'+properFilename)){
        fs.rename('./files/'+wrongFilename, './files/'+properFilename, (err) => {
            if (err) {
                return console.error(err);
            }
        });
    }else{
        throw new Error(message);
    }
};

rename();
