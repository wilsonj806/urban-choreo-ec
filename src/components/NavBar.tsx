/* NOTE reference component
https://github.com/Shopify/polaris-react/blob/master/src/components/Card/Card.tsx
Docs: https://reacttraining.com/react-router/web/example/auth-workflow
*/

import React, { ReactChild, ReactNode, Component } from 'react';
// import { isUndefinedNull, isNumBoolStr, isRRLink } from './helpers/typeCheck';
// import { Link } from 'react-router-dom';

import '../stylesheets/Nav.css';

// TODO Add more type guarding so that you can only put ReactRouter.Link components in

interface Props {
  isPrimNavBar: boolean,
  id?: string,
  itemClass?: string,
  listClass?: string,
  children: ReactNode,
};

export class Nav extends Component<Props, any> {
  renderListItem() {
    const { children, itemClass, isPrimNavBar } = this.props;
    console.dir(children);
    if (!(children instanceof Array)) throw new Error('Error expecting array of more than one child')

    // const isAllRouterLinks = children.every((ele: any)=>isRRLink(ele));
    if (isPrimNavBar === true) {
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
    const listItems = children.map((reactNode: any, i: number) => {
      return (
        <li
        key={i}
        className={itemClass}
        >
        {reactNode}
      </li>
    )});
    return listItems;
  }

  render() {
    const listItems = this.renderListItem();
    const { id, isPrimNavBar, listClass } = this.props;
    if (isPrimNavBar === true) {
      return (
        <>
          <nav
            id={id}
            >
            <ul
              className={`${listClass}`}
            >
              {listItems}
            </ul>
          </nav>
        </>
    );
    }
    return (
      <ul
        className={`content-list ${listClass}`}
      >
        {listItems}
      </ul>
    )
  }
}
