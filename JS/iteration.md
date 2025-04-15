# Iteration

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*Iteration*

---

## Iteration protocols

**Iterable protocol**: Implement `[Symbol.iterator]()` (zero args, returns object confogrming to iterator protocol)

**Iterator protocol** defines generation of a sequence of values (finite or not). An object is an iterator when it implements a `next` method which returns a object, conform to the `IteratorResult` interface:
- `next()` (0-1 args) - Returns object conform to `IteratorResult`
- `return()` (0-1 args) - Returns object conform to `IteratorResult`
- `throw()` (0-1 args) - Throws error
- `value` - The returned value from the iterator
- `done` - Whether the returned value is the last one or not

There also are async variants of those protocols. They are very similar, though, the returned values are wrapped inside a `Promise`.

### The `function*` Generator Functions

It's a function which can be exitted (`yield`) and re-entered later. Commonly used with `Symbol.iterator`.

```js
function* subGenerator() {
    yield 1;
}

function* generator() {
    yield* subGenerator();
    yield 2; /* Returns { value: 2, done: false } */
    return 3; /* Returns { value: 3, done: true } */
}


const counter = generator();
console.log(counter.next().value);
```