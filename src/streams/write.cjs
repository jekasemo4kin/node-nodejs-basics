const fs = require('fs');


const write = async () => {
    // Write your code here 
let stdin = process.openStdin();
let writeStream = fs.createWriteStream('./files/fileToWrite.txt', {flags:'a'});
stdin.addListener("data", function(d){
    console.log('Ты ввёл: ['+d.toString().trim()+']');
    writeStream.write(d.toString().trim()+'\n');
    writeStream.end();
    process.exit(0);
});

};

write();
