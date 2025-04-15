# Comparison in Javascript

*[Home](../README.md)* &nbsp; › &nbsp; 
*[JS](./js.md)* &nbsp; › &nbsp; 
*Comparison*

---

### Value-Comparison Operations

- `==` - Loose equality - Type conversion, `NaN != NaN`, `-0 == 0` (conform to IEEE 754)
- `===` - Strict equality - No type conversion, `NaN !== NaN`, `-0 === 0`
- `Object.is()` - No type conversion, no sepcial handling for `NaN`, `-0` and `0`

### Comparison algorithms

- IsLooselyEqual - `==`
- IsStrictlyEqual - `===`
- SameValue - `Object.is`
- SameValueZero - Used by built-in objects and methods (same as SameValue but `-0 == 0`)