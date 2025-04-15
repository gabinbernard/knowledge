# Typescript Bascis

## Data types

```ts
let any: any = "Any value";
let boolean: boolean = true;
let number: number = 1;
let bigInt: bigint = 1_000_000_000_000_000_000n;
let array: number[] = [1, 2, 3];
let tuple: [number, string] = [1, "hello world"];
let string: string = "String";
let union: number | bigint = 1_000n;
let literal: "foo" | "bar" | "baz" = "foo";
```

## Enums

```ts
enum Direction = {
    Up,
    Down,
}

let direction: Direction = Direction.Up;
```

## Object

```ts
type User = {
    id: number,
    name: string,
};

let user: User = {
    id: 1,
    name: "John Doe",
}
```

## Functions

```ts
function sum(a: number, b: number): number {
    return a + b;
}

const sum = (a: number, b: number): number => a + b;
```

## Interfaces

```ts
interface User {
    id: number,
    name: string,
    toString(): void,
}
```

## Classes

```ts
class Foo {
    constructor(
        public foo: number,
        protected bar: number,
        private baz: number,
    ) { /* ... */ }

    /* ... */
}
```

## Generics

```ts
function identity<T>(arg: T): T {
    return arg;
}

interface Box<T> {
    value: T,
}
```

## Utility Types

```ts
/* will be equal to T */
type awaitedT = Awaited</* Promise<T> */>;

/* All properties are optional */
type optionalUser = Partial<User>;

/* All properties are required */
type requiredUser = Required<User>; 

/* All properties are readonly */
type readonlyUser = Readonly<User>; 

/* Map data to another data type */
type record = Record<Names, User>; 

/* Picks fields from type */
type userPreview = Pick<User, "id" | "name">;

/* Removes keys from type */
type userWithoutId = Omit<User, "id">;

/* Exclude value from union type */
type excludedType = Exclude<"a" | "b" | "c", "c">; /* "a" | "b" */

/* Extract types present in union type */
type extract = Extract<"a" | "b" | "c", "c">; /* "c" */

/* Make a type non nullable */
type numberOrString = NonNullable<number | string | undefined>;

/* Creates a tuple corresponding to function parameters */
type funcParams = Parameters<(a: number, b: number) => void>;
type constructorParams = ConstructorParameters</* ... */>;

/* Return type of a function */
type returnType = ReturnType<() => void>;

/* TODO */
type instanceType = InstanceType<>;
type noInfer = NoInfer<>;

/* Type of function this parameter */
type thisParamType = ThisParameterType< /* Function */ >;
```