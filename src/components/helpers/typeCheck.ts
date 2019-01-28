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


export { isObject, isContainer, isUndefinedNull, isNumBoolStr }