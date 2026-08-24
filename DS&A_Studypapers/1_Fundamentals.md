## 1. Control Structures
**Control structures** define how a program executes code.
There are **3 main types**:

|Type|Purpose|Examples|
|---|---|---|
|**Sequential**|Runs code step by step|Normal statements|
|**Selection**|Makes decisions|`if`, `else`, `switch`|
|**Iteration**|Repeats code|`for`, `while`, `do...while`|

### Sequential
Code runs from top to bottom.
```ts
const x = 10;
const y = 20;
const sum = x + y;
```

### Selection
Runs different code depending on a condition.

```ts
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

### Iteration
Repeats a block of code.

```ts
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

> [!NOTE]  
> **Sequential → Selection → Iteration** are the basic ways to control program flow.

---

## 2. Pseudocode
**Pseudocode** describes an algorithm without using the syntax of a specific programming language.

It focuses on **logic**, not implementation.

```text
START
Get user's age

IF age >= 18
    Print "Adult"
ELSE
    Print "Minor"

END
```

> [!TIP]  
> Pseudocode can be converted into TypeScript, Python, Java, or another programming language.

---

## 3. Functions

A **function** is a reusable block of code that performs a specific task.
A function can:
- Receive **parameters**
- Perform an operation
- Return a **value**

```ts
function add(a: number, b: number): number {
  return a + b;
}

const result = add(5, 3);
```

### Types of Functions
**Built-in function** → Provided by the language or its standard library.
```ts
console.log("Hello");
```

**User-defined function** → Created by the programmer.
```ts
function greet(name: string) {
  return `Hello ${name}`;
}
```

**Anonymous function** → A function without a name.
```ts
const greet = function (name: string) {
  return `Hello ${name}`;
};
```

**Higher-order function** → A function that takes another function as an argument or returns a function.
```ts
function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
) {
  return operation(a, b);
}

calculate(5, 3, (x, y) => x + y);
```

> [!IMPORTANT]  
> **Higher-order functions** are possible because functions can be treated as values in TypeScript.

---

# 4. Basic OOP Concepts
**Object-Oriented Programming (OOP)** organizes code around **objects and classes**.
The four main concepts are:
**Encapsulation · Abstraction · Inheritance · Polymorphism**

---

## 4.1 Procedural Programming
**Procedural programming** organizes code mainly around functions and procedures.

```ts
function calculatePrice() {}
function saveOrder() {}
function sendEmail() {}
```

This approach is simple, but poorly structured large programs can become **spaghetti code**.
> [!NOTE]  
> Procedural programming is not bad. The problem is usually **poor structure and high complexity**.

---

## 4.2 Encapsulation
**Encapsulation** keeps related data and methods together and controls access to internal data.

```ts
class User {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
```

`name` is `private`, so it cannot be accessed directly from outside the class.
**Goal:** Reduce complexity and control access.

---

## 4.3 Abstraction
**Abstraction** hides unnecessary implementation details and shows only what is needed.

```ts
class Car {
  start() {
    this.startEngine();
  }

  private startEngine() {
    console.log("Engine started");
  }
}
```

The user calls:

```ts
car.start();
```

They do not need to know how `startEngine()` works.
**Goal:** Hide complexity and make code easier to use.

---

## 4.4 Inheritance
**Inheritance** allows a class to reuse properties and methods from another class.

```ts
class Animal {
  eat() {
    console.log("Eating");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking");
  }
}

const dog = new Dog();

dog.eat();
dog.bark();
```

`Dog` inherits `eat()` from `Animal`.
**Goal:** Reuse existing code.

---

## 4.5 Polymorphism
**Polymorphism** allows different objects to use the same method in different ways.

```ts
class Dog {
  speak() {
    console.log("Woof");
  }
}

class Cat {
  speak() {
    console.log("Meow");
  }
}

const animals = [new Dog(), new Cat()];

for (const animal of animals) {
  animal.speak();
}
```

The same:

```ts
animal.speak();
```

produces different results depending on the object.
**Goal:** Write flexible code without many `if/else` checks.

> [!SUMMARY]
> 
> ### OOP in one line
> 
> - **Encapsulation** → Control access
>     
> - **Abstraction** → Hide complexity
>     
> - **Inheritance** → Reuse code
>     
> - **Polymorphism** → Same interface, different behavior
>