import React, { ReactChild, ReactNode, Component, Children } from 'react';
import { isContainer } from './helpers/typeCheck';
import '../stylesheets/MediaCtr.css';

// NOTE Mostly a container/ wrapper for single pieces of media(images, videos, etc)

interface Props {
  className?: string,
  children: ReactNode,
  custom?: boolean
}

export class MediaCtr extends Component<Props, any>{
  render() {
    const { className, children, custom } = this.props
    if (!children || !isContainer<Component>(children, 'type') && custom !== true ) throw new Error('Expecting children elements')
    return (
      <div
        className={`media ${className}`}
      >
        {children}
      </div>
    )
  }
}