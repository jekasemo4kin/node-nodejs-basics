const parseArgs = () => {
    // Write your code here 
    let args = process.argv.slice(2); // вырезаются строки node и название файла
    let correctargs = args.map((item,index,array)=>{
        if ([0,2].includes(index)){
        return item.slice(2,item.length).concat(' is')}
        if (index===1){return item.concat(',')}
        return item});
    console.log(correctargs.join(' '));


};

parseArgs();
