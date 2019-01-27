import React, { ReactChild, ReactNode, Component, Children } from 'react';
import { Card } from '../components/Card';
import '../stylesheets/Section.css';

// TODO figure out how to make this expect at least one Card

interface Props {
  className?: string,
  children: ReactNode,
};

export class Section extends Component<Props, any> {
  render() {
    const { children, className } = this.props;
    if (!children) throw new Error('Error expecting children elements');
    return(
      <section
        className={`section ${className}`}
      >
        {children}
      </section>
    )
  }
}