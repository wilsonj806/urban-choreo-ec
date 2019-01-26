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