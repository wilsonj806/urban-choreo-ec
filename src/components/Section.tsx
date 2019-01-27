import React, { ReactChild, ReactNode, Component, Children } from 'react';
import { Card } from '../components/Card';
import { MediaCtr } from './MediaCtr';
import { isContainer } from './helpers/typeCheck';
import '../stylesheets/Section.css';

interface Props {
  className?: string,
  qtyColumns?: number,
  children: ReactNode | BasicSect,
};

type BasicSect = {
  header: ReactNode,
  media?: ReactChild,
  card: Card | Card[] | null,
  custom?: ReactNode,
};

// TODO make sure it throws when you pass anything besides a <Card/> in the BasicSect.card field

export class Section extends Component<Props, any> {
  render() {
    const { children, className } = this.props;
    if (!children) throw new Error('Error expecting children elements');
    if (isContainer<BasicSect>(children, 'card')) {
      const { header, media, card, custom } = children;
      return(
        <section
        className={`section ${className}`}
        >
          {header ? <>{header}</>: null}
          {media ? <>{media}</>: null}
          {card ? <>{card}</>: null}
          {custom ? <>{custom}</>: null}
        </section>
      )
    }
    throw new Error('Error expecting at least one child that\'s a card');
  }
}