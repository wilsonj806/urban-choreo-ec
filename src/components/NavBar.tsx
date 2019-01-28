/* NOTE reference component
https://github.com/Shopify/polaris-react/blob/master/src/components/Card/Card.tsx
Docs: https://reacttraining.com/react-router/web/example/auth-workflow
*/

/* TODO Figure out a way to make this reusable
Right now the fact that it automatically puts a <nav> tag in makes it not as reusable */


import * as React from 'react';
import { isUndefinedNull, isNumBoolStr } from './helpers/typeCheck';

import '../stylesheets/Nav.css';

// TODO Add more type guarding so that you can only put ReactRouter.Link components in

interface Props {
  isPrimNavBar: boolean,
  id: string,
  itemClass: string,
  children: React.ReactNode,
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
    const { id, isPrimNavBar } = this.props;
    if (isPrimNavBar === true) {
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
    return (
      <ul>
        {listItems}
      </ul>
    )
  }
}
