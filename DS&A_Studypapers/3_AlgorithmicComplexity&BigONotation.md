# Algorithmic Complexity

## 1. Overview

**Algorithmic complexity** describes how the resource requirements of an algorithm grow as the input size increases.

The two main resources are:

- **Time complexity** — how the running time grows
- **Space complexity** — how the additional memory usage grows

Complexity analysis does not usually measure exact execution time or memory in seconds/bytes. Instead, it focuses on how resource usage **scales with input size**.

---

## 2. Time Complexity

**Time complexity** describes how the number of operations performed by an algorithm grows as the input size increases.

For example:

```ts
function printItems(items: number[]): void {
  for (const item of items) {
    console.log(item);
  }
}
```

If the array contains `n` elements, the loop runs `n` times.

Therefore:

```text
T(n) = n
O(n)
```

Time complexity is mainly used to compare how algorithms behave with larger inputs.

---

## 3. Space Complexity

**Space complexity** describes how much additional memory an algorithm requires as the input size increases.

For example:

```ts
function createArray(n: number): number[] {
  const result: number[] = [];

  for (let i = 0; i < n; i++) {
    result.push(i);
  }

  return result;
}
```

The `result` array grows with `n`.

Therefore, the additional space complexity is:

```text
O(n)
```

> Time complexity focuses on execution growth, while space complexity focuses on memory growth.

---

# 4. How to Calculate Complexity

To calculate complexity, examine how the number of operations changes when the input size changes.

### General Process

1. Identify the input size, usually represented by `n`.
2. Identify the main operations.
3. Determine how many times each operation is executed.
4. Express the result as a function of `n`.
5. Simplify the function using Big O rules.

### Example: One Loop

```ts
function printItems(items: number[]): void {
  for (const item of items) {
    console.log(item);
  }
}
```

The loop runs `n` times:

```text
T(n) = n

O(n)
```

### Example: Nested Loops

```ts
function printPairs(items: number[]): void {
  for (const item of items) {
    for (const other of items) {
      console.log(item, other);
    }
  }
}
```

The outer loop runs `n` times, and the inner loop also runs `n` times for each outer iteration.

```text
T(n) = n × n
T(n) = n²

O(n²)
```

---

# 5. Big O Notation

**Big O notation** is a mathematical notation used to describe the growth rate of an algorithm's resource usage as the input size increases.

It can describe both **time complexity** and **space complexity**.

For example:

```text
T(n) = a × n + b
```

Where:

- `n` = input size
- `a` = constant number of operations per input
- `b` = constant additional work

Big O focuses on the term that grows fastest as `n` becomes large.

Therefore:

```text
T(n) = a × n + b

O(n)
```

## Big O Rules

### Keep the fastest-growing term

Consider:

```text
T(n) = n² + n + 10
```

As `n` becomes large, `n²` grows faster than `n`.

Therefore:

```text
O(n²)
```

### Drop constant factors

Consider:

```text
T(n) = 5n
```

The constant `5` does not change the growth rate.

Therefore:

```text
O(n)
```

> Big O describes the growth rate, not the exact number of operations.

---

# 6. Common Runtimes

The most common runtime classes are:

| Complexity | Name | General Behavior |
|---|---|---|
| `O(1)` | Constant | Does not grow with input size |
| `O(log n)` | Logarithmic | Grows very slowly |
| `O(n)` | Linear | Grows proportionally with input |
| `O(n log n)` | Linearithmic | Slightly faster than linear |
| `O(n²)` | Polynomial / Quadratic | Grows quadratically |
| `O(2ⁿ)` | Exponential | Grows extremely quickly |
| `O(n!)` | Factorial | Grows faster than exponential |

---

## 6.1 O(1) — Constant Time

An algorithm has **constant time complexity** when its execution does not depend on the input size.

```ts
function getPrice(
  prices: number[],
  index: number
): number {
  return prices[index];
}
```

Accessing an array element by index takes a constant amount of work.

Whether the array contains 10 or 1,000,000 elements, the operation does not require searching through the entire array.

```text
O(1)
```

Common examples:

- Array access by index
- Hash table lookup under typical assumptions
- Basic arithmetic operations
- Accessing a known value

The important property is that the growth rate is independent of `n`.

---

## 6.2 O(log n) — Logarithmic Time

An algorithm has **logarithmic time complexity** when the problem size is reduced by a constant factor at each step.

**Binary search** is a classic example.

Binary search requires the data to be **sorted**.

Consider:

```text
[10, 20, 30, 40, 50, 60, 70]
```

Instead of checking every element, binary search checks the middle element.

If the target is smaller, the right half is discarded.

If the target is larger, the left half is discarded.

The search space becomes:

```text
n
n / 2
n / 4
n / 8
...
```

After `k` steps:

```text
n / 2ᵏ = 1
```

Therefore:

```text
k = log₂(n)
```

### TypeScript Example

```ts
function binarySearch(
  items: number[],
  target: number
): number {
  let left = 0;
  let right = items.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (items[middle] === target) {
      return middle;
    }

    if (items[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return -1;
}
```

```text
O(log n)
```

The key idea is that the algorithm **reduces the remaining search space by approximately half at each step**.

---

## 6.3 O(n) — Linear Time

