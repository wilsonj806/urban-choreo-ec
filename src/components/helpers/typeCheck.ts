import { ReactElement, Component } from 'react';
import { Link } from 'react-router-dom';

const isObject = <TypedObj extends object>(value: any): value is TypedObj =>
  typeof value === 'object' && typeof value !== 'function' && value != undefined;

const isContainer = <T>(children: any, expectedProp: string): children is T => {
  return isObject(children) && expectedProp in children;
}

const isUndefinedNull = (ele: any): ele is null | undefined => {
  return typeof ele === null || typeof ele === undefined;
}
const isNumBoolStr = (ele: any): ele is number | boolean | string=> {
  return typeof ele === 'number' || typeof ele === 'boolean' || typeof ele === 'string';
}

// const isRRLink = <T extends object>(ele: object): ele is T => {
//   const isReactComp = isObject(ele) && 'type' in ele;
//   const isRouterLink = 'router' in ele['type'];
//   return isReactComp && isRouterLink
// }


export { isObject, isContainer, isUndefinedNull, isNumBoolStr }