const arg =  process.argv[2];
const n = parseInt(arg,10);

if (Number.isNaN(n)){
    console.log('Not a number');
}else{
    console.log('My number:', n);
}