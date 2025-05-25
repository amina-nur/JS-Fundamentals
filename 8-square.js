//take first argument, convert to integer and store in constant size
const size = parseInt(process.argv[2]);

if (Number.isNaN(size)) {
  console.log('Missing size');
} else {
  for (let k = 0; k < size; k++) {
    console.log('X'.repeat(size));
  }
}
