import React, { ReactChild, ReactNode, Component, Children } from 'react';
import { isContainer } from './helpers/typeCheck';
import '../stylesheets/MediaCtr.css';

// NOTE Mostly a container/ wrapper for single pieces of media(images, videos, etc)

interface Props {
  className?: string,
  children: ReactNode
}

export class MediaCtr extends Component<Props, any>{
  render() {
    const { className, children } = this.props
    if (!children || !isContainer<Component>(children, 'type')) throw new Error('Expecting children elements')
    return (
      <div
        className={`media ${className}`}
      >
        {children}
      </div>
    )
  }
}