//function that adds two arguments 
function add(a, b) {
  return a + b;
}
//to enable addition as integers
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

console.log(add(a, b));
