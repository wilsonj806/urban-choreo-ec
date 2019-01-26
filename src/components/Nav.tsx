/* NOTE reference component
https://github.com/Shopify/polaris-react/blob/master/src/components/Card/Card.tsx */

import * as React from 'react';
import '../stylesheets/Nav.css';

// TODO Add more type guarding so that you can only put ReactRouter.Link components in

interface Props {
  children: React.ReactNode,
  id: string,
  itemClass: string,
};


export class Nav extends React.Component<Props, any> {
  renderListItem() {
    const { children, itemClass } = this.props;
    console.dir(children);
    if (isUndefinedNull(children)) throw new Error('Expecting children components of some kind');
    if (isNumBoolStr(children)) {
      throw new Error(`
      Expecting children that's a React class component/ function component or a JSX fragment
      `);
    }
    if (children instanceof Array) {
      const listItems = children.map((reactNode: any, i: number) => {
        return (
          <li
            key={i}
            className={itemClass}
          >
            {reactNode}
          </li>
        )})

        return listItems;
    }
    return (
      <li>{children}</li>
    )
  }

  render() {
    const listItems = this.renderListItem();
    const { id } = this.props;
    return (
        <>
          <nav
            id={id}
          >
            <ul>
              {listItems}
            </ul>
          </nav>
        </>
    );
  }
}


// Simple type checking
const isUndefinedNull = (ele: any): ele is null | undefined => {
  return typeof ele === null || typeof ele === undefined;
}
const isNumBoolStr = (ele: any): ele is number | boolean | string=> {
  return typeof ele === 'number' || typeof ele === 'boolean' || typeof ele === 'string';
}