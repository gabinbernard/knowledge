# Javascript Arrays

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*Arrays*

---

```js
let arr = new Array(1, 2, 3, 4, 5);
arr = [1, 2, 3, 4, 5];
let elem = arr[0]; 

arr.push(0); /* Add to end of array */
arr.pop(); /* Remove from end of array */
arr.unshift(0); /* Add to start of array */
arr.shift(0); /* Remove from start of array */

arr.indexOf(1); /* Find index of value, -1 if not found */

arr.length; /* Last element's index + 1 */
arr.length = 1; /* Truncates array if value is smaller than actual length */
```

```js
Array.from(); /* Create array from iterable */
Array.of(); /* Create array from elements, differs from Array() when 1 arg */
```