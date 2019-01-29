import { ReactElement, Component } from 'react';
import { Link } from 'react-router-dom';

const isObject = <TypedObj extends object>(value: any): value is TypedObj =>
  typeof value === 'object' && typeof value !== 'function' && value != undefined;


/* NOTE below is expecting an object of some expecting property like:
interface Example {
  expectedProp: boolean
}
const wrongObj = {
  actually: 33
}
const rightObj = {
  expectedProp: true
}
console.log(isContainer(wrongObj)) // expecting false
console.log(isContainer(rightObj)) // expecting true

Also NOTE  that isContainer<T>() doesn't actually check the inputs
*/

const isContainer = <T extends object>(children: any, expectedProp: string): children is T => {
  return isObject(children) && expectedProp in children;
}

const isUndefinedNull = (ele: any): ele is null | undefined => {
  return typeof ele === null || typeof ele === undefined;
}
const isNumBoolStr = (ele: any): ele is number | boolean | string=> {
  return typeof ele === 'number' || typeof ele === 'boolean' || typeof ele === 'string';
}

const isRRLink = (ele: any): ele is Link => {
  console.log(ele.type.name);
  return ele['type']['name'] === 'Link' || ele['type']['name'] === 'NavLink'
}

const hasKey = <O>(obj: O, key: any): key is keyof O => {
  return key in obj
}


export {
  isObject,
  isContainer,
  isUndefinedNull,
  isNumBoolStr,
  isRRLink,
  hasKey
}