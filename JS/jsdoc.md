# JSDOC

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*JSDOC*

---

## Function

```js
/**
 * A function
 * 
 * @param {*} a - First number (any type)
 * @param {number|bigint} b - Second number or bigint
 * @param {number} [c=3] - Third number (optional)
 * @param {number=} d - Forth number (optional)
 * @param {number[]} e - A list of numbers
 * @param {Promise<number>} f - A promise returning a number
 *
 * @return {number} The sum
 *
 * @example sum(1, 2, 3, 4);
 *
 */
function sum(a, b, c, d, e, f) {
    let sum = 0;

    sum += a;
    sum += b;
    if (c) sum += c;
    if (d) sum += d;
    for (const num of e) {
        sum += e;
    }

    return a + b;
}
```
```js
/**
 * Sign in
 *
 * @param {User} user - The {@link User} crednetials
 * @param {Song} song - A song
 */
function myFunction(user, song) {}
```

## Declaring types

```js
/**
 * A user
 *
 * @typedef {{
 *      username: string,
 *      password: string
 * }} User
 */
```

```js
/**
 * A song
 *
 * @typedef {Object} Song
 * @property {string} title - The title
 * @property {string} artist - The artist
 * @property {string} yera - The release yera
 */
```

## Importing types

```js
/** @typedef { import('./song').default } Song */
```
```js
/** @import { Song } from "./song.js" */
```
