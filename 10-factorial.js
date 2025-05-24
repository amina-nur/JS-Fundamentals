function factorial(a) {
  if (a <= 1 || Number.isNaN(a)) {
    return 1;
  }
  return a * factorial(a - 1);
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
