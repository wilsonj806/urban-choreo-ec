import React, { ReactChild, ReactNode, Component } from 'react';

export class Reference extends Component<any, any> {
  render() {
    const { children, className } = this.props;
    return(
      <section
        className={`section ${3+3}`}
      >
        {children}
      </section>
    )
  }
}