import React, { ReactChild, ReactNode, Component } from 'react';
import { ChoreoECSec } from '../templates/EastCoastDesc';
import { CompetitionSec } from '../templates/Competitions';


export class EastCoastChoreo extends React.Component<any, any> {
  render() {
    return (
      <article>
        {ChoreoECSec}
        {CompetitionSec}
      </article>
    )
  }
}
