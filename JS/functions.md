# Functions

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*Functions*

---

### Defining and Calling Functions

```js
/* Function declaration (hoisted) */
function fun(a, b, c = 0) {
    /* Arguments default to undefined */

    /* Function body is referred as a closure */
    function sub(x, y) { /* ... */ }

    /* arguments: Local variable containing function args, useful in variadic functions */
    console.log(arguments);
}

/* Function expression (not hoisted). Providing a name makes debugging and referring easier */
const factorial = function fac(n) {}; 
/* You can also create functions at runtime with Function constructor. */

/*
    Returns the expected arguments count 
    Only counts arguments before the first one with default value
    Destructuring pattern counts as one argument
    Rest parameter does not count
*/
fun.length;

/* Immediately Invoked Function Expressions (IIFE) */
(function() {

})

/* 
    Arrow function 
    Lacks `this`, `arguments`, `super` and `new.target`
*/
map(() => { /* ... */ })

{
    /* Do not declare functions in block outside strict mode */
    function() { /* ... */ }
}
```

### The `Function` Object

Every function is a `Function` object

**Instance properties:**
- `displayName` (Firefox, non-standard) - Set by the code author, meant for display purpose
- `length` - Effective arguments count (see above)
- `name` - The actual function name

**Instance methods:**
- `apply` - Calls function with specific `this` and optional arguments inside an array
- `bind` - Returns new function with a spicific `this`
- `call` - Calls function with specific `this` and optional arguments
- `toString` - Returns a `string` representing the function source code
- `Symbol`.hasInstance - Used by `instanceof`
