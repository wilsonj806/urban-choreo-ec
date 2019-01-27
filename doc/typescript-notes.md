# TypeScript Notes

## References

- [Reference 1](https://basarat.gitbooks.io/typescript/docs/types/type-system.html)
- [Reference 2](http://2ality.com/2018/04/type-notation-typescript.html)
- [TypeScript Docs](https://www.typescriptlang.org/docs/home.html)

## Basics

- [TypeScript Doc Ref](https://www.typescriptlang.org/docs/handbook/basic-types.html)

So back in Arduino/ whatever C#/ C++ derivation it was, you had to specify the typing of your variables.
```c++
int pin = 13
```
- Where `pin` is a variable type of integer.

TypeScript emulates that and lets you specify the type that a variable expects:
```typescript
const expleNum: number = 3;
const expleStr: string = 'hi';
const expleBool: boolean = false;
```

## Classes

- [TypeScript Doc Reference](https://www.typescriptlang.org/docs/handbook/classes.html)

## Functions

- [TypeScript Doc Reference](https://www.typescriptlang.org/docs/handbook/functions.html)

TypeScript lets you do some fun stuff in speccing out input and output types.
- Speccing input types:
```typescript
function (args: string) {
  // scripting and manipulation
}
```
- Speccing output types:
```typescript
function(args): number{
  return 1;
}
```
- Speccing both
```typescript
function hi(args: string): string {
  return args;
}

hi(3) // Error returned
hi('hi') // expect to return 'hi'
```
## Interfaces

## Types and type definition

## Generics

- [TypeScript Doc Reference](https://www.typescriptlang.org/docs/handbook/generics.html)
- [External Reference](https://code.tutsplus.com/tutorials/typescript-for-beginners-part-5-generics--cms-29603)

TypeScript also lets you pass through type aliases via generics. A *generic* is one of the main ways that you create reusable components. Generics let you create a component that works over a variety of types rather than a single one. It means instead of specifying the type of argument that a function or object is expecting, inside the function declaration, you can specify it afterwards when you call it.
- As a result you don't lose type information/ your function is more reusable as its not constrained as hard to a single type input.

It's basically a *placeholder for what the type of the input is*. Lets see two basic examples below:

- The first is the "Hello World" of generics, an identity function which returns whatever is passed in. Without generics it'd look like this:
```typescript
function identity(arg: number): number {
  return arg;
}
```
- We could tell the function to expect any as the input, but then we'd lose type information on the output since literally anything can be passed in and manipulated
```typescript
function identity(arg: any): any {
  return arg;
}
```
- With generics though it looks like this:
```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```
- Note how we put a `<Type>` in front of the input args parentheses
  - this is how generics are denoted/ this is the syntax for generics
- So now when we call the identity function we can do it in  two ways
```typescript
let output = identity<string>("myString");  // type of output will be 'string'

let output2 = identity("myString");  // type of output will be 'string'
```
- The first method is explicit and identifies the type as a *string*, the second one uses Type Inference and figures out what the type of the input is.