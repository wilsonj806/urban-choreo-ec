import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import * as Placeholder from './Placeholder';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';

const { GenericP, GenericP2, GenericMediaCtr, Video2 } = Placeholder;


const ChoreoECCard = (
  <Card
    className='card--basic'
  >
    {{
      header: (<h2 className='heading'>That's a thing here?!</h2>),
      content: (
        GenericP2
      )
    }}
  </Card>
);

const ChoreoECSec = (
  <Section
    className='section--double-col'
  >
    {{
      header: (<h2 className='heading heading--main'>Urban Choreography in the East Coast</h2>),
      media: (Video2),
      card: (ChoreoECCard)
    }}
  </Section>
)

export { ChoreoECCard, ChoreoECSec}