import React, { ReactChild, ReactNode, Component } from 'react';
import { isContainer } from './helpers/typeCheck';
import '../stylesheets/Card.css';

interface Props {
  className?: string,
  qtyColumns?: number,
  children: ReactNode | BasicCard
};

type BasicCard = {
  header: ReactChild | null,
  media?: ReactChild,
  content: ReactChild | null,
  actions?: ReactChild
};

export class Card extends React.Component<Props, any> {
  render() {
    const { children, className } = this.props;

    if (!children) throw new Error('Erorr expecting children elements');

    if (isContainer<BasicCard>(children, 'content')) {
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