An algorithm has **linear time complexity** when its work grows proportionally to the input size.

```ts
function findValue(
  items: number[],
  target: number
): boolean {
  for (const item of items) {
    if (item === target) {
      return true;
    }
  }

  return false;
}
```

In the worst case, the algorithm may inspect every element.

If there are `n` elements:

```text
O(n)
```

Common examples:

- Iterating through an array
- Linear search
- Processing every item once
- Copying all elements of a collection

If the input doubles, the amount of work is approximately doubled.

---

## 6.4 O(n log n) — Linearithmic Time

**Linearithmic complexity** combines linear and logarithmic growth.

It is common in efficient sorting algorithms such as:

- Merge Sort
- Heap Sort
- Average-case Quick Sort

Merge Sort repeatedly divides the input into smaller parts and then merges them.

The division creates approximately `log n` levels, while each level processes `n` elements.

Therefore:

```text
n × log n

O(n log n)
```

For large inputs:

```text
O(n) < O(n log n) < O(n²)
```

`O(n log n)` is generally efficient for many problems involving large datasets.

---

## 6.5 Polynomial Time

An algorithm has **polynomial time complexity** when its runtime can be expressed as:

```text
O(nᵏ)
```

where `k` is a constant.

Examples include:

```text
O(n²)
O(n³)
O(n⁴)
```

`O(n²)` is one of the most common polynomial runtimes.

### O(n²) — Quadratic Time

A common example is two nested loops:

```ts
function printPairs(items: number[]): void {
  for (const item of items) {
    for (const other of items) {
      console.log(item, other);
    }
  }
}
```

The outer loop runs `n` times.

For each outer iteration, the inner loop also runs `n` times.

Therefore:

```text
n × n = n²

O(n²)
```

Common examples:

- Comparing every pair of elements
- Bubble Sort
- Nested loops over the same dataset

> Two nested loops do not always mean `O(n²)`. The complexity depends on how the loops depend on the input size.

### O(n³) — Cubic Time

A third nested operation can produce cubic complexity:

```ts
function process(items: number[]): void {
  for (const a of items) {
    for (const b of items) {
      for (const c of items) {
        console.log(a, b, c);
      }
    }
  }
}
```

Each loop runs approximately `n` times:

```text
n × n × n = n³

O(n³)
```

As the exponent increases, the algorithm becomes less practical for large inputs.

---

## 6.6 O(2ⁿ) — Exponential Time

An algorithm has **exponential time complexity** when the amount of work grows exponentially with the input size.

A common form is:

```text
O(2ⁿ)
```

For every additional input element, the number of possible operations can approximately double.

A simple recursive Fibonacci implementation is an example:

```ts
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

The function repeatedly creates multiple recursive calls.

Its time complexity is approximately:

```text
O(2ⁿ)
```

For example:

```text
n = 5    → 32
n = 10   → 1,024
n = 20   → 1,048,576
```

This rapid growth makes exponential algorithms unsuitable for large inputs in many cases.

---

## 6.7 O(n!) — Factorial Time

**Factorial time** grows even faster than exponential time.

The notation is:

```text
O(n!)
```

Factorial growth is commonly associated with algorithms that generate or examine **all possible permutations** of a set.

For `n` elements, the number of possible permutations is:

```text
n!
```

For example:

```text
3! = 3 × 2 × 1 = 6
4! = 4 × 3 × 2 × 1 = 24
5! = 5 × 4 × 3 × 2 × 1 = 120
```

For the set:

```text
[A, B, C]
```

the possible permutations are:

```text
ABC
ACB
BAC
BCA
CAB
CBA
```

There are `3! = 6` possibilities.

Algorithms that need to examine every possible ordering can therefore have:

```text
O(n!)
```

Factorial complexity becomes impractical very quickly as `n` increases.

---

# 7. Runtime Comparison

For sufficiently large values of `n`, the common growth rates can be ordered as:

```text
O(1)
↓
O(log n)
↓
O(n)
↓
O(n log n)
↓
O(n²)
↓
O(2ⁿ)
↓
O(n!)
```

The lower the growth rate, the better the algorithm generally scales as the input becomes larger.

For example:

```text
O(log n) < O(n) < O(n²)
```

This does not mean that an `O(log n)` algorithm is always faster in practice. Constants, hardware, memory access, and implementation details can also affect actual performance.

---

# 8. Summary

| Complexity | Name | Main Idea | Example |
|---|---|---|---|
| `O(1)` | Constant | Input size does not affect runtime | Array index access |
| `O(log n)` | Logarithmic | Repeatedly reduces the problem size | Binary Search |
| `O(n)` | Linear | Processes input proportionally | Linear Search |
| `O(n log n)` | Linearithmic | Combines linear and logarithmic work | Merge Sort |
| `O(n²)` | Polynomial / Quadratic | Two dimensions of input processing | Nested loops |
| `O(2ⁿ)` | Exponential | Work approximately doubles | Naive Fibonacci |
| `O(n!)` | Factorial | Examines permutations | Permutation generation |

The main purpose of complexity analysis is to understand how an algorithm **scales with increasing input size**.

An algorithm that works well for a small input may become impractical when the input becomes large if its complexity grows too quickly.
