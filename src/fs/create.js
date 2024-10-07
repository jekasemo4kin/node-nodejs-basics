const fs = require('fs'); // подключение модуля файл системз. позволяет работать с файловой системой
const path_to_file = "./src/fs/files/fresh.txt";
const content = "I am fresh and young";
const message = "FS operation failed";

const create = async () => {
    // Write your code here 
    
    if(fs.existsSync('./files/fresh.txt')){
        throw new Error(message); // ошибка, тк файл имеется
    }else{
        fs.writeFile('./files/fresh.txt', content, x =>{
            console.log(x); 
        })
    }
    


};



create();
