
const x = parseInt(process.argv[2]);

//Number.isNan checks if value is exactly pecial "Nan" value(not a number)
if (Number.isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let j = 0; j < x; j++) {
    console.log('C is fun');
  }
}
