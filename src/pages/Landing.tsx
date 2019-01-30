import * as React from 'react';
import { LandingSec, LandingShapes } from '../templates/LandingSec';


export class Landing extends React.Component<any, any> {
  render() {
    return(
      [
        LandingShapes,
        LandingSec
      ]
    )
  }
}