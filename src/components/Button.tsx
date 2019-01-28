import React, { ReactChild, ReactNode, Component } from 'react';
import { string } from 'prop-types';

interface Props {
  className?: string,
  innerText: string,
}

export class Button extends Component<Props, any> {
  render() {
    const { className, innerText } = this.props;
    return (
      <button
        className={`btn ${className}`}
      >
        {innerText}
      </button>
    )
  }
}