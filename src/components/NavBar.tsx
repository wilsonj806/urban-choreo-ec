/* NOTE reference component
https://github.com/Shopify/polaris-react/blob/master/src/components/Card/Card.tsx
Docs: https://reacttraining.com/react-router/web/example/auth-workflow
*/

import React, { ReactChild, ReactNode, Component } from 'react';
import { isUndefinedNull, isNumBoolStr, isRRLink } from './helpers/typeCheck';
// import { Link } from 'react-router-dom';

import '../stylesheets/Nav.css';

// TODO Add more type guarding so that you can only put ReactRouter.Link components in

interface Props {
  isPrimNavBar: boolean,
  id?: string,
  itemClass?: string,
  listClass?: string,
  header?: ReactNode,
  children: ReactNode,
};

export class Nav extends Component<Props, any> {
  renderListItem() {
    const { children, itemClass, isPrimNavBar } = this.props;
    if (!(children instanceof Array)) throw new Error('Error expecting array of more than one child')

    const isAllRouterLinks = children.every((ele: any)=> isRRLink(ele));

    if (isPrimNavBar === true && isAllRouterLinks === true) {
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
    else if (isPrimNavBar === false) {
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
    else {
      throw new Error(`
        Expecting either isPrimNavBar to be false AND children elements
        OR expecting isPrimNavBar to be true and every child element to be:
          <Link/> or <NavLink/> from React Router
          ${isPrimNavBar} ${isAllRouterLinks}
      `)
    }
  }

  render() {
    const listItems = this.renderListItem();
    const { id, isPrimNavBar, listClass, header } = this.props;
    if (isPrimNavBar === true) {
      return (
        <>
          <nav
            id={id}
          >
            <>{header}</>
            <ul
              className={`${listClass ? listClass : null}`}
            >
              {listItems}
            </ul>
          </nav>
        </>
    );
    }
    return (
      <div id={`${id ? id : null}`}>
        { header ? <>{header}</> : null }
        <ul
          className={`content-list ${listClass}`}
        >
          {listItems}
        </ul>
      </div>
    )
  }
}
