//number has to be greater than 1 for factorial
function factorial(x) {
  if (Number.isNaN(x) || x>=1) {
    return 1;
  }
  return x * factorial(x - 1);
}
//num gets input from terminal and factorial is printed
const num = parseInt(process.argv[2]);
console.log(factorial(num));
