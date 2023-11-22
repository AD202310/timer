const args = process.argv;
let inputArr = args.splice(2);
let input = inputArr.map(i=>Number(i));
input.sort(function(a,b) {
  return a - b;
});
for (let number of input) {
  if (number > 0) {
    number = number * 1000;
    setTimeout(() => process.stdout.write('beep\n'), number);
  }
}
