# Data types

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*Data Types*

---

## Number

**Double precision 64-bit binary format IEEE 754**

- From ±2^−1022 to ±2^+1023, integers up to ±2^53 − 1, `Infinity`, `-Infinity` and `NaN`
- 4 Number Types (ES2021 Numeric Separators): `1_000` `0b1000_0000` `0o1_0_0_0` `0xFF_00`
- Exponentaiation: `5e1` `5E1` `5e+1` `5e-1`

### The Number Object

**Static properties and methods**
```js
Number.MAX_VALUE; /* Largest positive representable number */
Number.MIN_VALUE; /* Smallest positive representable number */
Number.POSITIVE_INFINITY; /* Positive infinity value */
Number.NEGATIVE_INFINITY; /* Negative infinity value */
Number.NaN /* Not a Number Value */
Number.EPSILON /* Difference between 1 and smallest value greater */
Number.MIN_SAFE_INTEGER /* Minimum safe integer */
Number.MAX_SAFE_INTEGER /* Maximum safe integer */

Number.parseFloat() /* Same as global parseFloat */
Number.parseInt() /* Same as glboal parseInt */
Number.isFinite() /* Returns whether a number is finite */
Number.isInteger() /* Returns whether a number is an integer */
Number.isSafeInteger() /* Returns whether a number is a safe integer */
Number.isNaN() /* Returns whether a number is NaN, more robust than global isNan() */
```

**Instance methods**
```js
toExponential() /* Returns scientific notation string */
toFixed() /* Returns fixed point string (numbers after comma) */
toPrecision() /* Returns specified precision fixed point string (total numbers) */
```

## BigInt

- Defined by with `123n` or `BigInt(123)`
- No unsigned right shift operator `>>>` and unary plus `+`
- Cannot be used with `Math` module
- Cannot be mixed with other types in operations
- `typeof [BigInt]` returns `"bigint"`, but can be wrapped `Object(123n)`
- Addition between `string` and `BigInt` returns a `string`
- Division truncates result towards 0
- `BigInt` and `Number` can be compared as usual

By default, parsing `BigInt` to JSON will throw a `TypeError` :

```js
BigInt.prototype.toJSON = function () {
  return { $bigint: this.toString() };
};
```

**Methods :**

- `BigInt.asIntN(bits, bigint)`
- `BigInt.asUintN(bigs, bigint)`