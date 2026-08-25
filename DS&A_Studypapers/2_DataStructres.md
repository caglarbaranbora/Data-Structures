## What Are Data Structures?

**Data structures** are ways of organizing and storing data so that it can be used efficiently.

They are important because programs often need to store, access, update, and process large amounts of data.

Common data structures include:

- **Arrays**
    
- **Linked Lists**
    
- **Queues**
    
- **Stacks**
    
- **Hash Tables**
    
- **Trees**
    
- **Graphs**
    

> [!NOTE]  
> A data structure defines **how data is organized and accessed**.

---

## Why Are Data Structures Important?

Data structures are a fundamental part of **computer science and software development**.

The right data structure can make a solution:

- **Faster**
    
- **Easier to understand**
    
- **Easier to maintain**
    
- **More efficient with memory**
    
- **Better for large amounts of data**
    

The choice of data structure can have a major effect on the performance of an algorithm.

For example, searching for an item in an array and searching for an item in a hash table can have very different performance.

> [!IMPORTANT]  
> **Data structures + algorithms = efficient solutions**

---

# Basic Data Structures

This section gives a basic overview. Each data structure will be studied in more detail later.

## 1. Array

An **array** stores multiple values in an ordered collection.

Each element has an **index**.

```ts
const numbers: number[] = [10, 20, 30, 40];

console.log(numbers[0]); // 10
console.log(numbers[2]); // 30
```

Arrays are useful when we need to store a collection of related values.

**Key idea:** Data is stored in an ordered sequence and accessed using indexes.

---

## 2. Linked List

A **linked list** stores data in separate **nodes**.

Each node contains:

- A value
    
- A reference to another node
    

```text
[10 | next] → [20 | next] → [30 | null]
```

Unlike an array, elements are connected using references.

**Key idea:** Nodes are connected to each other.

---

## 3. Queue

A **queue** follows the **FIFO** principle:

> **First In, First Out**

The first element added is the first element removed.

```text
Add → [10] [20] [30] → Remove
       ↑             ↑
      First         First out
```

Real-world example:

A line of people waiting for a service.

**Key idea:** First in → First out.

---

## 4. Stack

A **stack** follows the **LIFO** principle:

> **Last In, First Out**

The last element added is the first element removed.

```text
      [30] ← Remove
      [20]
      [10]
```

Real-world example:

A stack of plates.

**Key idea:** Last in → First out.

---

## 5. Hash Table

A **hash table** stores data as **key-value pairs**.

```ts
const user = {
  name: "John",
  age: 25
};

console.log(user.name); // John
```

The key is used to find its associated value.

Hash tables are commonly used when we need **fast data lookup**.

**Key idea:** Key → Value.

---

## Quick Comparison

|Data Structure|Main Idea|Common Use|
|---|---|---|
|**Array**|Ordered values|Collections|
|**Linked List**|Connected nodes|Dynamic sequences|
|**Queue**|FIFO|Task processing|
|**Stack**|LIFO|Undo, call stack|
|**Hash Table**|Key → Value|Fast lookup|
|**Tree**|Hierarchical data|File systems|
|**Graph**|Connected data|Networks, maps|

> [!TIP]  
> Do not try to memorize every implementation detail yet. First understand **what each data structure is, how it works, and when it is useful**.

### Next

Each data structure will be covered in its own file with:

1. How it works
    
2. TypeScript implementation
    
3. Common operations
    
4. Time complexity
    
5. Real-world use cases