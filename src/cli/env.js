const parseEnv = () => {
    // Write your code here 
    //  в process.env записываются переменные, в консоли которые можно будет задавать/менять, нид только после этого писать node + файл, где сами переменные

    Object.keys(process.env).forEach(function(key) {
        console.log(  "RSS_"+ key + '=' + process.env[key] +';');
    });  
    console.log(213);
    process.exit(1);
    console.log(1111111);
};

parseEnv();
