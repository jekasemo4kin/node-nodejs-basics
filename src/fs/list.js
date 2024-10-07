const fs = require('fs');
const message = "FS operation failed";

const list = async () => {
    if(fs.existsSync('./files/')){
        fs.readdir('./files/', function(err,elems){
            if(err){
                return console.log(err);
            }
            for (let elem of elems){
                console.log('./files/'+elem);
            }
        })
    }else{
        throw new Error(message);
    }
    // Write your code here 

};

list();
