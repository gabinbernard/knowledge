# Javascript Objects

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*Objects*

---

## Internal properties

## Proxies

**Terminology :**

- Proxy - An object wrapping another object for changing its internal functions behaviour
- Handler - Object that contains traps
- Traps - Functions that replace the default behaviour
- Target - The target object handled
- Invariants - The behaviors that must remain unchanged

**Code :**

```js
const target = {
    "key1": "value1",
    "key2": "value2",
}

const handler = {
    // Define "traps"

    get(target, prop, receiver) {
        if (prop === "key1") return "handler";

        /**
         * `Reflect` isn't instantiable. It provides static methods
         * used to access default behavior of methods overrode by handler traps
         */
        return Reflect.get(...arguments);
    },
}

const proxy = new Proxy(target, handler);
```