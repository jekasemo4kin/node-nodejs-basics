const fs = require('fs');
let fileToRemove = 'fileToRemove.txt';
const message = "FS operation failed";


const remove = async () => {
    if(fs.existsSync('./files/'+fileToRemove) ){
        fs.unlink('./files/'+fileToRemove, (err) => {
            if (err) {
                return console.error(err);
            }
        });
    }else{
        throw new Error(message); 
    }
    // Write your code here 

};

remove();
