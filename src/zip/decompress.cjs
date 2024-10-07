const {createReadStream, createWriteStream} = require('fs');
const createGzip = require('zlib');
//                                                       './files/'

const decompress = async () => {
    let x = createReadStream('./files/archive.gz');
    x.pipe(zlip.createUnzip()).pipe(createWriteStream('./files/fileToCompress.txt')).on('finish',()=>{console.log("Decompression done",'./files/fileToCompress.txt')})

    // Write your code here 
};

decompress();
