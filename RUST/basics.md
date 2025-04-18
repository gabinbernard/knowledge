# Rust Basics

*[Home](../README.md)* &nbsp; › &nbsp;
*[Rust](./rust.md)* &nbsp; › &nbsp;
*Basics*

---

### Comments

```rust
// Line comment
//! Inner line doc comment
/// Outer line doc comment

/* Block comment */
/*! Inner block doc comment */
/** Outer block doc comment */
```

### Entrypoint and printing

```rust
/* App entrypoint */
fn main() {
    /* Printing */
    print!("{}", format!("Hello {}!\n", "world"));
    print!("Hello {}!\n", "world");
    println!("Hello {0}. What's up {0:?}!", "world");
    eprint!("Bye {subject}!\n", subject="world");
    eprintln!("Numbers: {0:b} {0:o} {0:x} {0:X}", 681);
}
```

### Variables and Primitives

```rust
/* Variables */
const PI: f64 = 3.14159; // Constant
let x = 5; // Immutable
let mut y = 10; // Mutable
let optional_1: Option<i32> = Some(32); // Optional
let optional_2: Option<i32> = None; // Optional

/* Primitives - Scalar types */
let i_var: i32 = 64; // i8, i16, i32, i64, i128, isize
let u_var: u32 = 64; // u8, u16, u32, u64, u128, usize
                        // 123_456, 1e4, 0xff, 0o77, 0b111, b'A' for u8
let f_var: f32 = 1.0; // f32, f64 (f64 is default, roughly the same speed)
let is_ture: bool = true; // true | false
let c_var: char = 'A'; // Unicode scalar values (4 bytes)
let unit_type: () = (); // Only empty tuple () possible

/* Primitives - Compound types */
let tuple = (1, 3.14, 'A');
let (ta, tb, tc) = tuple;
let ta = tuple.0;
let arr: [i32; 5] = [1, 2, 3, 4, 5]; 
let arr_first = arr[0];

/* Shadowing */
let typed_var: i64 = 10;
// typed_var = true; Would throw error
let typed_var: bool = true;
```

### Operators

- `+`, `-`, `*`, `/`, `%` - Arithmetic
- `+=`, `-=`, `*=`, `/=`, `%=` - Arithmetic assignation
- `&&`, `||`, `!` - Short circuiting boolean logic
- `&`, `|`, `^`, `<<`, `>>` - Bitwise
- `&=`, `|=`, `^=`, `<<=`, `>>=` - Bitwise assignation
- `==`, `!-`, `<`, `<=`, `>`, `>=` - Comparison
- `;` - Statement and item terminator

### Control flow

```rust
/* If, Else if, Else */
if { ... } else if { ... } else { ... }

/* Infinite loop */
loop { ... } 

/* Predicate loop */
while i > 5 { ... }

/* Predicate pattern loop */
while let Some(y) = x.pop() { ... }

/* Iterator loop */
for value in variable { ... }
for value in 0..10 { ... }

/* Loop labels */
'a: for a in 0..10 {
    'b: for b in 0..10 {
        ...
        continue 'a; // Continue a loop
        break 'a; // Break a loop
        break 'value'; // Return value
    }
}
```

### Structs

```rust
struct Person {
    name: String,
    age: u32,
};

impl fmt::Display for Person {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        write!(f, "{} ({} years old)", &self.name, &self.age)
    }
}

let person = Person {
    name: String::from("Jean"),
    age: 20,
};
println!("{}", person);
```

### Enums and pattern matching

```rust
enum Direction { Up, Right, Down, Left };
let direction = Direction::Up;
match direction {
    Direction::Up => println!("Going up!"),
    Direction::Right => println!("Going right!"),
    Direction::Down => println!("Going down!"),
    Direction::Left => println!("Going left")
};
```

### Functions

```rust
/* Function */
fn sum(a: i32, b: i32) -> i32 {
    a + b // No semicolon, this is returned
}

/* Function that may fail */
fn sum_with_error(a: i32, b: i32) -> Result<i32, String> {
    if b > a {
        Err(String::from("B is greater than A"))
    } else {
        Ok(a - b)
    }
}
```

