import React, { ReactChild, ReactNode, Component } from 'react';
import { Card } from '../components/Card';
import * as Placeholder from './Placeholder';
import { Section } from '../components/Section';
import '../stylesheets/Heading.css';
import '../stylesheets/Templates.css';

const { ECDesc, GenericMediaCtr, Video2 } = Placeholder;

// TODO MAKE ARTICLES FULL WIDTH

const ChoreoECCard = (
  <Card
    className='card--basic'
  >
    {{
      header: (<h2 className='heading'>That's a thing here?!</h2>),
      content: (
        ECDesc
      )
    }}
  </Card>
);

const ChoreoECSec = (
  <Section
    className='section--double-col section--bg-lin-grad'
  >
    {{
      header: (<h1 className='heading heading--main'>Urban Choreography in the East Coast</h1>),
      media: (Video2),
      card: (ChoreoECCard)
    }}
  </Section>
)

export { ChoreoECCard, ChoreoECSec}