const fs = require('fs');


const read = async () => {

    let readStream = fs.createReadStream('/files/','utf8');
    readStream.on('data', function (chunk) {
      console.log(chunk);
    }).on('end', function () {
      console.log('nice game');
    }).on('error', function () {
      process.stderr.write(error);
      process.exit(1);
    });
    // Write your code here 
};

 read();
