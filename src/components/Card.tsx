import React, { ReactChild, ReactNode, Component } from 'react';
import { isContainer, hasKey } from './helpers/typeCheck';
import '../stylesheets/Card.css';
import { string } from 'prop-types';

interface Order {
  0: string,
  1: string,
  2?: string,
  3?: string
}

interface Props {
  className?: string,
  qtyColumns?: number,
  children: ReactNode | BasicCard,
  order?: Order,
};


type BasicCard = {
  header: ReactChild | null,
  media?: ReactChild,
  content: ReactChild | null,
  actions?: ReactChild
};

export class Card extends React.Component<Props, any> {
  render() {
    const { children, className, order } = this.props;
    if (!children) throw new Error('Erorr expecting children elements');
    if (isContainer<BasicCard>(children, 'content')) {
      if (order !== undefined) {
        const contentOrder: string[] = Object.values(order);
        const orderedChildren = contentOrder.map((key: string) => {
          if (hasKey(children, key) && children[key] !== undefined) {
            const divClass = `card__${key}`;
            return (
              <div className={divClass}>
                {children[key]}
              </div>
              )
          }
        })
        return(
          <div
            className={`card ${className}`}
          >
            {orderedChildren}
          </div>

        )
      }
      const { header, content, media, actions } = children;
      return(
        <div
          className={`card ${className}`}
        >
          {header ? <div className='card__header'>{header}</div> : null}
          {media ? <div className='card__media'>{media}</div> : null}
          <div className='card__content'>{content}</div>
          {actions ? <div className='card__actions'>{actions}</div> : null}
        </div>
        )
    }
    return <div className='card'>{children}</div>
  }
}