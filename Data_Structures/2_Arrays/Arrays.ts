let numbers: number[] = [10, 20, 30, 40];

// Access
console.log(numbers[0]);

// Length
console.log(numbers.length);

// Add
numbers.push(50);

// Remove last
numbers.pop();

// Change
numbers[0] = 100;

// Loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// for...of
for (const number of numbers) {
  console.log(number);
}

// Map
const doubled = numbers.map((number) => number * 2);

// Filter
const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(numbers);
console.log(doubled);
console.log(evenNumbers);
