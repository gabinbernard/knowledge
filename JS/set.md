# Javascript Sets

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*Sets*

---

### The `Set` Object

```js
/* Define set */
const s1 = new Set();
const s2 = new Set();

/**
 * Set properties
 */

s1.size;

/**
 * Set operations
 * Value comparison is made using SameValueZero algorithm
 */

/* Add element to set */
s1.add(1); 
s1.has(1);
s1.delete(1);
s1.clear(1);

/**
 * Set composition methods
 * `this` must be a `Set`instance, arguments must be set-like objects:
 *   - a `size` property containing a `number`
 *   - a `has()` that takes an element and return a boolean
 *   - a `keys()` that returns an iterator with the elements
 */

s1.difference(s2);
s1.symetricDifference(s2);

s1.union(s2);
s1.intersection(s2);

s1.isDisjointFrom(s2);
s1.isSubsetOf(s2);
s1.isSupersetOf(s2);

/**
 * Set iteration methods
 * By insertion order
 */

/* Return iterators */
s1[Symbol.iterator]; 
s1.values();
s1.keys(); // Alias of `s1.values()`
s1.entries();
s1.forEach(callback); // And optional this arg;
```

### The `WeakSet` Object

- Can only hold objects
- Holds weak reference to objects
- If no other reference, the object is garabe collected
- You cannot iterate over a `WeakSet`

```js
const s1 = new WeakSet();
const obj = {};

s1.add(obj);
s1.has(obj);
s1.delete(obj);
```