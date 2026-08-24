function sum(a: number, b: number): number {
  return a + b;
}

const times = (a: number, b: number) => {
  return a * b;
}

type Divide = (a: number, b: number) => (name: string) => string

const divide: Divide = (a, b) => {
  return (name: string) => {
      return `${name} sen ${a + b}/10 harikasin dostum`
    }
}

console.log(sum(3, 5));
console.log(times(4, 6));

const result = divide(8, 2)
console.log(result("caglar"));
