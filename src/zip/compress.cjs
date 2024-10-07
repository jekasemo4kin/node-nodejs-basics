const {createReadStream, createWriteStream} = require('fs');
const {createGzip} = require('zlib');
//                                                       './files/'

const compress = async () => {
    let x = createReadStream('./files/fileToCompress.txt');
    x.pipe(createGzip()).pipe(createWriteStream('./files/archive.gz')).on('finish',()=>{console.log("Compression done",'./files/fileToCompress.txt')})

    // Write your code here 
};

compress();
