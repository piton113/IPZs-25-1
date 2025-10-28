const numbers = [
  [45,16,57],
  [43,55,56],
  [74,18,91],
];

for (let piton = 0; piton < numbers.length; piton++) {
  for (let start = 0; start < numbers[piton].length; start++) {


    console.log(`${piton + 1} ${start + 1} = ${numbers[piton][start]}`);
  }
}
