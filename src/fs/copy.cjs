const fs = require('fs');
const path_to_file = "./src/fs/"; // aka __dirname
const message = "FS operation failed";



const copy = async () => {
    // Write your code here 
    if(fs.existsSync('./files/') && !fs.existsSync('./files_copy/')){
         fs.mkdir(__dirname+'/files_copy/',function(err){
            //console.log(err,'Папка не создана');
         });
         fs.readdir(__dirname+'/files/', function(err, elems){
            if (err){return console.log(err);}
        for (let elem of elems){
            //console.log(__dirname,elem);
            fs.copyFile(__dirname+'/files/'+elem, __dirname+'/files_copy/'+elem,function(err){
                if(err){
                    console.log("Косячело");
                }
            })
        }
        })
    }else{
        throw new Error(message);
    }
}

copy();
