import React, { ReactChild, ReactNode, Component } from 'react';

import '../stylesheets/Card.css';

interface Props {
  children: React.ReactNode | BasicCard
};

type BasicCard = {
  qtyColumns?: number,
  header: ReactChild,
  media?: ReactChild,
  content: ReactChild,
  actions?: ReactChild
};

const isObject = <TypedObj extends object>(value: any): value is TypedObj =>
  typeof value === 'object' && typeof value !== 'function' && value != undefined;

const isBasicCard = (children: any): children is BasicCard =>
  isObject(children) && 'content' in children;

export class Card extends React.Component<Props, any> {
  render() {
    const { children } = this.props;

    if (!children) throw new Error('Erorr expecting children elements');

    if (isBasicCard(children)) {
      const { header, content, media, actions } = children;
      return(
        <div
          className='card'
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